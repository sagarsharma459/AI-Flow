import Engine from './engine';
import { Worker } from 'bullmq';

const worker = new Worker('tasks', async job => {
  const { workflowId } = job.data;
  const workflow = await WorkflowModel.findById(workflowId);
  if (workflow) await Engine.run(workflow);
});

console.log('Engine runner listening on tasks queue');
