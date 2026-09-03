const { head } = require('../partials/head');
const { header } = require('../partials/header');
const { footer } = require('../partials/footer');
const common = require('../data/i18n/common');

// pageTranslations, when given, is a full per-language object like common.js
// itself: { en: {...}, sv: {...}, da: {...} }. Pages that don't need
// per-language body copy yet can omit it entirely — those pages just fall
// back to the shared nav/footer/CTA strings in every language.
function buildTranslations(pageTranslations) {
  const translations = {};
  ['en', 'sv', 'da'].forEach((lang) => {
    const pageForLang = (pageTranslations && pageTranslations[lang]) || {};
    translations[lang] = Object.assign({}, pageForLang, common[lang]);
  });
  return translations;
}

function renderPage({ title, description, path, ogImage, navKey, body, pageTranslations, extraScripts = '' }) {
  const translations = buildTranslations(pageTranslations);
  return `<!doctype html>
<html lang="en">
${head({ title, description, path, ogImage })}
<body>
${header(navKey)}
${body}
${footer()}
<script src="/assets/js/nav.js" defer></script>
<script src="/assets/js/i18n-runtime.js" defer></script>
${extraScripts}
<script defer>
  window.addEventListener('DOMContentLoaded', function () {
    if (window.initI18n) window.initI18n(${JSON.stringify(translations)});
  });
</script>
</body>
</html>
`;
}

module.exports = { renderPage };
