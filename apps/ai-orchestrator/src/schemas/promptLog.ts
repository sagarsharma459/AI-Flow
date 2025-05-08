import { prisma } from '../services/db';

export async function logPrompt(prompt: string, response: string) {
  return prisma.promptLog.create({ data: { prompt, response } });
}
