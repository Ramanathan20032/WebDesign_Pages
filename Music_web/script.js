const icon = document.querySelector("#icon");
const mySong = document.querySelector("#mySong");

icon.addEventListener("click", () => {
  if (mySong.paused) {
    mySong.play();
    icon.src = "Images/pause.png"; // Change icon to pause when playing
  } else {
    mySong.pause();
    icon.src = "Images/play.png"; // Change icon back to play when paused
  }
});
