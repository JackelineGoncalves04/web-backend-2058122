var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'projeto_1'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM rentals", (err, results, fields) => {
    res.send(results);

  })
});

/* EJERCICIO I  */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query(" SELECT * FROM rentals WHERE rentals_id = ?",[id] , (err, results, fields) => {
      res.send(results);
  
    })
  });

/*EJERCICIO 2*/

router.delete('/user', function(req, res, next){
  var id = req.query.id;
  connection.query(" DELETE FROM rentals WHERE rentals_id = ? ", [id], (err, results, fields) => {
    if (err){
      res.status(500).end("Error while perfoming query.")
    }
    else if (results.affectedRows == 0){
      res.status(400).end("Id not found.");
    }
    else{
      res.status(200).send("deleted successfully");
    }
  })
});

/*EJERCICIO 3*/

router.get('/location/place', function(req, res, next){
  var name = req.query.name;

  connection.query('SELECT * FROM rentals WHERE return_location = ?', [name], (err, results, fields) => {
    res.send(results);
  })
});

/*EJERCICIO 4*/

router.put('/:id',  function(req, res, next){
  var comment = req.body.comments;
  var id = req.params.id;

  connection.query('UPDATE rentals SET comments = ? WHERE rentals_id = ?',  [comment, id],  (err, results, fields) => {
    res.send(results);
  })

});

/*EJERCICIO 5*/

router.get('/order/price', function(req, res, next) {

  connection.query('SELECT * FROM rentals', (err, results, fields) => {

    results.sort((a, b) => a.price - b.price);

    res.send(results);
  });
});







  router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query(" DELETE FROM rentals WHERE id = " + [id] , (err, results, fields) => {
      res.send(results);
  
    })
  });

  router.post('/', function(req, res, next) {
    var person = req.body;

    connection.query("INSERT INTO rentals SET ?", [person] , (err, results, fields) => {
      res.send(results);
    })
  });

  router.get('/:age/:profession', function(req, res, next) {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query(" SELECT * FROM persons WHERE age = ? AND profession = ? ", [age, profession] , (err, results, fields) => {
      res.send(results);
  
    })
  });


  router.put('/:id', function(req, res, next) {
    var person = req.body;
    var id = req.params.id;

    connection.query("UPDATE persons SET ? WHERE id = ?", [person, id] , (err, results, fields) => {
      res.send(results);
    })
  });

module.exports = router;
