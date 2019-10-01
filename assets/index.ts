import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const $video = document.querySelector("video");
const plugins = [new AutoPlay(), new AutoPause(), new Ads()];
const player = new MediaPlayer({ el: $video, plugins });

const $playButton: HTMLElement = document.querySelector(".play");
$playButton.onclick = () => player.togglePlay();

const $muteButton: HTMLElement = document.querySelector(".mute");
$muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.error(error.message);
  });
}
