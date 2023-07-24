const express = require('express');
const user = express.Router();
const path = require('path');
const pathDir = require('../util/path');

user.get('/login', (req, res, next) => {
    res.sendFile(path.join(pathDir, 'htmlfiles', 'user.html'));
});

user.post('/login', (req, res, next) => {
    // const userMessage = req.body.userName;
    // console.log(userMessage); 
    // res.json({userMessage });
    res.redirect('/user/message');
});

module.exports = user;
