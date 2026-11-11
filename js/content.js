/* Textos y enlaces de la web.
   Cada texto es un par { es, eu }. Si falta el euskera se muestra el castellano.
   La versión en euskera es un borrador: pendiente de revisión lingüística. */

/* Configuración: enlaces, contacto y logotipo */
window.CONFIG = {
  /* Logotipo del pie. Si se deja vacío, no se muestra imagen. */
  logo: "assets/logo-orgullo-burlada-1000.png",

  links: {
    /* Web municipal (castellano / euskera) */
    muni: "https://www.burlada.es/",
    muniEu: "https://www.burlada.es/eu/",

    /* Servicio LGTBI+ y servicio de Igualdad de Burlada */
    lgtbi: "https://www.burlada.es/ayuntamiento/servicios/lgtbi/",
    lgtbiEu: "https://www.burlada.es/eu/udala/zerbitzuak/lgtbi/",
    igualdad: "https://www.burlada.es/ayuntamiento/servicios/igualdad/",
    igualdadEu: "https://www.burlada.es/eu/udala/zerbitzuak/berdintasuna/",

    /* Plan de Acción LGTBIQ+: vacío hasta tener la URL. Mientras tanto no se muestra. */
    plan: "",

    /* Recursos verificados de Navarra y del Estado */
    kattalingune: "https://inai.navarra.es/es/temas/igualdad-lgtbi/servicio-de-atencion-integral",
    line028: "https://inai.navarra.es/es/-/tel%C3%A9fono-028-y-kattalingune",
    Guiaderecursos: "guia.burlatalgtbiq.online",

    /* Contacto público del Área LGTBI+ de Burlada (fuente: web municipal).
       La extensión se edita en la clave de interfaz `a_res_ext`. */
    email: "lgtbi@burlada.es",
    phone: "948 23 84 00"
  }
};

/* Fuentes de la sección Contexto */
window.SOURCES = [
  { label: "GLAAD – Transgender Day of Remembrance", url: "https://www.glaad.org/tdor" },
  { label: "Case Western Reserve University – Encyclopedia of Cleveland History", url: "https://case.edu/ech/articles/t/transgender-day-remembrance" },
  { label: "TGEU – Trans Murder Monitoring", url: "https://www.tgeu.org/trans-murder-monitoring/" },
  { label: "History.com – First Transgender Day of Remembrance", url: "https://www.history.com/this-day-in-history/first-transgender-day-of-remembrance" }
];

window.CONTENT = {
  /* Textos de la interfaz */
  ui: {
    /* Estructura y navegación */
    skip: {
      es: "Saltar al contenido",
      eu: "Joan edukira"
    },
    brand: {
      es: "Día Internacional de la Memoria Trans",
      eu: "Trans Memoriaren Nazioarteko Eguna"
    },
    lang_label: {
      es: "Idioma",
      eu: "Hizkuntza"
    },
    lang_changed: {
      es: "Idioma: castellano.",
      eu: "Hizkuntza: euskara."
    },
    menu: {
      es: "Menú",
      eu: "Menua"
    },
    nav_label: {
      es: "Navegación principal",
      eu: "Nabigazio nagusia"
    },
    nav_inicio: {
      es: "Inicio",
      eu: "Hasiera"
    },
    nav_memorial: {
      es: "Memorial",
      eu: "Memoriala"
    },
    nav_context: {
      es: "Contexto",
      eu: "Testuingurua"
    },
    nav_quiz: {
      es: "Cuestionario",
      eu: "Galdetegia"
    },
    nav_pledges: {
      es: "Compromisos",
      eu: "Konpromisoak"
    },
    nav_action: {
      es: "Acción",
      eu: "Ekintza"
    },

    /* Metadatos */
    meta_title: {
      es: "Día Internacional de la Memoria Trans – Ayuntamiento de Burlada",
      eu: "Trans Memoriaren Nazioarteko Eguna – Burlatako Udala"
    },
    meta_desc: {
      es: "Campaña del Ayuntamiento de Burlada para el 20 de noviembre: fichas de personas trans, el origen de la fecha, un cuestionario y compromisos contra la transfobia.",
      eu: "Burlatako Udalaren kanpaina azaroaren 20rako: pertsona transen fitxak, dataren jatorria, galdetegi bat eta transfobiaren aurkako konpromisoak."
    },
    og_title: {
      es: "Día Internacional de la Memoria Trans en Burlada",
      eu: "Trans Memoriaren Nazioarteko Eguna Burladan"
    },
    og_desc: {
      es: "Orgullosas de ti, orgullosas de Burlada. Fichas, contexto, un cuestionario y compromisos para el 20 de noviembre.",
      eu: "Zutaz harro, Burlataz harro. Fitxak, testuingurua, galdetegi bat eta konpromisoak azaroaren 20rako."
    },
    og_image_alt: {
      es: "Cartel de la campaña 20N: el número 20 formado con flores rosas y azules sobre fondo azul.",
      eu: "20N kanpainaren kartela: lore arrosa eta urdinez osatutako 20 zenbakia, atzealde urdinean."
    },

    /* Portada */
    hero_title: {
      es: "Recordar sus vidas. Defender las vuestras.",
      eu: "Haien oroimena. Zuen bizitzak."
    },
    hero_intro: {
      es: "Cada 20 de noviembre se recuerda a las personas trans víctimas de la violencia transfoba. La fecha nació en 1999, con una vigilia en memoria de Rita Hester, asesinada en Boston el año anterior.",
      eu: "Azaroaren 20an indarkeria transfoboaren biktima diren pertsona transak gogoratzen dira. Data 1999an sortu zen, Rita Hester gogoratzeko gau-zaintza batekin; aurreko urtean hil zuten Bostonen."
    },
    hero_cta: {
      es: "Entrar al memorial",
      eu: "Sartu memorialera"
    },
    hero_cta2: {
      es: "Sobre la campaña",
      eu: "Kanpainari buruz"
    },
    hero_cta3: {
      es: "Descargar el cartel (JPG, 8,5 MB)",
      eu: "Deskargatu kartela (JPG, 8,5 MB)"
    },
    hero_img_alt: {
      es: "Cartel de la campaña 20N: el número 20 formado con flores y hojas rosas y azules sobre fondo azul, con el lema «Zutaz harro, Burlataz harro» y «Orgullosas de ti, orgullosas de Burlada».",
      eu: "20N kanpainaren kartela: lore eta hosto arrosa eta urdinez osatutako 20 zenbakia, atzealde urdinean, «Zutaz harro, Burlataz harro» eta «Orgullosas de ti, orgullosas de Burlada» lemekin."
    },
    camp_title: {
      es: "Qué encontrarás aquí",
      eu: "Zer aurkituko duzu hemen"
    },
    camp_text: {
      es: "El Ayuntamiento de Burlada se suma al 20 de noviembre con esta web. Reúne fichas de personas trans con sus fuentes, explica de dónde viene la fecha y propone cosas concretas que puede hacer cualquiera.",
      eu: "Burlatako Udalak azaroaren 20ari bat egiten dio webgune honekin. Pertsona transen fitxak bildu ditu, iturriekin; datak nondik datorren azaltzen du eta edonork egin ditzakeen gauza zehatzak proposatzen ditu."
    },

    /* Memorial */
    m_title: {
      es: "Memorial",
      eu: "Memoriala"
    },
    m_intro: {
      es: "Pulsa un nombre para abrir su ficha: quién fue, por qué está en nuestra memoria y dónde leer más.",
      eu: "Sakatu izen bat bere fitxa irekitzeko: nor izan zen, zergatik dagoen gure memorian eta non irakurri gehiago."
    },
    m_count_label: {
      es: "{n} nombres",
      eu: "{n} izen"
    },
    m_list_label: {
      es: "Nombres del memorial",
      eu: "Memorialeko izenak"
    },
    m_limits_t: {
      es: "Sobre las fuentes y sus límites",
      eu: "Iturriez eta haien mugez"
    },
    m_limits: {
      es: "Los registros de asesinatos de personas trans son incompletos: muchos casos no se denuncian, se registran con el género equivocado o no llegan a los medios. Las cifras que circulan son un mínimo, no un recuento total. Este memorial no pretende cerrar la lista: solo nombrar lo que hoy podemos documentar.",
      eu: "Pertsona transen hilketen erregistroak osatugabeak dira: kasu asko ez dira salatzen, generoa gaizki jasotzen da edo ez dira hedabideetara iristen. Zirkulatzen duten zifrak gutxieneko bat dira, ez zenbaketa osoa. Memorial honek ez du zerrenda ixtea nahi: gaur egun dokumenta dezakeguna izendatzea baino ez."
    },
    m_missing_t: {
      es: "¿Falta un nombre?",
      eu: "Izen bat falta da?"
    },
    m_missing: {
      es: "Si conoces un caso documentado que debería estar aquí, contacta con el servicio de Igualdad del Ayuntamiento de Burlada. Antes de añadir una ficha se verificará la información y se contactará, cuando sea posible, con la familia o las personas cercanas.",
      eu: "Hemen egon beharko lukeen kasu dokumentaturen bat ezagutzen baduzu, jarri harremanetan Burlatako Udalaren Berdintasun zerbitzuarekin. Fitxa bat gehitu aurretik informazioa egiaztatuko da eta, ahal denean, familiarekin edo hurbileko pertsonekin harremanetan jarriko da."
    },
    m_who: {
      es: "Quién fue",
      eu: "Nor izan zen"
    },
    m_why: {
      es: "Por qué está en nuestra memoria",
      eu: "Zergatik dago gure memorian"
    },
    m_sources: {
      es: "Fuentes",
      eu: "Iturriak"
    },
    m_close: {
      es: "Cerrar",
      eu: "Itxi"
    },
    m_prev: {
      es: "Anterior",
      eu: "Aurrekoa"
    },
    m_next: {
      es: "Siguiente",
      eu: "Hurrengoa"
    },
    m_count: {
      es: "Ficha {n} de {t}",
      eu: "{n}. fitxa, {t} guztira"
    },
    m_open: {
      es: "Abrir ficha de",
      eu: "Ireki fitxa:"
    },
    m_care: {
      es: "Si estás pasando por un momento difícil, puedes llamar al 024, la línea de atención a la conducta suicida en España (gratuita, 24 horas), o acudir a Kattalingune, el servicio de atención integral LGTBI+ de Navarra.",
      eu: "Une zail bat pasatzen ari bazara, 024 zenbakira dei dezakezu, Espainiako jokabide suizidari arreta emateko doako linea (24 orduz), edo Kattalingunera joan, Nafarroako LGTBI+ arreta integraleko zerbitzura."
    },
    m_new_tab: {
      es: "se abre en una pestaña nueva",
      eu: "fitxa berrian irekitzen da"
    },

    /* Contexto */
    c_title: {
      es: "De dónde viene el 20 de noviembre",
      eu: "Nondik dator azaroaren 20a"
    },
    c_origin: {
      es: "El Día Internacional de la Memoria Trans nació en 1999, cuando la activista Gwendolyn Ann Smith organizó una vigilia para recordar a Rita Hester, una mujer trans afroamericana asesinada en Boston el 28 de noviembre de 1998. Desde entonces, cada 20 de noviembre se recuerda a las personas trans asesinadas por la violencia tránsfoba y se denuncia la impunidad que rodea muchas de esas muertes.",
      eu: "Trans Memoriaren Nazioarteko Eguna 1999an sortu zen, Gwendolyn Ann Smith aktibistak Rita Hester gogoratzeko gau-zaintza antolatu zuenean. Rita Hester emakume trans afroamerikarra zen eta 1998ko azaroaren 28an hil zuten Bostonen. Ordutik, urtero azaroaren 20an indarkeria transfoboak hildako pertsona transak gogoratzen dira eta hilketa horietako askoren inguruko zigorgabetasuna salatzen da."
    },
    c_rita_t: {
      es: "Rita Hester",
      eu: "Rita Hester"
    },
    c_rita: {
      es: "Rita Hester vivía en Boston y fue asesinada en su domicilio el 28 de noviembre de 1998. Su caso no se ha resuelto. La cobertura informativa de la época ignoró su identidad y trató su muerte con sensacionalismo. Su comunidad respondió con una vigilia que dio origen a la conmemoración internacional.",
      eu: "Rita Hester Bostonen bizi zen eta 1998ko azaroaren 28an hil zuten bere etxean. Kasua ez da argitu. Garai hartako hedabideek ez zuten bere identitatea aintzat hartu eta sensazionalismoz tratatu zuten heriotza. Bere komunitateak gau-zaintza batekin erantzun zuen, eta hortik sortu zen nazioarteko oroitzapena."
    },
    c_gwen_t: {
      es: "Gwendolyn Ann Smith",
      eu: "Gwendolyn Ann Smith"
    },
    c_gwen: {
      es: "Gwendolyn Ann Smith, activista y diseñadora trans, creó el proyecto «Remembering Our Dead» y organizó la primera vigilia en 1999, con la ayuda de la activista Penni Ashe Matz. De aquel acto nació una jornada que hoy se celebra en decenas de países.",
      eu: "Gwendolyn Ann Smith aktibista eta diseinatzaile transak «Remembering Our Dead» proiektua sortu zuen eta lehen gau-zaintza 1999an antolatu zuen, Penni Ashe Matz aktibistaren laguntzarekin. Ekitaldi harexetatik sortu zen gaur egun dozenaka herrialdetan ospatzen den eguna."
    },
    c_viol_t: {
      es: "La violencia tránsfoba no es solo física",
      eu: "Indarkeria transfoboa ez da fisikoa bakarrik"
    },
    c_viol: {
      es: "Incluye el acoso, la exclusión en el empleo, la vivienda, la educación o la sanidad, y la negación de la identidad. Esa discriminación cotidiana construye el terreno en el que la violencia extrema se vuelve posible. Combatirla es prevenirla.",
      eu: "Jazarpena, lan, etxebizitza, hezkuntza edo osasun arloko bazterketa eta identitatearen ukapena ere bada. Eguneroko diskriminazio horrek muturreko indarkeria posible egiten duen lurra eraikitzen du. Hari aurre egitea prebenitzea da."
    },
    c_erase_t: {
      es: "El borrado de la memoria",
      eu: "Memoriaren ezabaketa"
    },
    c_erase: {
      es: "Cuando se usa el nombre anterior de una persona fallecida, se la identifica con el género equivocado o se omite su historia, se la borra por segunda vez. Nombrar con respeto, con el nombre y el género con los que vivió, es un acto de justicia.",
      eu: "Hildako pertsona bati aurreko izena ematen zaionean, genero okerrarekin identifikatzen denean edo bere historia isiltzen denean, bigarren aldiz ezabatzen da. Errespetuz izendatzea, bizi zen izen eta generoarekin, justizia-ekintza bat da."
    },
    c_timeline_t: {
      es: "Tres fechas para situarnos",
      eu: "Hiru data kokatzeko"
    },
    c_tl1_year: {
      es: "1998",
      eu: "1998"
    },
    c_tl1_text: {
      es: "Rita Hester es asesinada en Boston. Su caso sigue sin resolverse.",
      eu: "Rita Hester Bostonen hil zuten. Kasua argitu gabe dago."
    },
    c_tl2_year: {
      es: "1999",
      eu: "1999"
    },
    c_tl2_text: {
      es: "Primera vigilia organizada por Gwendolyn Ann Smith. Nace el TDoR.",
      eu: "Gwendolyn Ann Smith-ek antolatutako lehen gau-zaintza. TDoR jaio zen."
    },
    c_tl3_year: {
      es: "Hoy",
      eu: "Gaur"
    },
    c_tl3_text: {
      es: "El 20N se conmemora en todo el mundo y sigue exigiendo justicia y derechos.",
      eu: "20N mundu osoan ospatzen da eta justizia eta eskubideak eskatzen jarraitzen du."
    },
    c_src_t: {
      es: "Fuentes para saber más",
      eu: "Gehiago jakiteko iturriak"
    },
    c_src_p: {
      es: "Se abren en una pestaña nueva.",
      eu: "Fitxa berrian irekitzen dira."
    },

    /* Cuestionario */
    q_title: {
      es: "Situaciones de la vida diaria",
      eu: "Eguneroko bizitzako egoerak"
    },
    q_intro: {
      es: "Preguntas sobre situaciones corrientes, cada una con su explicación. No hay nota y las respuestas no se guardan ni se envían.",
      eu: "Eguneroko egoerei buruzko galderak, bakoitza bere azalpenarekin. Ez dago notarik eta erantzunak ez dira gordetzen ez bidaltzen."
    },
    q_progress: {
      es: "Pregunta {n} de {t}",
      eu: "{n}. galdera, {t} guztira"
    },
    q_next: {
      es: "Siguiente",
      eu: "Hurrengoa"
    },
    q_finish: {
      es: "Ver ideas clave",
      eu: "Ikusi funtsezko ideiak"
    },
    q_recommended: {
      es: "Respuesta recomendada",
      eu: "Gomendatutako erantzuna"
    },
    q_right: {
      es: "Es la respuesta más respetuosa.",
      eu: "Erantzunik errespetuzkoena da."
    },
    q_other: {
      es: "Hay una opción más respetuosa. Lee por qué.",
      eu: "Aukera errespetuzkoago bat dago. Irakurri zergatik."
    },
    q_expl_t: {
      es: "Por qué",
      eu: "Zergatik"
    },
    q_status_answer: {
      es: "Respuesta registrada. Pregunta {n} de {t}.",
      eu: "Erantzuna erregistratu da. {n}. galdera, {t} guztira."
    },
    q_status_next: {
      es: "Pregunta {n} de {t}.",
      eu: "{n}. galdera, {t} guztira."
    },
    q_status_result: {
      es: "Has llegado al final. Estas son las ideas clave.",
      eu: "Amaierara iritsi zara. Hauek dira funtsezko ideiak."
    },
    q_res_t: {
      es: "Has llegado al final",
      eu: "Amaierara iritsi zara"
    },
    q_res_p: {
      es: "No hay puntuación. Estas son cinco ideas para quedarte con ellas.",
      eu: "Ez dago puntuaziorik. Hona hemen gogoan hartzeko bost ideia."
    },
    q_idea_1: {
      es: "El respeto empieza por el nombre y los pronombres que cada persona indica.",
      eu: "Errespetua pertsona bakoitzak adierazten duen izenarekin eta izenordainekin hasten da."
    },
    q_idea_2: {
      es: "La transfobia también es discriminación cotidiana: en el trabajo, la vivienda, la sanidad, la escuela o la calle.",
      eu: "Transfobia eguneroko diskriminazioa ere bada: lanean, etxebizitzan, osasunean, eskolan edo kalean."
    },
    q_idea_3: {
      es: "El silencio ante un chiste o un mensaje de odio también deja marca. Marcar un límite con calma cambia la norma del grupo.",
      eu: "Txiste baten edo gorroto-mezu baten aurrean isiltzeak ere arrastoa uzten du. Lasai muga jartzeak taldearen araua aldatzen du."
    },
    q_idea_4: {
      es: "Nombrar a las víctimas con su nombre y su género es reparar parte del daño que la violencia quiso borrar.",
      eu: "Biktimak haien izen eta generoarekin izendatzeak indarkeriak ezabatu nahi zuen kaltearen zati bat konpontzen du."
    },
    q_idea_5: {
      es: "Elige uno de los compromisos de más abajo y ponlo en práctica esta semana.",
      eu: "Aukeratu beheko konpromisoetako bat eta jarri praktikan aste honetan."
    },
    q_restart: {
      es: "Volver a empezar",
      eu: "Hasi berriro"
    },

    /* Compromisos */
    p_title: {
      es: "Compromisos",
      eu: "Konpromisoak"
    },
    p_intro: {
      es: "Cosas pequeñas que se pueden hacer desde hoy. Copia la que quieras hacer tuya o compártela.",
      eu: "Gaur bertatik egin daitezkeen gauza txikiak. Kopiatu zurea egin nahi duzuna edo partekatu."
    },
    p_filter_label: {
      es: "Filtrar por ámbito",
      eu: "Iragazi arloaren arabera"
    },
    p_all: {
      es: "Todos",
      eu: "Guztiak"
    },
    p_cat_respect: {
      es: "Respeto",
      eu: "Errespetua"
    },
    p_cat_daily: {
      es: "Día a día",
      eu: "Egunerokoa"
    },
    p_cat_public: {
      es: "Servicios públicos",
      eu: "Zerbitzu publikoak"
    },
    p_cat_memory: {
      es: "Memoria",
      eu: "Memoria"
    },
    p_count: {
      es: "{n} compromisos",
      eu: "{n} konpromiso"
    },
    p_prefix: {
      es: "Mi compromiso:",
      eu: "Nire konpromisoa:"
    },
    p_copy: {
      es: "Copiar",
      eu: "Kopiatu"
    },
    p_share: {
      es: "Compartir",
      eu: "Partekatu"
    },
    p_copied: {
      es: "Compromiso copiado.",
      eu: "Konpromisoa kopiatu da."
    },
    p_shared: {
      es: "Compromiso compartido.",
      eu: "Konpromisoa partekatu da."
    },
    p_copy_fail: {
      es: "No se ha podido copiar. Selecciona el texto y cópialo.",
      eu: "Ezin izan da kopiatu. Hautatu testua eta kopiatu."
    },
    p_share_fail: {
      es: "No se ha podido compartir. Puedes copiarlo.",
      eu: "Ezin izan da partekatu. Kopiatu dezakezu."
    },
    p_empty: {
      es: "No hay compromisos en este ámbito.",
      eu: "Ez dago konpromisorik arlo honetan."
    },

    /* Acción */
    a_title: {
      es: "Qué podemos hacer",
      eu: "Zer egin dezakegu"
    },
    a_intro: {
      es: "Lo que pueden hacer los centros educativos, los servicios públicos y cada persona en su día a día.",
      eu: "Ikastetxeek, zerbitzu publikoek eta pertsona bakoitzak egunerokoan egin dezaketena."
    },
    a_edu_t: {
      es: "En la educación",
      eu: "Hezkuntzan"
    },
    a_pub_t: {
      es: "En los servicios públicos",
      eu: "Zerbitzu publikoetan"
    },
    a_day_t: {
      es: "En la vida cotidiana",
      eu: "Eguneroko bizitzan"
    },
    a_res_t: {
      es: "Dónde pedir ayuda",
      eu: "Non eskatu laguntza"
    },
    a_res_p: {
      es: "Si necesitas apoyo, información o asesoramiento, estos servicios son gratuitos y confidenciales.",
      eu: "Laguntza, informazioa edo aholkua behar baduzu, zerbitzu hauek doakoak eta konfidentzialak dira."
    },
    a_res_kat: {
      es: "Kattalingune, servicio de atención integral LGTBI+ de Navarra",
      eu: "Kattalingune, Nafarroako LGTBI+ arreta integraleko zerbitzua"
    },
    a_res_kat_desc: {
      es: "Atención psicológica, social, sexológica y jurídica gratuita del Gobierno de Navarra.",
      eu: "Nafarroako Gobernuaren arreta psikologikoa, soziala, sexologikoa eta juridikoa, doan."
    },
    a_res_burlada: {
      es: "Servicio LGTBI+ del Ayuntamiento de Burlada",
      eu: "Burlatako Udalaren LGTBI+ zerbitzua"
    },
    a_res_burlada_desc: {
      es: "Información, asesoramiento y acompañamiento del servicio municipal LGTBI+.",
      eu: "Udal LGTBI+ zerbitzuaren informazioa, aholkularitza eta laguntza."
    },
    a_res_ext: {
      es: "ext. 142",
      eu: "142. luzapena"
    },
    a_res_024: {
      es: "024, línea de atención a la conducta suicida",
      eu: "024, jokabide suizidari arreta emateko linea"
    },
    a_res_024_desc: {
      es: "Teléfono gratuito, confidencial y disponible las 24 horas en España.",
      eu: "Doako telefonoa, konfidentziala eta 24 orduz eskuragarri Espainian."
    },
    a_muni: {
      es: "Web del Ayuntamiento de Burlada",
      eu: "Burlatako Udalaren webgunea"
    },
    a_lgtbi: {
      es: "Servicio LGTBI+ de Burlada",
      eu: "Burlatako LGTBI+ zerbitzua"
    },
    a_igualdad: {
      es: "Servicio de Igualdad de Burlada",
      eu: "Burlatako Berdintasun zerbitzua"
    },
    a_muni_t: {
      es: "Más información",
      eu: "Informazio gehiago"
    },
    a_plan: {
      es: "Plan de Acción LGTBIQ+ de Burlada",
      eu: "Burlatako LGTBIQ+ Ekintza Plana"
    },
    a_res_note: {
      es: "Los enlaces externos se abren en una pestaña nueva.",
      eu: "Kanpo-estekak fitxa berrian irekitzen dira."
    },

    /* Cierre y pie */
    f_title: {
      es: "Que ninguna vida trans quede sin nombre.",
      eu: "Bizitza trans bakar bat ere ez dadila izenik gabe geratu."
    },
    f_text: {
      es: "Si esta web te ha servido, envíasela a alguien.",
      eu: "Webgune honek balio izan badizu, bidali iezaiozu norbaiti."
    },
    f_share_t: {
      es: "Comparte la campaña",
      eu: "Partekatu kanpaina"
    },
    f_copy_link: {
      es: "Copiar enlace",
      eu: "Kopiatu esteka"
    },
    f_native: {
      es: "Compartir…",
      eu: "Partekatu…"
    },
    f_link_copied: {
      es: "Enlace copiado.",
      eu: "Esteka kopiatu da."
    },
    f_shared: {
      es: "Campaña compartida.",
      eu: "Kanpaina partekatu da."
    },
    f_copy_fail: {
      es: "No se ha podido copiar. Selecciona el enlace y cópialo.",
      eu: "Ezin izan da kopiatu. Hautatu esteka eta kopiatu."
    },
    f_share_fail: {
      es: "No se ha podido compartir. Puedes copiar el enlace.",
      eu: "Ezin izan da partekatu. Esteka kopiatu dezakezu."
    },
    f_wa: {
      es: "WhatsApp",
      eu: "WhatsApp"
    },
    f_tg: {
      es: "Telegram",
      eu: "Telegram"
    },
    f_bs: {
      es: "Bluesky",
      eu: "Bluesky"
    },
    f_x: {
      es: "X",
      eu: "X"
    },
    f_new_tab: {
      es: "se abre en una pestaña nueva",
      eu: "fitxa berrian irekitzen da"
    },
    f_credits: {
      es: "Campaña institucional del Ayuntamiento de Burlada / Burlatako Udala.",
      eu: "Burlatako Udalaren kanpaina instituzionala."
    },
    f_credits_2: {
      es: "Concejalía de Políticas LGTBIQ+.",
      eu: "Politika LGTBIQ+ Zinegotzigoa."
    },
    f_access_note: {
      es: "Esta web no usa cookies ni recoge datos personales.",
      eu: "Webgune honek ez du cookierik erabiltzen eta ez du datu pertsonalik biltzen."
    },
    f_top: {
      es: "Volver arriba",
      eu: "Itzuli gora"
    },
    f_logo_alt: {
      es: "Zutaz harro, Burlataz harro. Orgullosas de ti, orgullosas de Burlada. Burlatako Udala / Ayuntamiento de Burlada.",
      eu: "Zutaz harro, Burlataz harro. Orgullosas de ti, orgullosas de Burlada. Burlatako Udala / Ayuntamiento de Burlada."
    },
  },

  /* Propuestas por ámbito (sección Qué podemos hacer) */
  edu: [
        {
      es: "Incluir referentes trans en el currículo y en la biblioteca del centro.",
      eu: "Pertsona transen erreferenteak curriculumean eta ikastetxeko liburutegian sartzea."
    },
        {
      es: "Respetar el nombre y los pronombres del alumnado trans en listas, aulas y actos.",
      eu: "Ikasle transen izena eta izenordainak errespetatzea zerrendetan, gelan eta ekitaldietan."
    },
        {
      es: "Contar con un protocolo claro frente al acoso y formar al profesorado.",
      eu: "Jazarpenaren aurkako protokolo argia izatea eta irakasleak prestatzea."
    },
  ],
  pub: [
        {
      es: "Registrar el nombre sentido en la atención sanitaria, social y municipal.",
      eu: "Osasun, gizarte eta udal arretan sentitutako izena erregistratzea."
    },
        {
      es: "Formar al personal público en trato respetuoso y diversidad de género.",
      eu: "Langile publikoak trataera errespetuzkoan eta genero-aniztasunean prestatzea."
    },
        {
      es: "Garantizar espacios y trámites accesibles y seguros para las personas trans.",
      eu: "Pertsona transentzako espazio eta izapide eskuragarri eta seguruak bermatzea."
    },
  ],
  day: [
        {
      es: "Corregir con respeto un comentario o chiste tránsfobo, sin darle altavoz.",
      eu: "Iruzkin edo txiste transfobo bat errespetuz zuzentzea, oihartzunik eman gabe."
    },
        {
      es: "No preguntar por el cuerpo ni la historia de nadie: escuchar lo que la persona quiera contar.",
      eu: "Inoren gorputzaz edo historiaz ez galdetzea: pertsonak kontatu nahi duena entzutea."
    },
        {
      es: "Acompañar y creer a una persona trans que denuncia discriminación.",
      eu: "Diskriminazioa salatzen duen pertsona trans bati lagundu eta sinestea."
    },
  ],

  /* Cuestionario. c = índice de la respuesta recomendada (0, 1 o 2). */
  quiz: [
    {
      q: {
        es: "Una compañera te cuenta que es una mujer trans y te dice su nombre. ¿Qué haces?",
        eu: "Lagun batek emakume trans bat dela esan eta bere izena kontatzen dizu. Zer egiten duzu?"
      },
      o: [
              {
        es: "Sigo usando su nombre anterior «por costumbre».",
        eu: "Bere aurreko izena erabiltzen jarraitzen dut, «ohituragatik»."
      },
              {
        es: "Uso el nombre y los pronombres que me indica.",
        eu: "Adierazten didan izena eta izenordainak erabiltzen ditut."
      },
              {
        es: "Le pregunto por su operación para entenderlo mejor.",
        eu: "Bere ebakuntzaz galdetzen diot hobeto ulertzeko."
      }
      ],
      c: 1,
      e: {
        es: "Usar el nombre y los pronombres elegidos es una forma básica de respeto. Las preguntas sobre el cuerpo o la historia médica son íntimas y no hay que hacerlas.",
        eu: "Aukeratutako izena eta izenordainak erabiltzea errespetu-adierazpen oinarrizkoa da. Gorputzari edo osasun-historiari buruzko galderak intimoak dira eta ez dira egin behar."
      }
    },
    {
      q: {
        es: "En el grupo de clase o del trabajo alguien hace un chiste burlándose de las personas trans. ¿Qué es lo más adecuado?",
        eu: "Ikasgelako edo lanerako taldean norbaitek pertsona transak iseka egiten dituen txiste bat kontatzen du. Zer da egokiena?"
      },
      o: [
              {
        es: "Reírme para no destacar.",
        eu: "Barre egitea, nabarmendu ez nadin."
      },
              {
        es: "Ignorarlo, a ver si se pasa.",
        eu: "Ez ikusi egitea, pasatuko den itxaropenez."
      },
              {
        es: "Decir con calma que no tiene gracia y acercarme a quien pueda sentirse dañada.",
        eu: "Lasai esatea ez duela graziarik eta kaltetuta sentitu daitekeenarengana hurbiltzea."
      }
      ],
      c: 2,
      e: {
        es: "El silencio suele leerse como aprobación. Marcar un límite con calma y apoyar a las personas afectadas reduce el daño y cambia la norma del grupo.",
        eu: "Isiltasuna onarpen gisa irakurri ohi da. Lasai muga jartzeak eta kaltetuei laguntzeak kaltea murrizten du eta taldearen araua aldatzen du."
      }
    },
    {
      q: {
        es: "Un medio informa de la muerte de una mujer trans. ¿Qué tratamiento es más respetuoso?",
        eu: "Hedabide batek emakume trans baten heriotza argitaratzen du. Zein da trataerarik errespetuzkoena?"
      },
      o: [
              {
        es: "Usar su nombre y su género con los que vivía.",
        eu: "Bizi zen izena eta generoa erabiltzea."
      },
              {
        es: "Usar su nombre anterior y su sexo asignado al nacer.",
        eu: "Aurreko izena eta jaiotzean esleitutako sexua erabiltzea."
      },
              {
        es: "Detallar al máximo cómo fue la agresión.",
        eu: "Erasoaren xehetasun guztiak ematea."
      }
      ],
      c: 0,
      e: {
        es: "Nombrarla con el nombre y género con los que vivía respeta su dignidad. Usar el nombre anterior la borra, y el detalle morboso de la violencia no aporta nada.",
        eu: "Bizi zen izen eta generoarekin izendatzeak bere duintasuna errespetatzen du. Aurreko izena erabiltzeak ezabatu egiten du, eta indarkeriaren xehetasun morbosoek ez dute ezer ekartzen."
      }
    },
    {
      q: {
        es: "¿Qué se conmemora el 20 de noviembre?",
        eu: "Zer gogoratzen da azaroaren 20an?"
      },
      o: [
              {
        es: "Una celebración de logros legales.",
        eu: "Lorpen legalen ospakizuna."
      },
              {
        es: "La memoria de las personas trans asesinadas y la denuncia de la violencia tránsfoba.",
        eu: "Hildako pertsona transen memoria eta indarkeria transfoboaren salaketa."
      },
              {
        es: "El día de la visibilidad de las familias.",
        eu: "Familien ikusgarritasun eguna."
      }
      ],
      c: 1,
      e: {
        es: "Es una jornada de memoria y reivindicación nacida en 1999 para recordar a Rita Hester y a todas las personas trans víctimas de violencia.",
        eu: "Memoria eta aldarrikapen eguna da, 1999an sortua Rita Hester eta indarkeriaren biktima diren pertsona trans guztiak gogoratzeko."
      }
    },
    {
      q: {
        es: "¿Es la transfobia solo violencia física?",
        eu: "Transfobia indarkeria fisikoa bakarrik al da?"
      },
      o: [
              {
        es: "Sí: lo demás son opiniones.",
        eu: "Bai: gainerakoak iritziak dira."
      },
              {
        es: "Solo ocurre en otros países.",
        eu: "Beste herrialdeetan bakarrik gertatzen da."
      },
              {
        es: "No: incluye acoso, discriminación en empleo, vivienda, salud o educación, y la negación de la identidad.",
        eu: "Ez: jazarpena, lan, etxebizitza, osasun edo hezkuntza arloko diskriminazioa eta identitatearen ukapena ere barne hartzen ditu."
      }
      ],
      c: 2,
      e: {
        es: "La discriminación cotidiana también es transfobia y se da cerca de nosotras. Combatirla es parte de prevenir formas más graves de violencia.",
        eu: "Eguneroko diskriminazioa ere transfobia da eta gertu gertatzen da. Hari aurre egitea indarkeria larriagoak prebenitzearen parte da."
      }
    },
    {
      q: {
        es: "Una persona trans acude a un servicio público y su documentación aún no refleja su nombre. ¿Qué es lo adecuado?",
        eu: "Pertsona trans bat zerbitzu publiko batera doa eta bere dokumentazioak ez du oraindik bere izena jasotzen. Zer da egokia?"
      },
      o: [
              {
        es: "Dirigirme a ella por el nombre que indica, respetando los trámites que correspondan.",
        eu: "Adierazten duen izenez hitz egitea, dagozkion izapideak errespetatuz."
      },
              {
        es: "Pedirle que explique su historia antes de atenderla.",
        eu: "Arretatu aurretik bere historia azaltzeko eskatzea."
      },
              {
        es: "Llamarla solo por el nombre del documento en voz alta.",
        eu: "Dokumentuko izenez bakarrik deitzea, ozenki."
      }
      ],
      c: 0,
      e: {
        es: "Se puede respetar el nombre sentido en el trato y gestionar la documentación con discreción. Exponer a la persona en voz alta puede ponerla en riesgo.",
        eu: "Trataeran sentitutako izena errespetatu daiteke eta dokumentazioa diskrezioz kudeatu. Pertsona ozenki agerian uzteak arriskuan jar dezake."
      }
    },
    {
      q: {
        es: "Eres docente. ¿Cómo contribuyes a un centro educativo seguro?",
        eu: "Irakaslea zara. Nola laguntzen duzu ikastetxe segurua izaten?"
      },
      o: [
              {
        es: "Evito el tema para no generar conflictos.",
        eu: "Gaia saihesten dut gatazkarik ez sortzeko."
      },
              {
        es: "Incluyo referentes, respeto el nombre elegido y actúo ante el acoso.",
        eu: "Erreferenteak sartzen ditut, aukeratutako izena errespetatzen dut eta jazarpenaren aurrean jarduten dut."
      },
              {
        es: "Espero a que alguien del alumnado lo pida.",
        eu: "Ikasleren batek eskatu arte itxaroten dut."
      }
      ],
      c: 1,
      e: {
        es: "No hablar del tema también transmite un mensaje. La visibilidad respetuosa y la respuesta rápida al acoso protegen al alumnado.",
        eu: "Gaiaz ez hitz egiteak ere mezu bat helarazten du. Ikusgarritasun errespetuzkoak eta jazarpenari azkar erantzuteak ikasleak babesten dituzte."
      }
    },
    {
      q: {
        es: "Ves en redes un mensaje tránsfobo. ¿Qué haces?",
        eu: "Sareetan mezu transfobo bat ikusten duzu. Zer egiten duzu?"
      },
      o: [
              {
        es: "Lo comparto para criticarlo.",
        eu: "Kritikatzeko partekatzen dut."
      },
              {
        es: "Lo ignoro y sigo.",
        eu: "Ez diot jaramonik egiten."
      },
              {
        es: "No lo difundo, lo denuncio en la plataforma y apoyo a las personas afectadas.",
        eu: "Ez dut zabaltzen, plataforman salatzen dut eta kaltetuei laguntzen diet."
      }
      ],
      c: 2,
      e: {
        es: "Compartirlo amplifica el daño. Denunciarlo y apoyar a quienes lo reciben es más eficaz.",
        eu: "Partekatzeak kaltea handitzen du. Salatzea eta jasotzen dutenei laguntzea eraginkorragoa da."
      }
    },
    {
      q: {
        es: "¿Por qué es importante nombrar a las víctimas con su nombre?",
        eu: "Zergatik da garrantzitsua biktimak izenez izendatzea?"
      },
      o: [
              {
        es: "Porque reconoce su dignidad y evita el borrado de su memoria.",
        eu: "Haien duintasuna aitortzen duelako eta memoria ezabatzea saihesten duelako."
      },
              {
        es: "Por curiosidad.",
        eu: "Jakin-minagatik."
      },
              {
        es: "No es importante: lo relevante son las cifras.",
        eu: "Ez da garrantzitsua: zifrak dira garrantzitsuak."
      }
      ],
      c: 0,
      e: {
        es: "Las cifras importan, pero cada número fue una persona. Nombrar devuelve rostro e historia a quien la violencia quiso borrar.",
        eu: "Zifrek garrantzia dute, baina zenbaki bakoitza pertsona bat izan zen. Izendatzeak aurpegia eta historia itzultzen dizkio indarkeriak ezabatu nahi izan duenari."
      }
    }
  ],

  /* Compromisos. cat: respect, daily, public o memory. */
  pledges: [
    {
      cat: "respect",
      text: {
        es: "Usaré el nombre y los pronombres que cada persona me indique.",
        eu: "Pertsona bakoitzak adierazten didan izena eta izenordainak erabiliko ditut."
      }
    },
    {
      cat: "daily",
      text: {
        es: "No haré ni celebraré chistes que se burlen de las personas trans.",
        eu: "Ez ditut pertsona transak iseka egiten dituzten txisteak egingo ez ospatuko."
      }
    },
    {
      cat: "respect",
      text: {
        es: "Escucharé sin exigir explicaciones sobre el cuerpo o la historia de nadie.",
        eu: "Entzungo dut, inoren gorputzaz edo historiaz azalpenik eskatu gabe."
      }
    },
    {
      cat: "memory",
      text: {
        es: "Nombraré con respeto a las personas trans fallecidas, con su nombre y su género.",
        eu: "Hildako pertsona transak errespetuz izendatuko ditut, haien izen eta generoarekin."
      }
    },
    {
      cat: "daily",
      text: {
        es: "Pararé a pensar antes de compartir contenido tránsfobo, y lo denunciaré.",
        eu: "Eduki transfoboa partekatu aurretik gelditu eta pentsatuko dut, eta salatuko dut."
      }
    },
    {
      cat: "memory",
      text: {
        es: "Llevaré la memoria trans a mi aula, mi equipo o mi asociación.",
        eu: "Memoria trans nire gelara, taldera edo elkartera eramango dut."
      }
    },
    {
      cat: "daily",
      text: {
        es: "Apoyaré a quien sufra acoso, aunque tenga miedo a intervenir.",
        eu: "Jazarpena pairatzen duenari lagunduko diot, esku hartzeko beldur izanda ere."
      }
    },
    {
      cat: "respect",
      text: {
        es: "Me formaré: leeré, escucharé y consultaré fuentes de organizaciones trans.",
        eu: "Prestatuko naiz: irakurri, entzun eta erakunde transen iturriak kontsultatuko ditut."
      }
    },
    {
      cat: "public",
      text: {
        es: "Exigiré servicios públicos accesibles y respetuosos para las personas trans.",
        eu: "Pertsona transentzako zerbitzu publiko eskuragarri eta errespetuzkoak eskatuko ditut."
      }
    },
    {
      cat: "daily",
      text: {
        es: "Cuidaré los espacios compartidos para que nadie tenga que justificar quién es.",
        eu: "Partekatutako espazioak zainduko ditut, inork norbait zer den justifikatu behar ez izateko."
      }
    },
    {
      cat: "memory",
      text: {
        es: "Acudiré a los actos de memoria de mi municipio y los difundiré.",
        eu: "Nire udalerriko memoria-ekitaldietara joango naiz eta zabalduko ditut."
      }
    },
    {
      cat: "public",
      text: {
        es: "Revisaré con mi equipo que los formularios y trámites respeten el nombre y la identidad de cada persona.",
        eu: "Nire taldearekin berrikusiko dut inprimakiek eta izapideek pertsona bakoitzaren izena eta identitatea errespetatzen dituztela."
      }
    }
  ]
};
