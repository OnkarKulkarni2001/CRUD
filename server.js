const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tasks';

const app = express();


mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})


app.use(express.json())

const taskRouter = require('./routes/tasks')
app.use('/tasks', taskRouter);


app.listen(3000, () => {
    console.log('Express server started at port: 3000');

})  