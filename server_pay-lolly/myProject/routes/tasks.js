var express = require('express');
var { connection } = require('../db_connection');
var router = express.Router();

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});
/* GET all tasks listing. */
//GET http://localhost:3000/tasks
router.get('/', function (req, res, next) {
    connection.query("SELECT * FROM testTasks", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
       
        res.send(result);
    });
});
//get one task by id
//GET http://localhost:3000/tasks/1
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(`SELECT * FROM testTasks where id = ${id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
       
        res.send(result);
    });
});
/*  update task listing. */
//PUT http://localhost:3000/tasks/1?status=done&description=create db2
router.put('/:id', function (req, res, next) {
    const id = req.params.id;
    const status = req.query.status;
    const description = req.query.description;
     const  query = `UPDATE testTasks SET status = '${status}' , description = '${description}'  WHERE id = ${id}`
    connection.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send("ok");
    });
});


/* delete task listing. */
//delete http://localhost:3000/1
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
   
    const  query = `DELETE from testTasks where id = ${id} AND date > DATE_ADD(NOW(), INTERVAL 6 DAY)`
    connection.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send("ok");
    });
});

/* create task listing. */
//POST http://localhost:3000/tasks?id=6&status=done&description=create db2&date=2022-02-17
router.post('/', function (req, res, next) {
    const id = req.query.id;
    const status = req.query.status;
    const description = req.query.description;
    const date = req.query.date;
    const query = `insert into testTasks(id,status,description,date ) values (${id}, '${status}', '${description}', '${date}')`;
    connection.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
       
        res.send(result);
    });
});

module.exports = router;