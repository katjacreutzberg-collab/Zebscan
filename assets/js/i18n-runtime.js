(function () {
  function applyLang(lang, translations) {
    var t = translations[lang] || translations.en;
    Object.keys(t).forEach(function (key) {
      var el = document.getElementById('i18n-' + key);
      if (!el) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = t[key];
      else el.textContent = t[key];
    });

    document.documentElement.lang = lang;
    var buttons = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      if (b.getAttribute('data-lang-btn') === lang) b.classList.add('active');
      else b.classList.remove('active');
    }
    try { localStorage.setItem('zebscan-lang', lang); } catch (e) {}
  }

  function initI18n(translations) {
    var buttons = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        applyLang(e.currentTarget.getAttribute('data-lang-btn'), translations);
      });
    }

    var initialLang = 'en';
    try {
      var saved = localStorage.getItem('zebscan-lang');
      if (saved && translations[saved]) initialLang = saved;
    } catch (e) {}
    applyLang(initialLang, translations);
  }

  window.initI18n = initI18n;
})();
