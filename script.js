document.addEventListener("click", function () {
    let video = document.getElementById("screamer-video");
    video.muted = false;
    video.play();
}, { once: true });
