const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://prajapatiharsh08:harsh875@cluster0.y2orx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const db=mongoose.connection

db.on('connected', (err,data)=>{
    if(err){
        console.log('error')
    }
    else {
        console.log('Database Connected....')
    } 
}) 