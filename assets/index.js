import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const $video = document.querySelector("video");
const plugins = [new AutoPlay(), new AutoPause()];
const player = new MediaPlayer({ el: $video, plugins });

const $playButton = document.querySelector(".play");
$playButton.onclick = () => player.togglePlay();

const $muteButton = document.querySelector(".mute");
$muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.error(error.message);
  });
}
