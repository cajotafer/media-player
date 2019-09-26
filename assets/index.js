import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const plugins = [new AutoPlay()];
const player = new MediaPlayer({ el: video, plugins });

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();
