const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const student = require('./routes/student');

mongoose.set('useCreateIndex', true);
mongoose.connect(CONFIG.CONNECTION_STRING, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/students', student);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})