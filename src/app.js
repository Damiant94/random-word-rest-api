require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

//database connection
const mongoose = require('mongoose');
app.use("/public", express.static(__dirname + '/public'));
const database_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.haa8v.mongodb.net/words?retryWrites=true&w=majority`;
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

const wordRouter = require('./routes/word');
const wordsRouter = require('./routes/words');
app.use('/', wordRouter);
app.use('/word', wordRouter);
app.use('/words', wordsRouter);

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
