///Q.4 Build a Server that Generate! Random Number Using Express
// ‘/random’ → send random number in random {random:10}

const express=require('express');
const app=express();

app.get('/random',(req,res)=>{
        return res.status(200).json({
            success:true,
            random:Math.random()
        });
})

app.listen(5000,()=>{
    console.log(`Server is Running at 5000`);
})