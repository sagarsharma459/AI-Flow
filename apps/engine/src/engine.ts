import { Queue, Worker } from 'bullmq';
import Redis from 'ioredis';
import WorkflowModel from './models/Workflow';

const connection = new Redis(process.env.REDIS_URL);
const queue = new Queue('tasks', { connection });

export async function executeStep(workflowId: string, step: any) {
  // TODO: implement step execution logic
  return Promise.resolve();
}

export default class Engine {
  static async run(workflow: WorkflowModel) {
    for (const step of workflow.steps) {
      await executeStep(workflow.id, step);
    }
  }
}
