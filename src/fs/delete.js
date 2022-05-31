const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files');
const fileToRemovePath = path.join(filesPath, 'fileToRemove.txt');

const deleteFile = (fileToRemove) => {
  fs.access(fileToRemove, function (error) {
    if (!error) {
      fs.unlink(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed');
      });
    } else throw new Error('FS operation failed');
  });
}

deleteFile(fileToRemovePath);