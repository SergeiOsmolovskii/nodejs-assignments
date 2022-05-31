const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files');
const wrongFilePath = path.join(filesPath, 'wrongFilename.txt');
const newFilePath = path.join(filesPath, 'properFilename.md');

const renameFile = (filePath, newFilePath) => {
  fs.access(filePath, function (error) {
    if (!error) {
      fs.rename(filePath, newFilePath, () => {
        if (error) throw new Error('FS operation failed');
      })
    } else throw new Error('FS operation failed');
  });
}

renameFile(wrongFilePath, newFilePath);