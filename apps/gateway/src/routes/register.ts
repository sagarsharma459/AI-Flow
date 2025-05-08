import { Router } from 'express';
const router = Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  // TODO: save user to DB
  res.status(201).json({ message: 'Registered' });
});

export default router;
