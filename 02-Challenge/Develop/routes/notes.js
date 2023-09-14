const nR = require('express').Router();
const { readAndAppend, readFromFile } = require('../helper/fsUtils');
const fs = require('fs');

nR.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

nR.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (req.body) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');
    }
});

module.exports = nR;