const express = require('express');
const message = express.Router();
const path = require('path');
const pathDir = require('../util/path');
const fs = require('fs');

message.get('/message', (req, res, next) => {
    res.sendFile(path.join(pathDir, 'htmlfiles', 'message.html'));
});

message.post('/message', (req, res, next) => {
    const userMessage = req.body.userMessage;
    const userName = req.body.userName;
    console.log('User Message:', userMessage);
    console.log('User Name:', userName);

    // Appending the new userMessage and userName to the file
    fs.appendFile('newfile.txt', `Username: ${userName}, Message: ${userMessage}\n`, function (err) {
        if (err) throw err;
        console.log('File is added message successfully.');

        // Read the file contents and send it back to the client
        fs.readFile('newfile.txt', 'utf8', function (err, data) {
            if (err) {
                console.error('Error reading file:', err);
                res.status(500).send('Internal Server Error');
            } else {
                // Send the file contents as the response to the client
                res.send(data);
            }
        });
    });
});

module.exports = message;
