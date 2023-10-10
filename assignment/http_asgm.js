const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!");
    }
});

server.listen(3000,()=>{
    console.log('Server is Runnig at 3000')
});

