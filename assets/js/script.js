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
    // Load the header
    $(".main-header").load("header.html", function () {
        $(".dropdown").hover(
            function () {
                $(this).find(".dropdown-menu").stop(true, true).delay(100).slideDown(800);
            },
            function () {
                $(this).find(".dropdown-menu").stop(true, true).delay(100).slideUp(800);
            }
        );
    });

    // Footer
    $(".main-footer").load("footer.html");
    $(".sidebar-popup").load("sidebar.html");
    $(".customer-fixed-label").load("customerlabel.html");


    //===== CLIENT SPEAK SLIDER
    $("#client-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
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
        slidesToShow: 1.2,
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
                breakpoint: 1399,
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
                    slidesToShow: 2,
                },
      },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1.8,
                },
      },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1.5,
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
                    slidesToShow: 1,
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
});

//Sidebar form class add & remove
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
        jQuery(".main-header").addClass("sticky-header");
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
        jQuery(".main-header").removeClass("sticky-header");
    }

    //Sidebar form class add & remove
    var scroll = $(window).scrollTop();
    if (scroll > 900) {
        $(".sidebar-popup").addClass("lightHeader");
    } else {
        $(".sidebar-popup").removeClass("lightHeader");
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
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            tabContents.forEach((content) => {
                if (content.id === tab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });
});

//Menu Active class
var links = document.querySelectorAll('.collapse ul li');
links.forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    links.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
  });
});

//sticky cta strpe
var btn = $('#sticky-panel');
var closeBtn = $('#close');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

closeBtn.click(function() {
    btn.hide();
});


        document.getElementById('mainContactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
    
            // Perform custom validation
            let isValid = true;
    
            const fullName1 = document.getElementById('fullName1');
            const email1 = document.getElementById('email1');
            const phone1 = document.getElementById('phone1');
            const CompanyName1 = document.getElementById('CompanyName1');
    
            const fullNameError1 = document.getElementById('fullNameError1');
            const emailError1 = document.getElementById('emailError1');
            const phoneError1 = document.getElementById('phoneError1');
            const CompanyError1 = document.getElementById('CompanyError1');
            const message1 = document.getElementById('message1');
            const erroemessage1 = document.getElementById('erroemessage1');
    
            // Clear previous error messages
            fullNameError1.style.display = 'none';
            emailError1.style.display = 'none';
            phoneError1.style.display = 'none';
            CompanyError1.style.display = 'none';
            message1.style.display = 'none';
            erroemessage1.style.display = 'none';
    
            if (!fullName1.value.trim()) {
                fullNameError1.style.display = 'block';
                isValid = false;
            }
    
            if(!email1.validity.valid || !validateEmail(email1.value)) {
                emailError1.style.display = 'block';
                isValid = false;
            }
    
            if (!phone1.validity.valid || phone1.value.length !== 10) {
                phoneError1.style.display = 'block';
                isValid = false;
            }
    
            if (!CompanyName1.value.trim()) {
                CompanyError1.style.display = 'block';
                isValid = false;
            }
    
    
            if (isValid) {
                // Capture form data
                const formData = {
                    formType: document.querySelector('input[name="formType"]').value,
                    fullName: fullName1.value,
                    email: email1.value,
                    phone: phone1.value,
                    CompanyName: CompanyName1.value,
                    projectDescription: null
                };
    
                // Log the form data to console
                console.log('Form Data:', formData);
    
                // Send form data to server using fetch
                fetch('https://crm-stageapi.pacificabs.com:3003/api/form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                // .then(response => response.json())
                .then(response => {
                    if(response.ResponseStatus == "success"){
                        message1.style.display = 'block';
                        document.getElementById('mainContactForm').reset();
                    }
                    else{
                        erroemessage1.style.display = 'block';
                    }
                    // console.log('Success:', data);
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
        });
        function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }



    
    document.getElementById('projectForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Perform custom validation
        let isValid = true;

        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const organizationName = document.getElementById('organizationName');
        const projectDescription = document.getElementById('projectDescription');

        const fullNameError = document.getElementById('fullNameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const organizationNameError = document.getElementById('organizationNameError');
        const projectDescriptionError = document.getElementById('projectDescriptionError');
        const message = document.getElementById('message');
        const erroemessage = document.getElementById('erroemessage');

        // Clear previous error messages
        fullNameError.style.display = 'none';
        emailError.style.display = 'none';
        phoneError.style.display = 'none';
        organizationNameError.style.display = 'none';
        projectDescriptionError.style.display = 'none';
        message.style.display = 'none';
        erroemessage.style.display = 'none';

        if (!fullName.value.trim()) {
            fullNameError.style.display = 'block';
            isValid = false;
        }

        if(!email.validity.valid || !validateEmail(email.value)) {
            emailError.style.display = 'block';
            isValid = false;
        }

        if (!phone.validity.valid || phone.value.length !== 10) {
            phoneError.style.display = 'block';
            isValid = false;
        }

        if (!organizationName.value.trim()) {
            organizationNameError.style.display = 'block';
            isValid = false;
        }

        if (!projectDescription.value.trim()) {
            projectDescriptionError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Capture form data
            const formData = {
                formType: document.querySelector('input[name="formType"]').value,
                fullName: fullName.value,
                email: email.value,
                phone: phone.value,
                organizationName: organizationName.value,
                projectDescription: projectDescription.value
            };

            // Log the form data to console
            console.log('Form Data:', formData);

            // Send form data to server using fetch
            fetch('https://crm-stageapi.pacificabs.com:3003/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            // .then(response => response.json())
            .then(response => {
                if(response.ResponseStatus == "success"){
                    message.style.display = 'block';
                    document.getElementById('projectForm').reset();
                }
                else{
                    erroemessage.style.display = 'block';
                }
                // console.log('Success:', data);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
    function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        

   