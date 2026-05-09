import express, { NextFunction, Request, Response } from 'express';

import machinesRouter from './routes/machines.routes';

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });

  next();
});

app.get('/', (req, res) => {
  res.send('🎮 Arcade API funcionando');
});

app.use('/api/v1/machines', machinesRouter);
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err.stack);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
);

export default app;