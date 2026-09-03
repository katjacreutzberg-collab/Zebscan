const applications = require('../data/applications');
const products = require('../data/products');

function productById(slug) {
  return products.find((p) => p.slug === slug);
}

function section(a, index) {
  const paragraphs = a.body.map((t) => `<p>${t}</p>`).join('\n          ');
  const gallery = a.gallery.map((src) => `<img src="${src}" alt="${a.title} project" loading="lazy" />`).join('\n        ');
  const recommended = a.recommended
    .map((slug) => {
      const p = productById(slug);
      return `<a class="btn btn-secondary" href="/products/${p.slug}.html">${p.name}</a>`;
    })
    .join('\n        ');

  const bg = index % 2 === 1 ? ' section-ice' : '';

  return `<section class="section${bg}" id="${a.id}">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">${a.eyebrow}</span>
        <h2 class="section-title">${a.title} — ${a.label}</h2>
        <p class="section-lede" style="margin-top:10px;">${a.lede}</p>
      </div>
    </div>
    <div class="photo-row" style="margin-bottom:32px;">
      ${gallery}
    </div>
    <div class="split-copy" style="max-width:70ch;">
      ${paragraphs}
    </div>
    <div style="margin-top:24px;">
      <span class="eyebrow" style="display:block;margin-bottom:12px;">Recommended products</span>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        ${recommended}
      </div>
    </div>
  </div>
</section>`;
}

function applicationsPage() {
  const order = ['nieuwbouw', 'renovatie', 'restauratie'];
  const sections = order.map((key, i) => section(applications[key], i)).join('\n\n');

  return `<section class="page-hero" style="background-image:url('/assets/images/applications/nieuwbouw/nieuwbouw-01.jpg');">
  <div class="container">
    <span class="page-hero-eyebrow reveal">Toepassingen</span>
    <h1 class="reveal" style="animation-delay:.08s;">Three briefs. One <em>titanium vacuum platform.</em></h1>
    <p class="reveal" style="animation-delay:.16s;">New construction, renovation and heritage restoration ask for different things from a pane of glass. Zebscan's range is built to answer all three without changing what makes it work.</p>
  </div>
</section>

${sections}

<section class="section section-ink">
  <div class="container" style="text-align:center;">
    <span class="eyebrow" style="justify-content:center;display:block;">Get in touch</span>
    <h2 class="section-title" style="margin-left:auto;margin-right:auto;">Tell us which of these describes your project.</h2>
    <a class="btn btn-primary" href="/contact.html" id="i18n-ctaRequestQuote" style="margin-top:12px;">Request a quote</a>
  </div>
</section>`;
}

module.exports = { applicationsPage };
