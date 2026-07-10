const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

const files = ['Terms.jsx', 'Refund.jsx', 'Privacy.jsx'];

files.forEach(filename => {
  const file = path.join(srcDir, filename);
  if (!fs.existsSync(file)) return;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  const nameRegex = /<span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0\.5 rounded">\[Grievance Officer Name\]<\/span>/g;
  content = content.replace(nameRegex, 'Srinivasan Kannu');

  const phoneRegex = /<span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0\.5 rounded">\[\+91‑XXXXXXXXXX\]<\/span>/g;
  content = content.replace(phoneRegex, '+91 81057 63079');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log("Grievance script done");
