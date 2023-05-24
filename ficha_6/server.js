const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json());

app.use(function(req, res){
    console.log("MIDDLEWARE");

});

 //siempre que el en point va a ser invocado se tiene que guardar un registro
fs.appendFileSync("log.txt", "SERVER STARTED \n");   //ESTO CREA EL FICHERO LOG.TXT

function writelog(req){
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";      
    fs.appendFileSync("log.txt", log);
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });                    


  app.get('/', (req, res) => {
    writelog(req);
  
    const body = 'hello world';
    res.writeHead(200, {             //200 es el codigo html
        'content-Length': Buffer.byteLength(body),            // el tamano del contenido
        'content-Type' : 'text/plain'               // el tipo de variable/contenido
    });

    res.end(body);

  })



  app.get('/root', (req, res) => {
    const body = '<h1> Hello World </h1>';
    res.writeHead(200, {            
        'content-Length': Buffer.byteLength(body),          
        'content-Type' : 'text/html'               
    });

    res.end(body);

  })


  app.get('/html', (req, res) => {
    const body = fs.readFileSync('./index.html');
    res.writeHead(200, {            
        'content-Length': Buffer.byteLength(body),          
        'content-Type' : 'text/html'               
    });

    res.end(body);

  })

  app.get('/saludo/:name', (req, res) => {
    var date = new Date();
    var name = req.params.name;
    var body = fs.readFileSync('./index.html', 'utf-8');   //utf es el codigo del formato
    body = body.replace("{name}", name );   //sustituye lo que esta en el fichero html por la variable
    body = body.replace("{date}", date.toDateString() );

    res.writeHead(200, {              
        'content-Length': Buffer.byteLength(body),          
        'content-Type' : 'text/html'               
    });

    res.end(body);

  })


  
  

 
