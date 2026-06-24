const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Fix multiline className strings (both regular strings and template literals)
  // Pattern: className="...multiline..." or className={'...multiline...'}  or className={`...multiline...`}
  const newContent = content.replace(
    /className="([^"]*\n[^"]*)"/g,
    (match, inner) => {
      changed = true;
      // Replace newlines and multiple spaces with single space
      const fixed = inner.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
      return `className="${fixed}"`;
    }
  );
  
  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  }
}

function walk(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

walk('src');
console.log('Done!');
