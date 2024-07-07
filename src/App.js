import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express({limit: "16kb"});

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

export {app};