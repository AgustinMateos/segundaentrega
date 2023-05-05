import { Router } from "express";
import passport from "passport";

const routerGitHub=Router()

routerGitHub.get('/github',passport.authenticate('github',{scope:
    ['user:email']}),async(req,res)=>{}
)

routerGitHub.get('/githubSession',passport.authenticate('github'),async(req,res)=>{
    req.session.user=req.user
    res.redirect('/product')
})

export default routerGitHub