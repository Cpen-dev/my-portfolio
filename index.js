
// Scroll fade-in for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('section:not(#hero)').forEach(s => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(s);
});