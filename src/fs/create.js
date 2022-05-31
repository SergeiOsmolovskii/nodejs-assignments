const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const createFile = () => {
  fs.access(filePath, function (error) {
    if (error) {
      fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else throw new Error('FS operation failed');
  });
}

createFile();
