// Import Lucide icons (or declare the variable if using a different method)
import * as lucide from "lucide" // Assuming you're using ES modules

// Initialize Lucide icons
lucide.createIcons()

// Header scroll effect
const header = document.getElementById("main-header")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }

  if (scrollTop > 50) {
    header.style.backgroundColor = "rgba(10, 10, 10, 0.8)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "transparent"
    header.style.backdropFilter = "none"
  }

  lastScrollTop = scrollTop
})

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active")
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
})

// Side navigation highlight
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".side-nav a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - window.innerHeight / 3) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

sliders.forEach((slider) => {
  appearOnScroll.observe(slider)
})

// Add classes for animations
document.querySelectorAll(".feature-card, .energy-product, .shop-item").forEach((el) => {
  el.classList.add("fade-in")
})

document.querySelectorAll(".model-content, .charging-features").forEach((el) => {
  el.classList.add("slide-in")
})

