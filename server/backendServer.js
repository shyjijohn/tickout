
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'mysqldatabase',
    database: 'todolistapp',
})

const db1 = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'mysqldatabase',
    database: 'projectslist',
})

app.post('/create', (req, res) => {
    const dialogTaskName = req.body.dialogTaskName;
    const dialogTaskDescription = req.body.dialogTaskDescription;
    const selectedDateAnyDT = req.body.selectedDate;
    const titleID = req.body.titleID;
    
    //console.log("Backend server entered", dialogTaskName, dialogTaskDescription, selectedDateAnyDT);

    var sqlDateTime = new Date(selectedDateAnyDT).toISOString().slice(0, 19).replace('T', ' ');
    console.log("sqlDateTime", sqlDateTime);

    db.query(
        'INSERT INTO todolistapp.task (dialogTaskName, dialogTaskDescription, selectedDate, titleID) VALUES (?,?,?,?)',
        [dialogTaskName, dialogTaskDescription, sqlDateTime, titleID], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Backend server: Success ")
                res.send('Values inserted')
            }
        }
    )
})

app.post('/createProject', (req, res) => {
    const projectName = req.body.projectName;
    const titleID = req.body.titleID;

    console.log("Backend server entered createProject ",  req.body.projectName);

    db1.query(
        'INSERT INTO projectslist.title (projectName, titleID) VALUES (?, ?)',
        [projectName, titleID], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Backend server createProject: Success ")
                res.send('projectName inserted')
            }
        }
    )
})


app.get('/task', (req, res) => {
    db.query(
        'select * from todolistapp.task' , (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})


app.get('/title', (req, res) => {
    db1.query(
        'select * from projectslist.title' , (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})



app.put('/update', (req, res) => {
    console.log('console data', req.body)
    const id = req.body.id;
    const dialogTaskName = req.body.dialogTaskName;
    const dialogTaskDescription = req.body.dialogTaskDescription;
    const selectedDateAnyDT = req.body.selectedDate;
    
    var sqlDateTime = new Date(selectedDateAnyDT).toISOString().slice(0, 19).replace('T', ' ');
    console.log("sqlDateTime", sqlDateTime);

    db.query(
      `update task set dialogTaskName='${dialogTaskName}',
      dialogTaskDescription='${dialogTaskDescription}',
      selectedDate='${sqlDateTime}' where id=${id}`,      
      [dialogTaskName, dialogTaskDescription, sqlDateTime, id],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send(result)
        }
      }
    )
  })

  
app.listen(3002, () => {
    console.log('Hey Shyji!! --   Backend server is running')
})
