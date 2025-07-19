import dotenv from 'dotenv';
import readlineSync from 'readline-sync';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.GITHUB_API_KEY,
  baseURL: 'https://api.github.com/openai', // GitHub's AI inference API
  defaultHeaders: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

const conversationHistory = [
  {
    role: 'system',
    content: `You are a helpful, knowledgeable, and friendly coding assistant. 
You answer user questions about programming with examples, explanations, and clear advice. 
You support multiple languages like JavaScript, Python, Java, etc., and can help debug or review code.`
  }
];

async function chat() {
  console.log("🤖 Coding Assistant Bot (type 'exit' to end)\n");

  while (true) {
    const userInput = readlineSync.question('👤 You: ');
    if (userInput.toLowerCase() === 'exit') {
      console.log('👋 Goodbye! Happy coding!');
      break;
    }

    conversationHistory.push({ role: 'user', content: userInput });

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: conversationHistory,
        temperature: 0.7
      });

      const assistantReply = response.choices[0].message.content;
      console.log(`🤖 Bot: ${assistantReply}\n`);

      conversationHistory.push({
        role: 'assistant',
        content: assistantReply
      });
    } catch (err) {
      console.error('❌ Error:', err.message);
    }
  }
}

chat();
