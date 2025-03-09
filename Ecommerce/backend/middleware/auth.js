import jwt from 'jsonwebtoken'

function auth (req,res,next){
    const tokenWithBearer = req.header('Authorization')
    const tokenArray  = tokenWithBearer.split(' ')
    const token = tokenArray[1];
    console.log(token)

    const user = jwt.decode(token, 'batch40');
    console.log(user)
    req.user = user;
    next();

}

export default {
    auth,
}