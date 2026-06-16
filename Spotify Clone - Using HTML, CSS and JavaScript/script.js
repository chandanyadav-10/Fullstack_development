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

async function main() {
  //Get the list of all songs
  let songs = await getSongs();

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

    songUL.innerHTML += `<li>
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
  //Play the first songs
  let audio = new Audio(songs[0]);
  // audio.play();
}

main();
