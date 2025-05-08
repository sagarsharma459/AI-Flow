import { Router } from 'express';
import jwtService from '../services/jwt';
const router = Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  // TODO: validate against DB
  const user = { id: 'user-id', email };
  const token = jwtService.sign(user);
  res.json({ token });
});

export default router;
