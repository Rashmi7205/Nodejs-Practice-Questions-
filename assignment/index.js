const fs = require('fs');


///  Reading from the file
fs.readFile('nodejs_architecture.txt',(err,data)=>{
    console.log(data.toString());
})  ;


// appending data to the file
fs.appendFile('nodejs_architecture.txt','Some other text apended',(err,data)=>{
    console.log(data);
})

// deleting the files
if(fs.existsSync('nodejs_architecture.txt')){
    fs.unlinkSync('nodejs_architecture.txt');
    console.log("File Deleted SuccessFully");
}
else{
    console.log("File does not exist");
}




