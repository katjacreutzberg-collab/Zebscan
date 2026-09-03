const products = require('../data/products');
const applications = require('../data/applications');
const { productCard } = require('../partials/product-card');

function home() {
  const productCards = products.map(productCard).join('\n      ');

  const appKeys = ['nieuwbouw', 'renovatie', 'restauratie'];
  const appCards = appKeys
    .map((key) => {
      const a = applications[key];
      return `<a class="card" href="/applications.html#${a.id}">
        <div class="card-photo" style="background-image:url('${a.heroImage}')"></div>
        <div class="card-body">
          <span class="card-eyebrow">${a.eyebrow}</span>
          <h3>${a.title}</h3>
          <p>${a.lede}</p>
          <span class="card-cta">Explore →</span>
        </div>
      </a>`;
    })
    .join('\n      ');

  return `<section class="page-hero" style="background-image:url('/assets/images/hero-bg.jpg');">
  <div class="container">
    <span class="page-hero-eyebrow reveal">Titanium vacuum glazing &middot; Sweden &amp; Denmark</span>
    <h1 class="reveal" style="animation-delay:.08s;">Engineered to make old windows perform like new ones.</h1>
    <p class="reveal" style="animation-delay:.16s;">Zebscan supplies titanium-spacer vacuum glazing — down to 6.7&nbsp;mm thick, with a U-value as low as 0.35&nbsp;W/m²K — for new construction, renovation and heritage restoration.</p>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="usp-strip">
      <div class="usp-item"><span class="usp-value">0.35 W/m²K</span><span class="usp-label">Best U-value</span></div>
      <div class="usp-item"><span class="usp-value">6.7 mm</span><span class="usp-label">Thinnest build</span></div>
      <div class="usp-item"><span class="usp-value">50 years</span><span class="usp-label">Design life</span></div>
      <div class="usp-item"><span class="usp-value">&minus;70%</span><span class="usp-label">Heat loss vs. aluminium spacers</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Applications</span>
        <h2 class="section-title">Built for three very different briefs.</h2>
      </div>
      <a class="card-cta" href="/applications.html" style="text-decoration:none;">All applications →</a>
    </div>
    <div class="card-grid card-grid-3">
      ${appCards}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Product range</span>
        <h2 class="section-title">Six specifications, one titanium vacuum platform.</h2>
        <p class="section-lede" style="margin-top:10px;">Every Zebscan product shares the same titanium-spacer vacuum core; each is coated and configured for a different job — clarity, solar control, acoustic performance, or fire safety.</p>
      </div>
    </div>
    <div class="card-grid">
      ${productCards}
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <span class="eyebrow">About Zebscan</span>
      <h2 class="section-title">An independent specialist, not a manufacturer.</h2>
      <p style="font-size:15.5px;line-height:1.68;color:var(--text-secondary);max-width:52ch;">Zebscan is an independent supplier of titanium vacuum glazing to the Swedish and Danish markets — the name stands for Zero Emission Building, Scandinavia. We work with architects, contractors and building owners across new construction, renovation and heritage restoration.</p>
      <a class="btn btn-secondary" href="/about.html" style="margin-top:20px;" id="i18n-ctaLearnMore">Learn more</a>
    </div>
    <div class="split-media" style="aspect-ratio:4/3;padding:0;overflow:hidden;">
      <img src="/assets/images/applications/restauratie/restauratie-01.jpg" alt="Zebscan vacuum glazing installed in a restoration project" style="width:100%;height:100%;object-fit:cover;" />
    </div>
  </div>
</section>

<section class="section section-ink">
  <div class="container" style="text-align:center;">
    <span class="eyebrow" style="justify-content:center;display:block;">Get in touch</span>
    <h2 class="section-title" style="margin-left:auto;margin-right:auto;">Ready to spec titanium vacuum glazing for your project?</h2>
    <a class="btn btn-primary" href="/contact.html" id="i18n-ctaRequestQuote" style="margin-top:12px;">Request a quote</a>
  </div>
</section>`;
}

module.exports = { home };
