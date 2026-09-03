const products = require('../data/products');

function contactPage() {
  const productOptions = products
    .map((p) => `<option value="${p.slug}">${p.name}</option>`)
    .join('\n              ');

  return `<section class="page-hero" style="background-image:url('/assets/images/hero-bg.jpg');min-height:clamp(220px,30vh,320px);">
  <div class="container">
    <span class="page-hero-eyebrow reveal">Contact</span>
    <h1 class="reveal" style="animation-delay:.08s;">Request a quote.</h1>
    <p class="reveal" style="animation-delay:.16s;">Tell us about the project and we'll come back with a specification and pricing. No obligation.</p>
  </div>
</section>

<section class="section">
  <div class="container split" style="align-items:start;">
    <div>
      <!-- TODO: replace REPLACE_ME with the real Formspree form ID before this branch is merged/launched -->
      <form id="quote-form" action="https://formspree.io/f/REPLACE_ME" method="POST"
            data-success-text="Thanks — your request has been sent. We'll be in touch shortly."
            data-error-text="Something went wrong sending this. Please try again, or email us directly.">
        <div class="form-grid">
          <div class="form-field">
            <label for="f-name">Name</label>
            <input type="text" id="f-name" name="name" required autocomplete="name">
          </div>
          <div class="form-field">
            <label for="f-company">Company (optional)</label>
            <input type="text" id="f-company" name="company" autocomplete="organization">
          </div>
          <div class="form-field">
            <label for="f-email">Email</label>
            <input type="email" id="f-email" name="email" required autocomplete="email">
          </div>
          <div class="form-field">
            <label for="f-phone">Phone (optional)</label>
            <input type="tel" id="f-phone" name="phone" autocomplete="tel">
          </div>
          <div class="form-field">
            <label for="f-project-type">Project type</label>
            <select id="f-project-type" name="project_type">
              <option value="nieuwbouw">Nieuwbouw — new construction</option>
              <option value="renovatie">Renovatie — renovation</option>
              <option value="restauratie">Restauratie — restoration</option>
              <option value="other">Other / not sure</option>
            </select>
          </div>
          <div class="form-field">
            <label for="f-product">Product interest</label>
            <select id="f-product" name="product">
              <option value="">Not sure — recommend one</option>
              ${productOptions}
            </select>
          </div>
          <div class="form-field full">
            <label for="f-message">Project details</label>
            <textarea id="f-message" name="message" required placeholder="Location, approximate glazing area, current window type, timeline…"></textarea>
          </div>
        </div>

        <input type="text" name="_gotcha" class="form-honeypot" tabindex="-1" autocomplete="off">
        <input type="hidden" name="_subject" value="New quote request — Zebscan">
        <input type="hidden" name="_next" value="https://zebscan.com/contact.html?sent=1">

        <button type="submit" class="btn btn-primary" style="margin-top:20px;" id="i18n-ctaRequestQuote">Request a quote</button>
        <div class="form-status" id="form-status"></div>
      </form>
    </div>

    <div>
      <span class="eyebrow">Direct contact</span>
      <p style="font-size:15px;color:var(--text-secondary);margin:10px 0 20px;">Prefer email? Reach us directly:</p>
      <div style="display:flex;flex-direction:column;gap:10px;font-family:var(--font);font-size:15px;">
        <a href="mailto:info@zebscan.se" style="color:var(--accent);text-decoration:none;">info@zebscan.se</a>
        <a href="mailto:info@zebscan.dk" style="color:var(--accent);text-decoration:none;">info@zebscan.dk</a>
        <a href="mailto:info@zebscan.com" style="color:var(--accent);text-decoration:none;">info@zebscan.com</a>
      </div>
      <div class="card-spec-row" style="margin-top:28px;border-top:1px solid var(--line);padding-top:16px;">
        <span>Sweden &middot; Denmark</span>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { contactPage };
