import { KnowledgeItem } from '../types';

/* 
  INSTRUCTIE VOOR HET TOEVOEGEN VAN INFORMATIE:
  
  Wil je dat AImigo meer weet? Voeg hieronder een nieuw blokje toe tussen de accolades { }.
  Zorg dat je overal komma's tussen zet.
  
  Voorbeeld:
  {
    "id": "nieuw_onderwerp",
    "categorie": "Kantine",
    "onderwerp": "Openingstijden Kantine",
    "inhoud": "De kantine is elke dag geopend van 10:00 tot 14:00 uur."
  },
*/

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    "id": "locatie_welkom",
    "categorie": "Algemeen",
    "onderwerp": "Locatie en Doelgroep",
    "inhoud": "Welkom bij Yonder locatie Kasteeldreef. Deze informatie is voor nieuwe startende studenten bij ICT, Media en Commercie."
  },
  {
    "id": "bereikbaarheid_ov_fiets",
    "categorie": "Facilitair",
    "onderwerp": "Bereikbaarheid en Fietsenstalling",
    "inhoud": "Bus lijn 5 stopt voor de deur. Lijn 7 stopt op 15 minuten loopafstand. Er is een fietsenstalling aanwezig aan de rechterzijde van de school, naast het examengebouw."
  },
  {
    "id": "bereikbaarheid_parkeren",
    "categorie": "Facilitair",
    "onderwerp": "Parkeren auto",
    "inhoud": "Parkeren kan in de daarvoor bestemde vakken op het schoolterrein. Wees op tijd. Let op: de parkeerplekken in de omliggende woonwijk en langs de straat zijn betaald parkeren."
  },
  {
    "id": "rooster_tijden",
    "categorie": "Rooster",
    "onderwerp": "Lestijden en Pauzes",
    "inhoud": "De lestijden zijn als volgt: \n1e uur: 08.45 – 09.30\n2e uur: 09.30 – 10.15\n3e uur: 10.15 – 11.00\nPauze: 11.00 – 11.15\n4e uur: 11.15 – 12.00\n5e uur: 12.00 – 12.45\nPauze: 12.45 – 13.15\n6e uur: 13.15 – 14.00\n7e uur: 14.00 – 14.45\nPauze: 14.45 – 15.00\n8e uur: 15.00 – 15.45\n9e uur: 15.45 – 16.30\n10e uur: 16.30 – 17.15."
  },
  {
    "id": "rooster_vrije_tijd",
    "categorie": "Rooster",
    "onderwerp": "Vrije middag",
    "inhoud": "Op woensdagmiddag ben je vrij."
  },
  {
    "id": "ict_wifi",
    "categorie": "ICT",
    "onderwerp": "Wifi Wachtwoord",
    "inhoud": "Het wifi-wachtwoord voor netwerk 'ICTMBO' is: CHATEAUstrada@122)obodo(."
  },
  {
    "id": "ict_laptop",
    "categorie": "ICT",
    "onderwerp": "Laptop Specificaties",
    "inhoud": "Je laptop moet voldoen aan specifieke eisen voor de opleidingen GVO, CCR of WEB. Raadpleeg de specificaties via de website."
  },
  {
    "id": "contact_techniek",
    "categorie": "Contactpersonen",
    "onderwerp": "Lasersnijden en Printers",
    "inhoud": "Voor lasersnijden en de grootformaatprinter moet je zijn bij Wouter van Ginneken (wvginneken@yonder.nl) of Erik Koks (ekoks02@yonder.nl)."
  },
  {
    "id": "contact_media",
    "categorie": "Contactpersonen",
    "onderwerp": "Fotografie, Apparatuur en Studio's",
    "inhoud": "Voor vragen over fotografie, het lenen van apparatuur of het reserveren van de Podcast/Foto/Filmstudio kun je terecht bij Ben van den Boomen (bvdboomen@yonder.nl)."
  },
  {
    "id": "faciliteiten_water",
    "categorie": "Facilitair",
    "onderwerp": "Water",
    "inhoud": "In de kantine kun je gratis jouw flesje water vullen."
  },
  {
    "id": "schoolspullen",
    "categorie": "Administratie",
    "onderwerp": "Aanschaf schoolmaterialen",
    "inhoud": "Schoolspullen, materialen en licenties schaf je aan via de MBO Webshop (www.mbowebshop.nl). Zoek daar op de opleiding die je volgt."
  },
  {
    "id": "communicatie_kanalen",
    "categorie": "Communicatie",
    "onderwerp": "Communicatiekanalen",
    "inhoud": "Communicatie verloopt via schoolmail en Microsoft Teams. Inloggegevens ontvang je van Stap013. Sommige SLB'ers communiceren via Whatsapp, dit geven zij zelf aan."
  },
  {
    "id": "absentie_verlof_kort",
    "categorie": "Absentie",
    "onderwerp": "Verlof aanvragen (Kort)",
    "inhoud": "Kort verlof vraag je maximaal 24 uur van tevoren aan via de EduArte app. Stuur ook direct een bericht naar je SLB'er, anders wordt de aanvraag mogelijk over het hoofd gezien."
  },
  {
    "id": "absentie_verlof_lang",
    "categorie": "Absentie",
    "onderwerp": "Meerdaags verlof",
    "inhoud": "Meerdaags verlof moet worden aangevraagd bij de directeur. Dit loopt via je SLB'er."
  },
  {
    "id": "absentie_ziekmelden",
    "categorie": "Absentie",
    "onderwerp": "Ziekmelden",
    "inhoud": "Ziekmelden doe je via de EduArte app. Bij terugkomst na ziekte vraag je zelf aan de docent wat je gemist hebt."
  },
  {
    "id": "vrijstellingen",
    "categorie": "Administratie",
    "onderwerp": "Vrijstellingen aanvragen",
    "inhoud": "Heb je havo 4 afgerond of een mbo 4 opleiding gevolgd en vakken als Nederlands, Engels of rekenen al gehaald? Vraag dan vrijstellingen aan via je SLB'er."
  },
  {
    "id": "huisregels",
    "categorie": "Regels",
    "onderwerp": "Gedragsregels",
    "inhoud": "1. Te laat? Deur dicht is niet binnen, tenzij de docent anders aangeeft.\n2. Geen telefoons in de les.\n3. Geen eten en drinken in de lokalen.\n4. Ga zuinig/zorgvuldig om met spullen en materialen."
  },
  {
    "id": "ondersteuning_slb",
    "categorie": "Ondersteuning",
    "onderwerp": "Algemene vragen en begeleiding",
    "inhoud": "Voor algemene vragen, zorgen, of als je iets mist, meld je je bij je Studieloopbaanbegeleider (SLB'er). Je rooster vind je in EduArte."
  },
  {
    "id": "ondersteuning_vertrouwenspersoon",
    "categorie": "Ondersteuning",
    "onderwerp": "Vertrouwenspersoon",
    "inhoud": "Heb je iets vervelends meegemaakt of wil je in vertrouwen praten? Dan kun je terecht bij Elise Sleutjes (esleutjes@yonder.nl), onze vertrouwenspersoon. Zij biedt een veilige plek."
  },
  {
    "id": "docenten_lijst",
    "categorie": "Contactpersonen",
    "onderwerp": "Lijst docenten en e-mailadressen",
    "inhoud": "Lisa Welten (lwelten@yonder.nl), Martijn Smulders (msmulders02@yonder.nl), Wouter van Ginneken (wvginneken@yonder.nl), Naan Eldering (neldering@yonder.nl), Marcel van Drunen (mvdrunen02@yonder.nl), Tim Wijnhoven (twijnhoven@yonder.nl), Sue Lam (slam@yonder.nl), Arold Roestenburg (aroestenburg@yonder.nl), Rachèl Peeraer (rpeeraer@yonder.nl), Erik Koks (ekoks02@yonder.nl), Elise Sleutjes (esleutjes@yonder.nl), Geert de Brouwer (gdbrouwer@yonder.nl), Marlies van Gulik (mvgulik@yonder.nl), Sophie Adriaansen (sadriaansen02@yonder.nl)."
  },
  {
    "id": "stage_bpv",
    "categorie": "Stage",
    "onderwerp": "Stage (BPV) Algemeen",
    "inhoud": "Stage wordt op het MBO 'BPV' genoemd (Beroepspraktijkvorming). Tijdens je opleiding loop je meerdere keren stage om praktijkervaring op te doen bij een erkend leerbedrijf."
  },
  {
    "id": "stage_zoeken",
    "categorie": "Stage",
    "onderwerp": "Stage zoeken",
    "inhoud": "Je bent zelf verantwoordelijk voor het vinden van een stageplek. Je mag alleen stage lopen bij een erkend leerbedrijf. Deze vind je op www.stagemarkt.nl."
  },
  {
    "id": "stage_bpv_bureau",
    "categorie": "Stage",
    "onderwerp": "BPV Bureau",
    "inhoud": "Voor specifieke vragen over contracten en procedures kun je terecht bij het BPV-bureau op school. Vraag je SLB'er naar de contactgegevens voor jouw opleiding."
  },
  {
    "id": "sg-001",
    "categorie": "Stage - Algemeen",
    "onderwerp": "Introductie stagegids",
    "inhoud": "De stagegids beschrijft hoe student en praktijkopleider samen de BPV-periode vormgeven. De student werkt mee in het bedrijf, opdrachten uit het bedrijf worden gebruikt voor beoordeling en er gelden spelregels voor verschillende opleidingen en leerjaren binnen ICT, Media en Commercie van Yonder."
  },
  {
    "id": "sg-002",
    "categorie": "Stage - Algemeen",
    "onderwerp": "Overzicht opleidingen en stageduur",
    "inhoud": "Binnen ICT, Media en Commercie vallen onder andere de opleidingen Content Creator, Mediavormgever en Webdeveloper, allemaal niveau 4. Eindexamenkandidaten lopen een volledig schooljaar stage, overige studenten een half jaar vier of vijf dagen per week. Studenten moeten aan een minimum aantal BPV-uren komen die in EduArte geregistreerd worden."
  },
  {
    "id": "sg-003",
    "categorie": "Stage - Algemeen",
    "onderwerp": "Rol van de stagiair",
    "inhoud": "De student is tijdens de stage een student-collega: hij of zij draait mee in het team maar is geen vaste medewerker. Er zijn geen standaard stageopdrachten vanuit school; opdrachten van echte klanten in het bedrijf vormen de basis voor de beoordeling en het aantonen van kerntaken en werkprocessen."
  },
  {
    "id": "sg-004",
    "categorie": "Stage - Doel",
    "onderwerp": "BPV-doelstelling",
    "inhoud": "Het doel van de BPV is de student voor te bereiden op de latere beroepsuitoefening door in de praktijk werkzaamheden en taken te verrichten die horen bij de opleiding. De student laat zien op het juiste niveau te kunnen functioneren, oriënteert zich op het beroep en ontdekt welke onderdelen het beste passen."
  },
  {
    "id": "sg-005",
    "categorie": "Stage - Doel",
    "onderwerp": "Leren in de beroepspraktijk",
    "inhoud": "Voorbereiding op het beroep betekent: toepassen van relevante vaardigheden en technieken, aanleren van een professionele beroepshouding, opdoen van praktijkervaring en het ontwikkelen van competenties die nodig zijn voor goede beroepsuitoefening."
  },
  {
    "id": "sg-006",
    "categorie": "Stage - Doel",
    "onderwerp": "Participatie in arbeidsleven",
    "inhoud": "De stage is ook deelname aan de arbeidssamenleving: ervaring opdoen met arbeid en arbeidsorganisatie, initiatief en zelfstandigheid ontwikkelen, verantwoordelijkheid leren dragen, kunnen functioneren in een werksituatie, werkrelaties opbouwen en onderhouden, samenwerken, werken met deadlines en problemen oplossen in dialoog."
  },
  {
    "id": "sg-007",
    "categorie": "Stage - Organisatie",
    "onderwerp": "Bereikbaarheid BPV-begeleiders",
    "inhoud": "BPV-begeleiders zijn vaak onderweg en daarom het best per e-mail bereikbaar. Voor dringende gevallen kan een mail met terugbelverzoek worden gestuurd. In de gids staan de mailadressen van de verschillende BPV-begeleiders en van de BPV-coördinator bij Bureau Stage & Externe Relaties."
  },
  {
    "id": "sg-008",
    "categorie": "Stage - Rollen",
    "onderwerp": "Rol van de student",
    "inhoud": "De student is regisseur van de eigen stage: hij of zij zorgt dat projecten in de jaarplanning komen, plant overleggen met de praktijkopleider, organiseert beoordelingsgesprekken en houdt bij welke werkprocessen en keuzedelen zijn behaald. De student voert (examen)opdrachten uit en bewaakt zelf de voortgang."
  },
  {
    "id": "sg-009",
    "categorie": "Stage - Rollen",
    "onderwerp": "Rol BPV-begeleider",
    "inhoud": "De BPV-begeleider van Yonder maakt kennis met het praktijkbedrijf en de praktijkopleider, neemt deel aan beoordelingsgesprekken, bewaakt de examenprocedure, helpt bij het oplossen van knelpunten en verstrekt informatie over opleiding en student."
  },
  {
    "id": "sg-010",
    "categorie": "Stage - Rollen",
    "onderwerp": "Rol praktijkopleider",
    "inhoud": "De praktijkopleider begeleidt de student op de werkplek, helpt bij scholing en vorming en speelt een centrale rol in de beoordeling. Taken zijn onder meer: student introduceren in het bedrijf, uitleg geven over huisregels en veiligheid, samen met BPV-begeleider en student examenopdrachten formuleren, zorgen dat relevante activiteiten worden uitgevoerd en deelnemen aan beoordelingsgesprekken."
  },
  {
    "id": "sg-011",
    "categorie": "Stage - Examens",
    "onderwerp": "Examenopdrachten en jaren",
    "inhoud": "Eindexamenkandidaten maken tijdens de stage drie of vier examens plus keuzedelen. Tweede- en derdejaars studenten oefenen met twee opdrachten die het volledige examenproces doorlopen, maar nog niet meetellen als officieel examen."
  },
  {
    "id": "sg-012",
    "categorie": "Stage - Examens",
    "onderwerp": "Examenmatrijs – functie en gebruik",
    "inhoud": "De examenmatrijs is een digitaal document waarin de student per project de opdracht, werkprocessen en aanpak beschrijft. Het is een vooraf document waarin staat wat de student van plan is te doen. De student bereidt de omschrijving samen met de praktijkopleider voor en mailt de matrijs ter goedkeuring naar de BPV-begeleider. Na ondertekening via Adobe Sign is de opdracht officieel vastgelegd."
  },
  {
    "id": "sg-013",
    "categorie": "Stage - Examens",
    "onderwerp": "Verantwoordelijkheid student voor examens",
    "inhoud": "De student is zelf verantwoordelijk voor het bijhouden van projecten, gekoppelde werkprocessen, keuzedelen en beoordelingsgesprekken. Per examenopdracht maakt de student een verslag of presentatie waarin de aanpak, planning, gebruikte middelen en reflectie worden beschreven."
  },
  {
    "id": "sg-014",
    "categorie": "Stage - Beoordeling",
    "onderwerp": "Beoordeling examens",
    "inhoud": "Beoordeling gebeurt op basis van de examenmatrijs en opgeleverd werk met de scores: Onvoldoende, Voldoende, Goed of Niet beoordeeld. De praktijkopleider beoordeelt, de BPV-begeleider bewaakt de procedure en beiden ondertekenen de beoordelingskaart. Afwijkingen door beter of slechter werk worden toegelicht op de beoordelingskaart."
  },
  {
    "id": "sg-015",
    "categorie": "Stage - Uren",
    "onderwerp": "BPV-uren en registratie",
    "inhoud": "Examenkandidaten Content Creator realiseren minimaal circa 1050 BPV-uren, tenzij maatwerk is afgesproken. De invulling van vakanties kan in overleg, mits voldoende uren worden gemaakt. Aanwezigheidsuren worden nauwkeurig in EduArte geregistreerd door de student en gevalideerd door de praktijkopleider; deze registratie is bewijs richting leerplicht, examencommissie en DUO."
  },
  {
    "id": "sg-016",
    "categorie": "Stage - Uren",
    "onderwerp": "Werkvloerleren",
    "inhoud": "Op woensdagmiddag vindt werkvloerleren plaats op het stagebedrijf van 13.15 tot 17.15. Studenten werken dan onder begeleiding van school aan examenopdrachten en keuzedelen. Deze uren worden door school geregistreerd en niet door de student. Bij achterstand kan de BPV-begeleider de student verplichten tijdens deze uren naar school te komen."
  },
  {
    "id": "sg-017",
    "categorie": "Stage - Veiligheid",
    "onderwerp": "Veiligheid en grensoverschrijdend gedrag",
    "inhoud": "Stagelopen is bedoeld om ervaring op te doen, niet om je onveilig te voelen. Grensoverschrijdend gedrag zoals pesten, discriminatie of (seksuele) intimidatie is onacceptabel. Voelt een student zich onveilig dan kan hij of zij dit melden bij de praktijkopleider, BPV-begeleider, BPV-coördinator, vertrouwenspersoon of via het online meldpunt op yonder.nl."
  },
  {
    "id": "sg-018",
    "categorie": "Stage - Planning",
    "onderwerp": "Examenplanning – mijlpalen",
    "inhoud": "Om uitstel te voorkomen zijn er duidelijke deadlines: eind periode 1 moet minimaal de eerste versie van examenmatrijs 1 ingeleverd zijn, eind periode 2 minstens één project en één keuzedeel afgerond, eind periode 3 twee projecten en twee keuzedelen, en eind periode 4 drie projecten en alle keuzedelen. Niet halen van een mijlpaal leidt tot gesprekken, brieven van zorg of verlengen van de stage."
  },
  {
    "id": "sg-019",
    "categorie": "Stage - Planning",
    "onderwerp": "Jaarplanning overzicht",
    "inhoud": "De stagegids bevat een gedetailleerde onderwijs- en jaarplanning met periodes P1 t/m P4, toetsweken, terugkommomenten, vakantieperioden en momenten voor examenprojecten en laatste beoordelingen. Deze planning helpt student en praktijkopleider bij het spreiden van de examenopdrachten door het jaar."
  },
  {
    "id": "sg-020",
    "categorie": "Stage - Kerntaken",
    "onderwerp": "Kerntaken en werkprocessen – basis",
    "inhoud": "Voor de opleiding gelden kerntaken en werkprocessen uit het kwalificatiedossier Mediaredactiemedewerker. Deze vormen de voorwaarden om te slagen en zijn vastgesteld door SBB. De gids geeft een verkorte weergave van deze kerntaken en werkprocessen."
  },
  {
    "id": "sg-021",
    "categorie": "Stage - Kerntaken",
    "onderwerp": "Kerntaak 1 – voorbereiding mediaopdracht",
    "inhoud": "Bij kerntaak 1 bereidt de student mediaopdrachten voor door opdrachten met opdrachtgevers te bespreken, doel en doelgroep te bepalen, research te doen, een plan te maken, interviews en opnames voor te bereiden. Het werk is complex en niet-routinematig, vaak onder tijdsdruk en in samenwerking met verschillende disciplines."
  },
  {
    "id": "sg-022",
    "categorie": "Stage - Kerntaken",
    "onderwerp": "Kerntaak 2 – content maken en bewerken",
    "inhoud": "Bij kerntaak 2 schrijft en controleert de student teksten, neemt interviews af, maakt opnames, bewerkt materiaal en voegt alles samen tot een (crossmediale) productie. Dit vereist hoge taalvaardigheid, kennis van mediatoepassingen en techniek van audio-, licht-, foto- en videoapparatuur. De student werkt vaak onder tijdsdruk en is verantwoordelijk voor de inhoudelijke en technische kwaliteit."
  },
  {
    "id": "sg-023",
    "categorie": "Stage - Kerntaken",
    "onderwerp": "Kerntaak 3 – publiceren en beheren",
    "inhoud": "Bij kerntaak 3 publiceert en beheert de student content en analyseert bereik en effect. De student werkt zelfstandig binnen kaders, is verantwoordelijk voor toepasbaarheid, actualiteit en vindbaarheid van content en heeft kennis van relevante wet- en regelgeving en analysetechnieken."
  },
  {
    "id": "sg-024",
    "categorie": "Stage - Keuzedelen",
    "onderwerp": "Keuzedelen in de BPV",
    "inhoud": "Keuzedelen verbreden of verdiepen het vakmanschap van de student. Voor eindexamenkandidaten worden keuzedelen tijdens de BPV geëxamineerd naast kerntaken en werkprocessen. De gekozen keuzedelen zijn terug te vinden in EduArte."
  },
  {
    "id": "sg-025",
    "categorie": "Stage - Competenties",
    "onderwerp": "Loopbaancompetenties – overzicht",
    "inhoud": "Loopbaancompetenties gaan over het functioneren als student-collega. De gids beschrijft hoe studenten via matrijzen, verslagen, reflecties en getuigschrift aantonen dat zij hun leerproces plannen, leerdoelen benoemen, passende manieren van leren kiezen, reflecteren, zich als werknemer gedragen en collegiaal zijn."
  },
  {
    "id": "sg-026",
    "categorie": "Stage - Producten",
    "onderwerp": "Richtlijnen voor verslag",
    "inhoud": "Een verslag bevat minimaal: voorblad met titel, opdrachtgever en naam student, inhoudsopgave, omschrijving van examenactiviteiten, grenzen en randvoorwaarden, planning, verantwoording per werkproces en competentie, evaluatie (vakinhoudelijk en persoonlijk) en correct Nederlands met professionele vormgeving. Er moet ook een originele-werk-verklaring in staan."
  },
  {
    "id": "sg-027",
    "categorie": "Stage - Producten",
    "onderwerp": "Richtlijnen voor presentatie",
    "inhoud": "In plaats van een verslag mag de student kiezen voor een presentatie, na afstemming met begeleiders. De presentatie bevat examenactiviteiten, grenzen en randvoorwaarden, planning, verantwoording met bewijs per werkproces en keuzedeel en een evaluatie. De presentatie wordt opgenomen op video en de opname wordt na beoordeling naar de BPV-begeleider gestuurd."
  },
  {
    "id": "sg-028",
    "categorie": "Stage - Klachten",
    "onderwerp": "Klachtenregeling BPV",
    "inhoud": "Bij ontevredenheid over de BPV bespreekt men dit eerst met de begeleider van school. Als dit onvoldoende oplevert volgt een schriftelijke melding bij de BPV-coördinator en daarna eventueel bij de schooldirecteur. Als ook dat geen oplossing geeft kan de klacht via de website yonder.nl/klacht worden ingediend."
  },
  {
    "id": "sg-029",
    "categorie": "Stage - Reglement",
    "onderwerp": "Praktijkreglement – algemene bepalingen",
    "inhoud": "Het praktijkreglement maakt deel uit van het BPV-plan en is bindend voor student en Yonder. Het is verbonden met onderwijsovereenkomst en praktijkovereenkomst en regelt rechten en plichten voor en tijdens de BPV. Bureau Stage & Externe Relaties helpt bij het zoeken van een praktijkplaats en studenten volgen de aanwijzingen van dit bureau."
  },
  {
    "id": "sg-030",
    "categorie": "Stage - Reglement",
    "onderwerp": "Praktijkreglement – regels, ziekte, bezoek",
    "inhoud": "De student houdt zich aan regels en voorschriften van het praktijkadres en draagt bij aan een prettige en veilige sfeer. Ziekte wordt vóór werktijd bij praktijkopleider en per mail bij praktijkbegeleider gemeld. Verzuimde uren worden ingehaald. De praktijkbegeleider bezoekt het praktijkadres regelmatig en is bij elke beoordeling aanwezig."
  },
  {
    "id": "sg-031",
    "categorie": "Stage - Reglement",
    "onderwerp": "Praktijkreglement – beoordeling en verbreking POK",
    "inhoud": "Examens en werkprocessen worden beoordeeld in een gesprek met student, praktijkopleider en praktijkbegeleider; school is eindverantwoordelijk. Bij verbreking van de praktijkovereenkomst door verwijtbaar gedrag van de student kunnen disciplinaire maatregelen volgen en kan een herkansing worden ontzegd. In sommige gevallen moet de student zelf een nieuwe praktijkplaats zoeken onder begeleiding van Bureau Stage & Externe Relaties."
  },
  {
    "id": "sg-032",
    "categorie": "Stage - Reglement",
    "onderwerp": "Praktijkreglement – herkansing en slotbepaling",
    "inhoud": "Bij niet behaalde werkprocessen kan verlenging van de stage worden aangevraagd bij de examencommissie. De praktijktoetsing valt niet onder de externe examenregeling, dus de onderwijsovereenkomst moet worden verlengd. In gevallen waarin het reglement niet voorziet, beslist de voorzitter van de examencommissie ICT, Media en Commercie."
  },
  {
    "id": "sg-033",
    "categorie": "Stage - Procedure",
    "onderwerp": "Procedure afgebroken stage",
    "inhoud": "Bij afgebroken stage volgt een vaste procedure: eerst een exitgesprek met student en praktijkopleider met gespreksverslag, daarna maakt de student een reflectieverslag op de situatie, er wordt duidelijkheid gecreëerd over te tellen uren en opdrachten en afspraken gemaakt met Bureau Stage & Externe Relaties over het zoeken naar een nieuwe stage. De leerdoelen uit deze reflectie worden meegenomen naar de nieuwe stageplaats."
  },
  {
    "id": "sg-034",
    "categorie": "Stage - Getuigschrift",
    "onderwerp": "Voorbeeld getuigenis",
    "inhoud": "De gids bevat een voorbeeld getuigschrift waarin het bedrijf verklaart welke periode de student stage liep, welke werkzaamheden zijn verricht en hoe de student heeft gefunctioneerd. Dit document ondersteunt het aantonen van loopbaancompetenties zoals werknemer-gedrag en collegialiteit."
  }
];