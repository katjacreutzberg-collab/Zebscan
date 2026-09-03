const fs = require('fs');
const path = require('path');

const root = __dirname;
const repoRoot = path.join(root, '..');

const fontLight = fs.readFileSync(path.join(root, 'assets', 'fonts', 'HelveticaNeueLight.otf')).toString('base64');
const fontRoman = fs.readFileSync(path.join(root, 'assets', 'fonts', 'HelveticaNeueRoman.otf')).toString('base64');
const fontMedium = fs.readFileSync(path.join(root, 'assets', 'fonts', 'HelveticaNeueMedium.otf')).toString('base64');
const logoPng = fs.readFileSync(path.join(root, 'assets', 'logo-darkblue.png')).toString('base64');
const heroBg = fs.readFileSync(path.join(root, 'assets', 'hero-bg.jpg')).toString('base64');

let fragment = fs.readFileSync(path.join(root, 'template.html'), 'utf8');

fragment = fragment.replace('__FONT_LIGHT__', fontLight);
fragment = fragment.replace('__FONT_ROMAN__', fontRoman);
fragment = fragment.replace('__FONT_MEDIUM__', fontMedium);
fragment = fragment.replace('__LOGO_PNG__', logoPng);
fragment = fragment.replace('__HERO_BG__', heroBg);

// template.html starts with <title> then <style>; split those out of the
// fragment so they can be placed in a proper standalone <head>.
const titleMatch = fragment.match(/^<title>([\s\S]*?)<\/title>\s*/);
const title = titleMatch ? titleMatch[1] : 'Zebscan';
fragment = titleMatch ? fragment.slice(titleMatch[0].length) : fragment;

const styleMatch = fragment.match(/^<style>[\s\S]*?<\/style>\s*/);
const styleBlock = styleMatch ? styleMatch[0] : '';
fragment = styleMatch ? fragment.slice(styleMatch[0].length) : fragment;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="Zebscan supplies titanium-engineered vacuum glazing to Sweden and Denmark. Site launching soon.">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
${styleBlock}</head>
<body>
${fragment}</body>
</html>
`;

const outPath = path.join(repoRoot, 'index.html');
fs.writeFileSync(outPath, html);

console.log('Written:', outPath);
console.log('Size (KB):', (Buffer.byteLength(html) / 1024).toFixed(1));
