const track = document.getElementById("image-track");
let animationFrame;

const handleOnDown = e => {
  track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
  animateSlide();
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  cancelAnimationFrame(animationFrame);
};

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - (e.clientX || e.touches[0].clientX),
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;
  animateSlide();
};

const animateSlide = () => {
  animationFrame = requestAnimationFrame(() => {
    track.style.transform = `translate(${track.dataset.percentage}%, -50%)`;

    for (const image of track.getElementsByClassName("cimage")) {
      image.style.objectPosition = `${100 + parseFloat(track.dataset.percentage)}% center`;
    }

    if (track.dataset.mouseDownAt !== "0") {
      animateSlide();
    }
  });
};

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = () => handleOnUp();
window.ontouchend = () => handleOnUp();

window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);
