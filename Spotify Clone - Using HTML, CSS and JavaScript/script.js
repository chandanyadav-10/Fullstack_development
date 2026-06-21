console.log("Hello Spotify");
let songs;
let currFolder;

async function getSongs(folder) {
  currFolder = folder;
  songs = await fetch(`http://127.0.0.1:5500/${folder}/`);
  let response = await songs.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");

  songs = [];

  for (let a of as) {
    if (a.href.endsWith(".mp3")) {
      songs.push(a.href.split(`/${folder}/`)[1]);
    }
  }

  //show all the songs in the playlist
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];

    songUL.innerHTML = ""

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

}

// const playMusic = (track) => {
//   let audio = new Audio("/songs/" + track)
//   audio.play()
// };

let currentSong;
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
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

  currentSong = new Audio(`/${currFolder}/` + track);

  //Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  //Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    console.log((document.querySelector(".circle").style.left = percent + "%"));
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  //Add event listener to hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  //Add event listener to close icon
  document.querySelector(".closeIcon").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
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
  let songs = await getSongs("songs/ph");

  let savedSong = localStorage.getItem("currentSong");

  if (savedSong) {
    playMusic(savedSong);
    currentSong.pause(); // optional
    document.getElementById("play").src = "play.svg";
  }

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

  //Add event listener to previous
  previous.addEventListener("click", () => {
    console.log("Previous.clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if((index-1) >= 0){
      playMusic(songs[index-1])
    }
  });

  //Add event listener to next
  next.addEventListener("click", () => {
    console.log("Next.clicked");

    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if((index+1) < songs.length){
      playMusic(songs[index+1])
    }
  });

  //Add eventListener to volume
  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
    currentSong.volume = (e.target.value)/100;
  })

  //Load the playlist whenever card is clicked
Array.from(document.getElementsByClassName("card")).forEach(e=>{
  console.log(e)
  e.addEventListener("click", async item=>{
    console.log(item.currentTarget.dataset.folder)
    songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
  })
})

}

main();
