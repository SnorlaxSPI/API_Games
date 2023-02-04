import express from 'express';
require('dotenv/config');
import { router } from './routes/routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("🚀🚀 Server Started!!");
});

export { app };


