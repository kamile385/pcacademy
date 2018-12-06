const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const student = require('./routes/student');
const teacher = require('./routes/teacher');
const attendance = require('./routes/attendance');
const program = require('./routes/program');
const group = require('./routes/group');
const payment = require('./routes/payment');
const discount = require('./routes/discount');
require('./authentication/localStrategy');

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
app.use('/group', group);
app.use('/payment', payment);
app.use('/discount', discount);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})