const fs = require('fs');
const path = require('path');
const filesPath = path.join(__dirname, 'files');
const copyFilePath = path.join(__dirname, 'files_copy');

const deepCopyDir = async (itemPath, copyItemPath) => {
  await fs.promises.mkdir(copyItemPath, {recursive: true}, (err) => {
      if (err) throw err;
  });
  
  const items = await fs.promises.readdir(itemPath, {withFileTypes:true});

  for (let item of items) {
      const srcPath = path.join(itemPath, item.name);
      const destPath = path.join(copyItemPath, item.name);
      
      if (item.isDirectory()) await deepCopyDir(srcPath, destPath);
      else await fs.promises.copyFile(srcPath, destPath);
  }
}

const copy = (filePath, copyFilePath) => {
  fs.access(copyFilePath, function (error) {
    if (error) {
      deepCopyDir(filePath, copyFilePath);
    } else {
      throw new Error('FS operation failed');
    }
  });
}

copy(filesPath, copyFilePath);