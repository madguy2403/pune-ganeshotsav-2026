// Renders the mandal directory grid, wires up the search filter, and opens
// a full-detail modal for each mandal instead of an inline accordion.
(function () {
  var grid = document.getElementById("mandals-grid");
  var manacheGrid = document.getElementById("mandals-manache-grid");
  var manacheSection = document.getElementById("mandals-manache-section");
  var searchInput = document.getElementById("mandal-search");
  var emptyState = document.getElementById("mandals-empty");
  var filtersEl = document.getElementById("mandal-filters");
  if (!grid || !window.MANDALS) return;

  var MANACHE = window.MANDALS.filter(function (m) { return m.category === "Manache Ganpati"; });
  var REST = window.MANDALS.filter(function (m) { return m.category !== "Manache Ganpati"; });

  // Pulls the specific locality (e.g. "Budhwar Peth") out of an `area`
  // string like "Tulshibaug, Budhwar Peth, Pune" for use as a filter tag —
  // the data has no dedicated locality field, and part order isn't
  // consistent, so prefer whichever comma-separated part names a Peth.
  function locality(area) {
    var parts = area.split(",").map(function (p) { return p.trim(); });
    var peth = parts.find(function (p) { return /peth$/i.test(p); });
    return peth || parts[0];
  }

  var activeLocality = "";

  function t(key) { return window.MM_I18N ? window.MM_I18N.t(key) : key; }
  function lang() { return window.MM_I18N ? window.MM_I18N.getLang() : "en"; }

  // Mandal names/history are bilingual {en, mr}; Hindi falls back to English
  // since no Hindi copy exists for this data yet.
  function localized(field) {
    return field[lang()] || field.en;
  }

  // `established` stays a single English string in the data (mixing plain
  // years with phrases like "Built 1754" would be a lot to hand-translate
  // fully) — but at minimum the digits should read as Marathi numerals when
  // Marathi is active, same as the rest of the card.
  var MR_DIGITS = { "0": "०", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९" };
  function localizeDigits(str) {
    if (lang() !== "mr") return str;
    return String(str).replace(/[0-9]/g, function (d) { return MR_DIGITS[d]; });
  }

  function directionsUrl(query) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
  }

  function initials(name) {
    return name
      .replace(/\(.*?\)/g, "")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function (w) { return w[0]; })
      .join("")
      .toUpperCase();
  }

  function metaHTML(m) {
    var meta = '<span class="card-meta-inline">' + window.MM_ICONS.pin + "<span>" + m.area + "</span></span>";
    if (m.established) meta += '<span class="card-meta-inline">' + window.MM_ICONS.calendar + "<span>" + localizeDigits(m.established) + "</span></span>";
    return meta;
  }

  // Photos come in whatever aspect ratio the source had, but the media box
  // is a fixed shape — object-fit: contain alone would letterbox each photo
  // by a different amount. A blurred cover copy of the same photo behind it
  // fills that leftover space so every card reads as "full" and consistent
  // while the sharp foreground image stays completely uncropped.
  function mediaHTML(m, className) {
    if (m.image) {
      return (
        '<div class="' + className + ' has-photo">' +
          '<div class="media-bg" style="background-image:url(\'' + m.image + '\')" aria-hidden="true"></div>' +
          '<img class="media-fg" src="' + m.image + '" alt="" loading="lazy">' +
        "</div>"
      );
    }
    return '<div class="' + className + '" aria-hidden="true">' + initials(m.name.en) + "</div>";
  }

  function cardHTML(m) {
    var name = localized(m.name);
    var historyText = m.history && localized(m.history);
    var isManache = m.category === "Manache Ganpati";
    var searchIndex = (m.name.en + " " + m.name.mr + " " + m.area).toLowerCase();
    return (
      '<article class="card' + (isManache ? " card-manache" : "") + '" data-id="' + m.id + '" data-name="' + searchIndex + '" data-area="' + m.area.toLowerCase() + '" data-locality="' + locality(m.area).toLowerCase() + '">' +
        mediaHTML(m, "card-media") +
        '<div class="card-body">' +
          '<div class="card-title-row">' +
            "<h3>" + name + "</h3>" +
            '<div class="card-meta-inline-group">' + metaHTML(m) + "</div>" +
          "</div>" +
          '<div class="card-actions">' +
            (historyText ? '<button type="button" class="btn btn-sm mandal-toggle">' + t("common.viewDetails") + "</button>" : "") +
            '<a class="btn btn-berry btn-sm" href="' + directionsUrl(m.query) + '" target="_blank" rel="noopener">' + t("common.getDirections") + "</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  // ---------- Detail modal ----------
  var modalOverlay = document.createElement("div");
  modalOverlay.className = "mandal-modal-overlay";
  document.body.appendChild(modalOverlay);

  function closeModal() {
    modalOverlay.classList.remove("is-open");
    modalOverlay.innerHTML = "";
    document.body.style.overflow = "";
  }

  function openModal(m) {
    var name = localized(m.name);
    var historyText = m.history && localized(m.history);
    modalOverlay.innerHTML =
      '<div class="mandal-modal" role="dialog" aria-modal="true" aria-label="' + name + '">' +
        '<button type="button" class="mandal-modal-close" aria-label="Close">&times;</button>' +
        mediaHTML(m, "mandal-modal-media") +
        '<div class="mandal-modal-body">' +
          "<h3>" + name + "</h3>" +
          '<div class="mandal-modal-meta">' + metaHTML(m) + "</div>" +
          (historyText ? '<p class="mandal-modal-history">' + historyText + "</p>" : "") +
          '<a class="btn btn-berry btn-block" href="' + directionsUrl(m.query) + '" target="_blank" rel="noopener">' + t("common.getDirections") + "</a>" +
        "</div>" +
      "</div>";
    modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalOverlay.querySelector(".mandal-modal-close").addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  function wireToggles(container) {
    container.querySelectorAll(".mandal-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.closest(".card").dataset.id;
        var m = window.MANDALS.find(function (item) { return item.id === id; });
        if (m) openModal(m);
      });
    });
  }

  function renderFilters() {
    if (!filtersEl) return;
    var localities = Array.from(new Set(window.MANDALS.map(function (m) { return locality(m.area); })));
    localities.sort();

    function chipClass(loc) { return "filter-chip" + (loc === activeLocality ? " is-active" : ""); }

    var chips = ['<button type="button" class="' + chipClass("") + '" data-locality="">' + t("mandals.filters.all") + "</button>"];
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

  function render() {
    if (manacheGrid) manacheGrid.innerHTML = MANACHE.map(cardHTML).join("");
    grid.innerHTML = REST.map(cardHTML).join("");
    if (window.MM_I18N) window.MM_I18N.applyTranslations();

    if (manacheGrid) wireToggles(manacheGrid);
    wireToggles(grid);

    applyFilters();
  }

  function applyFilters() {
    var q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var visibleCount = 0;
    var manacheVisible = 0;

    function textMatches(card) {
      return !q || card.dataset.name.indexOf(q) !== -1 || card.dataset.area.indexOf(q) !== -1;
    }
    function cardMatches(card) {
      var localityMatch = !activeLocality || card.dataset.locality === activeLocality;
      return textMatches(card) && localityMatch;
    }

    grid.querySelectorAll(".card").forEach(function (card) {
      var match = cardMatches(card);
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (manacheGrid) {
      // Manache Ganpati is a fixed list of the five first-honor mandals —
      // the location filter chips shouldn't hide any of them, only the
      // text search still applies.
      manacheGrid.querySelectorAll(".card").forEach(function (card) {
        var match = textMatches(card);
        card.style.display = match ? "" : "none";
        if (match) manacheVisible++;
      });
      if (manacheSection) manacheSection.style.display = manacheVisible === 0 ? "none" : "";
    }

    if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }

  renderFilters();
  render();
  window.addEventListener("mm:langchange", function () { renderFilters(); render(); });

  if (searchInput) {
    var presetQuery = new URLSearchParams(window.location.search).get("q");
    if (presetQuery) searchInput.value = presetQuery;

    searchInput.addEventListener("input", applyFilters);

    if (presetQuery) searchInput.dispatchEvent(new Event("input"));
  }
})();
