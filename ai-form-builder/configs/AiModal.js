// AiModal.js
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
// Ensure the API key is correctly set up in your environment
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Ensure this matches your environment variable setup
if (!apiKey) {
  throw new Error("API key is missing. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings,
  history: [],
});