//TYPE ANIMATION TEST JS
const typedSpan = document.getElementById("typed");
const totype = [
  "Enterprise Software",
  "Web & mobile applications",
  "Cloud Native",
  "Ecommerce",
  "Blockchain",
  "IoT-app",
];

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

        if (totypeIndex >= totype.length) totypeIndex = 0;
        setTimeout(typeText, delayTyping_text);
    }
}

window.onload = function () {
    if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
};

//SIDEBAR FORM JS

function showDrawer() {
    document.getElementById("sidebar-popup").classList.add("show-drawer");
}

function hideDrawer() {
    document.getElementById("sidebar-popup").classList.remove("show-drawer");
}

$(document).ready(function () {
    //===== CLIENT SPEAK SLIDER
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
                    slidesToShow: 1.1,
                },
      },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1,
                },
      },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                },
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
      },
    ],
    });

    //===== CASE STUDIES SLIDER
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
                    slidesToShow: 1.1,
                },
      },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
      },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
      },
    ],
    });

    //===== CASE STUDIES DETAILS PROJECK SCREEN SLIDER

    $("#project-slide").slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 3000,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2
                }
      },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1.8
                }
      },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1.5
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

    //===== MAJOR SCREEN SLIDER
    $("#major-slide").slick({
        slidesToShow: 1.2,
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
                    slidesToShow: 1
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

    //Dropdown Hover JS
    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
        },
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
        }
    );
});

//Sidebar form class add & remove
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
        jQuery('.main-header').addClass("sticky-header");
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
        jQuery('.main-header').removeClass("sticky-header");
    }

    //Sidebar form class add & remove
    var scroll = $(window).scrollTop();
    if (scroll > 900) {
        $(".sidebar-btn").addClass("lightHeader");
    } else {
        $(".sidebar-btn").removeClass("lightHeader");
    }
});
//Scroll to Top
$("#return-to-top").click(function () {
    // When arrow is clicked
    $("body,html").animate({
            scrollTop: 0, // Scroll to top of body
        },
        3000
    );
});

// we technomark video js
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video_player");
    const poster = document.getElementById("video_poster");

    video.addEventListener("mouseover", () => {
        poster.classList.add("hidden");
        video.play();
    });

    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0; // Reset the video to the beginning
        poster.classList.remove("hidden");
    });
});

//Tab bar js
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
