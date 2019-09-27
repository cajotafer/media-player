import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const $video = document.querySelector("video");
const plugins = [
  /* new AutoPlay() */
];
const player = new MediaPlayer({ el: $video, plugins });

const $playButton = document.querySelector(".play");
$playButton.onclick = () => player.togglePlay();

const $muteButton = document.querySelector(".mute");
$muteButton.onclick = () => player.toggleMute();
