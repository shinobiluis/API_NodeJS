// importamos mongoose
const mongoose = require('mongoose');

// conectamos a la base de datos
mongoose.connect('mongodb://192.168.0.5:27017/school', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('si conecto');
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
            'Programacion',
            'Inglés',
            'Cocina'
        ]
    },
    age: {
        type: Number,
        min: 1,
    }
})

Student.create({
    name:'Luis',
    age: 30,
    course: 'Inglés'
})