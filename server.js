// require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use("/public", express.static(__dirname + '/public'));


const database_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.haa8v.mongodb.net/words?retryWrites=true&w=majority`;
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const indexRouter = require('./routes/index');
const wordRouter = require('./routes/word');
const wordsRouter = require('./routes/words');
app.use('/', indexRouter);
app.use('/word', wordRouter);
app.use('/words', wordsRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

