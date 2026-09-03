const fs = require('fs');
const path = require('path');

const { renderPage } = require('./lib/render');
const { productDetail } = require('./partials/product-detail');
const products = require('./data/products');

const { home, homeI18n } = require('./pages/home');
const { aboutPage } = require('./pages/about');
const { productsPage } = require('./pages/products');
const { applicationsPage } = require('./pages/applications');
const { contactPage } = require('./pages/contact');

const repoRoot = path.join(__dirname, '..');

function write(relPath, html) {
  const outPath = path.join(repoRoot, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`  ${relPath}  (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
}

console.log('Building pages...');

write(
  'index.html',
  renderPage({
    title: 'Zebscan — Titanium Vacuum Glazing',
    description: 'Zebscan supplies titanium-engineered vacuum glazing to Sweden and Denmark — U-value from 0.34 W/m²K at just 6.7 mm thick. New construction, renovation and restoration.',
    path: '/',
    navKey: 'home',
    body: home(),
    pageTranslations: homeI18n,
  })
);

write(
  'about.html',
  renderPage({
    title: 'About Us — Zebscan',
    description: 'Zebscan is an independent supplier of titanium vacuum glazing to Sweden and Denmark. Learn about the technology and the markets we serve.',
    path: '/about.html',
    navKey: 'about',
    body: aboutPage(),
  })
);

write(
  'products.html',
  renderPage({
    title: 'Products — Zebscan',
    description: 'Six titanium vacuum glazing specifications: US1.10, S1.10, D.80, S70, Hybrid and Fire Resistant Glazing. Compare U-values, light transmission and best-fit use cases.',
    path: '/products.html',
    navKey: 'products',
    body: productsPage(),
  })
);

write(
  'applications.html',
  renderPage({
    title: 'Applications — Zebscan',
    description: 'Titanium vacuum glazing for new construction, renovation and heritage restoration across Sweden and Denmark.',
    path: '/applications.html',
    navKey: 'applications',
    body: applicationsPage(),
  })
);

write(
  'contact.html',
  renderPage({
    title: 'Contact — Zebscan',
    description: 'Request a quote for titanium vacuum glazing from Zebscan. New construction, renovation and restoration projects in Sweden and Denmark.',
    path: '/contact.html',
    navKey: 'contact',
    body: contactPage(),
    extraScripts: '<script src="/assets/js/contact-form.js" defer></script>',
  })
);

products.forEach((p) => {
  write(
    `products/${p.slug}.html`,
    renderPage({
      title: `${p.name} — Zebscan Titanium Vacuum Glazing`,
      description: `${p.tagline} ${p.specs[0].label}: ${p.specs[0].value}.`,
      path: `/products/${p.slug}.html`,
      navKey: 'products',
      ogImage: p.hasPhoto ? p.heroImage : '/og-image.jpg',
      body: productDetail(p),
    })
  );
});

// GitHub Pages runs Jekyll by default, which can mangle folder structures
// and stray {{ }}-looking text; disable it since this is a plain static build.
fs.writeFileSync(path.join(repoRoot, '.nojekyll'), '');

console.log('Done.');
