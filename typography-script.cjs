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

// For tekkiblaze-partners.html which is in public/ and root
files.push(path.join(__dirname, 'tekkiblaze-partners.html'));
files.push(path.join(__dirname, 'public', 'tekkiblaze-partners.html'));

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Task 19: Section H2 Sizes (Normalize all sec-title equivalents)
  // Drift per section: 42, 46, 44, 52, 48, 56px all weight 900
  // Standard: 30px md:42px font-[800]
  // Let's replace font-black tracking-tight text-[36px] md:text-[44px] with font-[800] tracking-tight text-[30px] md:text-[42px]
  content = content.replace(/font-black\s+tracking-tight\s+text-\[\d+px\]\s+(?:sm|md):text-\[\d+px\]/g, 'font-[800] tracking-tight text-[30px] md:text-[42px]');
  
  // Also check if there's any remaining font-black that should be font-[800] in H2s
  // But wait, what if the class order is different?
  // Let's explicitly target the known H2 class strings:
  content = content.replace('font-inter font-black tracking-tight text-[30px] sm:text-[42px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  content = content.replace('font-inter font-black tracking-tight text-[36px] md:text-[44px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  content = content.replace('font-inter font-black tracking-tight text-[38px] md:text-[52px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  content = content.replace('font-inter font-black tracking-tight text-[32px] md:text-[46px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  content = content.replace('font-inter font-black tracking-tight text-[36px] md:text-[48px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  // Also TekkiBlazePartners H1:
  content = content.replace('font-inter font-black tracking-tight text-[30px] sm:text-[42px]', 'font-inter font-[800] tracking-tight text-[30px] md:text-[42px]');
  

  // Task 20: H1 Letterspacing
  // In Hero.jsx, tracking-tighter -> tracking-[-0.035em]
  if (file.endsWith('Hero.jsx')) {
    content = content.replace('tracking-tighter', 'tracking-[-0.035em]');
  }

  // Task 21: Audience Card H3s
  // In WhoSection.jsx, font-dark text-[17.5px] -> font-[800] text-[17px]
  if (file.endsWith('WhoSection.jsx')) {
    content = content.replace('font-dark text-[17.5px]', 'font-[800] text-[17px]');
  }

  // Task 22: Half-Pixel Sizes
  // text-[10.5px] -> text-[11px]
  // text-[11.5px] -> text-[12px]
  // text-[12.5px] -> text-[13px]
  // text-[13.5px] -> text-[14px]
  // text-[14.5px] -> text-[15px]
  // text-[15.5px] -> text-[16px]
  // text-[17.5px] -> text-[18px]
  content = content.replace(/text-\[(\d+)\.5px\]/g, (match, p1) => {
    return `text-[${parseInt(p1) + 1}px]`;
  });

  // Task 23: Nav Links & Task 25: Nav CTA Duplicates
  if (file.endsWith('Nav.jsx')) {
    // Nav links: text-[16px] font-normal/400 -> text-[14px] font-[500] (active font-[600])
    // The current nav links have something like `text-[16px] font-medium` or `font-normal`
    // Let's replace the link styles inside Nav.jsx.
    // They are defined as `text-[16px] font-medium` probably? I'll just regex `text-\[16px\]` to `text-[14px]` in nav links.
    // Actually, I'll do this one manually or via script targeting exact strings if known.
  }

  // Task 24: Section Eyebrow Labels
  // text-[11px] tracking-[2px] uppercase -> text-[12px] tracking-[3px] uppercase underline decoration-amber-brand underline-offset-4 (or similar for amber underline accent)
  // Let's just do text-[11px] tracking-[2px] -> text-[12px] tracking-[3px]
  content = content.replace(/text-\[11px\]\s+tracking-\[2px\]/g, 'text-[12px] tracking-[3px]');
  
  // "amber underline accent" - I'll add `underline decoration-amber-brand decoration-2 underline-offset-4` where text-[12px] tracking-[3px] is.
  content = content.replace(/text-\[12px\]\s+tracking-\[3px\]\s+uppercase\s+font-bold\s+text-amber-dark/g, 'text-[12px] tracking-[3px] uppercase font-bold text-amber-dark underline decoration-amber-brand decoration-[2px] underline-offset-4');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log("Done");
