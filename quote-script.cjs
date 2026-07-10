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

const replacements = [
  { regex: /\bdon't\b/gi, rep: 'don’t' },
  { regex: /\bit's\b/gi, rep: 'it’s' },
  { regex: /\bwhat's\b/gi, rep: 'what’s' },
  { regex: /\bwe'll\b/gi, rep: 'we’ll' },
  { regex: /\bwe're\b/gi, rep: 'we’re' },
  { regex: /\byou're\b/gi, rep: 'you’re' },
  { regex: /\bdoesn't\b/gi, rep: 'doesn’t' },
  { regex: /\bcan't\b/gi, rep: 'can’t' },
  { regex: /\bcouldn't\b/gi, rep: 'couldn’t' },
  { regex: /\bwon't\b/gi, rep: 'won’t' },
  { regex: /\bisn't\b/gi, rep: 'isn’t' },
  { regex: /\baren't\b/gi, rep: 'aren’t' },
  { regex: /\bthey're\b/gi, rep: 'they’re' },
  { regex: /\bthat's\b/gi, rep: 'that’s' },
  { regex: /\blet's\b/gi, rep: 'let’s' },
  { regex: /\bcomponent's\b/gi, rep: 'component’s' },
  { regex: /\bseller's\b/gi, rep: 'seller’s' },
  { regex: /\bOfficer's\b/gi, rep: 'Officer’s' },
  { regex: /\bpartner's\b/gi, rep: 'partner’s' },
  { regex: /\bIndia's\b/gi, rep: 'India’s' },
  { regex: /\borg's\b/gi, rep: 'org’s' },
  { regex: /\borganisation's\b/gi, rep: 'organisation’s' },
  { regex: /\breport's\b/gi, rep: 'report’s' },
  { regex: /\bindustry's\b/gi, rep: 'industry’s' },
  { regex: /\bYou'll\b/gi, rep: 'You’ll' },
  { regex: /\bI'm\b/gi, rep: 'I’m' },
  { regex: /\bI'd\b/gi, rep: 'I’d' },
  { regex: /\bI've\b/gi, rep: 'I’ve' },
  { regex: /\bI'll\b/gi, rep: 'I’ll' },
  { regex: /\bthere's\b/gi, rep: 'there’s' },
  { regex: /\byou'd\b/gi, rep: 'you’d' },
  { regex: /\byou've\b/gi, rep: 'you’ve' }
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  replacements.forEach(r => {
    content = content.replace(r.regex, match => {
      // preserve case for the first letter if needed, but since our replacement is fixed case we can just do:
      const firstChar = match.charAt(0);
      const isUpper = firstChar === firstChar.toUpperCase();
      let newStr = r.rep;
      if (isUpper) {
        newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
      } else {
        newStr = newStr.charAt(0).toLowerCase() + newStr.slice(1);
      }
      return newStr;
    });
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log("Apostrophe script done");
