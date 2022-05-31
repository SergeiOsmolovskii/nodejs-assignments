const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToRead.txt');


const readFile = async (filePath) => {

  fs.access(filePath, async (error) => {
    if (!error) {
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      console.log(fileContent);
    } else throw new Error('FS operation failed');
  });
}

readFile(fileToReadPath);