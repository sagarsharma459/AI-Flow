import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;

export default {
  sign(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
  },
  verify(token: string) {
    return jwt.verify(token, SECRET);
  }
};
