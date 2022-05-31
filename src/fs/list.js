const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files');

const list = async () => {
   fs.access(filesPath, async (error) => {
    if (!error) {
      const items = await fs.promises.readdir(filesPath, {withFileTypes:true});

      for (let item of items) { 
        console.log(item.name);
      }
    } else throw new Error('FS operation failed');
  });
}

list();