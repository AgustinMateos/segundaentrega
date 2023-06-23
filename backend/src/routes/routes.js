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


export default router