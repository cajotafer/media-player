import MediaPlayer from "@cajotafer/simplemediaplayer";
import AutoPlay from "@cajotafer/simplemediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@cajotafer/simplemediaplayer/lib/plugins/AutoPause";
import Ads from "@cajotafer/simplemediaplayer/lib/plugins/Ads";

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
