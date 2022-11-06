const express = require("express")
const res = require("express/lib/response")
const router = express()
const app = express()



app.use("/public", express.static("public"))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/single-service",(req,res)=>{
    res.render("single-service.ejs")})

app.listen("8000",()=>{
})