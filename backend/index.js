import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import connectDb from './database/connectDb.js';
import contactRouter from './routes/contact.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/donate', contactRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8000, () => {
    connectDb(process.env.mongoURI)
    console.log('Server is running on port 8000');
});
