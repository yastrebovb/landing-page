import '../scss/main.scss'

import Glide from '@glidejs/glide'

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  gap: '32px',
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
