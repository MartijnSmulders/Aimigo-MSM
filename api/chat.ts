import { GoogleGenAI } from "@google/genai";

// We definiëren de data lokaal in dit bestand om 'ERR_MODULE_NOT_FOUND' te voorkomen bij serverless deployment.
const KNOWLEDGE_BASE = [
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
  /* --- STAGEGIDS --- */
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
  },
  /* --- STUDENTENSTATUUT 2025 --- */
  {
    "id": "meta-001",
    "categorie": "Studentenstatuut - Algemeen",
    "onderwerp": "Documentinformatie",
    "inhoud": "Studentenstatuut mbo-opleidingen Yonder. Versie 12 mei 2025. Ingangsdatum: 1 augustus 2025. Vastgesteld door College van Bestuur, instemming CSR op 22 mei 2025."
  },
  {
    "id": "art-001",
    "categorie": "Studentenstatuut - Algemeen",
    "onderwerp": "Reikwijdte",
    "inhoud": "Het studentenstatuut is bindend voor alle (aspirant) mbo-studenten van Yonder, inclusief entreeopleidingen, met uitzondering van derde leerweg studenten en NCVB Bedrijfsopleidingen. Het geldt binnen en buiten schoolgebouwen, tijdens BPV en bij digitale onderwijsactiviteiten."
  },
  {
    "id": "art-002",
    "categorie": "Studentenstatuut - Algemeen",
    "onderwerp": "Onderwijsovereenkomst",
    "inhoud": "Vanaf 1 augustus 2023 ontvangen studenten een inschrijvingsbeslissing in plaats van een onderwijsovereenkomst. Oude overeenkomsten blijven geldig tot einddatum. Bij conflicten prevaleert dit statuut."
  },
  {
    "id": "art-003",
    "categorie": "Studentenstatuut - Inschrijving",
    "onderwerp": "Aanmelding en toelating",
    "inhoud": "Na aanmelding ontvang je een inschrijvingsbeslissing. Je kunt bezwaar maken tegen afwijzing via hoofdstuk 9. Je hebt recht op studiekeuzeadvies bij aanmelden vóór 1 april. De toelatingsprocedure staat jaarlijks voor 1 februari online."
  },
  {
    "id": "art-004",
    "categorie": "Studentenstatuut - Kosten",
    "onderwerp": "Les- en cursusgeld",
    "inhoud": "Studenten van 18 jaar of ouder betalen wettelijk vastgesteld les- of cursusgeld. Teruggave en betalingsregelingen zijn vastgelegd in Schoolkostenbeleid."
  },
  {
    "id": "art-005",
    "categorie": "Studentenstatuut - Kosten",
    "onderwerp": "Lesmateriaal",
    "inhoud": "Studenten schaffen zelf lesmateriaal aan op basis van de gepubliceerde lijst op de website. Niet-gebruikte verplichte leermiddelen kunnen worden teruggekocht via meldpunt conform Schoolkostenbeleid."
  },
  {
    "id": "art-006",
    "categorie": "Studentenstatuut - Kosten",
    "onderwerp": "MBO Studentenfonds",
    "inhoud": "Studenten kunnen onder voorwaarden financiële ondersteuning aanvragen via het mbo-studentenfonds met een aanvraagformulier op de Yonder-website."
  },
  {
    "id": "art-007",
    "categorie": "Studentenstatuut - Ondersteuning",
    "onderwerp": "Extra ondersteuning",
    "inhoud": "Bij handicap of chronische ziekte worden vooraf schriftelijke afspraken gemaakt voor passend onderwijs. Evaluatie minimaal jaarlijks."
  },
  {
    "id": "art-008",
    "categorie": "Studentenstatuut - Ondersteuning",
    "onderwerp": "Zwangerschap en ouderschap",
    "inhoud": "Zwanger of studerende ouder? Je hebt recht op maatwerk en verlofregelingen volgens het protocol Zwangere Studenten en Studerende Ouders."
  },
  {
    "id": "art-009",
    "categorie": "Studentenstatuut - Ondersteuning",
    "onderwerp": "Topsport",
    "inhoud": "Studenten die topsport beoefenen kunnen maatwerkafspraken krijgen om sport en studie te combineren."
  },
  {
    "id": "art-010",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "Inspanningsverplichtingen",
    "inhoud": "Yonder zorgt voor redelijke mogelijkheden om het diploma te behalen en vervangt waar mogelijk uitgevallen lessen. Studenten moeten zich maximaal inspannen om studie af te ronden."
  },
  {
    "id": "art-011",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "OER en examinering",
    "inhoud": "De inhoud van opleiding en examens staat in de Onderwijs- en Examenregeling (OER) en het Examenreglement."
  },
  {
    "id": "art-012",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "Cohortregeling",
    "inhoud": "Je volgt diploma-eisen van je startcohort. Bij vertraging kan na toestemming overschrijving plaatsvinden naar ander cohort met nieuwe eisen."
  },
  {
    "id": "art-013",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "BPV (Stage)",
    "inhoud": "Beroepspraktijkvorming is verplicht. Afspraken staan in een praktijkovereenkomst. Yonder helpt bij het vinden van een leerbedrijf."
  },
  {
    "id": "art-014",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "Studieloopbaanbegeleiding",
    "inhoud": "Regelmatige gesprekken over voortgang. Bij problemen volgt extra begeleiding en zo nodig een verbeterplan."
  },
  {
    "id": "art-015",
    "categorie": "Studentenstatuut - Onderwijs",
    "onderwerp": "Bindend studieadvies",
    "inhoud": "In eerste studiejaar ontvang je BSA. Bij negatief advies volgt uitschrijving maar altijd eerst waarschuwing en verbeterplan. Beroep mogelijk."
  },
  {
    "id": "art-016",
    "categorie": "Studentenstatuut - Aanwezigheid",
    "onderwerp": "Aanwezigheid",
    "inhoud": "Bij alle lessen verplicht aanwezig, zowel fysiek als online. Afmeldingen verlopen via het studentenportaal."
  },
  {
    "id": "art-017",
    "categorie": "Studentenstatuut - Aanwezigheid",
    "onderwerp": "Ziekmelding",
    "inhoud": "Ziek melden op dezelfde dag via studentenportaal. Bij BPV ook bij leerbedrijf. Artsverklaring kan worden gevraagd."
  },
  {
    "id": "art-018",
    "categorie": "Studentenstatuut - Aanwezigheid",
    "onderwerp": "Verlof",
    "inhoud": "Verlof aanvragen bij studieloopbaanbegeleider, max 10 dagen per studiejaar. Schriftelijk bewijs vereist."
  },
  {
    "id": "art-019",
    "categorie": "Studentenstatuut - Aanwezigheid",
    "onderwerp": "Ongeoorloofd verzuim",
    "inhoud": "Ongeoorloofd verzuim kan leiden tot disciplinaire maatregelen en meldingen bij DUO of leerplicht."
  },
  {
    "id": "art-020",
    "categorie": "Studentenstatuut - Gedrag",
    "onderwerp": "Gedragsregels",
    "inhoud": "Respectvol gedrag verplicht. Geen intimidatie, geweld, discriminatie of diefstal. Rookvrije school."
  },
  {
    "id": "art-021",
    "categorie": "Studentenstatuut - Gedrag",
    "onderwerp": "Ongewenst gedrag",
    "inhoud": "Ongewenst gedrag is verboden. Vertrouwenspersoon beschikbaar. Klacht indienen mogelijk."
  },
  {
    "id": "art-022",
    "categorie": "Studentenstatuut - Gedrag",
    "onderwerp": "Alcohol en drugs",
    "inhoud": "Geen alcohol, drugs of wapens op school of activiteiten. Controles toegestaan."
  },
  {
    "id": "art-023",
    "categorie": "Studentenstatuut - Gedrag",
    "onderwerp": "ICT-gedrag",
    "inhoud": "Telefoons zijn uit tijdens lessen tenzij docent toestemming geeft. Camera kan verplicht zijn."
  },
  {
    "id": "art-024",
    "categorie": "Studentenstatuut - Gedrag",
    "onderwerp": "Kleding",
    "inhoud": "Geen gezichtsbedekkende kleding. Kleding moet veilig en passend zijn voor opleiding of bpv."
  },
  {
    "id": "art-025",
    "categorie": "Studentenstatuut - Maatregelen",
    "onderwerp": "Disciplinaire maatregelen",
    "inhoud": "Bij overtredingen volgen waarschuwing, schorsing of verwijdering. Maatregelen moeten proportioneel zijn."
  },
  {
    "id": "art-026",
    "categorie": "Studentenstatuut - Maatregelen",
    "onderwerp": "Schorsing",
    "inhoud": "Schorsing max 2 weken mogelijk. Beroep instellen binnen zes weken mogelijk."
  },
  {
    "id": "art-027",
    "categorie": "Studentenstatuut - Maatregelen",
    "onderwerp": "Verwijdering",
    "inhoud": "Student kan worden verwijderd bij ernstig of herhaald wangedrag of ongeschiktheid voor beroep. Procedure is wettelijk vastgelegd."
  },
  {
    "id": "art-028",
    "categorie": "Studentenstatuut - Maatregelen",
    "onderwerp": "Uitschrijven",
    "inhoud": "Uitschrijving kan door o.a. BSA, diplomering, VOG weigering of stoppen opleiding."
  },
  {
    "id": "art-029",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Klachten en bezwaar",
    "inhoud": "Klachten, bezwaar of beroep verlopen via het Meldpunt Yonder. Geschillenadviescommissie behandelt bezwaren."
  },
  {
    "id": "art-030",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Cobex",
    "inhoud": "De Commissie van Beroep voor de Examens behandelt examengeschillen en BSA-zaken."
  },
  {
    "id": "art-031",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Studentenraad",
    "inhoud": "De Centrale Studentenraad vertegenwoordigt Yonder-studenten richting bestuur."
  },
  {
    "id": "art-032",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Aansprakelijkheid",
    "inhoud": "Yonder is niet aansprakelijk voor schade of diefstal aan eigendommen van studenten."
  },
  {
    "id": "art-033",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Privacy",
    "inhoud": "Studentgegevens worden vastgelegd in EduArte volgens het privacyreglement."
  },
  {
    "id": "art-034",
    "categorie": "Studentenstatuut - Recht",
    "onderwerp": "Slotbepaling",
    "inhoud": "Het CvB stelt het statuut vast met instemming CSR. Het document is geldig vanaf 1 augustus 2025."
  },
  /* --- HANDLEIDING EXAMENMATRIJS --- */
  {
    "id": "em-001",
    "categorie": "Examenmatrijs - Algemeen",
    "onderwerp": "Doel van de examenmatrijs",
    "inhoud": "De examenmatrijs wordt gebruikt om opdrachten uit het stagebedrijf officieel te laten meetellen voor school. Samen met de praktijkopleider kiest de student opdrachten die goed laten zien welke vaardigheden en competenties hij of zij beheerst. Voor eindexamenkandidaten tellen deze opdrachten mee voor het diploma; voor andere studenten tellen ze mee voor beoordeling. Voor elke gekozen opdracht moet een examenmatrijs worden ingevuld en goedgekeurd."
  },
  {
    "id": "em-002",
    "categorie": "Examenmatrijs - Bestandsnaam",
    "onderwerp": "Naamgeving van examenmatrijzen",
    "inhoud": "De documentnaam van een examenmatrijs volgt een vaste structuur: eigen_naam_klas_EM1. Bijvoorbeeld: 'Martijn Smulders_WEB4_EM1'. Lever je later een nieuwe examenmatrijs in voor een volgende opdracht, dan wordt dat EM2, EM3, enzovoort. Voor keuzedelen voeg je 'KD' toe in de naam. Voorbeeld: 'Martijn Smulders_WEB4_KD1_EM2'. Daarmee is in één oogopslag te zien of het om een examenopdracht of een keuzedeel gaat en om welke versie."
  },
  {
    "id": "em-003",
    "categorie": "Examenmatrijs - Keuzedelen",
    "onderwerp": "Keuzedelen en examenmatrijs",
    "inhoud": "Voor eindexamenkandidaten horen er naast schoolexamens ook keuzedelen bij de opleiding. Deze keuzedelen moeten in de stage worden uitgevoerd en apart worden vastgelegd. Je mag één en dezelfde opdracht niet dubbel gebruiken: dus niet tegelijk als schoolexamen én als keuzedeel. Voor een keuzedeel vul je een aparte examenmatrijs in en geef je in de bestandsnaam duidelijk aan dat het om een keuzedeel gaat (bijvoorbeeld KD1)."
  },
  {
    "id": "em-004",
    "categorie": "Examenmatrijs - Proces",
    "onderwerp": "Workflow: invullen en goedkeuren",
    "inhoud": "De student en praktijkopleider controleren samen de ingevulde examenmatrijs. Daarna stuurt de student de matrijs per mail naar de BPV-begeleider van school. De BPV-begeleider kijkt de matrijs na en geeft feedback als er iets niet klopt of onvolledig is. De student verwerkt de feedback en stuurt een nieuwe versie terug. Als de examenmatrijs inhoudelijk in orde is, keurt de BPV-begeleider deze goed en start voor eindexamenkandidaten het digitale ondertekenproces via Adobe Sign."
  },
  {
    "id": "em-005",
    "categorie": "Examenmatrijs - Proces",
    "onderwerp": "Digitale ondertekening via Adobe Sign",
    "inhoud": "Na goedkeuring van de examenmatrijs door de BPV-begeleider wordt voor eindexamenkandidaten het digitale ondertekenproces gestart via Adobe Sign. De student ontvangt een e-mail met het verzoek om de examenmatrijs digitaal te ondertekenen. Op het moment van ondertekenen staat het examen definitief vast. Daarna kan er niets inhoudelijk meer gewijzigd worden aan de examenopdracht binnen die examenmatrijs."
  },
  {
    "id": "em-006",
    "categorie": "Examenmatrijs - Structuur",
    "onderwerp": "Algemene opbouw van de examenmatrijs",
    "inhoud": "Een examenmatrijs kan grofweg in drie delen worden opgesplitst: (1) de kop met algemene gegevens zoals naam student, cohort-jaar, naam praktijkopleider en BPV-begeleider; (2) een middenstuk met de omschrijving van het examenproject en de producten die bij de klant worden opgeleverd; (3) een tabel onderaan de pagina met de te beoordelen werkprocessen en loopbaancompetenties (LB-competenties). Deze structuur is voor alle opleidingen vergelijkbaar, al heeft iedere opleiding een eigen versie van de matrijs."
  },
  {
    "id": "em-007",
    "categorie": "Examenmatrijs - Structuur",
    "onderwerp": "Invullen van algemene gegevens",
    "inhoud": "In het eerste deel van de examenmatrijs vult de student de algemene gegevens in. Dit spreekt grotendeels voor zich: naam van de student, opleiding, klas en cohort (het jaar waarin de student met de opleiding begonnen is). Vervolgens wordt de naam van de praktijkopleider ingevuld (begeleider vanuit het bedrijf) en de naam van de BPV-begeleider (begeleider vanuit school). Deze informatie maakt duidelijk wie verantwoordelijk zijn voor begeleiding en beoordeling."
  },
  {
    "id": "em-008",
    "categorie": "Examenmatrijs - Project",
    "onderwerp": "Omschrijving van het examenproject",
    "inhoud": "In het middenstuk van de examenmatrijs beschrijft de student kort maar concreet wat hij of zij gaat doen. Dit is de omschrijving van het examenproject: welke werkzaamheden worden uitgevoerd, voor welk type klant of bedrijf, en wat ongeveer de scope is. Voorbeelden zijn: een nieuwe website bouwen in HTML/CSS en JavaScript met specifieke pagina's, een redesign van een huisstijl inclusief onderzoek en moodboard, of het maken van een voxpop voor een lokale omroep met verwerking in een nieuwsitem. Het gaat hier om de kern van de opdracht zoals die bij de klant ligt."
  },
  {
    "id": "em-009",
    "categorie": "Examenmatrijs - Project",
    "onderwerp": "Opleverproducten aan de klant",
    "inhoud": "Naast de omschrijving van de werkzaamheden noteert de student welke concrete eindproducten er bij de klant worden opgeleverd. Dit zijn bijvoorbeeld een werkende website, een nieuwe huisstijl, een video-item of socialmedia-content. Schooldocumenten zoals projectverslagen, plannen van aanpak en reflecties horen niet in dit onderdeel; die zijn uitsluitend voor school en komen later in de documentatie en verantwoording terug."
  },
  {
    "id": "em-010",
    "categorie": "Examenmatrijs - Werkprocessen",
    "onderwerp": "Kerntaken en werkprocessen in de tabel",
    "inhoud": "Onderaan het voorblad van de examenmatrijs staat een tabel met werkprocessen. Deze zijn gekoppeld aan kerntaken (bijv. K1, K2, K3) binnen het basisdeel en profieldeel van de opleiding. Elk werkproces (W1, W2, W3, W4, etc.) beschrijft een specifiek onderdeel van het werk, zoals het bespreken van een opdracht, het voorbereiden van productie, uitvoeren van contentcreatie of publiceren. Per examenopdracht bepaalt de student samen met de praktijkopleider welke werkprocessen in die opdracht daadwerkelijk voorkomen en beoordeeld kunnen worden. Deze worden in de tabel aangevinkt."
  },
  {
    "id": "em-011",
    "categorie": "Examenmatrijs - Werkprocessen",
    "onderwerp": "Kiezen van werkprocessen per opdracht",
    "inhoud": "Voor elke examenopdracht bespreekt de student eerst de inhoud met de praktijkopleider. Daarna bekijkt de student vanaf pagina 4 van de examenmatrijs welke werkprocessen qua inhoud passen bij deze opdracht. In de uitleg bij de werkprocessen staat per werkproces omschreven wat er precies bedoeld wordt en welke activiteiten erbij horen. Op basis daarvan kiest de student die werkprocessen die in de gekozen opdracht daadwerkelijk voorkomen en relevant zijn om te laten beoordelen. In één opdracht kunnen meerdere werkprocessen worden 'afgetikt'."
  },
  {
    "id": "em-012",
    "categorie": "Examenmatrijs - Werkprocessen",
    "onderwerp": "Uitleg werkprocessen en competenties",
    "inhoud": "Vanaf pagina 4 van de examenmatrijs worden alle werkprocessen uitgebreider toegelicht. Bovenaan staat de titel van de kerntaak, bijvoorbeeld 'Basisdeel kerntaak 1 – voorbereiden opdracht en organiseren van werk', met daaronder de bijbehorende werkprocessen. Bij elk werkproces staan één of meerdere letters die verwijzen naar onderliggende competenties, zoals samenwerken, klantgerichtheid of instructies opvolgen. Een overzichtstabel met alle letters en bijbehorende competenties staat achter in de examenmatrijs."
  },
  {
    "id": "em-013",
    "categorie": "Examenmatrijs - Werkprocessen",
    "onderwerp": "Prestatie-indicatoren per werkproces",
    "inhoud": "Bij elk werkproces staan prestatie-indicatoren: concrete voorwaarden en gedragingen die horen bij dat werkproces. Voorbeeld bij het werkproces 'Opdracht bespreken met interne of externe opdrachtgever': de beginnend beroepsbeoefenaar inventariseert actief behoeften en wensen, vraagt naar meningen en ideeën, stelt vragen als iets niet duidelijk is en toont bereidheid om adviezen en instructies op te volgen. Deze prestatie-indicatoren geven precies aan wat de student moet laten zien in product en verslag om het werkproces te bewijzen."
  },
  {
    "id": "em-014",
    "categorie": "Examenmatrijs - Werkprocessen",
    "onderwerp": "Overnemen van werkprocessen in de matrijs",
    "inhoud": "Als een werkproces past bij de gekozen opdracht, kopieert de student de volledige beschrijving en prestatie-indicatoren uit de uitlegsectie (vanaf pagina 4) en plakt deze in het vak op pagina 2 van de examenmatrijs. Daar komen alle werkprocessen te staan die binnen deze examenopdracht beoordeeld worden. Zo weet de student vooraf welke voorwaarden moeten worden aangetoond en kan de BPV-begeleider direct zien welke onderdelen binnen dit examen getoetst worden."
  },
  {
    "id": "em-015",
    "categorie": "Examenmatrijs - Bewijslast",
    "onderwerp": "Bewijslast en documentatie",
    "inhoud": "De prestatie-indicatoren moeten aantoonbaar terugkomen in het examenproduct en vooral in de verantwoording in het projectverslag. Bewijslast kan bestaan uit gespreksverslagen, notulen, screenshots van e-mails met feedback, code-screenshots, foto’s van werk, etc. De student moet laten zien dat hij of zij daadwerkelijk volgens de gestelde voorwaarden heeft gewerkt. Dit is extra belangrijk omdat docenten op school de student niet in de dagelijkse praktijk zien; de beoordeling is gebaseerd op product, verslag en het beoordelingsgesprek met de praktijkopleider."
  },
  {
    "id": "em-016",
    "categorie": "Examenmatrijs - Bewijslast",
    "onderwerp": "Rol van het projectverslag",
    "inhoud": "In het projectverslag komt onder andere een kopje 'verantwoording'. Daarin beschrijft de student concreet hoe aan de gekozen werkprocessen is gewerkt en hoe de prestatie-indicatoren zijn ingevuld. Bijvoorbeeld: hoe informatie en wensen van de opdrachtgever zijn opgehaald, hoe die informatie is geanalyseerd, hoe de aanpak daarop is gebaseerd en hoe vakkennis is ingezet om advies te geven. Dit verslag is een belangrijk stuk bewijs richting school en vormt samen met het product en de examenmatrijs de basis voor de beoordeling."
  },
  {
    "id": "em-017",
    "categorie": "Examenmatrijs - Scope",
    "onderwerp": "Realistisch aantal werkprocessen per examen",
    "inhoud": "Het is nadrukkelijk niet de bedoeling om in één examenmatrijs alle mogelijke werkprocessen mee te nemen. In de praktijk zijn er maar weinig projecten waarin alle werkprocessen in één keer goed getoetst kunnen worden. Door werkprocessen te verdelen over meerdere opdrachten gedurende het jaar kan de student ook groei laten zien: een opdracht aan het begin van de stage is vaak minder complex dan een opdracht later in het jaar, als er meer kennis en ervaring is opgedaan."
  },
  {
    "id": "em-018",
    "categorie": "Examenmatrijs - Planning",
    "onderwerp": "Gespreide beoordeling over meerdere projecten",
    "inhoud": "Door meerdere projecten over de BPV-periode te plannen, kan de student werkprocessen en competenties gespreid laten beoordelen. Dit helpt om een geleidelijke opbouw in niveau te laten zien en voorkomt dat één examenproject te zwaar of onrealistisch wordt. Aan het eind van de stageperiode moeten voor eindexamenkandidaten alle verplichte werkprocessen beoordeeld zijn, maar ze hoeven niet allemaal in één examen terug te komen."
  },
  {
    "id": "em-019",
    "categorie": "Examenmatrijs - Afronding",
    "onderwerp": "Laatste controle en aanlevering",
    "inhoud": "Als de student alle relevante werkprocessen in de examenmatrijs heeft verwerkt, wordt de matrijs opgeslagen en nogmaals met de praktijkopleider doorgenomen. Na inhoudelijke goedkeuring door de praktijkopleider stuurt de student de examenmatrijs naar de BPV-begeleider van school. De BPV-begeleider controleert de matrijs, geeft zo nodig feedback of keurt hem goed. Bij eindexamenkandidaten start na goedkeuring het digitale ondertekenproces en vanaf dat moment ligt de examenopdracht definitief vast."
  }
];

// Forceer TypeScript om 'process' te herkennen.
declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

// Optimalisatie: Converteer KNOWLEDGE_BASE naar een platte tekststring ipv JSON.
// Dit bespaart tokens en maakt het makkelijker voor het model om te verwerken.
const KNOWLEDGE_TEXT = KNOWLEDGE_BASE.map(item => `
[${item.categorie}] ${item.onderwerp}
${item.inhoud}
`).join('\n-------------------\n');

const SYSTEM_INSTRUCTION = `
Je bent AImigo, de digitale studentassistent voor nieuwe studenten van de school Yonder (locatie Kasteeldreef).
Jouw doel is om studenten snel en duidelijk te helpen met praktische vragen.

VOLG DEZE REGELS STRIKT:
1. Brongebruik: Beantwoord vragen UITSLUITEND op basis van de meegeleverde KENNISBASIS hieronder.
2. Niet schoolgerelateerd: Als de vraag over algemene zaken gaat die NIETS met school te maken hebben, antwoord: "Sorry, daar moet je andere bronnen voor raadplegen. Ik kan je niet helpen omdat ik daar geen informatie over heb."
3. Niet geweten (Schoolgerelateerd): Als de vraag WEL over school gaat, maar het antwoord staat niet in de kennisbasis, antwoord: "Dat weet ik helaas niet precies. Ik raad je aan contact op te nemen met je Studieloopbaanbegeleider (SLB'er)."
4. Emotionele/Zorgvragen: Bij zorgen of emotionele vragen, verwijs ALTIJD direct en empathisch naar Elise Sleutjes (vertrouwenspersoon) of de SLB'er.
5. Toon: Wees behulpzaam, duidelijk en gebruik "je/jij". Houd antwoorden kort en scanbaar.

KENNISBASIS:
${KNOWLEDGE_TEXT}
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { message } = body;

    if (!message) {
      return res.status(400).json({ error: 'Bericht ontbreekt in request body' });
    }

    // Haal API key op
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API Key ontbreekt in process.env");
      return res.status(500).json({ error: 'Server misconfiguratie: API Key ontbreekt in Vercel Environment Variables.' });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // RETRY LOGICA VOOR 503 ERRORS
    const MAX_RETRIES = 3;
    let lastError: any = null;
    
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: [
                {
                  role: 'user',
                  parts: [{ text: message }]
                }
              ],
              config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.2,
                maxOutputTokens: 500,
              }
            });

            return res.status(200).json({ answer: response.text });

        } catch (error: any) {
            console.error(`Gemini API poging ${attempt} mislukt:`, error.message);
            lastError = error;

            // Check specifiek op 503 Service Unavailable (Model Overloaded)
            if (error.status === 503) {
                if (attempt < MAX_RETRIES) {
                    // Wacht even voor de volgende poging (Exponential backoff: 1s, 2s)
                    const waitTime = attempt * 1000;
                    console.log(`Wachten voor ${waitTime}ms voor retry...`);
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                    continue; // Probeer opnieuw
                }
            } else if (error.status === 403 || (error.message && error.message.includes('leaked'))) {
                // Bij een leaked key heeft retry geen zin
                console.error("CRITISCH: API Key is geblokkeerd.");
                return res.status(403).json({ error: 'De ingestelde API Key is geblokkeerd door Google (Leaked Key).' });
            }
            
            // Als het geen 503 is, of we zijn door de retries heen, gooi de error.
            break; 
        }
    }

    // Als we hier komen is het na alle retries nog steeds mislukt
    return res.status(503).json({ 
        error: 'De AI-service is momenteel overbelast. Probeer het over een minuutje nog eens.', 
        details: lastError?.message 
    });

  } catch (error: any) {
    console.error("Onverwachte fout in handler:", error);
    return res.status(500).json({ error: 'Er ging iets mis bij het ophalen van het antwoord.', details: error.message || 'Onbekende fout' });
  }
}