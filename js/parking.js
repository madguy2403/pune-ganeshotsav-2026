// Renders the parking zones grid and wires up the search filter.
(function () {
  var grid = document.getElementById("parking-grid");
  var searchInput = document.getElementById("parking-search");
  var emptyState = document.getElementById("parking-empty");
  if (!grid || !window.PARKING_SPOTS) return;

  function directionsUrl(query) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
  }

  function cardHTML(p) {
    return (
      '<article class="card" data-name="' + p.name.toLowerCase() + '" data-area="' + p.area.toLowerCase() + '">' +
        '<div class="card-body">' +
          "<h3>" + p.name + "</h3>" +
          '<p class="card-meta">' + window.MM_ICONS.pin + "<span>" + p.area + "</span></p>" +
          '<div class="card-tags"><span class="tag">' + p.type + "</span></div>" +
          '<p class="card-meta">' + window.MM_ICONS.car + "<span>Capacity: " + p.capacity + "</span></p>" +
          '<div class="card-meta" style="display:flex; justify-content:space-between;"><span style="display:flex; align-items:center; gap:6px;">' + window.MM_ICONS.clock + p.hours + '</span><strong>' + p.fee + "</strong></div>" +
          '<div class="card-actions">' +
            '<a class="btn btn-berry btn-block btn-sm" href="' + directionsUrl(p.query) + '" target="_blank" rel="noopener" data-i18n="common.startNavigation">Start Google Navigation</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  grid.innerHTML = window.PARKING_SPOTS.map(cardHTML).join("");
  if (window.MM_I18N) window.MM_I18N.applyTranslations();

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value.trim().toLowerCase();
      var visibleCount = 0;
      grid.querySelectorAll(".card").forEach(function (card) {
        var match = !q || card.dataset.name.indexOf(q) !== -1 || card.dataset.area.indexOf(q) !== -1;
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
    });
  }
})();
