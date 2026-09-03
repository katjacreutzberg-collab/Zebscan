(function () {
  var form = document.getElementById('quote-form');
  var status = document.getElementById('form-status');
  if (!form) return;

  function showStatus(text, kind) {
    if (!status) return;
    status.textContent = text;
    status.className = 'form-status is-visible ' + (kind === 'error' ? 'is-error' : 'is-success');
  }

  if (location.search.indexOf('sent=1') !== -1) {
    showStatus(form.getAttribute('data-success-text') || 'Thanks — we’ll be in touch shortly.', 'success');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          showStatus(form.getAttribute('data-success-text') || 'Thanks — we’ll be in touch shortly.', 'success');
          form.reset();
        } else {
          showStatus(form.getAttribute('data-error-text') || 'Something went wrong. Please try again or email us directly.', 'error');
        }
      })
      .catch(function () {
        showStatus(form.getAttribute('data-error-text') || 'Something went wrong. Please try again or email us directly.', 'error');
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();
