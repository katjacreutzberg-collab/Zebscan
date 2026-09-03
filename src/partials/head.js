const SITE_URL = 'https://zebscan.com';

function head({ title, description, path = '/', ogImage = '/og-image.jpg' }) {
  const canonical = SITE_URL + path;
  const image = ogImage.startsWith('http') ? ogImage : SITE_URL + ogImage;
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<link rel="preload" as="font" href="/assets/fonts/HelveticaNeueRoman.otf" type="font/otf" crossorigin>
<link rel="stylesheet" href="/assets/css/tokens.css">
<link rel="stylesheet" href="/assets/css/fonts.css">
<link rel="stylesheet" href="/assets/css/base.css">
</head>`;
}

module.exports = { head, SITE_URL };
