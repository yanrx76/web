(function () {
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value != null && value !== "") el.textContent = value;
  }

  setText("cfg-company-cn", cfg.companyCn);
  setText("cfg-company-en", cfg.companyEn);
  setText("cfg-brand-slug", cfg.brandSlug);
  setText("cfg-product-name", cfg.productName);
  setText("cfg-tagline-cn", cfg.productTaglineCn);
  setText("cfg-tagline-en", cfg.productTaglineEn);
  setText("cfg-email", cfg.contactEmail);
  setText("cfg-address-1", cfg.addressCn);
  setText("cfg-address-2", cfg.addressCnLine2);
  setText("cfg-phone", cfg.phone);

  var mailLink = document.getElementById("cfg-email-link");
  if (mailLink && cfg.contactEmail) {
    mailLink.href = "mailto:" + cfg.contactEmail;
    mailLink.textContent = cfg.contactEmail;
  }

  var icpEl = document.getElementById("cfg-icp");
  if (icpEl) {
    if (cfg.icp) {
      icpEl.textContent = cfg.icp;
      icpEl.hidden = false;
    } else {
      icpEl.textContent = "";
      icpEl.hidden = true;
    }
  }

  var grid = document.getElementById("tech-grid");
  if (grid && cfg.techHighlights && cfg.techHighlights.length) {
    grid.innerHTML = cfg.techHighlights.map(function (item) {
      return (
        '<article class="panel">' +
        '<p class="en">' + escapeHtml(item.titleEn || "") + "</p>" +
        "<h3>" + escapeHtml(item.title || "") + "</h3>" +
        "<p>" + escapeHtml(item.desc || "") + "</p>" +
        "</article>"
      );
    }).join("");
  }

  document.title = cfg.companyCn + " · " + cfg.productName;
})();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}