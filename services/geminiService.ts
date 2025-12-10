import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

const apiKey = process.env.API_KEY;

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

export const getAImigoResponse = async (userMessage: string): Promise<string> => {
  // Check of de API key aanwezig is
  if (!apiKey) {
    console.error("API Key ontbreekt. Zorg dat process.env.API_KEY is ingesteld.");
    return "Er is een configuratiefout (API Key ontbreekt). Controleer de instellingen.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Er is geen antwoord ontvangen.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, ik kon even geen verbinding maken. Probeer het later nog eens.";
  }
};