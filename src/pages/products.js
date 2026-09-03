const products = require('../data/products');
const { productCard } = require('../partials/product-card');

function productsPage() {
  const cards = products.map(productCard).join('\n      ');

  return `<section class="page-hero" style="background-image:url('/assets/images/products/cross-section-compare.jpg');background-position:center;">
  <div class="container">
    <span class="page-hero-eyebrow reveal">Product range</span>
    <h1 class="reveal" style="animation-delay:.08s;">Six specifications, one titanium vacuum platform.</h1>
    <p class="reveal" style="animation-delay:.16s;">Every Zebscan product is built on the same titanium-spacer vacuum core — two hardened panes, a 0.3&nbsp;mm vacuum gap, and titanium spacers, edge seal and absorption strip in place of the aluminium competing products still use. What changes between products is the coating: clarity, solar control, acoustic performance or fire resistance.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="card-grid">
      ${cards}
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Why titanium</span>
        <h2 class="section-title">The spacer most brands still make from aluminium.</h2>
      </div>
    </div>
    <div class="usp-strip">
      <div class="usp-item"><span class="usp-value">&minus;70%</span><span class="usp-label">Heat conduction through the spacer, vs. aluminium</span></div>
      <div class="usp-item"><span class="usp-value">+40%</span><span class="usp-label">Flexural strength at the edge seal</span></div>
      <div class="usp-item"><span class="usp-value">&minus;90%</span><span class="usp-label">Stress at the edge seal under load</span></div>
      <div class="usp-item"><span class="usp-value">50 years</span><span class="usp-label">Design life, no measurable U-value drift</span></div>
    </div>
  </div>
</section>

<section class="section section-ink">
  <div class="container" style="text-align:center;">
    <span class="eyebrow" style="justify-content:center;display:block;">Not sure which product fits?</span>
    <h2 class="section-title" style="margin-left:auto;margin-right:auto;">Tell us about the project — we'll recommend a specification.</h2>
    <a class="btn btn-primary" href="/contact.html" id="i18n-ctaRequestQuote" style="margin-top:12px;">Request a quote</a>
  </div>
</section>`;
}

module.exports = { productsPage };
