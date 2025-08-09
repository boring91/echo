import { components } from "../../../_generated/api";
import { Agent } from "@convex-dev/agent";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const supportAgent = new Agent(components.agent, {
  name: "My agent",
  chat: openrouter.chat("deepseek/deepseek-chat-v3-0324:free"),
  instructions: "You are a customer support agent",
});
