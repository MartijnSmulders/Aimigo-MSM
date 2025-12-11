import { GoogleGenAI } from "@google/genai";

// Forceer TypeScript om 'process' te herkennen, zelfs als de algemene project-configuratie op 'browser-only' staat.
declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

// We definiëren de kennisbasis hier direct om import-fouten op de Vercel server te voorkomen.
// Serverless functions kunnen soms moeite hebben met het importeren van bestanden buiten de /api map.
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
  }
];

const SYSTEM_INSTRUCTION = `
Je bent AImigo, de digitale studentassistent voor nieuwe studenten van de school Yonder (locatie Kasteeldreef).
Jouw doel is om studenten snel en duidelijk te helpen met praktische vragen.

VOLG DEZE REGELS STRIKT:
1. Brongebruik: Beantwoord vragen UITSLUITEND op basis van de meegeleverde KENNISBASIS.
2. Niet schoolgerelateerd: Als de vraag over algemene zaken gaat die NIETS met school te maken hebben (bijv. sportuitslagen, weer, nieuws, beroemdheden), antwoord dan EXACT met: "Sorry, daar moet je andere bronnen voor raadplegen. Ik kan je niet helpen omdat ik daar geen informatie over heb."
3. Niet geweten (Schoolgerelateerd): Als de vraag WEL over school gaat, maar het antwoord niet in de kennisbasis staat, antwoord dan EXACT met: "Dat weet ik helaas niet precies. Ik raad je aan contact op te nemen met je Studieloopbaanbegeleider (SLB'er)."
4. Emotionele/Zorgvragen: Als een student aangeeft ergens mee te zitten, iets vervelends te hebben meegemaakt, een zorgvraag heeft, of emotioneel klinkt, negeer de kennisbasis en antwoord ALTIJD direct en empathisch met: "Wat vervelend dat je hiermee zit. Ik raad je aan om contact op te nemen met Elise Sleutjes (de vertrouwenspersoon) of je SLB'er. Zij kunnen je hier beter bij helpen."
5. Toon: Wees behulpzaam, duidelijk en gebruik "je/jij". Houd antwoorden kort en scanbaar.

KENNISBASIS:
${JSON.stringify(KNOWLEDGE_BASE)}
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  // Haal API key op
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key ontbreekt in process.env");
    return res.status(500).json({ error: 'Server misconfiguratie: API Key ontbreekt' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
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
    console.error("Gemini API Error in Serverless Function:", error);
    return res.status(500).json({ error: 'Er ging iets mis bij het ophalen van het antwoord.', details: error.message });
  }
}