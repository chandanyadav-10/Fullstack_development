console.log("Hello Spotify");

async function getSongs() {
  let songs = await fetch("http://127.0.0.1:5500/songs/");
  let response = await songs.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");

  let songsArr = [];

  for (let a of as) {
    if (a.href.endsWith(".mp3")) {
      songsArr.push(a.href.split("/songs/")[1]);
    }
  }

  return songsArr;
}

// const playMusic = (track) => {
//   let audio = new Audio("/songs/" + track)
//   audio.play()
// };

let currentSong;
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "Invalid input";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (track) => {
  localStorage.setItem("currentSong", track);

  if (currentSong) {
    currentSong.pause();
  }

  currentSong = new Audio("/songs/" + track);

  //Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
  });

  currentSong.play();
  document.getElementById("play").src = "pause.svg";
  let songInfo = decodeURIComponent(track)
    .replace(/\[[^\]]*\]/g, "") // remove [cL0KKSPjZf8]
    .replace(/[_]/g, " ")
    .replace(/\s+/g, " ")
    .replace(".mp3", "")
    .trim();
  document.querySelector(".songinfo").innerHTML =
    `<img class="invert" src="music.svg" alt="">${songInfo}`;
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function main() {
  //Get the list of all songs
  let songs = await getSongs();

  let savedSong = localStorage.getItem("currentSong");

  if (savedSong) {
    playMusic(savedSong);
    currentSong.pause(); // optional
    document.getElementById("play").src = "play.svg";
  }

  //show all the songs in the playlist
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];

  for (let song of songs) {
    let cleanSong = decodeURIComponent(song)
      .replace(/\[[^\]]*\]/g, "") // remove [cL0KKSPjZf8]
      .replace(/[_]/g, " ")
      .replace(/\s+/g, " ")
      .replace(".mp3", "")
      .trim();
    songUL.innerHTML += `<li data-song="${song}">
              <img class="invert" src="music.svg" alt="">
              <div class="info">
                <div>${cleanSong}</div>
                <div>Chandan</div>
              </div>
              <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="play.svg" alt="">
              </div>
  </li>`;
  }
  //Attach an event listener to each song
  // Array.from(
  //   document.querySelector(".songList").getElementsByTagName("li"),
  // ).forEach((e) => {
  //   console.log(e.querySelector(".info").firstElementChild.innerHTML);
  //   playMusic(e.querySelector(".info").firstElementChild.innerHTML);
  // });

  Array.from(
    document.querySelector(".songList").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", () => {
      let track = e.dataset.song;

      console.log(track);

      playMusic(track);
    });
  });

  // Attach eventListner to previous, play and next
  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (!currentSong) return;

    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "play.svg";
    }
  });
}

main();
