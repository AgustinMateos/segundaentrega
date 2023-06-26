import { Router } from "express";
import { getUserByEmail, getUserById, getUsers,createUser } from "../controllers/user.controller.js";


import passport from "passport";

const routerUser = Router()

routerUser.post("/register", passport.authenticate('register'), createUser)
routerUser.get("/:id", getUserById)
routerUser.get('/', getUsers )
routerUser.get('/email/:email', getUserByEmail )

export default routerUser