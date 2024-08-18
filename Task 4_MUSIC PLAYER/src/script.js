// Get references to HTML elements
const albumCoverImg = document.getElementById("album-cover-img");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const progressBar = document.querySelector(".progress");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playlist = document.getElementById("playlist");
const volumeSlider = document.createElement("input");
const timeInfo = document.createElement("div");

// Song data
const songs = [
  {
    title: "Cry Baby",
    artist: "Hige Dandism",
    src: "/Task 4_MUSIC PLAYER/assets/music/crybaby.mp3",
    cover: "/Task 4_MUSIC PLAYER/assets/images/crybaby.jpeg",
  },
  {
    title: "The Case Study of Vanitas OP",
    artist: "Sasanomaly（ササノマリイ）",
    src: "/Task 4_MUSIC PLAYER/assets/music/sasonomaly.mp3",
    cover: "/Task 4_MUSIC PLAYER/assets/images/sasonomaly.jpg",
  },
  {
    title: "Blues of Shichiten Battou",
    artist: "The Pinballs",
    src: "/Task 4_MUSIC PLAYER/assets/music/thepinballs.mp3",
    cover: "/Task 4_MUSIC PLAYER/assets/images/The pinballs.jpg",
  },
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

// Load song data into player
function loadSong(song) {
  albumCoverImg.src = song.cover;
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  audio.src = song.src;
}

// Play the current song
function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = "&#9658;"; // Change play button to pause symbol
}

// Pause the current song
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "&#9658;";
  playBtn.innerHTML = "&#10074;&#10074;"; // Change play button to play symbol
}

// Toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

// Load the next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

// Load the previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

// Update the progress bar as the song plays
function updateProgressBar() {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

// Seek to a point in the song when clicking on the progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgressBar);
document.querySelector(".progress-bar").addEventListener("click", setProgress);

// Initial song load
loadSong(songs[currentSongIndex]);
