const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Navbar background on scroll

window.addEventListener("scroll", () => {

```
if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

} else {

    navbar.classList.remove("scrolled");

}
```

});

// Mobile menu

menuBtn.addEventListener("click", () => {

```
navMenu.classList.toggle("active");
```

});

// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

```
link.addEventListener("click", () => {

    navMenu.classList.remove("active");

});
```

});

// Footer year

document.getElementById("year").textContent =
new Date().getFullYear();

// Scroll reveal animation

const observer = new IntersectionObserver(

```
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

},

{
    threshold: 0.1
}
```

);

const animatedElements =
document.querySelectorAll(
".skill-card, .project-card, .stat-card, .contact-card"
);

animatedElements.forEach(element => {

```
element.style.opacity = "0";

element.style.transform =
    "translateY(30px)";

element.style.transition =
    "all 0.7s ease";

observer.observe(element);
```

});
