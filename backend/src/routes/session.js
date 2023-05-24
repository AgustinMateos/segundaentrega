import { Router } from "express";
import passport from "passport";
import { destroySession, getSession, testLogin } from "../controllers/session.controller.js";
import {passportError} from "../utils/messageErrors.js";
const routerSession = Router()

routerSession.post("/login", passport.authenticate('login'), testLogin)
routerSession.get("/logout", destroySession)
routerSession.get("/terstJWT",passport.authenticate('jwt',{session:false},(req,res)=>{
    res.send(req.user)
}) )
routerSession.get("/current",passportError('jwt'),(req,res)=>{
    res.send(req.user)
})
export default routerSession 
