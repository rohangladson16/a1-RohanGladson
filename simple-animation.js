// Rohan Gladson
// CS 4241: Webware: Computational Technology for Network Information Systems
// animation-script.js

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1');
  console.log('[simple-animation] loaded, title found:', !!title);

  if (!title) return;

  let angle = 0; 

  function animate() {
    const offset = Math.sin(angle) * 25; // Size of Swawing Motion
    title.style.transform = `translateX(${offset}px)`;
    angle += 0.05; // Swaying Speed
    requestAnimationFrame(animate);
  }

  animate();
});
