// "Find Nearest Help" buttons: geolocate the visitor, then hand off to a
// Google Maps search centered on their coordinates. No API key, no backend —
// Maps itself returns real, distance-sorted results for the category.
(function () {
  var buttons = document.querySelectorAll(".nearest-btn");
  if (!buttons.length) return;

  var statusEl = document.getElementById("nearest-status");

  function t(key) { return window.MM_I18N ? window.MM_I18N.t(key) : key; }

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

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        setStatus("emergency.nearest.locationError", "error");
        return;
      }
      setStatus("emergency.nearest.locating", "info");
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          clearStatus();
          var coords = pos.coords.latitude + "," + pos.coords.longitude;
          var query = btn.dataset.query + " near " + coords;
          var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
          window.open(url, "_blank", "noopener");
        },
        function () {
          setStatus("emergency.nearest.locationError", "error");
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  });
})();
