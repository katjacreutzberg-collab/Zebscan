function productCard(p) {
  const media = p.hasPhoto
    ? `<div class="card-media"><img src="${p.heroImage}" alt="${p.name}" loading="lazy" width="400" height="300" /></div>`
    : `<div class="card-photo" style="background-image:url('${p.heroImage}')"></div>`;

  return `<a class="card" href="/products/${p.slug}.html">
  ${media}
  <div class="card-body">
    <span class="card-eyebrow">${p.badge}</span>
    <h3>${p.name}</h3>
    <p>${p.tagline}</p>
    <div class="card-spec-row">
      <span><b>${p.specs[0].value}</b> ${p.specs[0].label}</span>
    </div>
    <span class="card-cta">View product →</span>
  </div>
</a>`;
}

module.exports = { productCard };
