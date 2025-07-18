require('dotenv').config();
const readline = require('readline-sync');
const { OpenAI } = require('openai');

// Initialize OpenAI client with GitHub's AI inference API
const openai = new OpenAI({
  apiKey: process.env.GITHUB_TOKEN,
  baseURL: 'https://api.githubcopilot.com/v1',
  defaultHeaders: {
    'X-GitHub-Api-Version': '2023-07-01'
  }
});

// Store conversation history
let conversationHistory = [
  {
    role: 'system',
    content: `You are a helpful coding assistant. Provide accurate, concise, and practical coding advice to developers. Support multiple languages and help debug, explain, and improve code.`
  }
];

// Helper function for sending messages to GPT-4o
async function getAIResponse(userMessage) {
  try {
    conversationHistory.push({ role: 'user', content: userMessage });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: conversationHistory,
      temperature: 0.7
    });

    const reply = response.choices[0].message.content;
    conversationHistory.push({ role: 'assistant', content: reply });

    return reply;
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
}

// Main chat loop
async function main() {
  console.log("🤖 Coding Assistant Chatbot (type 'exit' to quit)");

  while (true) {
    const userInput = readline.question("\nYou: ");

    if (userInput.toLowerCase() === 'exit') {
      console.log("👋 Goodbye! Happy coding!");
      break;
    }

    const aiReply = await getAIResponse(userInput);
    console.log("\nAssistant: " + aiReply);
  }
}

main();
