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



function showDrawer1() {
    document.getElementById("sidebar-popup1").classList.add("show-drawer1");
}

function hideDrawer1() {
    document.getElementById("sidebar-popup1").classList.remove("show-drawer1");
}

function showDrawer() {
    document.getElementById("sidebar-popup").classList.add("show-drawer");
}

function hideDrawer() {
    document.getElementById("sidebar-popup").classList.remove("show-drawer");
}

$(document).ready(function () {
    // Load the header
    // $(".main-header").load("header.html", function () {
    //     $(".dropdown").hover(
    //         function () {
    //             $(this).find(".dropdown-menu").stop(true, true).delay(100).slideDown(800);
    //         },
    //         function () {
    //             $(this).find(".dropdown-menu").stop(true, true).delay(100).slideUp(800);
    //         }
    //     );
    // });

    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(100).slideDown(800);
        },
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(800);
        }
    );

    // Footer
    $(".main-footer").load("footer.html");
    // $(".sidebar-popup").load("sidebar.html");
    $(".customer-fixed-label").load("customerlabel.html");


    //===== CLIENT SPEAK SLIDER
    $("#client-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: false,
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
                    infinite: true,
                    autoplay: true,
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

     //===== TECHNOLOGIE COMBINE SLIDER
     $("#combine-slide").slick({
        slidesToShow: 3,
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
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    infinite: true,
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
        // e.preventDefault();
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

closeBtn.click(function () {
    btn.hide();
});


//  auto video play
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.play();
});


//Form validate & API call
document.addEventListener('DOMContentLoaded', function () {
    const forms = [
        {
            formId: 'mainContactForm',
            fields: [
                { id: 'fullName1', errorId: 'fullNameError1' },
                { id: 'email1', errorId: 'emailError1', validate: validateEmail },
                { id: 'phone1', errorId: 'phoneError1', validate: validatePhone },
                { id: 'CompanyName1', errorId: 'CompanyError1' }
            ],
            apiPayload: (fields) => ({
                formType: "FormWithoutProjectDescription",
                fullName: fields['fullName1'].value,
                email: fields['email1'].value,
                phone: fields['phone1'].value,
                organizationName: fields['CompanyName1'].value,
                projectDescription: null
            }),
            successMessageId: 'message1',
            errorMessageId: 'erroemessage1'
        },
        {
            formId: 'projectForm',
            fields: [
                { id: 'fullName', errorId: 'fullNameError' },
                { id: 'email', errorId: 'emailError', validate: validateEmail },
                { id: 'phone', errorId: 'phoneError', validate: validatePhone },
                { id: 'organizationName', errorId: 'organizationNameError' },
                { id: 'projectDescription', errorId: 'projectDescriptionError' }
            ],
            apiPayload: (fields) => ({
                formType: "FormWithProjectDescription",
                fullName: fields['fullName'].value,
                email: fields['email'].value,
                phone: fields['phone'].value,
                organizationName: fields['organizationName'].value,
                projectDescription: fields['projectDescription'].value
            }),
            successMessageId: 'message',
            errorMessageId: 'erroemessage'
        },

        {
            formId: 'projectFormRespo',
            fields: [
                { id: 'fullName2', errorId: 'fullNameError2' },
                { id: 'email2', errorId: 'emailError2', validate: validateEmail },
                { id: 'phone2', errorId: 'phoneError2', validate: validatePhone },
                { id: 'organizationName2', errorId: 'organizationNameError2' },
                { id: 'projectDescription2', errorId: 'projectDescriptionError2' }
            ],
            apiPayload: (fields) => ({
                formType: "FormWithProjectDescription",
                fullName: fields['fullName2'].value,
                email: fields['email2'].value,
                phone: fields['phone2'].value,
                organizationName: fields['organizationName2'].value,
                projectDescription: fields['projectDescription2'].value
            }),
            successMessageId: 'message2',
            errorMessageId: 'erroemessage2'
        }
    ];

    forms.forEach(setupForm);

    function setupForm(formConfig) {
        const form = document.getElementById(formConfig.formId);
        const fields = formConfig.fields.reduce((acc, field) => {
            acc[field.id] = document.getElementById(field.id);
            return acc;
        }, {});

        // console.log(form);
        // console.log(fields);

        form.addEventListener('submit', function (event) {
            event.preventDefault();
           

            const isValid = validateForm(fields, formConfig.fields);
            const successMessage = document.getElementById(formConfig.successMessageId);
            const errorMessage = document.getElementById(formConfig.errorMessageId);

            if (isValid) {
                const payload = formConfig.apiPayload(fields);
                sendFormData(payload, successMessage, errorMessage, form);
            }
        });
    }

    function validateForm(fields, fieldConfigs) {
        let isValid = true;
        fieldConfigs.forEach(({ id, errorId, validate }) => {
            const field = fields[id];
            const errorElement = document.getElementById(errorId);
            errorElement.style.display = 'none';

            if (!field.value.trim() || (validate && !validate(field.value))) {
                errorElement.style.display = 'block';
                isValid = false;
            }
        });
        return isValid;
    }

    function sendFormData(payload, successMessage, errorMessage, form) {
        fetch('https://crm-stageapi.pacificabs.com:3003/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => {
                if (response.ResponseStatus === "success") {
                    successMessage.style.display = 'block';
                    form.reset();
                } else {
                    errorMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                errorMessage.style.display = 'block';
            });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        return phone.length === 10 && /^[0-9]+$/.test(phone);
    }
});




