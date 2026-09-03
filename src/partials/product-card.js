function findSpec(p, labelPattern) {
  return p.specs.find((s) => labelPattern.test(s.label));
}

function productCard(p) {
  const media = p.hasPhoto
    ? `<div class="card-media"><img src="${p.heroImage}" alt="${p.name}" loading="lazy" width="400" height="300" /></div>`
    : `<div class="card-photo" style="background-image:url('${p.heroImage}')"></div>`;

  const uValue = findSpec(p, /u-value/i);
  const thickness = findSpec(p, /thick/i);
  // cards are compact — trim a longer spec value ("from 6.7 mm (slim) /
  // 8.3 mm (standard)") down to its headline figure for the card; the full
  // detail still lives in the spec table on the product's own page
  const shortThickness = thickness && { ...thickness, value: thickness.value.split(/[,(]/)[0].trim() };
  const specItems = [uValue, shortThickness].filter(Boolean);
  const specRow = specItems
    .map((s) => `<span><b>${s.value}</b> ${s.label}</span>`)
    .join('\n      ');

  return `<a class="card" href="/products/${p.slug}.html">
  ${media}
  <div class="card-body">
    <span class="card-eyebrow">${p.badge}</span>
    <h3>${p.name}</h3>
    <p>${p.tagline}</p>
    <div class="card-spec-row">
      ${specRow}
    </div>
    <span class="card-cta">View product →</span>
  </div>
</a>`;
}

module.exports = { productCard };
