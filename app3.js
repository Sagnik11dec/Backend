const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>GOOD AFTERNOON</h1>")
})

app.get("/about",(res,req)=>{
    res.send("<h1>THIS IS ABOUT PAGE</h1>")
})

app.get("/contact",(res,req)=>{
    res.send("<h1>THIS IS CONTACT PAGE</h1>")
})

app.get("/Home",(res,req)=>{
    res.send("<h1>THIS IS HOME PAGE</h1>")
})

app.get("/html",(req,res)=>{
    res.send(`
    <table>
        <thead>
            <tr>
                <th>BACKEND</th>
                <th>FRONTEND</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <ul>
                        <li>NODE</li>
                        <li>EXPRESS</li>
                        <li>PYTHON</li>
                        <li>JAVA</li>
                        <li>PHP</li>
                        </ul>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REACT</li>
                        <li>ANGULAR</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>)
    `)
})

app.get("/json",(req,res)=>{
    res.send([
        {"name":"puja","roll":1},
        {"name":"raju","roll":2},
        {"name":"rahul","roll":3}
        
    ])
})

app.listen(6007)