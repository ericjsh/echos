// SNU ECHOS — Shared Site Navigation Component
(function () {
  var navItems = [
    { href: 'research.html', text: 'Research' },
    { href: 'projects.html', text: 'Projects' },
    { href: 'people.html', text: 'Members' },
    { href: 'publications.html', text: 'Publications' },
    {
      href: 'contact.html',
      text: 'For Prospective PhD Students',
      style: 'background-color: var(--blue); color: #fff; padding: 8px 14px; border-radius: 999px; font-weight: 600; opacity: 1;'
    }
  ];

  function getCurrentPage() {
    var path = window.location.pathname || '';
    if (!path || path.endsWith('/')) {
      return 'index.html';
    }
    var page = path.split('/').pop() || 'index.html';
    return page.split('?')[0].split('#')[0] || 'index.html';
  }

  function buildNavHTML(activePage) {
    var linksHTML = navItems.map(function (item) {
      var isActive = (item.href === activePage) ? ' class="active"' : '';
      var styleAttr = item.style ? ' style="' + item.style + '"' : '';
      return '        <a' + isActive + ' href="' + item.href + '"' + styleAttr + '>' + item.text + '</a>';
    }).join('\n');

    return [
      '<header class="site-header">',
      '  <div class="container nav-inner">',
      '    <a class="brand" href="index.html" aria-label="Go to home">',
      '      <span class="brand-mark"><img src="snuecho_banner_design.001.png" alt="SNU ECHOS"></span>',
      '    </a>',
      '',
      '    <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation">',
      '    <label for="nav-toggle" class="hamburger" aria-label="Open menu">',
      '      <span></span><span></span><span></span>',
      '    </label>',
      '',
      '    <nav id="primary-nav" class="nav" aria-label="Primary">',
      linksHTML,
      '    </nav>',
      '  </div>',
      '</header>'
    ].join('\n');
  }

  function initMobileMenu() {
    var t = document.getElementById('nav-toggle');
    if (!t) return;
    document.querySelectorAll('#primary-nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        t.checked = false;
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && t.checked) {
        t.checked = false;
      }
    });
  }

  function renderNav() {
    var placeholder = document.getElementById('site-header');
    var activePage = (placeholder && placeholder.getAttribute('data-active')) || getCurrentPage();
    var navHTML = buildNavHTML(activePage);

    if (placeholder) {
      placeholder.outerHTML = navHTML;
      initMobileMenu();
      return true;
    }
    var existing = document.querySelector('header.site-header');
    if (existing) {
      existing.outerHTML = navHTML;
      initMobileMenu();
      return true;
    }
    return false;
  }

  if (!renderNav()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderNav);
    }
  }
})();
