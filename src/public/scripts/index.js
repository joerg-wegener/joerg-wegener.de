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
  console.log('necessary cookies accepted')
  var cookieConsentElement = document.getElementById('cookie-consent')
  cookieConsentElement.classList.remove('active')
}

function accecptAllCookies() {
  console.log('all cookies accepted')
  var cookieConsentElement = document.getElementById('cookie-consent')
  cookieConsentElement.classList.remove('active')
}
