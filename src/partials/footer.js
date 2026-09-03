const products = require('../data/products');

function footer() {
  const productLinks = products
    .map((p) => `<a href="/products/${p.slug}.html">${p.name}</a>`)
    .join('\n        ');

  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo"><img src="/assets/images/logo-darkblue.png" alt="Zebscan" /></div>
        <p id="i18n-footerTagline">Zero Emission Building</p>
      </div>
      <div class="footer-col">
        <h4 id="i18n-footerNavHeading">Site</h4>
        <a href="/index.html" id="i18n-navHome">Home</a>
        <a href="/about.html" id="i18n-navAbout">Over ons</a>
        <a href="/products.html" id="i18n-navProducts">Producten</a>
        <a href="/applications.html" id="i18n-navApplications">Toepassingen</a>
        <a href="/contact.html" id="i18n-navContact">Contact</a>
      </div>
      <div class="footer-col">
        <h4 id="i18n-footerContactHeading">Contact</h4>
        <a href="mailto:info@zebscan.se">info@zebscan.se</a>
        <a href="mailto:info@zebscan.dk">info@zebscan.dk</a>
        <a href="mailto:info@zebscan.com">info@zebscan.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span id="i18n-footerCopyright">© 2026 Zebscan — Zero Emission Building · Sweden · Denmark</span>
    </div>
  </div>
</footer>`;
}

module.exports = { footer };
