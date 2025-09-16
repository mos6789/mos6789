import { GoogleGenAI } from "@google/genai";

// This function will be deployed as a serverless function on Vercel
export async function POST(req: Request) {
  try {
    const { message, systemInstruction } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY environment variable not set");
    }
    
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      },
    });

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