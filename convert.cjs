const fs = require('fs');
let body = fs.readFileSync('temp-body.txt', 'utf8');

// Replace class with className
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');

// Fix SVG attributes
body = body.replace(/stroke-width=/g, 'strokeWidth=');
body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
body = body.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
body = body.replace(/fill-rule=/g, 'fillRule=');
body = body.replace(/clip-rule=/g, 'clipRule=');
body = body.replace(/stroke-dasharray=/g, 'strokeDasharray=');

// Basic unclosed tags
body = body.replace(/<br>/g, '<br />');
body = body.replace(/<hr>/g, '<hr />');

// Make tags self-closing
body = body.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
body = body.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
body = body.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
body = body.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
body = body.replace(/<path([^>]*?[^\/])>/g, '<path$1 />');
body = body.replace(/<circle([^>]*?[^\/])>/g, '<circle$1 />');
body = body.replace(/<rect([^>]*?[^\/])>/g, '<rect$1 />');
body = body.replace(/<polyline([^>]*?[^\/])>/g, '<polyline$1 />');

// Remove script tags and extract them
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
let scripts = [];
let match;
while ((match = scriptRegex.exec(body)) !== null) {
  scripts.push(match[1]);
}
body = body.replace(/<script>[\s\S]*?<\/script>/g, '');

// Clean up body tags
body = body.replace(/<body[^>]*>/, '').replace(/<\/body>/, '');

// Clean up HTML comments that break JSX
body = body.replace(/<!--[\s\S]*?-->/g, (match) => '{/* ' + match.slice(4, -3) + ' */}');

const componentCode = `import React, { useEffect } from 'react';

export default function PartnersApp() {
  useEffect(() => {
    ${scripts.join('\n')}
  }, []);

  return (
    <div className="font-sans text-ink bg-canvas antialiased max-sm:pb-[74px]">
      ${body}
    </div>
  );
}
`;

fs.writeFileSync('src/PartnersApp.jsx', componentCode);
console.log('Conversion complete!');
