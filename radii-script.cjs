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

  // Task 27: Radii. Change rounded-lg, rounded-[10px], rounded-2xl, rounded-[16px] to rounded-xl
  // on <a, <button, <input tags.
  
  // This regex matches <a, <button, <input, then any characters until className="...", then the class string.
  // Actually, since JSX can span multiple lines, it's safer to just replace it globally if we know the line contains <button or <a href.
  // But doing it globally on those lines is also tricky if a card and button are on same line.
  
  // Let's parse by looking at className="" blocks and check if they belong to a, button, input.
  const regex = /<(button|a|input)[^>]*className=(["'{])([^"'}]+)(["'}])/gmi;
  content = content.replace(regex, (match, tag, openQuote, classList, closeQuote) => {
    // If it has rounded-lg, rounded-[10px], rounded-[16px], rounded-2xl
    let newClassList = classList.replace(/\brounded-(lg|2xl|\[10px\]|\[16px\])\b/g, 'rounded-xl');
    
    return match.replace(classList, newClassList);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log("Radii script done");
