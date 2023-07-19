const express=require('express');
const app=express();

const PORT=5000;

app.use(express.json());

let counter = 0;
app.post('/',(req,res)=>{
    counter = parseInt(req.body.counter);
    
    return res.status(200).json({
        success:true,
        message:"Counter Set successfully",
        counter
    });
});

app.get('/increase',(req,res)=>{
    counter++;
    return res.status(200).json({
        success:true,
        message:"Counter incremented successfully",
        counter
    });
});

app.get('/decrease',(req,res)=>{
    counter--;
    return res.status(200).json({
        success:true,
        message:"Counter decremented successfully",
        counter
    });
});


app.listen(PORT,()=>{
    console.log("Server is running at",PORT);
})
