const ex=require("express")
const app=ex()

app.get("/",(req,res)=>{
    res.send(`
    
    <a href="/home">HOME</a>
    <a href="/contact">CONTACT</a>
    <a href="/about">ABOUT</a>
    <a href="/login">LOGIN</a>
    <a href="/sign up">SIGN UP</a>

    `)
})

app.get("/login",(req,res)=>{
    res.send("<h1>THIS IS LOGIN PAGE")
})

app.get("/home",(req,res)=>{
    res.send("<h1>THIS IS HOME PAGE")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>THIS IS CONTACT PAGE")
})

app.get("/sign up",(req,res)=>{
    res.send("<h1>THIS IS SIGN UP PAGE")
})

app.get("/about",(req,res)=>{
    res.send("<h1>THIS IS ABOUT PAGE")
})

app.listen(7001)



