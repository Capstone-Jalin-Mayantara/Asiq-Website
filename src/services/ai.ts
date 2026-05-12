import { GoogleGenAI } from '@google/genai';

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function processAdaptiveLearning(
  rawMaterial: string,
  studentProfile: string
) {
  // Agent 1: Learner Profiling Agent
  const strategyPrompt = `
You are the Learner Profiling Agent.
Analyze the following student profile and generate a teaching strategy.
Student Profile: ${studentProfile}

Provide a concise strategy (2-3 paragraphs) focusing on how to adapt educational materials.
`;
  const strategyResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: strategyPrompt,
  });
  const strategy = strategyResponse.text;

  // Agent 2: Adaptive Transformation Agent
  const adaptPrompt = `
You are the Adaptive Transformation Agent.
Transform the following raw learning material based on the teaching strategy.

Teaching Strategy:
${strategy}

Raw Material:
${rawMaterial}

Provide the adapted learning material in Markdown format. Make it engaging, structured, and strictly adhere to the teaching strategy.
`;
  const adaptResponse = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: adaptPrompt,
  });
  const adaptedMaterial = adaptResponse.text;

  // Agent 3: Inclusivity Insight Agent
  const insightPrompt = `
You are the Inclusivity Insight Agent.
Evaluate the following adapted learning material.

Adapted Material:
${adaptedMaterial}

Provide your response strictly in the following JSON format:
{
  "readability_score": <number between 0-100>,
  "accessibility_score": <number between 0-100>,
  "strengths": [
    { "title": "<strength title>", "desc": "<strength description>" }
  ],
  "resources": [
    { "name": "<resource name>", "type": "<resource type (e.g., Simulation, Worksheet, Video)>" }
  ]
}
`;
  const insightResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: insightPrompt,
    config: {
        responseMimeType: "application/json"
    }
  });

  let insight: any = {};
  try {
    insight = JSON.parse(insightResponse.text || "{}");
  } catch (e) {
    console.error("Failed to parse insight JSON", e);
  }

  return {
    strategy,
    adaptedMaterial,
    readabilityScore: insight.readability_score || 85,
    accessibilityScore: insight.accessibility_score || 85,
    strengths: insight.strengths || [
        { title: 'Adaptive Pacing', desc: 'The material is broken down into manageable chunks.' }
    ],
    resources: insight.resources || [
        { name: 'Interactive Practice', type: 'Worksheet' }
    ]
  };
}
