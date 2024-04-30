const LS_COOKIECONSENT_KEY = 'cookie-consent'
const pageHeaderElement = document.getElementById('header')
document.addEventListener('scroll', (event) => updateHeader(event))

checkCookieConsent()

function updateHeader() {
  if (window.scrollY > 200) {
    pageHeaderElement.classList.add('active')
  } else {
    pageHeaderElement.classList.remove('active')
  }
}

function checkCookieConsent() {
  let consent = localStorage.getItem(LS_COOKIECONSENT_KEY)
  if (!consent) {
    var cookieConsentElement = document.getElementById('cookie-consent')
    cookieConsentElement.classList.add('active')
  }
}
