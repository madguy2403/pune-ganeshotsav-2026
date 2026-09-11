// Route Planner page: origin (typed or geolocated) + destination picker,
// builds a Google Maps directions embed plus a reliable "open in app" link.
(function () {
  var form = document.getElementById("route-form");
  if (!form) return;

  var originInput = document.getElementById("origin-input");
  var originCoords = null; // "lat,lng" set by geolocation, cleared if the user edits the text field
  var useLocationBtn = document.getElementById("use-location-btn");
  var destInput = document.getElementById("destination-select");
  var destList = document.getElementById("destination-list");
  var destItems = [];
  var selectedDestination = null; // { id, name, query } once the visitor picks a suggestion
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

  // Builds the flat, filterable list backing the destination combobox —
  // a native <select> with 50+ mandals meant endless scrolling on mobile,
  // so typing narrows it down instead.
  function buildDestItems() {
    var groups = [
      { label: t("map.destination.group.mandals"), items: window.MANDALS || [] },
      { label: t("map.destination.group.food"), items: window.FOOD_SPOTS || [] },
      { label: t("map.destination.group.parking"), items: window.PARKING_SPOTS || [] }
    ];
    destItems = [];
    groups.forEach(function (g) {
      g.items.forEach(function (item) {
        var name = displayName(item);
        destItems.push({ id: item.id, name: name, query: item.query || name, group: g.label });
      });
    });
  }

  function closeDestList() {
    destList.hidden = true;
    destInput.setAttribute("aria-expanded", "false");
  }

  function selectDestItem(item) {
    selectedDestination = item;
    destInput.value = item.name;
    closeDestList();
  }

  function renderDestList(filterText) {
    var q = (filterText || "").trim().toLowerCase();
    var matches = q
      ? destItems.filter(function (it) { return it.name.toLowerCase().indexOf(q) !== -1; })
      : destItems;

    destList.innerHTML = "";
    if (!matches.length) {
      var empty = document.createElement("div");
      empty.className = "combobox-empty";
      empty.textContent = t("map.destination.noMatches");
      destList.appendChild(empty);
      destList.hidden = false;
      destInput.setAttribute("aria-expanded", "true");
      return;
    }

    var lastGroup = null;
    matches.forEach(function (it) {
      if (it.group !== lastGroup) {
        var groupEl = document.createElement("div");
        groupEl.className = "combobox-group-label";
        groupEl.textContent = it.group;
        destList.appendChild(groupEl);
        lastGroup = it.group;
      }
      var optEl = document.createElement("button");
      optEl.type = "button";
      optEl.className = "combobox-option";
      optEl.setAttribute("role", "option");
      optEl.textContent = it.name;
      optEl.addEventListener("click", function () { selectDestItem(it); });
      destList.appendChild(optEl);
    });
    destList.hidden = false;
    destInput.setAttribute("aria-expanded", "true");
  }

  function preselectFromQueryString() {
    var params = new URLSearchParams(window.location.search);
    var toId = params.get("to");
    if (!toId) return;
    var match = destItems.find(function (it) { return it.id === toId; });
    if (match) selectDestItem(match);
  }

  if (destInput && destList) {
    buildDestItems();
    preselectFromQueryString();

    destInput.addEventListener("focus", function () { renderDestList(destInput.value); });
    destInput.addEventListener("input", function () {
      selectedDestination = null;
      renderDestList(destInput.value);
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest("#destination-combobox")) closeDestList();
    });

    window.addEventListener("mm:langchange", function () {
      var selectedId = selectedDestination && selectedDestination.id;
      buildDestItems();
      if (selectedId) {
        var match = destItems.find(function (it) { return it.id === selectedId; });
        if (match) selectDestItem(match);
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

    var destination = (customDest && customDest.value.trim()) ||
      (selectedDestination && selectedDestination.query) ||
      (destInput && destInput.value.trim()) || "";
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
