window.addEventListener('resize', navAuto);

window.onload = genHeader();
window.onload = genFooter();
window.onload = navTransition();

let elNav = document.getElementById("nav");

let navHeight = 290 + "px";
let navState = true;

// Toggle burger menu on click
function navToggle() {
    if (navState == true) {
        navChange(1);
    } else {
        navChange(2);
    }
}

// Toggle burger menu on window resize
function navAuto() {
    if (window.screen.width < 576) {
        navChange(1);
    } else {
        navChange(2);
    }
}

// Execute the burger menu collapse/expand visual change
function navChange(opt) {
    if (opt == 1) {
        elNav.style.maxHeight = "0";
        navState = false;
    } else {
        elNav.style.maxHeight = navHeight;
        navState = true;
    }
}

// Apply transition effect after burger menu is collapsed immediately on page load
function navTransition() {
    setTimeout(() => {
        elNav.classList.add("nav-transition");
    }, 500);
}

// Generate header
function genHeader() {
    let header = document.getElementById("header");
    let headerHTML = "";

    headerHTML += '<div class="logo">';
    headerHTML += '<h1><i class="fas fa-camera-retro"></i> Flash Imagery<span class="r">&reg;</span></h1>';
    headerHTML += '<i class="fas fa-bars menu" onclick="navToggle();"></i>';
    headerHTML += '</div>';
    headerHTML += '<div id="nav">';
    headerHTML += '<ul>';
    headerHTML += '<li><a href="index.html" accesskey="h">Home</a></li>';
    headerHTML += '<li><a href="photographers.html" accesskey="p">Photographers</a></li>';
    headerHTML += '<li><a href="my-gallery.html" accesskey="m">My Gallery</a></li>';
    headerHTML += '<li><a href="services.html" accesskey="s">Services</a></li>';
    headerHTML += '<li><a href="contact-us.html" accesskey="c">Contact Us</a></li>';
    headerHTML += '</ul>';
    headerHTML += '</div>';

    header.innerHTML = headerHTML;

    linkStyle();
}

// Apply active link style
function linkStyle() {
    switch (document.title) {
        case "Flash Imagery | Home":
            document.querySelector("li:nth-child(1) a").classList.add("active");
            break;
        case "Flash Imagery | Photographers":
            document.querySelector("li:nth-child(2) a").classList.add("active");
            break;
        case "Flash Imagery | My Gallery":
            document.querySelector("li:nth-child(3) a").classList.add("active");
            break;
        case "Flash Imagery | Services":
            document.querySelector("li:nth-child(4) a").classList.add("active");
            break;
        case "Flash Imagery | Contact Us":
            document.querySelector("li:nth-child(5) a").classList.add("active");
            break;
    }
}

// Generate footer
function genFooter() {
    let footer = document.getElementById("footer");
    let footerHTML = "";

    footerHTML += '<p>Flash Imagery &copy; 2021</p>';
    footerHTML += '<p>Terms &amp; Conditions</p>';

    footer.innerHTML = footerHTML;
}