import express from 'express';
import initApiRoutes from './src/routes/routes.js';
import cors from 'cors';

const appExpress = express();
appExpress.use(cors())
appExpress.use(express.json())
appExpress.use('/campus', initApiRoutes());

export default appExpress;