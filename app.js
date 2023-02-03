// Import express package
const express = require('express');
const upload = require('./upload');


.....
app.get('/', (req,res)=>{
   res.render('index');
})

// route to handle image upload
app.post('/upload', (req,res)=>{
   upload(req,res, (err)=>{
       if (err){
           console.log(err)
       }else{
           console.log(req.file)
           res.send('test');
       }
   })
})
....
