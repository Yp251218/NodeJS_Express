// EXPRESS 
const express = require('express');  // import express framework into nodejs application
const { get } = require('http');
const app = express()                // create insance of express application
const path = require('path');


// API
// GET - read
// POST - create
// PUT - update
// DELETE - delete

app.get('/', (req,res) =>{
    res.send("Hello World");
})

app.get('/hello/:name2', (req,res) =>{
    // console.log(req);
    res.send('Hello ' + req.params.name2)
})

app.get('/about', (req,res) =>{
    // res.send("About Page");
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(8000, () =>{
    console.log(`Port listening at 8000`);
})