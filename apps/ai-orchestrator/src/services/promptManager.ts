import { callOpenAI } from './openai';
import { callHuggingFace } from './huggingface';

export default {
  async run(prompt: string) {
    // TODO: caching, provider selection logic
    return callOpenAI(prompt);
  }
};
