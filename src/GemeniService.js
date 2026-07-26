import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

export async function generateQuiz(topic, numQ, difficulty) {

    const prompt = `
Generate ${numQ} multiple-choice quiz questions.

Topic: ${topic}
Difficulty: ${difficulty}

Rules:
- Each question must have exactly 4 options.
- There must be exactly one correct answer.
- Return ONLY valid JSON.
- Do not include markdown or explanations.

JSON format:
{
  "questions": [
    {
      "question": "Question text",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswers": [0]
    }
  ]
}
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });
    console.log("Gemini Response:", response.text);
    const text = response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text).questions;
}