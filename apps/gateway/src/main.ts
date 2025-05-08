import express from 'express';
import routes from './routes/workflows';
import authMiddleware from './middleware/auth';

const app = express();
app.use(express.json());
app.use(authMiddleware);

app.use('/api/workflows', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway running on http://0.0.0.0:${PORT}`);
});
