const fs = require("fs");
const path = require("path");

const parentDirName = process.argv.slice(2)[0];
const dirName = process.argv.slice(2)[1];

// 確認資料夾是否存在
if (fs.existsSync(parentDirName)) {
  console.log("Directory exists!");
  copy("markdown.example.md", dirName);
  copy("markdown.example.md", dirName);
} else {
  mkdir(parentDirName);
  copy("markdown.example.md", dirName);
}

// 建立資料夾
const mkdir = parentDirName => {
  fs.mkdir(path.join(__dirname, parentDirName), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });
}

console.log(process.argv[3]);

// 建立檔案
// File destination.txt will be created or overwritten by default.
const copy = (originFile, filaName) => {
  fs.copyFile(originFile, filaName, (err) => {
    if (err) throw err;
    console.log(`${originFile} was copied to ${filaName}`);
  });
}