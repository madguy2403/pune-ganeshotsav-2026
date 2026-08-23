// Route Planner page: origin (typed or geolocated) + destination picker,
// builds a Google Maps directions embed plus a reliable "open in app" link.
(function () {
  var form = document.getElementById("route-form");
  if (!form) return;

  var originInput = document.getElementById("origin-input");
  var originCoords = null; // "lat,lng" set by geolocation, cleared if the user edits the text field
  var useLocationBtn = document.getElementById("use-location-btn");
  var destSelect = document.getElementById("destination-select");
  var customDest = document.getElementById("custom-destination");
  var statusEl = document.getElementById("map-status");
  var frameWrap = document.getElementById("map-frame-wrap");
  var openInAppLink = document.getElementById("open-in-app-link");

  function t(key) { return window.MM_I18N ? window.MM_I18N.t(key) : key; }

  // Mandal names are bilingual ({en, mr}); food/parking names are plain
  // strings. Resolve either shape to the current language's display text.
  function displayName(item) {
    if (typeof item.name === "object") {
      var lang = window.MM_I18N ? window.MM_I18N.getLang() : "en";
      return item.name[lang] || item.name.en;
    }
    return item.name;
  }

  function setStatus(key, type) {
    if (!statusEl) return;
    statusEl.textContent = t(key);
    statusEl.className = "status-msg is-visible " + (type === "error" ? "is-error" : "is-info");
  }
  function clearStatus() {
    if (!statusEl) return;
    statusEl.className = "status-msg";
    statusEl.textContent = "";
  }

  function populateDestinations() {
    var groups = [
      { label: "Mandals", items: window.MANDALS || [] },
      { label: "Food Spots", items: window.FOOD_SPOTS || [] },
      { label: "Parking Zones", items: window.PARKING_SPOTS || [] }
    ];
    groups.forEach(function (g) {
      if (!g.items.length) return;
      var optgroup = document.createElement("optgroup");
      optgroup.label = g.label;
      g.items.forEach(function (item) {
        var opt = document.createElement("option");
        var name = displayName(item);
        opt.value = item.query || name;
        opt.textContent = name;
        opt.dataset.id = item.id;
        optgroup.appendChild(opt);
      });
      destSelect.appendChild(optgroup);
    });
  }

  function preselectFromQueryString() {
    var params = new URLSearchParams(window.location.search);
    var toId = params.get("to");
    if (!toId) return;
    var match = Array.prototype.find.call(destSelect.options, function (opt) {
      return opt.dataset && opt.dataset.id === toId;
    });
    if (match) destSelect.value = match.value;
  }

  if (destSelect) {
    populateDestinations();
    preselectFromQueryString();
    window.addEventListener("mm:langchange", function () {
      var selectedId = destSelect.selectedOptions[0] && destSelect.selectedOptions[0].dataset.id;
      destSelect.querySelectorAll("optgroup").forEach(function (g) { g.remove(); });
      populateDestinations();
      if (selectedId) {
        var match = Array.prototype.find.call(destSelect.options, function (opt) {
          return opt.dataset && opt.dataset.id === selectedId;
        });
        if (match) destSelect.value = match.value;
      }
    });
  }

  if (useLocationBtn) {
    useLocationBtn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        setStatus("map.status.locationError", "error");
        return;
      }
      setStatus("map.status.locating", "info");
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          originCoords = pos.coords.latitude + "," + pos.coords.longitude;
          originInput.value = "My current location";
          setStatus("map.status.locationFound", "info");
        },
        function () {
          setStatus("map.status.locationError", "error");
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  }

  if (originInput) {
    originInput.addEventListener("input", function () {
      originCoords = null; // manual edit overrides the geolocated coordinates
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var destination = (customDest && customDest.value.trim()) || (destSelect && destSelect.value) || "";
    if (!destination) {
      setStatus("map.status.selectDestination", "error");
      return;
    }
    clearStatus();

    var origin = originCoords || (originInput && originInput.value.trim()) || "";

    var embedSrc = "https://www.google.com/maps?output=embed" +
      (origin ? "&saddr=" + encodeURIComponent(origin) : "") +
      "&daddr=" + encodeURIComponent(destination);

    frameWrap.innerHTML =
      '<iframe src="' + embedSrc + '" title="Directions map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';

    var appUrl = "https://www.google.com/maps/dir/?api=1" +
      (origin ? "&origin=" + encodeURIComponent(origin) : "") +
      "&destination=" + encodeURIComponent(destination) +
      "&travelmode=driving";
    openInAppLink.href = appUrl;
    openInAppLink.style.display = "inline-flex";
  });
})();
