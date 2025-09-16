import { GoogleGenAI } from "@google/genai";

// This function will be deployed as a serverless function on Vercel
export async function POST(req: Request) {
  try {
    // FIX: Read both message and systemInstruction from the request body at once.
    // Reading req.json() multiple times will cause an error.
    const { message, systemInstruction } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY environment variable not set");
    }
    
    const ai = new GoogleGenAI({ apiKey });

    // FIX: Use ai.models.generateContent directly instead of the deprecated getGenerativeModel,
    // which resolves the 'getGenerativeModel does not exist' error.
    // Also, update the model name from 'gemini-1.5-flash-latest' to 'gemini-2.5-flash'.
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    // FIX: Directly access the 'text' property from the response object as per the new API.
    const text = response.text;

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in Gemini API function:", error);
    return new Response(JSON.stringify({ error: "Failed to get AI response." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}