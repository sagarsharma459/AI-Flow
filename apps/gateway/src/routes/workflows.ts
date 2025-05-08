import { Router } from 'express';
import rpcClient from '../services/rpcClient';
const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const workflow = await rpcClient.createWorkflow(req.body);
    res.status(201).json(workflow);
  } catch (err) { next(err); }
});

router.post('/:id/run', async (req, res, next) => {
  try {
    const result = await rpcClient.runWorkflow(req.params.id);
    res.json(result);
  } catch (err) { next(err); }
});

export default router;
  
