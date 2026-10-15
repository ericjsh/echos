// SNU ECHOS — Shared Site Footer Component
(function () {
  var currentYear = new Date().getFullYear();
  var lastModDate = new Date(document.lastModified).toISOString().slice(0, 10);

  var footerHTML = [
    '<footer class="site-footer" role="contentinfo">',
    '  <div class="container footer-inner">',
    '',
    '    <!-- Foot brand: SNU logo + group identity -->',
    '    <div class="foot-brand">',
    '      <a class="foot-logo-link" href="https://en.snu.ac.kr/" target="_blank" rel="noopener">',
    '        <img class="foot-logo" src="img/snu_logo.png" alt="Seoul National University logo">',
    '      </a>',
    '      <div class="foot-brand-text">',
    '        <strong>SNU ECHOS</strong><br>',
    '        Research group for Evolution of Central engine and Host of SMBH',
    '        <address>SNU Astronomy Program, Department of Physics and Astronomy</address>',
    '      </div>',
    '    </div>',
    '',
    '    <!-- Microfooter: compact fine print -->',
    '    <div class="microfooter">',
    '      <small>© <span id="year">' + currentYear + '</span> SNU ECHOS</small>',
    '      <small>Images credited in-page via ⓘ popovers</small>',
    '      <small>Beta v0.3.0 • Updated <time id="lastmod">' + lastModDate + '</time></small>',
    '    </div>',
    '',
    '  </div>',
    '</footer>'
  ].join('\n');

  function renderFooter() {
    var placeholder = document.getElementById('site-footer');
    if (placeholder) {
      placeholder.outerHTML = footerHTML;
      return true;
    }
    var existing = document.querySelector('footer.site-footer');
    if (existing) {
      existing.outerHTML = footerHTML;
      return true;
    }
    return false;
  }

  if (!renderFooter()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderFooter);
    }
  }
})();
