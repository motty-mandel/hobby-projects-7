const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const { readFromFile, readAndAppend } = require('./helper/fsUtils');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/api/notes', (req, res) => {
    res.json(notesData);
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/api/notes', (req, res) => {

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, './db/db.json');

        res.json(notesData);
    } else {
        res.json('Error in posting note');
    }
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});