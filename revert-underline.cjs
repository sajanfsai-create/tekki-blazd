const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.html')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir);
files.push(path.join(__dirname, 'tekkiblaze-partners.html'));
files.push(path.join(__dirname, 'public', 'tekkiblaze-partners.html'));

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Revert the underline hack I did
  content = content.replace(/underline decoration-amber-brand decoration-\[2px\] underline-offset-4/g, '');
  // Clean up any double spaces left behind
  content = content.replace(/  +/g, ' ');
  // Ensure the class string doesn't end with a space before the quote
  content = content.replace(/ flex flex-col items-center"/g, ' flex flex-col items-center"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
