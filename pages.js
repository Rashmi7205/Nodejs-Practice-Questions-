const express=require('express');
const app=express();

const PORT=5000;


app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:`I am Homepage`
    });
});

app.get('/about',(req,res)=>{
     
    return res.status(200).json({
        success:true,
        message:`I am about page`
    });
});

app.get('/contact',(req,res)=>{
    return res.status(200).json({
        success:true,
        email:`support@pwskill.com`
    });
});


app.listen(PORT,()=>{
    console.log("Server is running at",PORT);
})
