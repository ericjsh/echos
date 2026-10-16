// SNU ECHOS — Publications Dynamic Renderer
(function () {
  function renderPublications() {
    var placeholder = document.getElementById('publications-list');
    if (!placeholder || !Array.isArray(window.PUBLICATIONS)) return false;

    // Group papers by year preserving input order
    var years = [];
    var papersByYear = {};

    window.PUBLICATIONS.forEach(function (paper) {
      var y = paper.year;
      if (!papersByYear[y]) {
        papersByYear[y] = [];
        years.push(y);
      }
      papersByYear[y].push(paper);
    });

    // Sort years descending
    years.sort(function (a, b) {
      return b - a;
    });

    var html = '';

    years.forEach(function (year) {
      html += '      <div class="year">' + year + '</div>\n\n';

      papersByYear[year].forEach(function (paper) {
        var links = paper.links || {};
        var linksHTML = '';

        // 1. NASA ADS (Primary button)
        if (links.ads && links.ads !== '') {
          linksHTML += '          <a class="btn primary" href="' + links.ads + '" target="_blank" rel="noopener">NASA ADS</a>\n';
        }

        // 2. DOI
        if (links.doi && links.doi !== '') {
          linksHTML += '          <a class="btn" href="' + links.doi + '" target="_blank" rel="noopener">DOI</a>\n';
        }

        // 3. arXiv
        if (links.arxiv && links.arxiv !== '') {
          linksHTML += '          <a class="btn" href="' + links.arxiv + '" target="_blank" rel="noopener">arXiv</a>\n';
        }

        html += '      <article class="paper">\n' +
          '        <p class="meta">' + paper.journal + '</p>\n' +
          '        <h3>' + paper.title + '</h3>\n' +
          '        <p class="meta">' + paper.authors + '</p>\n' +
          '        <div class="links">\n' +
          linksHTML +
          '        </div>\n' +
          '      </article>\n\n';
      });
    });

    placeholder.outerHTML = html;
    return true;
  }

  if (!renderPublications()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderPublications);
    }
  }
})();
