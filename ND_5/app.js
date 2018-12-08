const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const student = require('./routes/student');
const teacher = require('./routes/teacher');
const attendance = require('./routes/attendance');
const program = require('./routes/program');
const group = require('./routes/group');
const payment = require('./routes/payment');
const discount = require('./routes/discount');
const user = require('./routes/user');

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
app.use('/programs', program);
app.use('/groups', group);
app.use('/payments', payment);
app.use('/discounts', discount);
app.use('/users', user);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})

module.exports = app;