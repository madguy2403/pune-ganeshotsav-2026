// Renders the parking zones grid and wires up the search filter.
(function () {
  var grid = document.getElementById("parking-grid");
  var searchInput = document.getElementById("parking-search");
  var emptyState = document.getElementById("parking-empty");
  if (!grid || !window.PARKING_SPOTS) return;

  function lang() { return window.MM_I18N ? window.MM_I18N.getLang() : "en"; }

  // name and area are bilingual {en, mr, hi}; type/hours stay in English
  // (category labels and figures), same convention as js/food.js.
  function localized(field) {
    return field[lang()] || field.en;
  }

  function directionsUrl(query) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
  }

  function cardHTML(p) {
    var name = localized(p.name);
    var area = localized(p.area);
    var type = localized(p.type);
    var searchIndex = (p.name.en + " " + p.name.mr + " " + p.name.hi).toLowerCase();
    var areaIndex = (p.area.en + " " + p.area.mr + " " + p.area.hi).toLowerCase();
    return (
      '<article class="card" data-name="' + searchIndex + '" data-area="' + areaIndex + '">' +
        '<div class="card-body">' +
          "<h3>" + name + "</h3>" +
          '<p class="card-meta">' + window.MM_ICONS.pin + "<span>" + area + "</span></p>" +
          '<div class="card-tags"><span class="tag">' + type + "</span></div>" +
          '<div class="card-actions">' +
            '<a class="btn btn-berry btn-block btn-sm" href="' + directionsUrl(p.query) + '" target="_blank" rel="noopener" data-i18n="common.startNavigation">Start Google Navigation</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    grid.innerHTML = window.PARKING_SPOTS.map(cardHTML).join("");
    if (window.MM_I18N) window.MM_I18N.applyTranslations();
  }
  renderGrid();

  function applyFilter() {
    var q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var visibleCount = 0;
    grid.querySelectorAll(".card").forEach(function (card) {
      var match = !q || card.dataset.name.indexOf(q) !== -1 || card.dataset.area.indexOf(q) !== -1;
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });
    if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }

  if (searchInput) searchInput.addEventListener("input", applyFilter);
  window.addEventListener("mm:langchange", function () {
    renderGrid();
    applyFilter();
  });
})();
