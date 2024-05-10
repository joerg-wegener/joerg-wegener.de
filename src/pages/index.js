const pageHeaderElement = document.getElementById('header')
document.addEventListener('scroll', (event) => updateHeader(event))

function updateHeader(event) {
  if (window.scrollY > 200) {
    pageHeaderElement.classList.add('active')
  } else {
    pageHeaderElement.classList.remove('active')
  }
}
