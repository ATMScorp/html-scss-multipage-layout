import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import '../sass/main.scss';

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});

new Swiper('.works__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".icon-right-open",
        prevEl: ".icon-left-open",
    },


    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 5,
        },

        1920: {
            spaceBetween: 35,
        },
    },
    modules: [Navigation, Pagination]
});

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

try {
    const validatorTouch = new JustValidate('.touch__form');


    validatorTouch
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Please fill the name',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Too short!',
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
            },
            {
                rule: 'email',
            },
        ])
        .addField('#question', [
            {
                rule: 'required',
            },
            {
                rule: 'minLength',
                value: 5,
            },
        ], {
            errorsContainer: document.querySelector('#question').parentElement.parentElement.querySelector('.error-message'),
        })
        .addField('#checkbox', [
            {
                rule: 'required',
            }
        ], {
            errorsContainer: document.querySelector('#checkbox').parentElement.parentElement.querySelector('.checkbox-error-message'),
        })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch('https://httpbin.org/post', {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(data => {
                console.log('Success', data);
                form.reset();
            });
        });
} catch (e) { }

try {
    const validatorFooter = new JustValidate(".footer__form");

    validatorFooter
        .addField(
            "#footer__email",
            [
                {
                    rule: "required",
                },
                {
                    rule: "email",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#footer__email")
                    .parentElement.querySelector(".email-error-message"),
            }
        )
        .addField(
            "#footer__checkbox",
            [
                {
                    rule: "required",
                },
            ],
            {
                errorsContainer: document
                    .querySelector("#footer__checkbox")
                    .parentElement.parentElement.querySelector(".check-error-message"),
            }
        );
} catch (e) { }

// Show/hide "page-up" button on scroll with smooth effect
const pageUp = document.querySelector('.page-up');

function togglePageUpVisibility() {
    if (window.scrollY > 800) {
        pageUp.classList.add('visible');
    } else {
        pageUp.classList.remove('visible');
    }
}

window.addEventListener('load', togglePageUpVisibility);
window.addEventListener('scroll', togglePageUpVisibility);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            history.pushState(null, null, targetId);
        }
    });
});
