import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

// Image Storage
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(request,file,callback)=>{
        return callback(null,`${Date.now()}${file.originalname}`);
    }
})
const upload = multer({storage:storage})

foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listFood)
foodRouter.delete('/remove',removeFood)

export default foodRouter