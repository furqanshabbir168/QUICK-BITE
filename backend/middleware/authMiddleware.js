import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function authMiddleware(request,response,next) {
    const {token} = request.headers;
    if(!token){
        return response.json({
            success: false,
            message:"Not Authorized!"
        })
    }
    try{
        const decodeToken = jwt.verify(token,process.env.USER_SECRET_KEY);
    request.body.userId = decodeToken.id;
    next();
    } catch(error){
        console.log(error);
    }
}
export default authMiddleware