const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
// const notesRoute = require('./public/notes.html');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/notes', notesRoute);
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(notesData);
})

app.get('/notes', (req, res) => {
    // const {url} =
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});