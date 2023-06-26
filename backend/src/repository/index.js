import usersRepository from "./users/users.repository.js";
import { getManagerUsers,getManagerProducts,getManagerCart } from "../dao/Factory.js";
import productsRepository from "./products/products.repository.js";
import cartRepository from "./carts/carts.repository.js";


const data=await getManagerUsers()

const userDao = new data.ManagerUserMongoDB 

export const userService= new usersRepository(userDao)
// /////////////

const dataProduct=await getManagerProducts()

const productDao=new dataProduct.ManagerProductMongoDB

export const productService=new productsRepository(productDao)

///////////////


const dataCart=await getManagerCart()

const cartDao=new dataCart.ManagerCartMongoDB
export const cartService=new cartRepository(cartDao)
