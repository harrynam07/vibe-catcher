const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.get('/api', (req, res) => {
    console.log('request received');
    res.status(201).send("Lets gooo");
})
//server listening on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;