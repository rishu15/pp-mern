import express from 'express'
import { dummyResponse,generateImage } from '../controller/imageController.js';
const ImageRouter = express.Router();
ImageRouter
    .route('/')
    .get(dummyResponse)
    .post(generateImage);
export default ImageRouter;