const express = require("express");
const Sequelize = require("sequelize");
// const { Op } = require("sequelize");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());


const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been estabished");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });


const Person = sequelize.define(
  "person",
  {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    profession: {
      type: Sequelize.STRING
      },
    age: {
      type: Sequelize.INTEGER
    }
  },
    {
      //
  }
);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created');
    })
    .then(function () {
        return Person.findAll();
    })
    .then(function (persons) {
        console.log(persons);
    })

// Person.bulkCreate([
//     { firstname: 'Pedro', lastname: 'Jardim', profession: 'IT', age: 62 },
//     { firstname: 'Jackeline', lastname: 'Camara', profession: 'Student', age: 18 },
//     { firstname: 'Miguel', lastname: 'Penaranda', profession: 'Student', age: 20 }
// ])
//     .then(function () {
//         return Person.findAll();
//     })
//     .then(function (persons) {
//         console.log(persons);
//     })


app.get('/', function(req, res, next) {
  Person.findAll().then(results => {                 //results puede ser cualquier nombre
    console.log("All persons:", JSON.stringify(results, null, 4));
    res.send(results);
  });

});    


app.post('/', function(req, res, next){
  Person.create({firstname: "Jane", lastname: "Doe", profession: "Student", age: 12}).then(results =>{
    console.log("El id de la persona adicionada es: ", results.id);
    res.status(200).send("El id de la persona adicionada es: ", results.id);
  })
})

app.delete('/', function(req,res,next){
  var id = req.body.id;
  Person.destroy({                             // en el destroy, el resultado va a ser siempre el numero de lienas afectadas 
    where: { 
      id: id 
    }
  }).then((Rows) =>{
    if (Rows == 0){
      console.log("No existe ninguna persona con el id " + id);
      res.status(400).send("No existe ninguna persona con el id " + id )
    }
    else{
      console.log("La persona con el id " + id + " fue eliminada y las lienas afectadas fueron" + Rows);
      res.status(200).send(" La persona con el id " + id + " fue eliminada y las lienas afectadas fueron" + Rows);
    }
  })
})

app.delete('/:id', function(req,res,next){
  var id = req.params.id;
  Person.destroy({                             // en el destroy, el resultado va a ser siempre el numero de lienas afectadas 
    where: { 
      id: id 
    }
  }).then((Rows) =>{
    if (Rows == 0){
      console.log("No existe ninguna persona con el id " + id);
      res.status(400).send("No existe ninguna persona con el id " + id )
    }
    else{
      console.log("La persona con el id " + id + " fue eliminada y las lienas afectadas fueron: " + Rows);
      res.status(200).send(" La persona con el id " + id + " fue eliminada y las lienas afectadas fueron: " + Rows);
    }
  })
})

app.get('/id', function(req,res,next){
  var id = req.query.id;
  Person.findAll().then(results => {
    res.send(results);
  })
})


        

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




