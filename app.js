const express = require('express');
const bodyParser  = require('body-parser');
//const cors = require('cors');
const dotenv = require('dotenv')

const app = express();
app.use(bodyParser.json());


const connectDB = require('./config/db');

//load config

dotenv.config({ path: './config/config.env' });

connectDB();

app.use('/', require('./routes/index'));

app.listen(9080);

