import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});


export async function generateQuiz(topic, numQ, difficulty, explanation) {

    const prompt = `
Generate ${numQ} multiple-choice quiz questions.

Topic: ${topic}
Difficulty: ${difficulty}
Explaination: ${explanation}
Rules:
- Each question must have exactly 4 options.
- There must be exactly one correct answer.
- correctAnswers must contain the index of the correct option.
- Option indexes start from 0.
- Distribute correct answers randomly across positions 0, 1, 2, and 3.
- Provide a short and clear explanation of why the correct answer is correct.
- Return ONLY valid JSON.
- Do not include markdown.

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
      "correctAnswers": [0] ,
      "explanation": "Short explanation of why Option is correct."
    }
  ]
}
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });
    console.log("Gemini Response:", response);
    const text = response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text).questions;
  }