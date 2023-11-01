// mongodb
require('./config/db');
const express = require('express');
const app = require('express')();
const port = process.env.PORT || 3000;
const path = require('path');
const UserRouter = require('./api/user');

// For accepting post form data
const bodyParser = require('express').json
app.use(bodyParser());

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use('/static', express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});