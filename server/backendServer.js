
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

app.post('/create', (req, res) => {
    const dialogTaskName = req.body.dialogTaskName;
    const dialogTaskDescription = req.body.dialogTaskDescription;
    const selectedDateAnyDT = req.body.selectedDate;

    console.log("Backend server entered", dialogTaskName, dialogTaskDescription, selectedDateAnyDT);

    var sqlDateTime = new Date(selectedDateAnyDT).toISOString().slice(0, 19).replace('T', ' ');
    console.log("sqlDateTime", sqlDateTime);

    db.query(
        'INSERT INTO todolistapp.task (dialogTaskName, dialogTaskDescription, selectedDate) VALUES (?,?,?)',
        [dialogTaskName, dialogTaskDescription, sqlDateTime], (err, result) => {
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

app.listen(3002, () => {
    console.log('Hey Shyji!! --   Backend server is running')
})
