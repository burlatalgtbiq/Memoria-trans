/* Memorial: lista de nombres y ficha en <dialog>. Usa window.MEMORIAL
   (memorial-data.js); app.js llama a Memorial.render(lang). */
(function () {
  "use strict";

  var lang = "es";
  var current = -1;
  var opener = null;
  var wired = false;
  var dialog = null;

  var $ = function (id) { return document.getElementById(id); };
  var T = function (key) {
    var entry = (window.CONTENT.ui || {})[key];
    if (!entry) return key;
    return entry[lang] || entry.es || key;
  };
  var fill = function (str, obj) {
    return str.replace(/\{(\w+)\}/g, function (_, key) {
      return obj[key] !== undefined ? obj[key] : "";
    });
  };

  function node(tag, props, kids) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      if (key.indexOf("-") !== -1 || key === "role") {
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

  /* ---- Lista de nombres ---- */
  function renderList() {
    var list = $("lights");
    if (!list) return;
    list.textContent = "";

    window.MEMORIAL.forEach(function (person, index) {
      var place = person.place[lang] || person.place.es;
      var button = node("button", {
        type: "button",
        className: "name-btn"
      });

      button.appendChild(node("span", { className: "sr" }, [T("m_open")]));
      button.appendChild(node("span", { className: "name-year" }, [person.year]));
      button.appendChild(node("span", { className: "name-name" }, [person.name]));
      button.appendChild(node("span", { className: "name-place" }, [place]));

      button.addEventListener("click", function () {
        opener = button;
        open(index);
      });

      list.appendChild(node("li", {}, [button]));
    });

    var count = $("memCount");
    if (count) {
      count.textContent = fill(T("m_count_label"), { n: window.MEMORIAL.length });
    }
  }

  /* ---- Ficha ---- */
  function fillDialog(index) {
    var person = window.MEMORIAL[index];
    if (!person) return;

    $("fichaCount").textContent = fill(T("m_count"), {
      n: index + 1,
      t: window.MEMORIAL.length
    });
    $("fichaYear").textContent = person.year;
    $("fichaTitle").textContent = person.name;
    $("fichaMeta").textContent = person.place[lang] || person.place.es;
    $("fichaWho").textContent = person.bio[lang] || person.bio.es;
    $("fichaWhy").textContent = person.why[lang] || person.why.es;

    var care = $("fichaCare");
    care.textContent = T("m_care");
    care.hidden = !person.care;

    var src = $("fichaSrc");
    src.textContent = "";
    (person.sources || []).forEach(function (source) {
      var link = node("a", {
        href: source.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, [source.label]);
      link.appendChild(node("span", { className: "sr" }, [", " + T("m_new_tab")]));
      src.appendChild(node("li", {}, [link]));
    });

    var closeX = $("fichaCloseX");
    closeX.setAttribute("aria-label", T("m_close"));
  }

  function open(index) {
    if (!dialog) return;
    current = index;
    fillDialog(current);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    var close = $("fichaCloseX");
    if (close) close.focus();
  }

  function close() {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      if (opener) opener.focus();
    }
  }

  function step(delta) {
    if (current < 0) return;
    current = (current + delta + window.MEMORIAL.length) % window.MEMORIAL.length;
    fillDialog(current);
    var title = $("fichaTitle");
    if (title) title.focus && title.focus();
  }

  function wire() {
    if (wired) return;
    wired = true;
    dialog = $("ficha");

    $("fichaClose").addEventListener("click", close);
    $("fichaCloseX").addEventListener("click", close);
    $("fichaPrev").addEventListener("click", function () { step(-1); });
    $("fichaNext").addEventListener("click", function () { step(1); });

    dialog.addEventListener("close", function () {
      if (opener && document.contains(opener)) opener.focus();
    });

    /* Cerrar al pulsar el fondo (fuera de la caja de la ficha). */
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) close();
    });
  }

  function render(nextLang) {
    lang = nextLang === "eu" ? "eu" : "es";
    if (!dialog) wire();
    renderList();
    if (dialog && dialog.open && current >= 0) fillDialog(current);
  }

  window.Memorial = { render: render };
})();
