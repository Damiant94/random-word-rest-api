// require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const database_url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.haa8v.mongodb.net/words?retryWrites=true&w=majority`
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const wordRouter = require('./routes/word');
app.use('/word', wordRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server Started'));
