const express = require('express');
const path = require('path')
const app = express();

// server static file from current project folder
app.use(express.static(__dirname));

app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(4000,()=>{
    console.log("Server is running at http://localhost:4000")
})