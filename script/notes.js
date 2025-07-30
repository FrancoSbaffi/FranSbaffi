import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
  // Animate hero blog section
  const hero = document.querySelector(".notes-hero-blog");
  if (hero) {
    gsap.set(hero, { opacity: 0, y: 60 });
    gsap.to(hero, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.15
    });
  }
  // Animate articles on load
  const articles = document.querySelectorAll(".notes-item");
  articles.forEach((item) => {
    gsap.set(item, { opacity: 0, y: 60 });
  });
  gsap.to(".notes-item", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.3
  });

  // Animate articles on filter change
  const filterButtons = document.querySelectorAll('.notes-filter');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      setTimeout(() => {
        const visible = Array.from(document.querySelectorAll('.notes-item')).filter(i => i.style.display !== 'none');
        gsap.set(visible, { opacity: 0, y: 60 });
        gsap.to(visible, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out"
        });
      }, 10);
    });
  });
});
