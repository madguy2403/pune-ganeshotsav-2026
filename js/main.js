// Shared line-art icons (used in place of emoji for a consistent look
// across mandal/food/parking cards). stroke inherits currentColor.
window.MM_ICONS = {
  pin: '<svg class="meta-icon" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  calendar: '<svg class="meta-icon" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  clock: '<svg class="meta-icon" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  tag: '<svg class="meta-icon" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><circle cx="7" cy="7" r="2" fill="currentColor" stroke="none"></circle></svg>',
  car: '<svg class="meta-icon" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16V11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v5"></path><rect x="3" y="16" width="18" height="3" rx="1"></rect><circle cx="7.5" cy="19" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="16.5" cy="19" r="1.5" fill="currentColor" stroke="none"></circle></svg>'
};

// Shared behavior: mobile nav toggle, active link highlight, footer year.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var current = document.body.getAttribute("data-page");
  if (current) {
    document.querySelectorAll(".site-nav a[data-page]").forEach(function (link) {
      if (link.getAttribute("data-page") === current) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Rounds a live data-array length down to a friendly dashboard stat
  // (e.g. 56 -> "50+") so the homepage tiles never overstate what's there.
  function roundedStat(n) {
    if (n >= 20) return String(Math.floor(n / 10) * 10) + "+";
    if (n >= 10) return String(Math.floor(n / 5) * 5) + "+";
    return String(n);
  }
  var statMandals = document.getElementById("stat-mandals");
  if (statMandals && window.MANDALS) statMandals.textContent = roundedStat(window.MANDALS.length);
  var statFood = document.getElementById("stat-food");
  if (statFood && window.FOOD_SPOTS) statFood.textContent = roundedStat(window.FOOD_SPOTS.length);
  var statParking = document.getElementById("stat-parking");
  if (statParking && window.PARKING_SPOTS) statParking.textContent = roundedStat(window.PARKING_SPOTS.length);

  var tourPopup = document.getElementById("tour-popup");
  var tourPopupClose = document.getElementById("tour-popup-close");
  if (tourPopup && tourPopupClose) {
    if (sessionStorage.getItem("mm-tour-popup-dismissed")) {
      tourPopup.style.display = "none";
    }
    tourPopupClose.addEventListener("click", function () {
      tourPopup.style.display = "none";
      sessionStorage.setItem("mm-tour-popup-dismissed", "1");
    });
  }

  // Builds a real multi-stop Google Maps route through the mandals (origin
  // omitted so Maps starts from the visitor's current location), capped at
  // 8 stops to stay within the no-API-key directions URL's waypoint limit.
  var tourPlanLink = document.getElementById("tour-plan-link");
  if (tourPlanLink && window.MANDALS && window.MANDALS.length) {
    var stops = window.MANDALS.slice(0, 8).map(function (m) { return m.query; });
    var destination = stops.pop();
    var tourUrl = "https://www.google.com/maps/dir/?api=1" +
      "&destination=" + encodeURIComponent(destination) +
      (stops.length ? "&waypoints=" + stops.map(encodeURIComponent).join("|") : "") +
      "&travelmode=driving";
    tourPlanLink.href = tourUrl;
    tourPlanLink.target = "_blank";
    tourPlanLink.rel = "noopener";
  }

  // Header search jumps to the Mandals directory (or filters in place if
  // already there) — the guide's primary content lives there, while Food
  // and Parking each have their own dedicated search box.
  var headerSearchForm = document.getElementById("header-search-form");
  if (headerSearchForm) {
    headerSearchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("header-search").value.trim();
      var mandalSearch = document.getElementById("mandal-search");
      if (mandalSearch) {
        mandalSearch.value = q;
        mandalSearch.dispatchEvent(new Event("input"));
        mandalSearch.focus();
      } else {
        window.location.href = "mandals.html" + (q ? "?q=" + encodeURIComponent(q) : "");
      }
    });
  }
})();
