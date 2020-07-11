// imprtamos express
const express = require('express');
// importamos mongoose
const mongoose = require('mongoose');
const { request } = require('express');

const app = express();
app.use(express.json());

app.get('/students', async(request, response) => {
    const allStudents = await Student.find();
    response.json({
        success:true,
        data: {
             students: allStudents
        }
    })
});
app.post('/students', async(request, response) =>{
    const studentInfo = request.body;
    const newStudent = await Student.create(studentInfo);
    response.json({
        success: true,
        data: {
            student: newStudent
        }
    });
});
app.delete('/students/:id', async(request, response) => {
    const id = request.params.id
    const studentDeleted = await Student.findByIdAndDelete(id);
    response.json({
        success:true,
        data:{
            student: studentDeleted
        }
    })
});
// conectamos a la base de datos
mongoose.connect('mongodb://192.168.0.5:27017/school', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('Se conecto a base de datos');
    app.listen(8080, () => {
        console.log('El servidor esta listo')
    })
});

const Student = mongoose.model('students', {
    name:{
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true,
        enum:[
            'Programación',
            'Inglés',
            'Cocina'
        ]
    },
    age: {
        type: Number,
        min: 1,
    }
})

// Student.create({
//     name:'Luis',
//     age: 30,
//     course: 'Inglés'
// })