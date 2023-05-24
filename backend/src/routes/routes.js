import { Router } from "express";
import routerProducto from "./products.js";
import routerCart from "./cart.js";
import routerSession from "./session.js";
import routerUser from "./user.js";
import routerGithub from "./github.js";

const router = Router()

router.use("/product", routerProducto)
router.use('/user', routerUser)
router.use('/api/cart', routerCart)
router.use('/api/session', routerSession)
router.use('/session', routerGithub)
router.use('*', (req,res)=>{
res.status(404).send({error:"404 ruta not found"}) 
})

export default router