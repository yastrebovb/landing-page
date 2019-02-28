import '../scss/main.scss'

import './carousels'

import './animate'

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
})
