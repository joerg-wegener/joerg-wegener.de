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

  var acceptNecessaryCookiesButton = document.getElementById(
    'acceptNecessaryCookies',
  )
  acceptNecessaryCookiesButton.addEventListener('click', acceptNecessaryCookies)
  var accecptAllCookiesButton = document.getElementById('acceptAllCookies')
  accecptAllCookiesButton.addEventListener('click', accecptAllCookies)
}

function acceptNecessaryCookies() {
  localStorage.setItem(LS_COOKIECONSENT_KEY, 'necessary')
  var cookieConsentElement = document.getElementById('cookie-consent')
  cookieConsentElement.classList.remove('active')
}

function accecptAllCookies() {
  localStorage.setItem(LS_COOKIECONSENT_KEY, 'all')
  var cookieConsentElement = document.getElementById('cookie-consent')
  cookieConsentElement.classList.remove('active')
}
