function aboutPage() {
  return `<section class="page-hero" style="background-image:url('/assets/images/applications/nieuwbouw/nieuwbouw-02.jpg');">
  <div class="container">
    <span class="page-hero-eyebrow reveal">Over ons</span>
    <h1 class="reveal" style="animation-delay:.08s;">An independent specialist in <em>titanium vacuum glazing.</em></h1>
    <p class="reveal" style="animation-delay:.16s;">Zebscan supplies vacuum-insulated glass to Sweden and Denmark — engineered around a titanium spacer and edge seal system that delivers class-leading insulation from a pane a fraction of the thickness of triple glazing.</p>
  </div>
</section>

<!-- TODO: drop in real founding year, team names and HQ location here once confirmed — left out deliberately rather than invented. -->

<section class="section">
  <div class="container split">
    <div>
      <span class="eyebrow">The name</span>
      <h2 class="section-title">Zero Emission Building, Scandinavia.</h2>
      <p style="font-size:15.5px;line-height:1.68;color:var(--text-secondary);">Zebscan is short for ZEB — Zero Emission Building — and Scan, for Scandinavia. It is a mission statement as much as a name: the glazing in a building's envelope is one of the largest, most fixable sources of avoidable heat loss, and the fastest lever most buildings have toward operating on genuinely zero-emission terms.</p>
      <p style="font-size:15.5px;line-height:1.68;color:var(--text-secondary);">We work specifically within Sweden and Denmark — markets with a real climate case for the highest insulation performance available, and a building stock, from grand civic architecture to standard terraced housing, where the ability to retrofit without replacing a frame matters as much as the U-value itself.</p>
    </div>
    <div class="split-media" style="aspect-ratio:4/3;padding:0;overflow:hidden;">
      <img src="/assets/images/applications/renovatie/renovatie-02.jpg" alt="Renovated Nordic housing with Zebscan vacuum glazing" style="width:100%;height:100%;object-fit:cover;" />
    </div>
  </div>
</section>

<section class="section section-ice">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">What we do</span>
        <h2 class="section-title">A specialist supplier, not a manufacturer.</h2>
        <p class="section-lede" style="margin-top:10px;">Zebscan is an independent reseller — we don't manufacture glass, we specialise in specifying and supplying it. Every product we sell is built on titanium-spacer vacuum technology, and every project we take on falls into one of three categories.</p>
      </div>
    </div>
    <div class="card-grid card-grid-3">
      <div class="card">
        <div class="card-body">
          <span class="card-eyebrow">New construction</span>
          <h3>Nieuwbouw</h3>
          <p>Developers and architects specifying glazing that meets the strictest Nordic energy codes without oversized frame sections.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <span class="card-eyebrow">Renovation</span>
          <h3>Renovatie</h3>
          <p>Homeowners upgrading standard housing stock — terraced houses, apartments — without replacing window frames.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <span class="card-eyebrow">Restoration</span>
          <h3>Restauratie</h3>
          <p>Heritage and monument owners meeting conservation constraints that rule out conventional insulated glazing entirely.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="eyebrow">How it works</span>
        <h2 class="section-title">Titanium, where most glass still uses aluminium.</h2>
        <p class="section-lede" style="margin-top:10px;">Every Zebscan pane is two hardened glass sheets separated by a vacuum gap just 0.3&nbsp;mm wide — not a gas-filled cavity. Removing the air removes convective heat transfer almost entirely. What makes the Zebscan range specifically titanium vacuum glazing is what holds that gap open: titanium spacers distributed across the pane, a titanium absorption strip that keeps the vacuum stable over decades, and a flexible titanium edge seal — in place of the rigid aluminium spacer bar most insulated glass still relies on.</p>
      </div>
    </div>
    <div class="usp-strip">
      <div class="usp-item"><span class="usp-value">&minus;70%</span><span class="usp-label">Heat conduction through the spacer, vs. aluminium</span></div>
      <div class="usp-item"><span class="usp-value">+40%</span><span class="usp-label">Flexural strength at the edge seal</span></div>
      <div class="usp-item"><span class="usp-value">50 years</span><span class="usp-label">Design life, no measurable U-value drift</span></div>
      <div class="usp-item"><span class="usp-value">Any angle</span><span class="usp-label">Full performance vertical, sloped or horizontal</span></div>
    </div>
  </div>
</section>

<section class="section section-ink">
  <div class="container" style="text-align:center;">
    <span class="eyebrow" style="justify-content:center;display:block;">Get in touch</span>
    <h2 class="section-title" style="margin-left:auto;margin-right:auto;">Ready to talk through a project?</h2>
    <a class="btn btn-primary" href="/contact.html" id="i18n-ctaRequestQuote" style="margin-top:12px;">Request a quote</a>
  </div>
</section>`;
}

module.exports = { aboutPage };
