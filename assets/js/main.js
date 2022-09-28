/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
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
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = function () {
  const nav = document.getElementById('header')
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

/*===== SPIN IMAGE =====*/

$(function () {
  var num = 36 // the total number of images

  // Preload all the images into hidden div
  for (var i = 01; i <= num; i++) {
    var img = document.createElement('img')
    img.src = '/assets/img/spin1/img' + i + '.jpg'
    document.getElementById('preload-imgs').appendChild(img)
  }

  // Control swipes using jquery.touchSwipe.min.js
  // http://labs.rampinteractive.co.uk/touchSwipe/
  var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeStatus: swipeStatus,
    allowPageScroll: 'vertical',
    threshold: 75
  }

  $(function () {
    imgs = $('.home__shape') // the element that will be swipeable
    imgs.swipe(swipeOptions)
  })

  function swipeStatus(event, phase, direction, distance) {
    var duration = 0
    if (direction == 'left') {
      changeImg(distance)
    } else if (direction == 'right') {
      changeImgR(-distance)
    }
  }

  function changeImg(imgNum) {
    // divide by 8 (or any number) to spread
    // it out so it doesn't load new img
    // every single px of swipe distance
    imgNum = Math.floor(imgNum / 8)

    if (imgNum < 1) {
      imgNum += num
    }
    if (imgNum > num) {
      imgNum -= num
    }

    // change the image src
    document.getElementById('myImg').src =
      "/Users/leonardomuniz/Documents/projetos/Yeezy-Ecom/assets/img/spin1/img'+i+'.jpg"
  }

  function changeImgR(imgNum) {
    // divide by 8 (or any number) to spread
    // it out so it doesn't load new img
    // every single px of swipe distance
    imgNum = Math.floor(imgNum / 8)

    var num2 = -Math.abs(num)
    if (imgNum > num2) {
      imgNum += num
    }
    if (imgNum <= num2) {
      imgNum += num * 2
    }

    // change the image src
    document.getElementById('myImg').src =
      "/Users/leonardomuniz/Documents/projetos/Yeezy-Ecom/assets/img/spin1/img'+i+'.jpg"
  }
})

/*===== SCROOLL REVEAL ANIMATION =====*/
function teste() {
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

  ScrollReveal({ reset: true })
  ScrollReveal().reveal('.home__sneaker')
  ScrollReveal().reveal('.sneaker', { delay: 200 })
  ScrollReveal().reveal('.collection__card', {
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
  })
}
teste()

/*===== PRODUCT PAGE =====*/

// window.onload = function product() {
//   const colour_btn_els = document.querySelectorAll('.colours .colour')
//   const capacity_btn_els = document.querySelectorAll('.capacity .size')
//   const imagery_el = document.querySelector('.imagery')
//   const image_el = document.querySelector('.imagery .image')

//   for (let i = 0; i < capacity_btn_els.length; i++) {
//     let btn = capacity_btn_els[i]

//     btn.addEventListener('click', function () {
//       document
//         .querySelector('.capacity .size.selected')
//         .classList.remove('selected')
//       this.classList.add('selected')
//     })
//   }

//   for (let i = 0; i < colour_btn_els.length; i++) {
//     let btn = colour_btn_els[i]

//     btn.addEventListener('click', function () {
//       document
//         .querySelector('.colours .colour.selected')
//         .classList.remove('selected')
//       this.classList.add('selected')
//       image_el.src = 'assets/images/xr-' + this.dataset.name + '.png'
//       imagery_el.style.backgroundColor = this.dataset.colour
//     })
//   }
// }
