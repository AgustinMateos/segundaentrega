import jwt from "jsonwebtoken"

export const generateToken=(user)=>{
    /* 
    1er objeto de asociacion del token
    2 clave privada del cifrado 
    3 tiempo de expiracion
    */
    const token= jwt.sign({user},process.env.PRIVATE_KEY_JWT,{expiresIn:'12h'})
    return token
}

export const authToken=(req,res,next)=>{
    const authHeader=req.headers.authorization 
    if(!authHeader){
       return res.status(401).send({erorr:"usuario no autentificado "})
    }
    const token= authHeader.split(' ')[1]

    jwt.sign(token,process.env.PRIVATE_KEY_JWT,(error,credentials)=>{
        if(error){
            return res.status(403).send({error:"no autorizado"})
        }
        req.user=credentials.user
        next()
    })
}
