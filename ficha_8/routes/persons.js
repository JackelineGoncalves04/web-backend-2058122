var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ficha_7'
});



 /**
  * @swagger
  * definitions:
  *   Person:
  *     required:
  *       - firstname
  *       - lastname
  *     properties:
  *       firstname:
  *         type: string
  *       lastname:
  *         type: string
  *       age:
  *         type: number
  *       profession:
  *         type: string
  */



/**
 * @openapi
 * /persons:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

/**
 * @swagger
 * /person/{id}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Reads a single person by id
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 *
 */

/**
 * @swagger
 * /person:
 *   post:
 *      tags:
 *        - Person 
 *      summary: Creates and stores a person
 *      description: Return the id of the created person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: model
 *          description: Sample person
 *          in: body
 *          required: true
 *      responses:
 *        200:
 *          description: Successfully created
 *      
 *
 */

/**
 * @swagger
 * /person/{id}:
 *   delete:
 *      tags:
 *        - Person 
 *      summary: Delete a person by id
 *      description: Return the id of the created person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Sample person
 *          in: path
 *          required: true
 *      responses:
 *        200:
 *          description: Successfully deleted
 *    
 *
 */

/**
 * @swagger
 * /person/{age}/{profession}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Reads a person by age and profession
 *      description: Return the list of persons matching the description
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: age, profession
 *          description: Sample person
 *          in: path
 *          required: true
 *      responses:
 *        200:
 *          description: Successfully searched
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 *
 */






/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM persons", (err, results, fields) => {
    res.send(results);

  })
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query(" SELECT * FROM persons WHERE id = " + [id] , (err, results, fields) => {
      res.send(results);
  
    })
  });


  router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query(" DELETE FROM persons WHERE id = " + [id] , (err, results, fields) => {
      res.send(results);
  
    })
  });

  router.post('/', function(req, res, next) {
    var person = req.body;

    connection.query("INSERT INTO persons SET ?", [person] , (err, results, fields) => {
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
