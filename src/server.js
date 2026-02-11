import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.post("/", (req,res)=>{
    res.send ("Got a post request")
})

app.put ("/user", (req,res)=>{
    res.send("Got put request ")
})

app.listen(PORT, () => {
    console.log(
        `Server app running on port ${PORT}`
    )

})
