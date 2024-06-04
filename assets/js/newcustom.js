//TYPE ANIMATION TEST JS
const typedSpan = document.getElementById("typed")
const totype = ["Enterprise Software", "Web & mobile applications", "Cloud Native", "Ecommerce", "Blockchain", "IoT-app"]

const delayTyping_char = 100;
const delayErasing_text = 50;
const delayTyping_text = 2000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < totype[totypeIndex].length) {
        typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, delayTyping_char);
    } else {
        setTimeout(eraseText, delayTyping_text);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedSpan.textContent = totype[totypeIndex].substring(0, charIndex - 1);
        charIndex = charIndex - 1;
        setTimeout(eraseText, delayErasing_text);
    } else {
        totypeIndex++;

        if (totypeIndex >= totype.length)
            totypeIndex = 0;
        setTimeout(typeText, delayTyping_text);
    }
}

window.onload = function () {
    if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}


//SIDEBAR FORM JS

function showDrawer() {
    document.getElementById('sidebar-popup').classList.add('show-drawer');
}

function hideDrawer() {
    document.getElementById('sidebar-popup').classList.remove('show-drawer');
}

//===== CLIENT SPEAK SLIDER
$(document).ready(function () {
    $("#client-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 1.1
                }
      },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1
                }
      },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
      }
    ]

    });
});


//===== CASE STUDIES SLIDER
$(document).ready(function () {
    $("#case-slide").slick({
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        prevArrow: '<div class="slick-prev slick-arrow"><img src="assets/images/Arrow-slideleft.png"></div>',
        nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/Arrow-slideright.png"></div>',
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 1.1
                }
      },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
      },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
      }
    ]

    });
});

//Dropdown Hover JS

$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu')
            .stop(true, true).delay(100).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu')
            .stop(true, true).delay(100).fadeOut(200);
    });
});
