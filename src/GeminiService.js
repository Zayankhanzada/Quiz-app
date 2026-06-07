import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "No_API_found";

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateQuiz(topic, count) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Generate a quiz about "${topic}".

Return ONLY valid JSON.

Generate exactly ${count} questions.

Schema:

[
  {
    "question": "",
    "options": ["","","",""],
    "correctAnswers": [0]
  }
]

Rules:
- 4 options per question
- correctAnswers contains correct option indexes
- no markdown
- no explanations
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}