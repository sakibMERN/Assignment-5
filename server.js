let http = require('http');
let fs = require('fs');
let path = require('path');

    let server= http.createServer(function(req,res){

        const publicDir= path.join(__dirname,'Public');

        const filePath = path.join(publicDir, req.url==="/" ? 'home.html' : req.url==="/contact" ? 'contact.html' : req.url==="/about" ? 'about.html' : req.url);

        fs.readFile(filePath,function(error,data){

            if(error){

                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("404 error");
                res.end();

            }

            else{

                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();

            }

        })

    });

server.listen(3000);
console.log('Server Run Success');