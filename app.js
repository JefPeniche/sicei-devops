const express = require('express');
const app = express();
const students= [{"name": "Jef Peniche", "list": "17016308"}, {"name": "Miguel Hernadez", "list": "17016283"}, {"name": "Alejandro Quintana", "list": "17016311"}, {"name": "Angel Gutierrez", "list": "17016322"}]


app.get('/', (req, res) => res.send('welcome to Sicei app :D'));

app.get('/students', (req, res) => {
    let studentsList = '<ul>';
    students.forEach(student => {
        studentsList +=`<li> <strong>${student.name}</strong> <small>${student.list}</small></li>`;
    }); 
    studentsList += '</ul>';
    res.send(studentsList)}
);

app.listen(3000, () => {
    console.log('Sicei app is listening on port 3000');
})