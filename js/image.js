const base = window.location.pathname.includes("lucasribeirosantos-portfolio")
  ? "/lucasribeirosantos-portfolio/"
  : "/";

document.querySelectorAll('.project-img').forEach((img) => {
  let images = img.dataset.imgs.split(",").map(src => {
    return src.startsWith("/") ? src : base + src;
  });

  let index = 1;
  let interval;

  function changeImage() {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[index];
      img.style.opacity = 1;
      index = (index + 1) % images.length;
      if (index === 0) index = 1;
    }, 250);
  }

  img.addEventListener('mouseenter', () => {
    index = 1;
    changeImage();
    interval = setInterval(changeImage, 1500);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(interval);
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[0];
      img.style.opacity = 1;
    }, 250);
  });
});