import express from 'express'
import cors from "cors"
import ImageRouter from './routes/imageRouters.js';
const app = express();

app.use(express.json());
app.use(cors({origin:true}));
app.use('/api/image-generator', ImageRouter);
 app.listen(1400);