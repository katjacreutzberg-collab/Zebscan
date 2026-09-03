function productDetail(p) {
  const paragraphs = p.body.map((t) => `<p>${t}</p>`).join('\n            ');
  const specRows = p.specs
    .map((s) => `<tr><th>${s.label}</th><td>${s.value}</td></tr>`)
    .join('\n              ');
  const bestFor = p.bestFor.map((b) => `<li>${b}</li>`).join('\n              ');

  const media = p.hasPhoto
    ? `<img src="${p.heroImage}" alt="${p.name} vacuum glazing" />`
    : `<img src="${p.heroImage}" alt="Zebscan titanium vacuum glazing range" />`;

  const photoNote = p.hasPhoto
    ? ''
    : `<p class="form-note" style="margin-top:14px;">Dedicated product photography for ${p.name} is in production — shown here is the wider Zebscan vacuum-glazing range.</p>`;

  return `<section class="section-tight">
  <div class="container">
    <a href="/products.html" class="card-cta" style="text-decoration:none;">&larr; All products</a>
  </div>
</section>

<section class="section" style="padding-top:8px;">
  <div class="container split">
    <div class="split-media">
      ${media}
    </div>
    <div class="split-copy">
      <span class="eyebrow">${p.badge}</span>
      <h1 style="margin:0 0 14px;font-family:var(--font);font-weight:300;font-size:clamp(30px,3.6vw,44px);line-height:1.12;letter-spacing:-0.01em;">${p.name}</h1>
      <p style="font-size:16.5px;color:var(--text-secondary);margin:0 0 22px;line-height:1.6;">${p.tagline}</p>
      ${paragraphs}
      ${photoNote}
      <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;">
        <a class="btn btn-primary" href="/contact.html?product=${p.slug}" id="i18n-ctaRequestQuote">Request a quote</a>
        <a class="btn btn-secondary" href="/products.html" id="i18n-ctaAllProducts">View all products</a>
      </div>
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">Specification</span>
        <h2 class="section-title">${p.name} at a glance</h2>
      </div>
    </div>
    <div class="split" style="align-items:start;">
      <table class="spec-table">
        ${specRows}
      </table>
      <div>
        <span class="eyebrow">Best suited for</span>
        <ul style="margin:14px 0 0;padding-left:18px;font-size:15px;line-height:1.9;color:var(--text-secondary);">
          ${bestFor}
        </ul>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { productDetail };
