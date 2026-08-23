// Renders the food & refreshments grid and wires up the search filter and
// area filter chips.
(function () {
  var grid = document.getElementById("food-grid");
  var searchInput = document.getElementById("food-search");
  var emptyState = document.getElementById("food-empty");
  var filtersEl = document.getElementById("food-filters");
  if (!grid || !window.FOOD_SPOTS) return;

  var activeLocality = "";

  function t(key) { return window.MM_I18N ? window.MM_I18N.t(key) : key; }
  function lang() { return window.MM_I18N ? window.MM_I18N.getLang() : "en"; }

  // name/specialty are bilingual {en, mr}; Hindi falls back to English since
  // no Hindi copy exists yet (same convention as js/mandals.js).
  function localized(field) {
    return field[lang()] || field.en;
  }

  // Pulls a specific locality/landmark out of an `area` string like
  // "Munjabacha Boll, Budhwar Peth" for use as a filter tag — prefer
  // whichever comma-separated part names a Peth, else fall back to the
  // first part (many entries are just "Pune" with no finer detail yet).
  function locality(area) {
    var parts = area.split(",").map(function (p) { return p.trim(); });
    var peth = parts.find(function (p) { return /peth/i.test(p); });
    return peth || parts[0];
  }

  function directionsUrl(query) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
  }

  function cardHTML(f) {
    var name = localized(f.name);
    var specialty = f.specialty && localized(f.specialty);
    var searchIndex = (f.name.en + " " + f.name.mr).toLowerCase();
    var specialtyIndex = (f.specialty ? (f.specialty.en + " " + f.specialty.mr) : "").toLowerCase();
    var tags = (f.tags || []).map(function (tg) { return '<span class="tag">' + tg + "</span>"; }).join("");
    return (
      '<article class="card" data-name="' + searchIndex + '" data-area="' + f.area.toLowerCase() + '" data-specialty="' + specialtyIndex + '" data-locality="' + locality(f.area).toLowerCase() + '">' +
        '<div class="card-body">' +
          '<div style="display:flex; justify-content:space-between; align-items:start; gap:8px;">' +
            "<h3>" + name + "</h3>" +
            '<span class="tag" style="white-space:nowrap;">★ ' + f.rating + "</span>" +
          "</div>" +
          '<p class="card-meta">' + window.MM_ICONS.pin + "<span>" + f.area + "</span></p>" +
          '<div class="card-tags">' + tags + "</div>" +
          (specialty ? '<p class="card-meta">' + window.MM_ICONS.tag + "<span>" + specialty + "</span></p>" : "") +
          '<div class="card-meta" style="display:flex; justify-content:space-between;"><span style="display:flex; align-items:center; gap:6px;">' + window.MM_ICONS.clock + f.hours + '</span><strong>' + f.price + "</strong></div>" +
          '<div class="card-actions">' +
            '<a class="btn btn-berry btn-block btn-sm" href="' + directionsUrl(f.query) + '" target="_blank" rel="noopener" data-i18n="common.startNavigation">Start Google Navigation</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    grid.innerHTML = window.FOOD_SPOTS.map(cardHTML).join("");
    if (window.MM_I18N) window.MM_I18N.applyTranslations();
  }
  renderGrid();

  function renderFilters() {
    if (!filtersEl) return;
    var localities = Array.from(new Set(window.FOOD_SPOTS.map(function (f) { return locality(f.area); })));
    localities.sort();

    function chipClass(loc) { return "filter-chip" + (loc === activeLocality ? " is-active" : ""); }

    var chips = ['<button type="button" class="' + chipClass("") + '" data-locality="">' + t("food.filters.all") + "</button>"];
    localities.forEach(function (loc) {
      var val = loc.toLowerCase();
      chips.push('<button type="button" class="' + chipClass(val) + '" data-locality="' + val + '">' + window.MM_ICONS.pin + "<span>" + loc + "</span></button>");
    });
    filtersEl.innerHTML = chips.join("");

    filtersEl.querySelectorAll(".filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        activeLocality = chip.dataset.locality;
        filtersEl.querySelectorAll(".filter-chip").forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        applyFilters();
      });
    });
  }

  function applyFilters() {
    var q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var visibleCount = 0;
    grid.querySelectorAll(".card").forEach(function (card) {
      var textMatch = !q ||
        card.dataset.name.indexOf(q) !== -1 ||
        card.dataset.area.indexOf(q) !== -1 ||
        card.dataset.specialty.indexOf(q) !== -1;
      var localityMatch = !activeLocality || card.dataset.locality === activeLocality;
      var match = textMatch && localityMatch;
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });
    if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }

  renderFilters();
  applyFilters();
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  window.addEventListener("mm:langchange", function () {
    renderFilters();
    renderGrid();
    applyFilters();
  });
})();
