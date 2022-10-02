/*===== CHANGE COLOR HEADER =====*/
window.onscroll = function () {
  const nav = document.getElementById('header')
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

/*===== SCROLL REVEAL =====*/
window.sr = ScrollReveal({ reset: false })

sr.reveal('.home__img', {
  origin: 'right',
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.home__shape', {
  origin: 'left',
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.home__data', {
  origin: 'bottom',
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.sneaker1', {
  origin: 'right',
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.sneaker2', {
  origin: 'right',
  duration: 1700,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.sneaker3', {
  origin: 'right',
  duration: 2200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

ScrollReveal().reveal('.collection__card', {
  delay: 200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)'
})

sr.reveal('.new__mens', {
  origin: 'top',
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.new__sneaker-card', {
  origin: 'right',
  duration: 1700,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

sr.reveal('.new__sneaker-card1', {
  origin: 'right',
  duration: 2200,
  scale: 1,
  distance: '200px',
  useDelay: 'once'
})

/*===== Initialize Swiper =====*/
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
})
swiper.init()

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
navMenu = document.getElementById('nav-menu')

function linkAction() {
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll(`section[id]`)

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollV = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')

      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('remove')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}
