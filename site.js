// get the browser's language preferences
function getUserLanguagePreferences() {
    var langs = [];
    if (navigator.languages) {
        langs = navigator.languages;
    }
    else if (navigator.userLanguage) {
        langs[0] = navigator.userLanguage; // Internet Explorer; maybe Edge pre-Chromium
    }
    return langs;
}

// output the browser's language preferences
function printUserLanguagePreferences() {
    var el = document.getElementById('lang-prefs');
    if (el && el.textContent) {
        el.textContent = getUserLanguagePreferences();
    }    
}

document.addEventListener('DOMContentLoaded', printUserLanguagePreferences);