import express, { json } from 'express';
import { ENV_CONFIG } from './config';
import { mainRouter } from './router';

const app = express();

app.use(json())

app.get("/health", (_, res) => {
  return res.status(200).json({
    ok: true,
  })
})

app.use("/api", mainRouter);

app.listen(ENV_CONFIG.port, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(`Server running on port ${ENV_CONFIG.port}`);
})
