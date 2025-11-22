import { GoogleGenAI } from "@google/genai";
import { BriefRequest } from "../types";

const getGeminiClient = () => {
  // In a real app, this comes from process.env.API_KEY
  // We assume the environment is set up correctly.
  const apiKey = process.env.API_KEY || '';
  return new GoogleGenAI({ apiKey });
};

export const refineProjectBrief = async (request: BriefRequest): Promise<string> => {
  const ai = getGeminiClient();
  
  const prompt = `
    You are an expert Film Director and Executive Producer. A potential client has a rough idea for a video project.
    Your goal is to take their rough inputs and turn it into a professional, structured Project Brief that they can send to a video editor.
    
    Client Inputs:
    - Concept: ${request.concept}
    - Desired Tone: ${request.tone}
    - Est. Duration: ${request.duration}

    Please generate a structured brief in Markdown format. 
    The structure should be:
    1. **Project Title** (Creative suggestion)
    2. **Logline** (One sentence summary)
    3. **Visual Direction** (Describe the mood, lighting, and pacing based on the tone)
    4. **Key Elements** (Bulleted list of what is needed based on concept)
    5. **Estimated Scope** (Based on duration)

    Keep the tone professional, artistic, and inspiring.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a creative consultant for a high-end video production house.",
        thinkingConfig: { thinkingBudget: 0 } // Text task, low latency preferred
      }
    });

    return response.text || "Unable to generate brief at this time.";
  } catch (error) {
    console.error("Error generating brief:", error);
    return "There was an error connecting to the creative assistant. Please try again.";
  }
};
