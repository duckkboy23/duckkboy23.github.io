// date time

function dateTime() {
    let now = new Date();
    let datetime = now.toLocaleTimeString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById("datetime").innerHTML = datetime;
    setInterval(dateTime, 1000);
}
dateTime();

// get the navbar and header

const navbar = document.querySelector('nav');
const header = document.getElementById('home');

// on click change color, works only once :(

window.onload = function () {
    aObj = navbar.getElementsByTagName('a');
    for (i = 0; i < aObj.length; i++) {
        aObj[i].onclick = function () {
            //alert(this.href.split("#")[1]);
            load(this.href.split("#")[1]);
        }
    }

    if (window.location.hash.length > 1) {
        page = window.location.hash.split("#")[1];
        load(page);
    }
}
function load(p) {
    aObj = navbar.getElementsByTagName('a');
    for (i = 0; i < aObj.length; i++) {
        aObj[i].className = (p == aObj[i].href.split("#")[1]) ? 'active' : '';
    }
}

// change color of section on scroll
// doesn't work after # is activated on webpage

const sections = document.querySelectorAll("section[id]");
const navLi = document.querySelectorAll(".navlist li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        if (li.classList.contains(current)) {
            li.classList.add('active');
        } else li.classList.remove('active');
    });
});

/* collapsible tabs */

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tabLinks) tablink.classList.remove("tab-active");
    for (tabcontent of tabContents) tabcontent.classList.remove("active-tab");
    event.currentTarget.classList.add("tab-active");
    document.getElementById(tabname).classList.add("active-tab");
}

/* before load */

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.07);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    header.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > header.scrollHeight) navbar.classList.add('solid-nav');
    else navbar.classList.remove('solid-nav');
});

// forms

const scriptURL = 'https://script.google.com/macros/s/AKfycbyghzVaedvx8VVfK2f1CZ2yIWRXQYONTpEZ13I_lgBuyTfWlGXA39D_NjOjf7yWEGXjKw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for reaching out!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 3000)
        form.reset()
       })
      .catch(error => console.error('Error', error.message))
})

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}