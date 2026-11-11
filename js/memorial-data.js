/* ==========================================================================
   MEMORIAL · FICHAS BIOGRÁFICAS (castellano + euskera)
   --------------------------------------------------------------------------
   Cada persona = un bloque. Para añadir otra, copia un bloque y cambia los
   datos. Campos:
     id (único, sin espacios) · year · name · place{es,eu}
     bio{es,eu}  -> quién fue y su historia
     why{es,eu}  -> por qué forma parte de nuestra memoria
     care:true   -> muestra el aviso de apoyo (muerte por suicidio)
     sources[]   -> {label,url} fuentes consultadas
   IMPORTANTE: textos redactados a partir de fuentes públicas. Revisión humana
   (Igualdad / colectivos trans / familias) y revisión lingüística del euskera
   antes de publicar. Ver VERIFICAR.md.
   ========================================================================== */
window.MEMORIAL = [
{ id:"sonia-rescalvo", year:"1991", name:"Sonia Rescalvo Zafra",
  place:{ es:"Cuenca · Barcelona", eu:"Cuenca · Bartzelona" },
  bio:{
    es:"Sonia Rescalvo Zafra nació en Cuenca y se mudó a Barcelona con 16 años, donde trabajó como artista en los teatros de la avenida del Paral·lel. Más tarde vivió en situación de calle en el parque de la Ciutadella, donde compartía el día a día con amistades como Doris Romero.",
    eu:"Sonia Rescalvo Zafra Cuencan jaio zen eta 16 urterekin Bartzelonara joan zen; han, Paral·lel etorbideko antzokietan artista gisa lan egin zuen. Geroago, Ciutadella parkean bizi izan zen kalean, eta Doris Romero bezalako lagunekin partekatzen zuen eguneroko bizitza." },
  why:{
    es:"En 1991 un grupo neonazi la asesinó en el parque. Su caso fue uno de los primeros crímenes de odio transfóbicos documentados en España y un punto de inflexión para el movimiento trans. Barcelona dedicó a su memoria la glorieta del parque en 2013 y una plaza en 2021, y cada 6 de octubre se la recuerda.",
    eu:"1991n talde neonazi batek hil zuen parkean. Bere kasua Espainian dokumentatutako lehen krimen transfoboetako bat izan zen eta mugimendu transerako inflexio-puntua. Bartzelonak parkeko glorieta eskaini zion 2013an eta plaza bat 2021ean, eta urtero urriaren 6an gogoratzen da." },
  sources:[
    { label:"Amnistía Internacional – La transfobia que no cesa", url:"https://www.es.amnesty.org/en-que-estamos/blog/historia/articulo/la-transfobia-que-no-cesa/" },
    { label:"Catalan News – Sonia Rescalvo Zafra", url:"https://www.catalannews.com/society-science/item/sonia-rescalvo-zafra-the-brutal-murder-that-galvanized-the-trans-rights-movement" } ] },

{ id:"gwen-araujo", year:"2002", name:"Gwen Araujo",
  place:{ es:"Newark (California, EE. UU.)", eu:"Newark (Kalifornia, AEB)" },
  bio:{
    es:"Gwen nació en 1985 y vivía en Newark con su madre, Sylvia Guerrero. Su familia la recuerda como una niña alegre y llena de energía. A los 14 años contó que era una chica y empezó a usar el nombre de Gwen; su familia la apoyó, aunque ella también anhelaba ser aceptada por sus compañeros y compañeras.",
    eu:"Gwen 1985ean jaio zen eta Newarken bizi zen amarekin, Sylvia Guerrerorekin. Bere familiak haur alaia eta energiaz betea gisa gogoratzen du. 14 urterekin neska zela kontatu zuen eta Gwen izena erabiltzen hasi zen; bere familiak babestu zuen, nahiz eta berak ere ikaskideen onarpena nahi zuen." },
  why:{
    es:"Murió en 2002, con 17 años. Su madre se ha convertido en una voz por el respeto a las personas trans: gracias a un fondo creado en su nombre da charlas en centros educativos. Su caso llevó a California a aprobar la ley Gwen Araujo Justice for Victims Act, para que los jurados no decidan movidos por prejuicios sobre la identidad de género de la víctima.",
    eu:"2002an hil zen, 17 urte zituela. Bere amak pertsona transen errespeturako ahots bihurtu da: bere izenean sortutako funts bati esker, ikastetxeetan hitzaldiak ematen ditu. Bere kasuak Kalifornia bultzatu zuen Gwen Araujo Justice for Victims Act legea onartzera, epaimahaiek biktimaren genero-identitateari buruzko aurreiritziek eraman ez ditzaten." },
  sources:[
    { label:"ABC7 – Being Gwen: A Life and Death Story", url:"https://abc13.com/post/documentary-details-life-and-death-of-17-year-old-gwen-araujo/12451012/" },
    { label:"EBSCO Research Starters – Gwen Araujo", url:"https://www.ebsco.com/research-starters/social-sciences-and-humanities/transgender-teen-gwen-araujo-murdered-california" } ] },

{ id:"angie-zapata", year:"2008", name:"Angie Zapata",
  place:{ es:"Fort Lupton y Greeley (Colorado, EE. UU.)", eu:"Fort Lupton eta Greeley (Colorado, AEB)" },
  bio:{
    es:"Angie Zapata nació en 1989 y creció en Fort Lupton (Colorado), la penúltima de seis hermanos. Su familia supo desde pronto quién era y, hacia los 16 años, empezó a vivir como Angie a tiempo completo. Sufrió acoso en el instituto, dejó los estudios y a principios de 2008 se mudó a Greeley, a su primer apartamento. Su hermana la recordaba como alguien cariñosa que llamaba la atención allí donde iba.",
    eu:"Angie Zapata 1989an jaio zen eta Fort Luptonen (Colorado) hazi zen, sei senideen artean azkenaurrekoa. Bere familiak goiz jakin zuen nor zen, eta 16 urte inguru zituela Angie bezala bizitzen hasi zen jarraian. Institutuan jazarpena pairatu zuen, ikasketak utzi zituen eta 2008 hasieran Greeleyra joan zen, bere lehen apartamentura. Bere ahizpak maitekor gisa gogoratzen zuen, nonahi arreta erakartzen zuena." },
  why:{
    es:"Murió en 2008, con 18 años. El juicio de 2009 fue la primera condena en Estados Unidos por un crimen de odio contra una víctima trans, y su nombre se citó en el Senado durante el debate de la ley federal contra los crímenes de odio de ese año.",
    eu:"2008an hil zen, 18 urte zituela. 2009ko epaiketa izan zen AEBetan biktima trans baten aurkako gorroto-krimen bateagatiko lehen kondena, eta bere izena Senatuan aipatu zen urte hartako gorroto-krimenen aurkako lege federalaren eztabaidan." },
  sources:[
    { label:"GLAAD – Angie Zapata Resource Kit", url:"https://glaad.org/publications/angiezapata/" },
    { label:"CNN – Transgender slaying trial", url:"https://edition.cnn.com/2009/CRIME/04/22/transgender.slaying.trial/" } ] },

{ id:"islan-nettles", year:"2013", name:"Islan Nettles",
  place:{ es:"Harlem, Nueva York (EE. UU.)", eu:"Harlem, New York (AEB)" },
  bio:{
    es:"Islan Nettles tenía 21 años y vivía en Harlem. Se graduó en 2009 en el instituto Bread and Roses, estudió en el New York City College of Technology y soñaba con trabajar en la moda: trabajó en prácticas en una casa de diseño de Harlem y fue fotógrafa y profesora de moda en el Harlem Children's Zone. Su familia la recuerda como una persona cariñosa que amaba la moda.",
    eu:"Islan Nettlesek 21 urte zituen eta Harlemen bizi zen. 2009an Bread and Roses institutuan graduatu zen, New York City College of Technology-n ikasi zuen eta modan lan egitearekin amets egiten zuen: Harlemgo diseinu-etxe batean praktikak egin zituen eta Harlem Children's Zone-n argazkilari eta moda-irakasle izan zen. Bere familiak pertsona maitekor gisa gogoratzen du, modaz maiteminduta." },
  why:{
    es:"Murió en 2013. Su familia y Harlem Pride organizaron una vigilia para celebrar su vida, y cientos de personas se reunieron para recordarla. Su nombre es hoy una referencia para denunciar la violencia contra las mujeres trans negras.",
    eu:"2013an hil zen. Bere familiak eta Harlem Pride-k zaintza-ekitaldi bat antolatu zuten bere bizitza ospatzeko, eta ehunka lagun bildu ziren gogoratzeko. Gaur egun, bere izena erreferentzia da emakume trans beltzen aurkako indarkeria salatzeko." },
  sources:[
    { label:"Gay City News – Islan Nettles", url:"https://gaycitynews.com/grand-jury-to-weigh-indictment-in-islan-nettles-killing/" },
    { label:"DNAinfo – Mother of Islan Nettles calls for justice", url:"https://www.dnainfo.com/new-york/20130823/hamilton-heights/mother-of-fatally-beaten-transgender-woman-calls-for-justice/" } ] },

{ id:"leelah-alcorn", year:"2014", name:"Leelah Alcorn", care:true,
  place:{ es:"Kings Mills (Ohio, EE. UU.)", eu:"Kings Mills (Ohio, AEB)" },
  bio:{
    es:"Leelah Alcorn nació en 1997 en Kings Mills (Ohio) y creció en una familia cristiana conservadora. Sus amistades la recuerdan como una adolescente divertida, cariñosa y amante de la música. A los 14 años se lo contó a su familia y a los 16 pidió comenzar un tratamiento de transición; su familia se negó y la envió a terapia de conversión.",
    eu:"Leelah Alcorn 1997an jaio zen Kings Millsen (Ohio) eta familia kristau kontserbadore batean hazi zen. Bere lagunek nerabe dibertigarri, maitekor eta musika-zale gisa gogoratzen dute. 14 urterekin bere familiari kontatu zion eta 16rekin trantsizio-tratamendua hasteko eskatu zuen; bere familiak uko egin zion eta bihurtze-terapiara bidali zuen." },
  why:{
    es:"Murió en 2014, con 17 años, y quiso que su historia sirviera para cambiar la sociedad. Su nombre impulsó peticiones para prohibir las terapias de conversión (la «ley de Leelah»); el presidente Obama pidió acabar con ellas y la ciudad de Cincinnati las prohibió.",
    eu:"2014an hil zen, 17 urte zituela, eta bere istorioak gizartea aldatzeko balio zezala nahi zuen. Bere izenak bihurtze-terapiak debekatzeko eskaerak bultzatu zituen («Leelahren legea»); Obama presidenteak horiek amaitzeko eskatu zuen eta Cincinnati hiriak debekatu egin zituen." },
  sources:[
    { label:"The Independent – Leelah Alcorn", url:"https://www.independent.co.uk/news/world/americas/leelah-alcorn-transgender-teenagers-parents-should-be-prosecuted-says-gay-rights-activist-9952742.html" },
    { label:"Rolling Stone – Leelah Alcorn's suicide note", url:"https://www.rollingstone.com/culture/news/read-17yearold-trans-girls-heartbreaking-suicide-note-20141230" } ] },

{ id:"jennifer-laude", year:"2014", name:"Jennifer Laude",
  place:{ es:"Olongapo (Filipinas)", eu:"Olongapo (Filipinak)" },
  bio:{
    es:"Jennifer Laude nació en 1987; su familia procedía de Leyte y de joven se instaló en Olongapo. Estudió hostelería, trabajó en una peluquería y nunca salía de casa sin maquillarse. Su madre, Julita, la llamaba «Ganda» («hermosa»), un apodo que la acompañó toda la vida. Sus amistades la recuerdan generosa, alegre y siempre dispuesta a ayudar a su familia y a quien necesitara un techo.",
    eu:"Jennifer Laude 1987an jaio zen; bere familia Leytekoa zen eta gaztetan Olongapon kokatu zen. Ostalaritza ikasi zuen, ile-apaindegi batean lan egin zuen eta inoiz ez zen ateratzen makillatu gabe. Bere amak, Julitak, «Ganda» («eder») deitzen zion, bizitza osoan lagun izan zuen goitizena. Bere lagunek eskuzabal, alai eta bere familiari eta aterpea behar zuenari laguntzeko prest gisa gogoratzen dute." },
  why:{
    es:"Murió en 2014, con 26 años. Su madre y sus amistades lucharon años por justicia, y su historia, llevada al cine en el documental «Call Her Ganda» (2018), visibilizó la violencia contra las mujeres trans en Filipinas.",
    eu:"2014an hil zen, 26 urte zituela. Bere amak eta lagunek urte luzez borrokatu zuten justiziaren alde, eta bere istorioak, «Call Her Ganda» dokumentalera (2018) eramana, Filipinetako emakume transen aurkako indarkeria ikusarazi zuen." },
  sources:[
    { label:"Rappler – Autopsy in the Jennifer Laude case", url:"https://www.rappler.com/philippines/72159-jennifer-laude-died-drowning-autopsy/" },
    { label:"Philstar – «Call Her Ganda»", url:"https://www.philstar.com/cebu-entertainment/2021/02/12/2077168/jennifer-laude-docu-call-her-ganda-now-streaming-vivamax" } ] },

{ id:"alan", year:"2015", name:"Alan", care:true,
  place:{ es:"Rubí (Barcelona)", eu:"Rubí (Bartzelona)" },
  bio:{
    es:"Alan tenía 17 años y vivía en Rubí (Barcelona). Su madre lo recuerda como una persona que quería hacer el bien, fuerte y con gran capacidad para aguantar. Tenía una mejor amiga, Jessica, que estuvo en la marcha de recuerdo en Rubí. Semanas antes había sido uno de los primeros menores de Catalunya a quienes un juez autorizó a cambiar el nombre en el DNI.",
    eu:"Alanek 17 urte zituen eta Rubín (Bartzelona) bizi zen. Bere amak ona egin nahi zuen pertsona gisa gogoratzen du, indartsua eta jasateko gaitasun handikoa. Bazuen lagun mina, Jessica, eta hura izan zen Rubíko oroitzapen-martxan. Aste batzuk lehenago, Katalunian epaile batek NANean izena aldatzeko baimena eman zien lehen adingabeetako bat izan zen." },
  why:{
    es:"Murió en Nochebuena de 2015 tras años de acoso escolar. Su muerte conmocionó a Catalunya y a todo el Estado: un millar de personas se concentraron en Barcelona para exigir protección en las aulas y el cumplimiento de la ley catalana contra la LGTBIfobia. Sus padres, Esther y Xavi, se han convertido en activistas.",
    eu:"2015eko Gabon-gauean hil zen, urte luzez eskola-jazarpena pairatu ondoren. Bere heriotzak Katalunia osoa eta Estatua kolpatu zituen: mila lagun inguru bildu ziren Bartzelonan ikasgeletan babesa eta LGTBIfobiaren aurkako lege katalana betetzea eskatzeko. Bere gurasoak, Esther eta Xavi, aktibista bihurtu dira." },
  sources:[
    { label:"NacióDigital – Alan", url:"https://naciodigital.cat/societat/un-menor-transsexual-de-barcelona-se-suicida-despres-de-patir-bullying.html" },
    { label:"El Mostrador – Entrevista a la madre de Alan", url:"https://www.elmostrador.cl/noticias/mundo/2015/12/30/madre-de-transexual-espanol-que-se-quito-la-vida-lo-acosaron-desde-los-14-anos-es-un-crimen-social/" },
    { label:"3Cat – Menors transgènere", url:"https://www.3cat.cat/3catinfo/em-dic-violeta/noticia-amp/3068613/" } ] },

{ id:"lyssa-da-silva", year:"2015", name:"Lyssa da Silva",
  place:{ es:"Alicante", eu:"Alacant" },
  bio:{
    es:"Lyssa da Silva era una mujer trans brasileña. Las fuentes públicas recogen pocos datos de su vida, y la edad que se le atribuye varía según los medios. Por respeto a ella y a su entorno, esta ficha se limita a lo documentado y está pendiente de ampliarse con ayuda de su familia y de colectivos como Diversitat Alacant.",
    eu:"Lyssa da Silva Brasilgo emakume trans bat zen. Iturri publikoek bere bizitzari buruzko datu gutxi jasotzen dituzte, eta esleitzen zaion adina hedabideen arabera aldatzen da. Berarekiko eta bere ingurukoekiko errespetuz, fitxa honek dokumentatutakora mugatzen da eta bere familiaren eta Diversitat Alacant bezalako kolektiboen laguntzarekin zabaltzeko dago." },
  why:{
    es:"Murió en Alicante en julio de 2015. En el juicio no se aplicó la agravante de odio, algo que denunciaron los colectivos LGTBI, y el primer informe del Observatorio Valenciano contra la LGTBfobia la recuerda junto a otra víctima.",
    eu:"2015eko uztailean hil zen Alacanten. Epaiketan ez zen gorroto-astungarria aplikatu, LGTBI kolektiboek salatu zuten zerbait, eta LGTBfobiaren aurkako Valentziako Behatokiaren lehen txostenak beste biktima batekin batera gogoratzen du." },
  sources:[
    { label:"Dos Manzanas – Lyssa da Silva", url:"https://www.dosmanzanas.com/tag/lyssa-da-silva" },
    { label:"Shangay – Condena por la muerte de Lyssa da Silva", url:"https://shangay.com/2016/12/13/el-asesino-de-una-transexual-en-alicante-condenado-a-10-anos-de-carcel/" } ] },

{ id:"hande-kader", year:"2016", name:"Hande Kader",
  place:{ es:"Estambul (Turquía)", eu:"Istanbul (Turkia)" },
  bio:{
    es:"Hande Kader fue una joven activista trans de Estambul. Se hizo conocida en 2015, cuando una fotografía la mostró sentada frente a los cañones de agua de la policía durante la represión del Orgullo de Estambul. Quienes la conocían hablan de su valentía y de lo mucho que le dolía la muerte de cada mujer trans. Quería ser traductora, pero no pudo ir a la universidad. «Kader» significa «destino» en turco.",
    eu:"Hande Kader Istanbulgo aktibista trans gaztea zen. 2015ean egin zen ezaguna, argazki batek poliziaren ur-kanoien aurrean eserita erakutsi zuenean, Istanbulgo Harrotasunaren errepresioan. Ezagutzen zutenek bere ausardiaz hitz egiten dute eta emakume trans bakoitzaren heriotzak zenbat minduko zuen. Itzultzaile izan nahi zuen, baina ezin izan zuen unibertsitatera joan. «Kader» turkieraz «patua» esan nahi du." },
  why:{
    es:"Murió en agosto de 2016. Cientos de personas marcharon en Estambul pidiendo justicia para Hande, y su nombre se recuerda como símbolo de la resistencia trans en Turquía y de la exigencia de que la vida de una mujer trans valga lo mismo que cualquier otra.",
    eu:"2016ko abuztuan hil zen. Ehunka lagunek manifestazioa egin zuten Istanbulen Handerentzako justizia eskatuz, eta bere izena Turkiako erresistentzia transaren eta emakume trans baten bizitzak beste edozeinenak adinako balioa izan dezan exijitzearen sinbolo gisa gogoratzen da." },
  sources:[
    { label:"Al Jazeera – Protest over Hande Kader's murder", url:"https://www.aljazeera.com/news/2016/8/22/hundreds-protest-over-murder-of-trans-woman-in-istanbul" },
    { label:"Hürriyet Daily News – Murder of transgender woman", url:"https://www.hurriyetdailynews.com/murder-of-transgender-woman-shines-dark-light-on-rights-issues-in-turkey-103018" } ] },

{ id:"ekai-lersundi", year:"2018", name:"Ekai Lersundi", care:true,
  place:{ es:"Ondarroa (Bizkaia)", eu:"Ondarroa (Bizkaia)" },
  bio:{
    es:"Ekai Lersundi nació en 2001 y era de Ondarroa. Su padre lo recuerda como un chico muy empático, tímido y amante de la cultura oriental y el K-pop; cuando murió, ensayaba para presentarse a un concurso de baile en el Japan Weekend de Bilbao. Su familia lo apoyó, y él quiso contar abiertamente su experiencia con la esperanza de ayudar a otras personas trans jóvenes en la escuela.",
    eu:"Ekai Lersundi 2001ean jaio zen eta ondarrutarra zen. Bere aitak mutil enpatiko, lotsati eta ekialdeko kulturaren eta K-poparen zale gisa gogoratzen du; hil zenean, Bilboko Japan Weekend-en dantza-lehiaketa batean parte hartzeko entseatzen ari zen. Bere familiak babestu zuen, eta berak bere esperientzia irekiki kontatu nahi izan zuen, eskolan beste gazte trans batzuei laguntzeko itxaropenez." },
  why:{
    es:"Murió en febrero de 2018, con 16 años, mientras esperaba atención médica. Hoy hay un monolito en su honor en Ondarroa, su historia inspiró la película «20.000 especies de abejas» y su padre, Elaxar, es una voz de referencia por una atención respetuosa a la infancia y adolescencia trans. En 2024 el Parlamento Vasco aprobó la reforma de la ley trans en el aniversario de su muerte.",
    eu:"2018ko otsailean hil zen, 16 urte zituela, arreta medikoaren zain zegoela. Gaur egun monolito bat dago bere omenez Ondarroan, bere istorioak «20.000 especies de abejas» filma inspiratu zuen eta bere aita, Elaxar, haur eta nerabe transentzako arreta errespetuzkoaren aldeko ahots garrantzitsua da. 2024an Eusko Legebiltzarrak lege transaren erreforma onartu zuen, bere heriotzaren urteurrenean." },
  sources:[
    { label:"Deia – Elaxar Lersundi, aita de Ekai", url:"https://www.deia.eus/bizkaia/2024/02/17/hijo-ekai-le-diria-7885272.html" },
    { label:"Público – Reforma de la ley trans vasca", url:"https://www.publico.es/sociedad/todos-grupos-salvo-pp-aprueban-reforma-ley-trans-vasca.html" },
    { label:"Europa Press – Atención integral al colectivo", url:"https://www.europapress.es/euskadi/noticia-todos-grupos-pp-aprueban-reforma-ley-trans-vasca-ofrece-atencion-integral-colectivo-20240215141005.html" },
    { label:"BOE – Ley 4/2024, de 15 de febrero", url:"https://www.boe.es/buscar/act.php?id=BOE-A-2024-4867" } ] },

{ id:"thalia-mostoles", year:"2018", name:"Thalía", care:true,
  place:{ es:"Móstoles (Madrid)", eu:"Móstoles (Madril)" },
  bio:{
    es:"Thalía tenía 17 años y era vecina de Móstoles (Madrid). Las fuentes públicas recogen muy pocos datos sobre su vida más allá de su edad y su ciudad, así que esta ficha se limita a lo documentado y queda abierta a completarse con quienes la conocieron.",
    eu:"Thalíak 17 urte zituen eta Móstoleskoa zen (Madril). Iturri publikoek oso datu gutxi jasotzen dituzte bere bizitzari buruz, adina eta hiria ez beste; beraz, fitxa honek dokumentatutakora mugatzen da eta ezagutu zutenekin osatzeko irekita dago." },
  why:{
    es:"En mayo de 2018 la asociación Móstoles Feminista denunció que su muerte fue fruto de la presión social, el maltrato institucional y el acoso que sufría, y la Plataforma por los Derechos Trans expresó su condolencia. Recordarla es decir que ninguna vida joven debe quedar en silencio.",
    eu:"2018ko maiatzean Móstoles Feminista elkarteak salatu zuen bere heriotza pairatzen zuen gizarte-presioaren, erakunde-tratu txarraren eta jazarpenaren ondorio izan zela, eta Eskubide Transen aldeko Plataformak doluminak helarazi zituen. Gogoratzeak esan nahi du gazte-bizitza bakar bat ere ez dela isilean geratu behar." },
  sources:[
    { label:"TDoR – Thalía (Móstoles)", url:"https://tdor.translivesmatter.info/reports/2018/05/04/thalia_mostoles-comunidad-de-madrid-spain_b0f91ba3" },
    { label:"El Salto – Se llamaba Thalía", url:"https://www.elsaltodiario.com/opinion/se-llamaba-thalia" } ] },

{ id:"iratxe-otero", year:"2020", name:"Iratxe Otero",
  place:{ es:"Arona (Tenerife)", eu:"Arona (Tenerife)" },
  bio:{
    es:"Iratxe Otero tenía 29 años y vivía en Arona, en el sur de Tenerife. Según TGEU, era una mujer trans colombiana que había emigrado a España; según una campaña de apoyo, su familia reside en Bilbao. Se conocen pocos detalles más de su vida, por lo que esta ficha se limita a lo documentado.",
    eu:"Iratxe Oterok 29 urte zituen eta Aronan bizi zen, Tenerifeko hegoaldean. TGEUren arabera, Espainiara emigratutako emakume trans kolonbiarra zen; laguntza-kanpaina baten arabera, bere familia Bilbon bizi da. Bere bizitzari buruzko xehetasun gutxi ezagutzen dira, eta fitxa honek dokumentatutakora mugatzen da." },
  why:{
    es:"Murió en diciembre de 2020. TransGirls Canarias recaudó fondos para que su familia pudiera despedirla con dignidad, y TGEU la mencionó entre las personas recordadas en el Día de la Memoria Trans de 2021.",
    eu:"2020ko abenduan hil zen. TransGirls Canariasek funtsak bildu zituen bere familiak duintasunez agur esan ziezaion, eta TGEUk 2021eko Memoria Trans Egunean gogoratutako pertsonen artean aipatu zuen." },
  sources:[
    { label:"PinkNews – Iratxe Otero", url:"https://www.thepinknews.com/2020/12/31/iratxe-otero-trans-woman-murdered-arona-spain-arona-santa-cruz-de-tenerife/" },
    { label:"TGEU – Día de la Memoria Trans 2021", url:"https://www.tgeu.org/dia-de-la-memoria-trans-2021/?print=pdf" } ] },

{ id:"alice-litman", year:"2022", name:"Alice Litman", care:true,
  place:{ es:"Brighton (Reino Unido)", eu:"Brighton (Erresuma Batua)" },
  bio:{
    es:"Alice Litman nació en 2002 en Surrey y vivía en Brighton. A los 16 años contó a su familia que era una mujer, y sus allegados recuerdan que solo quería vivir a su manera. Su madre, Caroline, ha contado su historia en el libro «Her Name Is Alice», publicado en 2025.",
    eu:"Alice Litman 2002an jaio zen Surreyn eta Brightonen bizi zen. 16 urterekin bere familiari emakume zela kontatu zion, eta bere hurbilekoek gogoratzen dute bere moduan bizi nahi zuela soilik. Bere amak, Carolinek, bere istorioa kontatu du «Her Name Is Alice» liburuan, 2025ean argitaratua." },
  why:{
    es:"Murió en 2022, con 20 años, tras esperar 1.023 días su primera cita en una clínica de identidad de género del sistema sanitario británico. La jueza forense calificó los servicios para personas trans de infrafinanciados, y su familia ha convertido su memoria en una exigencia de atención sanitaria digna.",
    eu:"2022an hil zen, 20 urte zituela, Erresuma Batuko osasun-sistemako genero-identitateko klinika batean lehen hitzordua lortzeko 1.023 egun itxaron ondoren. Epaile forenseak trans pertsonentzako zerbitzuak finantzazio gutxikoak zirela adierazi zuen, eta bere familiak bere oroimena osasun-arreta duinaren aldeko exijentzia bihurtu du." },
  sources:[
    { label:"PinkNews – Alice Litman inquest", url:"https://www.thepinknews.com/2023/10/13/alice-litman-inquest-trans-waiting-lists-coroner/" },
    { label:"BBC News – Trans waiting lists", url:"https://www.bbc.co.uk/news/uk-england-sussex-66843602" },
    { label:"Brighton and Hove News – Inquest", url:"https://www.brightonandhovenews.org/2023/09/19/trans-people-let-down-by-extraordinarily-long-nhs-waiting-lists/" } ] },

{ id:"eden-knight", year:"2023", name:"Eden Knight", care:true,
  place:{ es:"Arabia Saudí y EE. UU.", eu:"Saudi Arabia eta AEB" },
  bio:{
    es:"Eden Knight nació en 2000 en Arabia Saudí y se fue a Estados Unidos a estudiar informática. Salió del armario como mujer trans durante la pandemia. Sus amistades la describen como una persona extrovertida, divertida y generosa, llena de alegría y fan del rapero Bladee, que se preocupaba por su comunidad y soñaba con ser una voz importante por los derechos de las personas trans.",
    eu:"Eden Knight 2000an jaio zen Saudi Arabian eta Estatu Batuetara joan zen informatika ikastera. Pandemian atera zen armairutik emakume trans gisa. Bere lagunek pertsona estrobertitu, dibertigarri eta eskuzabal gisa deskribatzen dute, poz handiz betea eta Bladee rap-egilearen zalea, bere komunitatea zaintzen zuena eta pertsona transen eskubideen aldeko ahots garrantzitsua izatearekin amesten zuena." },
  why:{
    es:"Murió en marzo de 2023, con 23 años. Sus amistades y la comunidad trans exigieron que se la recordara por su nombre y denunciaron las presiones que, según su propio mensaje, sufrió para renunciar a su identidad. Su historia puso el foco en las personas LGTBIQ+ saudíes que piden asilo; el Departamento de Estado de EE. UU. dijo que estudiaba las denuncias.",
    eu:"2023ko martxoan hil zen, 23 urte zituela. Bere lagunek eta komunitate transak bere izenez gogoratzea eskatu zuten eta, bere mezuaren arabera, bere identitateari uko egiteko jasan zituen presioak salatu zituzten. Bere istorioak asilo-eskatzaile saudi LGTBIQ+ pertsonengan jarri zuen fokua; AEBetako Estatu Departamentuak salaketak aztertzen ari zela esan zuen." },
  sources:[
    { label:"PinkNews – Friends remember Eden Knight", url:"https://www.thepinknews.com/2023/03/16/eden-knight-saudi-trans-woman-suicide/" },
    { label:"Rolling Stone – Eden Knight", url:"https://www.rollingstone.com/culture/culture-features/eden-knight-saudi-trans-suicide-1234698274/" },
    { label:"PinkNews – US State Department", url:"https://www.thepinknews.com/2023/03/17/eden-knight-us-state-department-trans-suicide-detransition/" } ] },

{ id:"brianna-ghey", year:"2023", name:"Brianna Ghey",
  place:{ es:"Warrington (Inglaterra)", eu:"Warrington (Ingalaterra)" },
  bio:{
    es:"Brianna Ghey tenía 16 años y vivía en Warrington. Su madre la recuerda como una chica muy extrovertida, divertida y de ingenio rápido. Le encantaba maquillarse y grabar tutoriales y bailes para TikTok, donde soñaba con hacerse famosa. Sus amistades la recuerdan comprando tinte para el pelo, probando sus looks de maquillaje y construyendo mundos en Minecraft. Su directora la describió como alguien orgullosa y segura de quién era.",
    eu:"Brianna Gheyk 16 urte zituen eta Warringtonen bizi zen. Bere amak neska oso estrobertitu, dibertigarri eta azkar gisa gogoratzen du. Makillatzea gustatzen zitzaion eta TikTokerako tutorialak eta dantzak grabatzen zituen, han famatu izatearekin amesten baitzuen. Bere lagunek ile-tindagaia erosten, bere makillaje-itxurak probatzen eta Minecraften munduak eraikitzen gogoratzen dute. Bere ikastetxeko zuzendariak bera nor zen harro eta seguru zegoen norbait gisa deskribatu zuen." },
  why:{
    es:"Murió en febrero de 2023. Su madre, Esther Ghey, ha convertido su memoria en la campaña Peace and Mind UK, a favor de la salud mental de la juventud y de un internet más seguro, y recuerda de Brianna su determinación a ser fiel a sí misma.",
    eu:"2023ko otsailean hil zen. Bere amak, Esther Gheyk, bere oroimena Peace and Mind UK kanpaina bihurtu du, gazteen osasun mentalaren eta internet seguruago baten alde, eta Briannaren baitan bere buruari leial izateko zuen erabakitasuna nabarmentzen du." },
  sources:[
    { label:"The Guardian – The murder of Brianna Ghey", url:"https://www.theguardian.com/uk-news/2024/feb/02/scarlett-jenkinson-eddie-ratcliffe-teenagers-planned-murder-of-brianna-ghey" },
    { label:"The Independent – Brianna Ghey", url:"https://www.independent.co.uk/news/uk/crime/brianna-ghey-bullying-tiktok-trans-b2281998.html" },
    { label:"Attitude – Esther Ghey, legado de Brianna", url:"https://www.attitude.co.uk/life/attitude-awards-2024-brianna-ghey-474157/" } ] },

{ id:"roberta-marrero", year:"2024", name:"Roberta Marrero", care:true,
  place:{ es:"Las Palmas de Gran Canaria · Madrid", eu:"Las Palmas de Gran Canaria · Madril" },
  bio:{
    es:"Roberta Marrero nació en Las Palmas de Gran Canaria en 1972. Fue artista, escritora, poeta, cantante, actriz y DJ: empezó en la música e hizo de su obra, entre el collage, el cómic y la cultura pop, una forma de activismo. A los 24 años dejó las islas, aunque siempre las consideró su referente. Publicó «El bebé verde» (2016), «Todo era por ser fuego» (2022) y «Derecho a cita» (2024).",
    eu:"Roberta Marrero 1972an jaio zen Las Palmas de Gran Canarian. Artista, idazle, poeta, abeslari, aktore eta DJ izan zen: musikan hasi zen eta bere lana —kolaje, komiki eta pop-kulturaren artean— aktibismo-modu bihurtu zuen. 24 urterekin uharteak utzi zituen, baina beti hartu zituen bere erreferentziatzat. «El bebé verde» (2016), «Todo era por ser fuego» (2022) eta «Derecho a cita» (2024) argitaratu zituen." },
  why:{
    es:"Murió el 17 de mayo de 2024, el Día Internacional contra la LGTBIfobia. Canarias le dedicó el Día de las Escritoras en 2022, y ella recordaba que las personas trans siempre han tenido voz y que lo nuevo es el altavoz. Su obra sigue siendo referencia de la cultura trans y travesti.",
    eu:"2024ko maiatzaren 17an hil zen, LGTBIfobiaren Aurkako Nazioarteko Egunean. Kanariar Uharteek 2022an Idazleen Eguna eskaini zioten, eta berak gogorarazten zuen pertsona transek beti izan dutela ahotsa, eta berria bozgorailua dela. Bere obra kultura trans eta travestiaren erreferentzia da oraindik." },
  sources:[
    { label:"El País – Muere Roberta Marrero", url:"https://elpais.com/cultura/2024-05-18/muere-roberta-marrero-artista-escritora-y-referente-lgtbiq-a-los-52-anos.html" },
    { label:"elDiario.es – Roberta Marrero, poeta indomable", url:"https://www.eldiario.es/cultura/muere-artista-roberta-marrero-poeta-indomable-sublimo-cultura-travesti-pop_1_11376552.html" },
    { label:"AT Andalucía – Muere Roberta Marrero", url:"https://www.atandalucia.es/muere-la-escritora-y-artista-trans-roberta-marrero-a-los-52-anos" } ] }
];
