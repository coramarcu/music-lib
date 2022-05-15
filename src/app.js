const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello world");
})

module.exports = app;