const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'src' || entry.name === '.git') continue;
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}
walk(repoRoot);

let missing = 0;
const re = /(?:src|href)="(\/[^"]+)"/g;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = re.exec(html))) {
    const refPath = m[1].split('?')[0].split('#')[0];
    if (refPath.startsWith('mailto:')) continue;
    const diskPath = path.join(repoRoot, refPath);
    if (!fs.existsSync(diskPath)) {
      console.log(`MISSING: ${refPath}  (referenced in ${path.relative(repoRoot, file)})`);
      missing++;
    }
  }
}

console.log(missing === 0 ? 'All referenced local assets exist.' : `${missing} missing asset reference(s).`);
