import '../scss/main.scss'

import Glide from '@glidejs/glide'

new Glide('.glide--reviews', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  gap: '32px',
  perTouch: false,
  unlimited: true,
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
}).mount()

new Glide('.glide--features', {
  type: 'carousel',
  perView: 4,
  focusAt: 'center',
  gap: '56px',
  perTouch: false,
  unlimited: true,
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
}).mount()

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
})
