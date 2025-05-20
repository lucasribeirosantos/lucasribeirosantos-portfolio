const track = document.getElementById('job-cards');

track.innerHTML += track.innerHTML;

const totalWidth = track.scrollWidth / 2;

let position = 0;
let speed = 0.4;
let animationFrameId;

function animate() {
  position -= speed;

  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;

  animationFrameId = requestAnimationFrame(animate);
}

track.addEventListener('mouseenter', () => {
  cancelAnimationFrame(animationFrameId);
  speed = 0;
});

track.addEventListener('mouseleave', () => {
  speed = 0.4;
  animate();
});

animate();
