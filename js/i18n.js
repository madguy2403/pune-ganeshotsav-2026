// Lightweight client-side i18n: swaps text on elements tagged with
// data-i18n / data-i18n-placeholder, remembers the choice in localStorage.
(function () {
  var STORAGE_KEY = "mm-lang";
  var CHOSEN_KEY = "mm-lang-chosen";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function dict(lang) {
    return (window.I18N && window.I18N[lang]) || window.I18N.en;
  }

  function t(key) {
    var d = dict(getLang());
    return d[key] || window.I18N.en[key] || key;
  }

  function applyTranslations(lang) {
    lang = lang || getLang();
    var d = dict(lang);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key]) el.textContent = d[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (d[key]) el.innerHTML = d[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (d[key]) el.setAttribute("placeholder", d[key]);
    });
    document.querySelectorAll(".lang-select").forEach(function (sel) {
      sel.value = lang;
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    localStorage.setItem(CHOSEN_KEY, "1");
    applyTranslations(lang);
    window.dispatchEvent(new CustomEvent("mm:langchange", { detail: { lang: lang } }));
  }

  function showLanguageModal() {
    var overlay = document.createElement("div");
    overlay.className = "mm-lang-modal-overlay";
    overlay.innerHTML =
      '<div class="mm-lang-modal" role="dialog" aria-modal="true" aria-label="Choose your language">' +
        '<p class="mm-lang-modal-title">Choose your language / भाषा चुनें / भाषा निवडा</p>' +
        '<div class="mm-lang-modal-options">' +
          '<button type="button" data-lang="en">English</button>' +
          '<button type="button" data-lang="hi">हिंदी</button>' +
          '<button type="button" data-lang="mr">मराठी</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.querySelectorAll("button[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
        overlay.remove();
      });
    });
  }

  window.MM_I18N = { t: t, getLang: getLang, setLang: setLang, applyTranslations: applyTranslations };

  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations(getLang());
    document.querySelectorAll(".lang-select").forEach(function (sel) {
      sel.addEventListener("change", function () {
        setLang(sel.value);
      });
    });
    if (!localStorage.getItem(CHOSEN_KEY)) {
      showLanguageModal();
    }
  });
})();
