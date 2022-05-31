const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToRead.txt');

/* TO FIX */

const readFile = (filePath) => {
    fs.promises.readFile(filePath, 'utf8', (err, data) => {

    });
}

readFile(fileToReadPath);