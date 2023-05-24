const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json());

function readFile (path){                         //path es el camino del fichero
    var content = fs.readFileSync(path);
    return JSON.parse(content);

}
var content = readFile('./persons.json');     // cada vez que cambie una persona esto va a actualizar el fichero 
console.log(content);


 
function writeFile (path, data){        
  fs.writeFileSync(path,data);  

}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/users', (req, res) => {
    res.send(content);
  })

  app.post('/users', (req, res) => {

    if ( Object.keys(req.body).length == 0) {
      res.status(400).send("Details not valid");
      
    }
    else{
     var person = req.body;
     var size = Object.keys(content).length;
     var id = size + 1;
     person.id = id;
     content["person" + id] = person;

     writeFile("./person.json", JSON.stringify(content));
   

    res.send("ID: " + id);
    }
     
  })
  


  app.get('/users/:id', (req, res) => {      //users:id los dos puntos es que esta recibiendo un parametro
    var id = req.params.id;
    var person = content["person" + id];
    if (person == undefined){
      res.status(404).send("ID not found");
    }
    else{
    res.send(person);
    }
  })

  app.put('/users/:id', (req, res) => {

    var id = req.params.id;
    var person = content["person" + id];

    if ( person != undefined){
      content["person" + id] = req.body;
      content["person" + id].id = id;
      writeFile("./person.json", JSON.stringify(content));

      res.send(content);

    }
    else {
      res.send ("La persona no existe")
    }

   
  })

  app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    var person = content["person" + id];

    if ( person != undefined){
    delete content["person" + id];
    writeFile("./person.json", JSON.stringify(content));
    res.send( "id: " + id );
    }
    else {
      res.send ("La persona no existe")
    }
    
  })  



  //en point es un url en una api