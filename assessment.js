/**
 * ASSESSMENT TASK - MULTI-TURN CODING ASSISTANT CHATBOT
 * 
 * This file serves as the main assignment for creating a sophisticated coding assistant
 * chatbot using the GPT-4o model through GitHub's AI inference API.
 * 
 * OBJECTIVE:
 * Create a multi-turn conversational chatbot that provides meaningful coding guidance
 * and assistance to developers. The chatbot should maintain conversation context
 * across multiple exchanges and provide helpful, accurate coding advice.
 * 
 * REQUIREMENTS TO IMPLEMENT:
 * 1. Environment Setup:
 *    - Load environment variables using the `dotenv` package
 *    - Initialize the OpenAI API client with GitHub token authentication
 *    - Configure the endpoint to use GitHub's AI inference service
 * 
 * 2. Multi-turn Conversation Logic:
 *    - Implement a conversation loop that maintains context
 *    - Store conversation history to preserve context across exchanges
 *    - Handle user input and AI responses in a continuous dialogue
 * 
 * 3. Coding Assistance Features:
 *    - Provide meaningful coding guidance based on user queries
 *    - Support various programming languages and concepts
 *    - Offer code examples, explanations, and best practices
 *    - Handle debugging help and code review suggestions
 * 
 * EXAMPLE INTERACTIONS:
 * User: "How do I create a function in JavaScript?"
 * Bot: "You can create a function using the `function` keyword or as an arrow function. Here's an example: ..."
 * 
 * User: "Can you help me debug this code?"
 * Bot: "I'd be happy to help debug your code. Please share the code and describe the issue you're experiencing..."
 * 
 * TECHNICAL IMPLEMENTATION NOTES:
 * - Use the OpenAI SDK with GitHub's models endpoint
 * - Implement proper error handling for API calls
 * - Consider user experience with clear prompts and responses
 * - Maintain conversation state throughout the session
 * - Allow graceful exit from the conversation
 */

// Assessment Task
// Create a multi-turn chatbot for coding assistance using the GPT-4o model.
// Use the `openai` package and implement the chatbot in this file.

// Steps:
// 1. Load environment variables using `dotenv`.
// 2. Initialize the OpenAI API with the GitHub token.
// 3. Implement a multi-turn conversation logic.
// 4. Provide meaningful coding guidance based on user queries.

// Example:
// User: "How do I create a function in JavaScript?"
// Bot: "You can create a function using the `function` keyword or as an arrow function. Here's an example: ..."


import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline";
import { highlight } from 'cli-highlight';


// Load environment variables for secure token management
dotenv.config();
// Get GitHub token for API authentication
const token = process.env["GITHUB_TOKEN"];
// GitHub's AI inference endpoint
const endpoint = "https://models.github.ai/inference";
// GPT-4o model for conversational AI
const modelName = "openai/gpt-4o";

export async function main() {
    // Initialize OpenAI client with GitHub's endpoint
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    // Set up readline interface for command-line interaction
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Initialize conversation with system message to define AI behavior
    let messages = [
        { role: "system", content: "You are a helpful coding assistant." }
    ];

    // Recursive function to handle continuous conversation
    async function chatLoop() {
        rl.question('User: ', async (input) => {
            // Check for exit command to end conversation
            if (input.trim().toLowerCase() === "exit") {
                rl.close();
                return;
            }

            if (input.trim().toLowerCase() === "clear") {
                // Clear conversation history
                console.log("Conversation history cleared.");
                chatLoop();
                return;
            }

            // Add user message to conversation history
            messages.push({ role: "user", content: input });

            // Send entire conversation history to maintain context
            const response = await client.chat.completions.create({
                messages,
                model: modelName
            });

            // Extract and display AI response
            const reply = response.choices[0].message.content;
            console.log("Bot:\n", highlight(reply, { language: 'javascript', ignoreIllegals: true }));
            // Add AI response to conversation history for future context
            messages.push({ role: "assistant", content: reply });

            // Continue the conversation loop
            chatLoop();
        });
    }
    // Provide user instructions and start the conversation
    console.log("Welcome to the Coding Assistant Chatbot!");
    console.log("Type your coding questions or commands. Type 'exit' to end the conversation.");
    chatLoop();
}

// Execute main function with error handling
main().catch(error => {
    console.error("An error occurred:", error);
});
