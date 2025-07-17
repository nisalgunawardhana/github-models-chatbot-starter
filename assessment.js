/**
 * MULTI-TURN CODING ASSISTANT CHATBOT
 * 
 * This chatbot provides coding assistance using GPT-4o model via GitHub's AI inference API.
 * Features:
 * - Maintains conversation context across multiple exchanges
 * - Specialized in programming concepts, debugging, and best practices
 * - Supports multiple programming languages
 * - Graceful error handling and user exit functionality
 * - Interactive command-line interface
 */

import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline";

// Load environment variables for secure token management
dotenv.config();

// Get GitHub token for API authentication
const token = process.env["GITHUB_TOKEN"];

// GitHub's AI inference endpoint
const endpoint = "https://models.github.ai/inference";

// GPT-4o model for conversational AI
const modelName = "openai/gpt-4o";

export async function main() {
    // Validate GitHub token
    if (!token) {
        console.error("Error: GITHUB_TOKEN not found in environment variables.");
        console.log("Please add your GitHub token to a .env file as GITHUB_TOKEN=your_token_here");
        return;
    }

    // Initialize OpenAI client with GitHub's endpoint
    const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token
    });

    // Set up readline interface for command-line interaction
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Initialize conversation with system message to define AI behavior as coding assistant
    let messages = [
        {
            role: "system",
            content: `You are a helpful coding assistant chatbot. Your role is to:
      - Help users with programming concepts, syntax, and best practices
      - Provide clear code examples and explanations
      - Assist with debugging code issues
      - Support multiple programming languages (JavaScript, Python, Java, C++, etc.)
      - Offer step-by-step guidance for coding problems
      - Explain complex programming concepts in simple terms
      - Always provide accurate, helpful, and educational responses
      
      When helping with code:
      - Use proper code formatting with backticks
      - Explain what the code does
      - Mention any important considerations or best practices
      - Ask clarifying questions when needed`
        }
    ];

    console.log("🤖 Coding Assistant Chatbot");
    console.log("=".repeat(50));
    console.log("Welcome! I'm here to help you with coding questions, debugging, and programming concepts.");
    console.log("I support multiple programming languages and can help with:");
    console.log("• Writing functions and classes");
    console.log("• Debugging code issues");
    console.log("• Explaining programming concepts");
    console.log("• Best practices and code optimization");
    console.log("• Algorithm and data structure help");
    console.log();
    console.log('Type "exit" to quit the chat at any time.');
    console.log("=".repeat(50));

    // Recursive function to handle continuous conversation
    async function chatLoop() {
        rl.question('\n💻 You: ', async (input) => {
            try {
                // Check for exit command to end conversation
                if (input.trim().toLowerCase() === "exit") {
                    console.log("\n👋 Thanks for using the Coding Assistant! Happy coding!");
                    rl.close();
                    return;
                }

                // Validate input
                if (!input.trim()) {
                    console.log("🤖 Assistant: Please enter a question or coding problem you'd like help with.");
                    chatLoop();
                    return;
                }

                // Add user message to conversation history
                messages.push({ role: "user", content: input });

                // Show loading indicator
                console.log("🤖 Assistant: Thinking...");

                // Send entire conversation history to maintain context
                const response = await client.chat.completions.create({
                    messages,
                    model: modelName,
                    temperature: 0.7, // Balanced creativity for coding assistance
                    max_tokens: 1000 // Reasonable limit for responses
                });

                // Extract and display AI response
                const reply = response.choices[0].message.content;
                console.log(`🤖 Assistant: ${reply}`);

                // Add AI response to conversation history for future context
                messages.push({ role: "assistant", content: reply });

                // Continue the conversation loop
                chatLoop();

            } catch (error) {
                // Handle API errors gracefully
                console.error("❌ Error:", handleApiError(error));
                console.log("Please try again or type 'exit' to quit.");
                chatLoop();
            }
        });
    }

    // Start the conversation loop
    chatLoop();
}

/**
 * Handle different types of API errors with user-friendly messages
 */
function handleApiError(error) {
    if (error.code === 'invalid_api_key') {
        return "Invalid GitHub token. Please check your GITHUB_TOKEN in the .env file.";
    } else if (error.code === 'rate_limit_exceeded') {
        return "Rate limit exceeded. Please wait a moment before trying again.";
    } else if (error.code === 'network_error') {
        return "Network error. Please check your internet connection.";
    } else if (error.message) {
        return `API Error: ${error.message}`;
    } else {
        return "An unexpected error occurred. Please try again.";
    }
}

// Execute main function with comprehensive error handling
main().catch((err) => {
    console.error("❌ The coding assistant encountered an error:", err.message || err);
    console.log("Please check your configuration and try again.");
    process.exit(1);
});