const head =document.querySelector('.sticky-header')
window.addEventListener('scroll',fixNav)

function fixNav()
{
  if (window.scrollY > head.offsetHeight + 1150 ) {
    head.classList.add('active')
  }
  else 
  {
    head.classList.remove('active')
  }
}

// mobile menu  

function toggleMobileMenu(menu) 
{
    menu.classList.toggle('open');
}
///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

  //  Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});