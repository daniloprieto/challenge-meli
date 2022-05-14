import express from 'express';
import itemsRouter from './routes/items';
import { HttpError } from './shared/error';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );
  res.setHeader("X-Frame-Options", "deny");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.use('/api/items', itemsRouter);

app.use((_req, _res, nex) => {
  return nex(new HttpError(404, "Route not found"));
});

app.use((error: any, _req: any, res: any, next: any) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An error has occurred" });
});

app.listen(PORT, () => {
  console.log('Server on port ', PORT)
})
