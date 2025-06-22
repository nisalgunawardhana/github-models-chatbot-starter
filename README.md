# GitHub Models GPT-4o Starter

This repository demonstrates the use of GitHub Marketplace-hosted AI models (GPT-4o) using Node.js. It includes examples for:

- **Basic Chat Completion**
- **Multi-turn Conversation**
- **Streaming Responses**
- **Image Input Handling**
- **Function/Tool Calling**
- **Reasoning Models** (Complex problem solving and logical reasoning)

## Prerequisites

- Node.js installed on your system.If you don't have Node.js installed, follow the [official Node.js installation guide](https://nodejs.org/en/download/) for your operating system. You can download the installer for Windows, macOS, or Linux, or use a package manager as described in the documentation.

- A valid GitHub token with access to the inference endpoint.

## Setup

1. **Fork the Repository**
   - Visit the repository on GitHub and fork it to your account.

2. **Create a Branch**
   - Clone the forked repository:
     ```bash
     git clone https://github.com/your-username/github-models-gpt4o-starter.git
     cd github-models-gpt4o-starter
     ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory:
     ```bash
     cp .env.sample .env
     ```
   - Add your GitHub token to the `.env` file:
     ```env
     GITHUB_TOKEN=your_github_token_here
     ```
   - Ensure `.env` is added to `.gitignore`.

4. **Install Dependencies**
   - Run the following commands to install necessary packages:
     ```bash
     npm install
     ```
## Running the Examples

### Basic Chat Completion
Run the `sample-basic.js` file:
```bash
node sample-basic.js
```

### Multi-turn Conversation
Run the `sample-multiturn.js` file:
```bash
node sample-multiturn.js
```

### Streaming Responses
Run the `sample-stream.js` file:
```bash
node sample-stream.js
```

### Image Input Handling
Update the `imagePath` in `sample-image.js` to point to your image file, then run:
```bash
node sample-image.js
```

### Function/Tool Calling
Run the `sample-tools.js` file:
```bash
node sample-tools.js
```

### Reasoning Models
Run the `sample-reasoning.js` file to see complex reasoning and problem-solving capabilities:
```bash
node sample-reasoning.js
```

This example demonstrates:
- Mathematical reasoning
- Logic puzzles
- Complex problem solving
- Ethical reasoning scenarios

## Student Assessment Task

### Objective
Create a multi-turn chatbot for coding assistance using the provided starter repository.

5. **Complete the Assessment**
   - Create a new branch named `submission`:
     ```bash
     git checkout -b submission
     ```
   - Implement the multi-turn chatbot in the `assessment.js` file.

6. **Make a Pull Request**
   - Push your changes:
     ```bash
     git add .
     git commit -m "Complete assessment"
     git push origin submission
     ```
   - Create a pull request from your `submission` branch to the `submission-reviewer` branch on the main repository.

   ![How to Make a PR - Step 1](../img/pr-image1.png)
   ![How to Make a PR - Step 2](../img/pr-image2.png)

    Follow the above images for a visual guide on creating a pull request.

   **Tip:** After creating your pull request, copy the PR link from your browser's address bar. You will need this link when creating your submission issue in the next step.

7. **Create an Issue**
   - Go to the main repository and create an issue using the `submission` template.
   - Fill in the following details:
     - Full Name
     - University
     - Pull Request Link

8. **Review and Certification**
   - Once your submission is reviewed and approved, you will receive a badge and certificate.

## Notes

- Replace `your_github_token_here` in the `.env` file with your actual GitHub token.
- For the image input example, ensure the image file exists at the specified path.

---

## How to Get a GitHub Token (Developer Key)

To use these demos, you need a GitHub personal access token with the `models:read` permission.

### Steps to create a token:
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** (classic or fine-grained)
3. Give your token a name and select an expiration date
4. Under **"Select scopes"**, check `models:read`
5. Click **"Generate token"** and copy the token (you won't be able to see it again)

### Video Walkthrough

[![How to Get a GitHub Token](../img/demo_token_video.mp4)](../Images/demo_token_video.mp4)

Watch this short video for a step-by-step guide on generating your GitHub personal access token.

**Keep your token secure and do not share it publicly.**

---

## Other Resources

- [Github Models Demo](https://github.com/nisalgunawardhana/Github-Models-Demo)
- [Introduction to Github Models](https://github.com/nisalgunawardhana/Introduction-to-Github-models)

### Learn About MCP

- [Introduction to MCP](https://github.com/nisalgunawardhana/introduction-to-mcp)
- [How To Create MCP Server Using .Net](https://github.com/nisalgunawardhana/How-To-Create-MCP-Server)

---
## 🎁 Share and Win Amazing Tech Swag!

Love this project? Share it with your friends and community for a chance to win exclusive tech swag!

- **How to participate:**  
  Fill out [this form](https://forms.gle/eGxg1bAZgqwq6mPw7) to request your personalized share link. We'll send your unique link to your email within 2–3 business days.

- **Share and Win:**  
  Once you receive your link, share it with your friends. Ask them to complete the project and include your referral link when they submit.

- **Why share?**  
  The more friends who use your referral link, the higher your chances to win cool tech goodies—stickers, shirts, and more!

> **Note:** Make sure your email is visible in your GitHub profile or mention it in the form when you request your link.

Stay tuned—winners will be announced in the Discussions tab!


---

## 💬 Join the Discussion!

Have questions, ideas, or want to share your experience?  
We welcome you to use [GitHub Discussions](https://github.com/nisalgunawardhana/gpt4o-starter/discussions) for:

- Asking questions about setup or usage
- Sharing feedback or suggestions
- Requesting new features
- Connecting with other contributors

👉 **Click the "Discussions" tab at the top of this repo to start or join a conversation!**

Let's build and learn together!

---

## Connect with Me

Follow me on social media for more sessions, tech tips, and giveaways:

- [LinkedIn](https://www.linkedin.com/in/nisalgunawardhana/) — Professional updates and networking
- [Twitter (X)](https://x.com/thenisals) — Insights and announcements
- [Instagram](https://www.instagram.com/thenisals) — Behind-the-scenes and daily tips
- [GitHub](https://github.com/nisalgunawardhana) — Repositories and project updates
- [YouTube](https://www.youtube.com/channel/UCNP5-zR4mN6zkiJ9pVCM-1w) — Video tutorials and sessions

Feel free to connect and stay updated!

---

## License

MIT
