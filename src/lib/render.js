const { head } = require('../partials/head');
const { header } = require('../partials/header');
const { footer } = require('../partials/footer');
const common = require('../data/i18n/common');

function buildTranslations(pageEn) {
  const translations = {};
  ['en', 'sv', 'da'].forEach((lang) => {
    translations[lang] = Object.assign({}, pageEn || {}, common[lang]);
  });
  return translations;
}

function renderPage({ title, description, path, ogImage, navKey, body, pageEn, extraScripts = '' }) {
  const translations = buildTranslations(pageEn);
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
