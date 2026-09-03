function header(activeKey) {
  const link = (key, href, idKey, fallback) => {
    const active = key === activeKey ? ' class="active"' : '';
    return `<a href="${href}"${active} id="i18n-${idKey}">${fallback}</a>`;
  };

  return `<header class="site-header">
  <div class="container">
    <a class="brand" href="/index.html" aria-label="Zebscan home">
      <img src="/assets/images/logo-darkblue.png" alt="Zebscan — Zero Emission Building" />
    </a>

    <nav class="nav-primary" aria-label="Primary">
      ${link('home', '/index.html', 'navHome', 'Home')}
      ${link('about', '/about.html', 'navAbout', 'About us')}
      ${link('products', '/products.html', 'navProducts', 'Products')}
      ${link('applications', '/applications.html', 'navApplications', 'Applications')}
      ${link('contact', '/contact.html', 'navContact', 'Contact')}
    </nav>

    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang-btn="en" class="active">EN</button>
        <span>&middot;</span>
        <button type="button" data-lang-btn="sv">SV</button>
        <span>&middot;</span>
        <button type="button" data-lang-btn="da">DA</button>
      </div>
      <a class="btn-quote" href="/contact.html" id="i18n-navQuote">Request a quote</a>
      <button type="button" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

module.exports = { header };
