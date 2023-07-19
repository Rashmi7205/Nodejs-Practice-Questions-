const http=require('http');

const PORT = 5000;

const server=http.createServer((req,res)=>{
    
    /// for the '/' request
    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const productData = JSON.stringify([
            {
              "name": "Product 1",
              "brand": "Brand A",
              "price": 19.99,
              "color": "Blue",
              "size": "Medium",
              "category": "Clothing"
            },
            {
              "name": "Product 2",
              "brand": "Brand B",
              "price": 9.99,
              "color": "Black",
              "size": "Large",
              "category": "Shoes"
            }
          ])
        res.write(productData);
        res.end();
    }

    /// for '/men' request

    if(req.url=='/men'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const productData = JSON.stringify([
            {
              "name": "Product 3",
              "brand": "Brand A",
              "price": 19.99,
              "color": "Blue",
              "size": "Medium",
              "category": "Clothing"
            },
            {
              "name": "Product 4",
              "brand": "Brand B",
              "price": 9.99,
              "color": "Black",
              "size": "Large",
              "category": "Shoes"
            }
          ])
        res.write(productData);
        res.end();
    }

    /// for '/women'
    if(req.url=='/women'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const productData = JSON.stringify([
            {
              "name": "Product 1",
              "brand": "Brand A",
              "price": 19.99,
              "color": "Blue",
              "size": "Medium",
              "category": "Clothing"
            },
            {
              "name": "Product 2",
              "brand": "Brand B",
              "price": 9.99,
              "color": "Black",
              "size": "Large",
              "category": "Shoes"
            }
          ])
        res.write(productData);
        res.end();
    }
    /// for '/other'
    if(req.url==='/other'){
        res.write("Page Not Found");
        res.end();
    }

    /// invalid url
    else{
        res.write("ERROR! invalid url");
        res.end();
    }

})

server.listen(PORT,()=>{
    console.log(`Server is Running at ${PORT}`);
})






///  Build a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
///  ‘/’->send msg as “We:come to Men & Women Dummy Data”F
///  '/men'-> send 10 products data of menF
///  '/women' → send 10 products data of wome;
///  ‘/other’  → send response as page not found