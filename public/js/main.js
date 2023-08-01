// alert('herklloo')
window.addEventListener("scroll", function () {
  let nav = document.querySelector('nav')
  nav.classList.toggle("sticky", window.scrollY > 0)
})
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 3
      }

    }

  })
})

$(document).ready(function () {

  var owl = $("#owl-demo");
  owl.owlCarousel({
    loop: true,
    items: 3,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 3
      }
    }

  });
})

