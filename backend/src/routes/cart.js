import { Router } from "express";
import { createCarrito, getProductsCart,updateProductCart,addProductCart,deleteProductCart } from '../controllers/cart.controller.js' 

const routerCart = Router()

routerCart.get("/:id", getProductsCart)
routerCart.post("/:id", addProductCart)
routerCart.put("/:id", createCarrito)
routerCart.post("/", createCarrito)
routerCart.put("/product/:id", updateProductCart)
routerCart.delete("/:id", deleteProductCart)
routerCart.delete("/product/:id", deleteProductCart)


export default routerCart