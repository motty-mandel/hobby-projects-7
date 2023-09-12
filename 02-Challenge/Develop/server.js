const express = require('express');
const path = require('path');
const notesRoute = require('./routes/notes')

const PORT = 3001;
const app = express();

app.use(express.static('public'));
app.use('/notes', notesRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});