import '../scss/main.scss'

import './slider'

import './animate'

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
})
