const applications = require('../data/applications');
const products = require('../data/products');

const CAT_KEYS = { nieuwbouw: 'catNieuwbouw', renovatie: 'catRenovatie', restauratie: 'catRestauratie' };
const CAT_FALLBACK = { nieuwbouw: 'New construction', renovatie: 'Renovation', restauratie: 'Restoration' };

function productById(slug) {
  return products.find((p) => p.slug === slug);
}

function section(key, a, index) {
  const paragraphs = a.body.map((t) => `<p>${t}</p>`).join('\n          ');
  const recommended = a.recommended
    .map((slug) => {
      const p = productById(slug);
      return `<a class="btn btn-secondary" href="/products/${p.slug}.html">${p.name}</a>`;
    })
    .join('\n        ');

  const bg = index % 2 === 1 ? ' section-ice' : '';
  const catId = 'i18n-' + CAT_KEYS[key];

  return `<section class="section${bg}" id="${a.id}">
  <div class="container split" style="align-items:start;">
    <div class="split-media" style="aspect-ratio:4/3;padding:0;overflow:hidden;">
      <img src="${a.heroImage}" alt="${CAT_FALLBACK[key]} project" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
    </div>
    <div>
      <span class="eyebrow">${a.eyebrow}</span>
      <h2 class="section-title"><span id="${catId}">${CAT_FALLBACK[key]}</span></h2>
      <p class="section-lede" style="margin-bottom:22px;">${a.lede}</p>
      <div class="split-copy">
        ${paragraphs}
      </div>
      <div style="margin-top:24px;">
        <span class="eyebrow" style="display:block;margin-bottom:12px;">Recommended products</span>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          ${recommended}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function applicationsPage() {
  const order = ['nieuwbouw', 'renovatie', 'restauratie'];
  const sections = order.map((key, i) => section(key, applications[key], i)).join('\n\n');

  return `<section class="page-hero" style="background-image:url('/assets/images/applications/nieuwbouw/nieuwbouw-01.jpg');">
  <div class="container">
    <span class="page-hero-eyebrow reveal" id="i18n-navApplications">Applications</span>
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
