const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const student = require('./routes/student');
const student = require('./routes/teacher');
const student = require('./routes/attendance');
const student = require('./routes/program');

mongoose.set('useCreateIndex', true);
mongoose.connect(CONFIG.CONNECTION_STRING, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/students', student);
app.use('/teachers', teacher);
app.use('/attendances', attendance);
app.use('/program', program);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})