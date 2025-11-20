import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL } from "../constants";

// Initialize the client with the environment variable
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in environment variables.");
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        systemInstruction: "You are Liwisi, a helpful, premium AI assistant designed for professionals. Be concise, accurate, and professional.",
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};