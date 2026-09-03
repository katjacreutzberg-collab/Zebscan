const products = require('../data/products');
const applications = require('../data/applications');
const { productCard } = require('../partials/product-card');

const CAT_KEYS = { nieuwbouw: 'catNieuwbouw', renovatie: 'catRenovatie', restauratie: 'catRestauratie' };
const CAT_FALLBACK = { nieuwbouw: 'New construction', renovatie: 'Renovation', restauratie: 'Restoration' };

const homeI18n = {
  en: {
    heroEyebrow: 'Vacuum glass',
    heroTitle: 'Discover the revolutionary power of <em>titanium vacuum glass</em>.',
    heroLede:
      'With a U-value as low as 0.34 W/m²K, a thickness of just 6.7 mm and a 50-year lifespan, vacuum glass is by far the best insulating glass in the world. It insulates three times better than high-performance double glazing and lasts twice as long. Perfect for anyone looking to make their building more sustainable — or simply save money.',
    applicationsTitle: 'Vacuum glass suits every project.',
    productRangeTitle: 'Our vacuum glass assortment — configurable for every project',
    productRangeLede:
      'Every Zebscan product is built on LandVac\'s patented titanium technology. That makes our range not just stronger, but better-performing and longer-lasting than other vacuum glazing on the market. Each product can be configured to your specification — clarity, solar control, acoustics and thickness. Get in touch at <a href="mailto:info@zebscan.com">info@zebscan.com</a> to discuss what\'s possible.',
  },
  sv: {
    heroEyebrow: 'Vakuumglas',
    heroTitle: 'Upptäck den revolutionerande kraften i <em>titanvakuumglas</em>.',
    heroLede:
      'Med ett U-värde ner till 0,34 W/m²K, en tjocklek på bara 6,7 mm och en livslängd på 50 år är vakuumglas det bästa isoleringsglaset i världen. Det isolerar tre gånger bättre än energieffektivt tvåglas och håller dubbelt så länge. Perfekt för dig som vill göra ditt hus mer hållbart — eller helt enkelt spara pengar.',
    applicationsTitle: 'Vakuumglas passar alla projekt.',
    productRangeTitle: 'Vårt vakuumglassortiment — konfigurerbart för alla projekt',
    productRangeLede:
      'Varje Zebscan-produkt är uppbyggd kring LandVacs patenterade titanteknologi. Det gör vårt sortiment inte bara starkare, utan även bättre presterande och mer hållbart än andra vakuumglasprodukter på marknaden. Varje produkt kan konfigureras efter behov — klarhet, solskydd, akustik och tjocklek. Kontakta oss på <a href="mailto:info@zebscan.com">info@zebscan.com</a> för att höra mer om möjligheterna.',
  },
  da: {
    heroEyebrow: 'Vakuumglas',
    heroTitle: 'Oplev den revolutionerende kraft i <em>titanvakuumglas</em>.',
    heroLede:
      'Med en U-værdi helt ned til 0,34 W/m²K, en tykkelse på kun 6,7 mm og en levetid på 50 år er vakuumglas verdens bedste isoleringsglas. Det isolerer tre gange bedre end energieffektivt termoglas og holder dobbelt så længe. Perfekt til dig, der vil gøre din bolig mere bæredygtig — eller bare spare penge.',
    applicationsTitle: 'Vakuumglas passer til ethvert projekt.',
    productRangeTitle: 'Vores vakuumglassortiment — konfigurerbart til ethvert projekt',
    productRangeLede:
      'Hvert Zebscan-produkt er bygget op omkring LandVacs patenterede titanteknologi. Det gør vores sortiment ikke kun stærkere, men også mere ydedygtigt og holdbart end andre vakuumglasprodukter på markedet. Hvert produkt kan konfigureres efter ønske — klarhed, solafskærmning, akustik og tykkelse. Kontakt os på <a href="mailto:info@zebscan.com">info@zebscan.com</a> for at høre mere om mulighederne.',
  },
};

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
          <h3 id="i18n-${CAT_KEYS[key]}">${CAT_FALLBACK[key]}</h3>
          <p>${a.lede}</p>
          <span class="card-cta">Explore →</span>
        </div>
      </a>`;
    })
    .join('\n      ');

  const t = homeI18n.en;

  return `<section class="page-hero" style="background-image:url('/assets/images/hero-bg.jpg');">
  <div class="container">
    <span class="page-hero-eyebrow reveal" id="i18n-heroEyebrow">${t.heroEyebrow}</span>
    <h1 class="reveal" style="animation-delay:.08s;" id="i18n-heroTitle" data-i18n-html>${t.heroTitle}</h1>
    <p class="reveal" style="animation-delay:.16s;" id="i18n-heroLede">${t.heroLede}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="usp-strip">
      <div class="usp-item"><span class="usp-value">0.34 W/m²K</span><span class="usp-label">Best U-value</span></div>
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
        <h2 class="section-title" id="i18n-applicationsTitle">${t.applicationsTitle}</h2>
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
        <h2 class="section-title" id="i18n-productRangeTitle">${t.productRangeTitle}</h2>
        <p class="section-lede" style="margin-top:10px;" id="i18n-productRangeLede" data-i18n-html>${t.productRangeLede}</p>
      </div>
    </div>
    <div class="card-grid card-grid-products">
      ${productCards}
    </div>
  </div>
</section>

<section class="section section-watermark" style="--watermark-img:url('/assets/images/applications/restauratie/restauratie-01.jpg');">
  <div class="container" style="max-width:64ch;">
    <span class="eyebrow">About Zebscan</span>
    <h2 class="section-title">An independent specialist, not a manufacturer.</h2>
    <p style="font-size:15.5px;line-height:1.68;color:var(--text-secondary);max-width:52ch;">Zebscan is an independent supplier of titanium vacuum glazing to the Swedish and Danish markets — the name stands for Zero Emission Building, Scandinavia. We work with architects, contractors and building owners across new construction, renovation and heritage restoration.</p>
    <a class="btn btn-secondary" href="/about.html" style="margin-top:20px;" id="i18n-ctaLearnMore">Learn more</a>
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

module.exports = { home, homeI18n };
