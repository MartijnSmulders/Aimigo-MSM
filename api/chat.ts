import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

// Forceer TypeScript om 'process' te herkennen.
declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

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
    
    if (error.status === 403 || (error.message && error.message.includes('leaked'))) {
        console.error("CRITISCH: Je API Key is gemarkeerd als 'leaked' door Google en is geblokkeerd.");
        return res.status(403).json({ error: 'De ingestelde API Key is geblokkeerd door Google (Leaked Key). Check Vercel logs.' });
    }

    return res.status(500).json({ error: 'Er ging iets mis bij het ophalen van het antwoord.', details: error.message || 'Onbekende fout' });
  }
}