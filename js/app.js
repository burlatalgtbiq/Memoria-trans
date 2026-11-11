/* Lógica de la web: idioma, memorial, cuestionario, compromisos y enlaces.
   Sin cookies, sin almacenamiento y sin envío de datos. Los textos viven en
   content.js. */
(function () {
  "use strict";

  var C = window.CONTENT;
  var CFG = window.CONFIG || { links: {} };
  var SOURCES = window.SOURCES || [];
  var lang = "es";

  var $ = function (sel, root) {
    if (root) return root.querySelector(sel);
    if (sel.charAt(0) === "#" || sel.charAt(0) === "." || sel.charAt(0) === "[" || sel.indexOf(" ") !== -1) {
      return document.querySelector(sel);
    }
    return document.getElementById(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  /* Cada texto de content.js es un par { es, eu }. Si falta el idioma activo,
     se usa el castellano; si falta la clave, se muestra la propia clave. */
  var pick = function (entry) {
    if (entry === null || entry === undefined) return "";
    if (typeof entry === "string") return entry;
    return entry[lang] || entry.es || "";
  };
  var t = function (key) { return pick((C.ui || {})[key]) || key; };
  var fill = function (str, obj) {
    return str.replace(/\{(\w+)\}/g, function (_, key) {
      return obj[key] !== undefined ? obj[key] : "";
    });
  };

  function node(tag, props, kids) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      if (key === "style") {
        Object.keys(props.style).forEach(function (prop) { n.style[prop] = props.style[prop]; });
      } else if (key.indexOf("-") !== -1 || key === "role") {
        /* aria-*, data-* y role necesitan setAttribute, no una propiedad. */
        n.setAttribute(key, props[key]);
      } else {
        n[key] = props[key];
      }
    });
    (kids || []).forEach(function (kid) {
      n.appendChild(typeof kid === "string" ? document.createTextNode(kid) : kid);
    });
    return n;
  }

  function clear(n) {
    while (n && n.firstChild) n.removeChild(n.firstChild);
  }

  /* Idioma */
  function initialLang() {
    try {
      return new URLSearchParams(location.search).get("lang") === "eu" ? "eu" : "es";
    } catch (e) {
      return "es";
    }
  }

  function setMeta(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("content", value);
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = t("meta_title");
    setMeta("metaDesc", t("meta_desc"));
    setMeta("ogTitle", t("og_title"));
    setMeta("ogDesc", t("og_desc"));
    setMeta("ogAlt", t("og_image_alt"));
    setMeta("twTitle", t("og_title"));
    setMeta("twDesc", t("og_desc"));
    setMeta("twAlt", t("og_image_alt"));

    $$("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    $$("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    $$("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
  }

  function updateLangButtons() {
    $$(".lang [data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function updateUrl() {
    try {
      var url = new URL(location.href);
      if (lang === "eu") url.searchParams.set("lang", "eu");
      else url.searchParams.delete("lang");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) { /* file:// u otros entornos sin History API */ }
  }

  function applyLang(next, announce) {
    lang = next === "eu" ? "eu" : "es";
    applyI18n();
    updateLangButtons();
    updateUrl();

    /* Los avisos de estado quedan en el idioma anterior: se vacían. */
    ["pStatus", "fStatus", "qStatus"].forEach(function (id) {
      var el = $(id);
      if (el) el.textContent = "";
    });

    renderSources();
    renderAction();
    renderLinks();
    renderPledges();
    renderQuiz();
    updateShareLinks();

    if (window.Memorial) window.Memorial.render(lang);

    if (announce) {
      var status = $("langStatus");
      if (status) status.textContent = t("lang_changed");
    }
  }

  /* Fuentes, acción y enlaces */
  function renderSources() {
    var list = $("srcList");
    if (!list) return;
    clear(list);
    SOURCES.forEach(function (source) {
      var link = node("a", {
        href: source.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, [source.label]);
      link.appendChild(node("span", { className: "sr" }, [", " + t("f_new_tab")]));
      list.appendChild(node("li", {}, [link]));
    });
  }

  function renderAction() {
    var groups = [
      ["aEdu", C.edu],
      ["aPub", C.pub],
      ["aDay", C.day]
    ];
    groups.forEach(function (pair) {
      var list = $(pair[0]);
      if (!list) return;
      clear(list);
      (pair[1] || []).forEach(function (entry) {
        list.appendChild(node("li", {}, [pick(entry)]));
      });
    });
  }

  function setHref(id, href) {
    var el = document.getElementById(id);
    if (el && href) el.setAttribute("href", href);
  }

  function renderLinks() {
    var links = CFG.links || {};
    var eu = lang === "eu";

    setHref("lnkMuni", eu ? (links.muniEu || links.muni) : links.muni);
    setHref("lnkLgtbi", eu ? (links.lgtbiEu || links.lgtbi) : links.lgtbi);
    setHref("lnkIgualdad", eu ? (links.igualdadEu || links.igualdad) : links.igualdad);
    setHref("resKat", links.kattalingune);
    setHref("resBurlada", eu ? (links.lgtbiEu || links.lgtbi) : links.lgtbi);
    setHref("res024", links.line024);

    /* Contacto municipal: se toma de CONFIG para no duplicar el dato. */
    var mail = document.getElementById("resMail");
    if (mail && links.email) {
      mail.setAttribute("href", "mailto:" + links.email);
      mail.textContent = links.email;
    }
    var phone = document.getElementById("resPhone");
    if (phone && links.phone) {
      phone.setAttribute("href", "tel:+34" + links.phone.replace(/[^0-9]/g, ""));
      phone.textContent = links.phone;
    }

    var hasPlan = !!(links.plan && links.plan.trim());
    var planItem = $("planItem");
    if (planItem) planItem.hidden = !hasPlan;
    if (hasPlan) setHref("lnkPlan", links.plan);
  }

  /* Cuestionario (sin nota, sin almacenamiento) */
  var qi = 0;
  var answers = [];
  var finished = false;

  function quizStatus(text) {
    var status = $("qStatus");
    if (status) status.textContent = text;
  }

  function focusQuiz() {
    var root = $("quiz");
    if (!root) return;
    try { root.focus({ preventScroll: true }); } catch (e) { root.focus(); }
  }

  function renderQuiz() {
    var root = $("quiz");
    if (!root) return;
    clear(root);
    root.classList.remove("quiz-result");

    if (finished) {
      renderQuizResult(root);
      return;
    }

    var quiz = C.quiz;
    var item = quiz[qi];
    var total = quiz.length;

    var top = node("div", { className: "quiz-top" }, [
      node("p", { className: "quiz-progress" }, [fill(t("q_progress"), { n: qi + 1, t: total })]),
      node("div", { className: "quiz-meter", "aria-hidden": "true" }, [
        node("span", { style: { width: ((qi + 1) / total * 100) + "%" } })
      ])
    ]);
    root.appendChild(top);

    root.appendChild(node("h3", { className: "quiz-q", id: "quizQ" }, [pick(item.q)]));

    var group = node("div", {
      className: "quiz-options",
      role: "group",
      "aria-labelledby": "quizQ"
    });

    var answered = answers[qi] !== undefined;
    var buttons = [];

    item.o.forEach(function (text, index) {
      var button = node("button", {
        type: "button",
        className: "option",
        "aria-pressed": answered && answers[qi] === index ? "true" : "false"
      });
      button.appendChild(node("span", { className: "opt-text" }, [pick(text)]));
      button.addEventListener("click", function () { chooseAnswer(index, group, item, next); });
      buttons.push(button);
      group.appendChild(button);
    });

    root.appendChild(group);

    var feedback = node("div", { className: "quiz-feedback", hidden: true });
    feedback.appendChild(node("p", { className: "feedback-verdict" }));
    feedback.appendChild(node("p", { className: "feedback-exp" }));
    root.appendChild(feedback);

    var next = node("button", {
      type: "button",
      className: "btn",
      disabled: !answered
    }, [qi === total - 1 ? t("q_finish") : t("q_next")]);
    next.addEventListener("click", function () {
      if (answers[qi] === undefined) return;
      if (qi < quiz.length - 1) {
        qi += 1;
        renderQuiz();
        focusQuiz();
        quizStatus(fill(t("q_status_next"), { n: qi + 1, t: quiz.length }));
      } else {
        finished = true;
        renderQuiz();
        focusQuiz();
        quizStatus(t("q_status_result"));
      }
    });
    root.appendChild(node("div", { className: "quiz-actions" }, [next]));

    /* Si ya estaba respondida (por ejemplo, al cambiar de idioma), repinta el estado. */
    if (answered) {
      showAnswer(answers[qi], group, item, feedback, next);
      next.disabled = false;
    } else if (qi > 0) {
      quizStatus(fill(t("q_status_next"), { n: qi + 1, t: total }));
    }
  }

  function chooseAnswer(index, group, item, next) {
    if (answers[qi] !== undefined) return;
    answers[qi] = index;
    showAnswer(index, group, item, $(".quiz-feedback"), next);
    next.disabled = false;
    quizStatus(fill(t("q_status_answer"), { n: qi + 1, t: C.quiz.length }));
    try { next.focus({ preventScroll: true }); } catch (e) { next.focus(); }
  }

  function showAnswer(index, group, item, feedback, next) {
    var options = $$(".option", group);
    options.forEach(function (button, i) {
      button.setAttribute("aria-pressed", i === index ? "true" : "false");
      button.disabled = true;
      button.classList.toggle("is-recommended", i === item.c);
    });

    if (!feedback) return;
    feedback.hidden = false;
    var verdict = $(".feedback-verdict", feedback);
    var exp = $(".feedback-exp", feedback);
    if (verdict) verdict.textContent = index === item.c ? t("q_right") : t("q_other");
    if (exp) {
      clear(exp);
      exp.appendChild(node("strong", {}, [t("q_expl_t") + ": "]));
      exp.appendChild(document.createTextNode(pick(item.e)));
    }

    /* Etiqueta visible en la respuesta recomendada. */
    var recommended = options[item.c];
    if (recommended && !$(".opt-tag", recommended)) {
      recommended.appendChild(node("span", { className: "opt-tag" }, [t("q_recommended")]));
    }
  }

  function renderQuizResult(root) {
    root.classList.add("quiz-result");
    root.appendChild(node("h3", {}, [t("q_res_t")]));
    root.appendChild(node("p", {}, [t("q_res_p")]));

    var ideas = node("ul", { className: "ideas" });
    for (var i = 1; i <= 5; i += 1) {
      ideas.appendChild(node("li", {}, [t("q_idea_" + i)]));
    }
    root.appendChild(ideas);

    var restart = node("button", { type: "button", className: "btn" }, [t("q_restart")]);
    restart.addEventListener("click", function () {
      qi = 0;
      answers = [];
      finished = false;
      renderQuiz();
      focusQuiz();
      quizStatus(fill(t("q_status_next"), { n: 1, t: C.quiz.length }));
    });
    root.appendChild(node("div", { className: "quiz-actions" }, [restart]));
  }

  /* Compromisos */
  var pledgeFilter = "all";

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var previous = document.activeElement;
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "0";
      area.style.left = "0";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.focus();
      area.select();

      function cleanUp() {
        if (area.parentNode) area.parentNode.removeChild(area);
        /* Devuelve el foco a donde estaba antes de copiar. */
        if (previous && typeof previous.focus === "function") previous.focus();
      }

      try {
        var ok = document.execCommand("copy");
        cleanUp();
        if (ok) resolve();
        else reject(new Error("copy"));
      } catch (e) {
        cleanUp();
        reject(e);
      }
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  function pledgeStatus(text) {
    var status = $("pStatus");
    if (status) status.textContent = text;
  }

  function sharePledge(text) {
    var full = t("p_prefix") + " " + text;
    if (navigator.share) {
      navigator.share({
        title: t("og_title"),
        text: full,
        url: shareUrl()
      }).then(function () {
        pledgeStatus(t("p_shared"));
      }).catch(function (error) {
        if (error && error.name === "AbortError") return;
        copyText(full).then(function () {
          pledgeStatus(t("p_copied"));
        }).catch(function () {
          pledgeStatus(t("p_share_fail"));
        });
      });
      return;
    }
    copyText(full).then(function () {
      pledgeStatus(t("p_copied"));
    }).catch(function () {
      pledgeStatus(t("p_share_fail"));
    });
  }

  function renderPledges() {
    var grid = $("pledgeGrid");
    if (!grid) return;
    clear(grid);

    var all = C.pledges;
    var list = all.filter(function (pledge) {
      return pledgeFilter === "all" || pledge.cat === pledgeFilter;
    });

    var count = $("pledgeCount");
    if (count) count.textContent = fill(t("p_count"), { n: list.length });

    if (!list.length) {
      grid.appendChild(node("li", { className: "pledge" }, [
        node("p", { className: "pledge-text" }, [t("p_empty")])
      ]));
      return;
    }

    list.forEach(function (pledge) {
      var text = pick(pledge.text);
      var card = node("li", { className: "pledge", "data-cat": pledge.cat });
      card.appendChild(node("p", { className: "pledge-text" }, [text]));
      card.appendChild(node("span", { className: "pledge-cat" }, [t("p_cat_" + pledge.cat)]));

      var copy = node("button", {
        type: "button",
        className: "mini",
        "aria-label": t("p_copy") + ": " + text
      }, [t("p_copy")]);
      copy.addEventListener("click", function () {
        copyText(t("p_prefix") + " " + text).then(function () {
          pledgeStatus(t("p_copied"));
        }).catch(function () {
          pledgeStatus(t("p_copy_fail"));
        });
      });

      var share = node("button", {
        type: "button",
        className: "mini",
        "aria-label": t("p_share") + ": " + text
      }, [t("p_share")]);
      share.addEventListener("click", function () { sharePledge(text); });

      card.appendChild(node("div", { className: "pledge-actions" }, [copy, share]));
      grid.appendChild(card);
    });
  }

  function wirePledgeFilters() {
    $$(".chip[data-filter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        pledgeFilter = chip.getAttribute("data-filter");
        $$(".chip[data-filter]").forEach(function (other) {
          other.setAttribute("aria-pressed", other === chip ? "true" : "false");
        });
        renderPledges();
        pledgeStatus("");
      });
    });
  }

  /* Compartir la campaña */
  function shareUrl() {
    try {
      var url = new URL(location.href);
      url.hash = "";
      if (lang === "eu") url.searchParams.set("lang", "eu");
      else url.searchParams.delete("lang");
      return url.toString();
    } catch (e) {
      return location.href;
    }
  }

  function shareText() {
    return t("og_title") + ". " + t("hero_title");
  }

  function updateShareLinks() {
    var url = shareUrl();
    var encodedUrl = encodeURIComponent(url);
    var text = shareText();
    var encodedText = encodeURIComponent(text);
    var both = encodeURIComponent(text + "\n" + url);

    setHref("fWa", "https://wa.me/?text=" + both);
    setHref("fTg", "https://t.me/share/url?url=" + encodedUrl + "&text=" + encodedText);
    setHref("fBs", "https://bsky.app/intent/compose?text=" + both);
    setHref("fX", "https://twitter.com/intent/tweet?text=" + encodedText + "&url=" + encodedUrl);

    var native = $("fNative");
    if (native) native.hidden = !navigator.share;
  }

  function wireShare() {
    var copy = $("fCopy");
    if (copy) {
      copy.addEventListener("click", function () {
        copyText(shareUrl()).then(function () {
          var status = $("fStatus");
          if (status) status.textContent = t("f_link_copied");
        }).catch(function () {
          var status = $("fStatus");
          if (status) status.textContent = t("f_copy_fail");
        });
      });
    }

    var native = $("fNative");
    if (native) {
      native.addEventListener("click", function () {
        if (!navigator.share) return;
        navigator.share({
          title: t("og_title"),
          text: shareText(),
          url: shareUrl()
        }).then(function () {
          var status = $("fStatus");
          if (status) status.textContent = t("f_shared");
        }).catch(function (error) {
          if (error && error.name === "AbortError") return;
          var status = $("fStatus");
          if (status) status.textContent = t("f_share_fail");
        });
      });
    }
  }

  /* Menú y navegación */
  function wireMenu() {
    var burger = $("burger");
    var header = $(".site-head");
    var nav = $("mainNav");
    if (!burger || !header) return;

    var setOpen = function (open) {
      header.classList.toggle("nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };

    burger.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });

    if (nav) {
      nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        setOpen(false);
        burger.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) setOpen(false);
    });
  }

  /* Marca en el menú la sección que se está leyendo.
     Se calcula con la posición de scroll (no con IntersectionObserver) para
     que funcione también en navegadores antiguos y sea fácil de comprobar. */
  function wireScrollSpy() {
    var links = $$(".main-nav a[href^='#']");
    if (!links.length) return;

    var pairs = links.map(function (link) {
      return {
        link: link,
        section: document.querySelector(link.getAttribute("href"))
      };
    }).filter(function (pair) { return pair.section; });
    if (!pairs.length) return;

    function update() {
      var line = window.scrollY + (window.innerHeight * 0.35);
      var active = pairs[0].section.id;

      pairs.forEach(function (pair) {
        var top = pair.section.getBoundingClientRect().top + window.scrollY;
        if (top <= line) active = pair.section.id;
      });

      /* Al final de la página, marca el último enlace del menú. */
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        active = pairs[pairs.length - 1].section.id;
      }

      pairs.forEach(function (pair) {
        if (pair.section.id === active) pair.link.setAttribute("aria-current", "true");
        else pair.link.removeAttribute("aria-current");
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    update();
  }

  /* Arranque */
  function init() {
    wireMenu();
    wireScrollSpy();
    wirePledgeFilters();
    wireShare();

    $$(".lang [data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLang(button.getAttribute("data-lang"), true);
      });
    });

    var footLogo = $("footLogo");
    if (footLogo) {
      if (CFG.logo) {
        footLogo.src = CFG.logo;
        footLogo.hidden = false;
      } else {
        footLogo.hidden = true;
      }
    }

    applyLang(initialLang(), false);
  }

  init();
})();
