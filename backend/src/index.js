import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import multer from 'multer'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import * as path from 'path'
import router from './routes/routes.js'
import initializePassport from './config/passport.js'
import twilio from 'twilio'
const app = express()

app.use(cookieParser(process.env.PRIVATE_KEY_JWT))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGODBURL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 210,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
//Passport
initializePassport()
app.use(passport.initialize())
app.use(passport.session())
//
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "./views"))

app.set("port", process.env.PORT || 5000)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

//Routes
app.use('/', router)

//mensajeria twilio

const TWILIO_ACCOUNT_SID=process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN=process.env.TWILIO_AUTH_TOKEN;
const TWILIO_SMS_NUMBER=process.env.TWILIO_SMS_NUMBER;

const client=twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,TWILIO_SMS_NUMBER)

app.get('/sms',async(req,res)=>{
    let result=await client.messages.create({
    body:'Esto es un sms',
    from: TWILIO_SMS_NUMBER,
    to:"+5491164316343"
   })
res.send({status:"success",result:"Messege Sent"})})

const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))