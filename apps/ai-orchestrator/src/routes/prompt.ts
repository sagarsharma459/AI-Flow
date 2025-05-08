import { Router } from 'express';
import promptManager from '../services/promptManager';
const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await promptManager.run(req.body.prompt);
    res.json(response);
  } catch (err) { next(err); }
});

export default router;
