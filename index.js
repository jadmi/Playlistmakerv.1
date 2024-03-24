const artiestNaam = document.querySelector("#artiest");

const embedArtiest = document.querySelector("#artiestEmbed");

const artiest1 = document.querySelector("#nujabes");
const artiest2 = document.querySelector("#playboiCarti");
const artiest3 = document.querySelector("#ice-T");
const artiest4 = document.querySelector("#kanyeWest");
const artiest5 = document.querySelector("#mfDoom");
const artiest6 = document.querySelector("#joeyBadass");

let artiestenLijstItems = document.querySelectorAll(".artiestListItems li");

let artiestDiv = document.querySelector("#artiestList");

let artiestNieuw = document.querySelector("#nieuweArtiestKnop");
let nummerNieuw = document.querySelector("#nieuwNummerKnop");
let nummerOpslaan = document.querySelector("#likeKnop");

let artiestKiesTekst = document.querySelector("#artiestKiezen");
let playlistMaken = document.querySelector("#playlist");

let playlistTitel = document.querySelector("#playlistTitel");

let opgeslagenNummers = [];

const artiestenIds = [
  "3TVXtAsR1Inumwj472S9r4?si=leWwHjOZRW-mTRSzUUO9dg",
  "699OTQXzgjhIYAHMy9RyPD?si=gCC2aIggT46lHjF8RcKQBg",
  "3Rq3YOF9YG9YfCWD4D56RZ?si=bt1w9rK5QD6NgABY4Q_Jhg",
];

// In de les uitgelegd gekregen, object met alle arrays van de artiesten erin.
let artiesten = {
  Nujabes: [
    "https://open.spotify.com/embed/track/6SNGzhVrisdq63Ndz58ovT",
    "https://open.spotify.com/embed/track/4xlpJ99yL9xYQtzG6c3hwk",
    "https://open.spotify.com/embed/track/0JL9TZip7mL7iwC5EOkALS",
    "https://open.spotify.com/embed/track/2ej1A2Ze6P2EOW7KfIosZR",
    "https://open.spotify.com/embed/track/16wGHOPaWoat5rkAZkixxk",
    "https://open.spotify.com/embed/track/0fbnqrpTlUdy0PUwMdU8Pl",
    "https://open.spotify.com/embed/track/4x7z7PwjRpbtFNKXihsHRr",
    "https://open.spotify.com/embed/track/72LSGNDLY4sdvyrGIKtd2Q",
    "https://open.spotify.com/embed/track/6norVbAE14clVMEyDuRw1m",
  ],
  "Playboi Carti": [
    "https://open.spotify.com/embed/track/1s9DTymg5UQrdorZf43JQm",
    "https://open.spotify.com/embed/track/1e1JKLEDKP7hEQzJfNAgPl",
    "https://open.spotify.com/embed/track/2BJSMvOGABRxokHKB0OI8i",
    "https://open.spotify.com/embed/track/1Bg2CNZw6S4e9cGWPmi0uI",
    "https://open.spotify.com/embed/track/5MUxrNd7Gr2HksLcAlB0IO",
    "https://open.spotify.com/embed/track/29TPjc8wxfz4XMn21O7VsZ",
    "https://open.spotify.com/embed/track/59J5nzL1KniFHnU120dQzt",
    "https://open.spotify.com/embed/track/3yk7PJnryiJ8mAPqsrujzf",
    "https://open.spotify.com/embed/track/5nayhWICkQGMTkisxVMbRw",
  ],
  "ICE-T": [
    "https://open.spotify.com/embed/track/4Q9qbPgPzl6kcvNw27RSIm",
    "https://open.spotify.com/embed/track/1V3ko5D15URHHXkPWO9dcz",
    "https://open.spotify.com/embed/track/2cBOh97kgDenDOdtKhwU9O",
    "https://open.spotify.com/embed/track/3aRiplMITqwiQdqxm4gXl0",
    "https://open.spotify.com/embed/track/62fQHIiTsimptHHliO8nOn",
  ],
  "Kanye West": [
    "https://open.spotify.com/embed/track/4jQqM4NI79HEcWHUJb8Hvf",
    "https://open.spotify.com/embed/track/1UGD3lW3tDmgZfAVDh6w7r",
    "https://open.spotify.com/embed/track/0zLClc0emc6qUeV1p5nc99",
    "https://open.spotify.com/embed/track/3sNVsP50132BTNlImLx70i",
    "https://open.spotify.com/embed/track/4mmkhcEm1Ljy1U9nwtsxUo",
    "https://open.spotify.com/embed/track/7up5MwPUHQdv4DkzQRHRWP",
    "https://open.spotify.com/embed/track/3s7MCdXyWmwjdcWh7GWXas",
    "https://open.spotify.com/embed/track/3w0w2T288dec0mgeZZqoNN",
  ],
  "MF DOOM": [
    "https://open.spotify.com/embed/track/7lT1dCz96jANsLAAADlfIg",
    "https://open.spotify.com/embed/track/3KQh7ppbDxVjdJBtjvP5BU",
    "https://open.spotify.com/embed/track/5KUNwkaNf8l5A9sXZhiCgI",
    "https://open.spotify.com/embed/track/2Vy16OMt19FH30uQNTFdLk",
    "https://open.spotify.com/embed/track/17AaqV5fYC9tavx2o0WjqC",
  ],
  "Joey Bada$$": [
    "https://open.spotify.com/embed/track/2miKV8OiAhmZPjhCzgRnvw",
    "https://open.spotify.com/embed/track/3gJDgenxLephg09x86IxPs",
    "https://open.spotify.com/embed/track/23bOfmnZiN42pB1frXNyak",
    "https://open.spotify.com/embed/track/23bOfmnZiN42pB1frXNyak",
    "https://open.spotify.com/embed/track/18M1K6KD1OmgJZY4h4zEn4",
  ],
};

artiestNieuw.style.display = "none";
nummerNieuw.style.display = "none";
nummerOpslaan.style.display = "none";
playlistTitel.style.display = "none";

// Functie om een toegangstoken te krijgen van Spotify, waarmee je de API kan gebruiken.

// Copilot - Een tijd geleden, dus heb het niet precies opgeslagen.
// Prompt: How to make a POST request to the spotify api?
// Wel verder om uitleg gevraagd over elk onderdeel.
function toegangOphalen() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        "ZWJiODBkZDgyMjE1NDk5NTk0NTBkNThkZGFiMmYzNDI6YWViMGViN2ZjZDMyNGNlN2E3MjE2YzkxNDUzMzkzMjA",
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}

// Functie om artiestdata (naam, genre) met de spotify api op te halen.
// Deze functie weergeeft daarbij ook een embed van een nummer van de gekozen artiest.

// Copilot/Chatgpt - Gedurende de tijd dus geen specifieke prompt, maar helpen met de verschillende onderdelen en uitleggen
// Prompt: How to fetch an artist id from the spotify api

function artiestDataOphalen(geklikteArtiest) {
  const apiArtiestUrl = `https://api.spotify.com/v1/artists/${geklikteArtiest}`;
  console.log(geklikteArtiest);

  fetch(apiArtiestUrl, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "BQBVSGlC1K_HNuZM1IuE7mdg7mv3BDHfES4UNhR4sI-kFmwz7hqphH6gyRuYjIU3DmAmIrk9xojOKJfMKJI6GEReN2WsDA6MuBoJx_q5krQnxafeSIs",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      artiestNaam.textContent = data.name + " - Genre: " + data.genres[0];
      console.log(data);
      let artiest = data.name;
      let liedje = artiesten[artiest];
      let liedjeIndex = 0;

      function embedCurrentLiedje() {
        embedArtiest.innerHTML =
          "<iframe src= " +
          liedje[liedjeIndex] +
          ' width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        console.log(liedje[liedjeIndex]);
      }

      embedCurrentLiedje();

      nummerNieuw.addEventListener("click", function () {
        liedjeIndex++;
        if (liedjeIndex == liedje.length) {
          liedjeIndex = 0;
        }
        embedCurrentLiedje();
      });
      nummerOpslaan.addEventListener("click", function () {
        playlistTitel.style.display = "flex";
        let opgeslagenNummer =
          "<iframe src= " +
          liedje[liedjeIndex] +
          ' width="300" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        if (liedje.length > 1) {
          if (!opgeslagenNummers.includes(opgeslagenNummer)) {
            opgeslagenNummers.push(opgeslagenNummer);
            playlistMaken.innerHTML = opgeslagenNummers.join("");
            playlistMaken.style.visibility = "visible";
          }
        }
      });
    })
    .catch((error) => console.error("Error:", error));
}

artiest1.addEventListener("click", function () {
  let geklikteArtiest = "3Rq3YOF9YG9YfCWD4D56RZ";
  artiestDataOphalen(geklikteArtiest);
});

artiest2.addEventListener("click", function () {
  let geklikteArtiest = "699OTQXzgjhIYAHMy9RyPD";
  artiestDataOphalen(geklikteArtiest);
});

artiest3.addEventListener("click", function () {
  let geklikteArtiest = "0eGh2jSWPBX5GuqIHoZJZG";
  artiestDataOphalen(geklikteArtiest);
});

artiest4.addEventListener("click", function () {
  let geklikteArtiest = "5K4W6rqBFWDnAN6FQUkS6x";
  artiestDataOphalen(geklikteArtiest);
});

artiest5.addEventListener("click", function () {
  let geklikteArtiest = "2pAWfrd7WFF3XhVt9GooDL";
  artiestDataOphalen(geklikteArtiest);
});

artiest6.addEventListener("click", function () {
  let geklikteArtiest = "2P5sC9cVZDToPxyomzF1UH";
  artiestDataOphalen(geklikteArtiest);
});

artiestenLijstItems.forEach(function (lijstItem) {
  lijstItem.addEventListener("click", function () {
    artiestDiv.style.display = "none";
    artiestKiesTekst.style.display = "none";
    artiestNieuw.style.display = "block";
    nummerNieuw.style.display = "block";
    artiestNaam.style.display = "flex";
    embedArtiest.style.display = "flex";
    nummerOpslaan.style.display = "flex";
  });
});

artiestNieuw.addEventListener("click", function () {
  artiestDiv.style.display = "flex";
  artiestKiesTekst.style.display = "flex";
  artiestNieuw.style.display = "none";
  nummerNieuw.style.display = "none";
  artiestNaam.style.display = "none";
  embedArtiest.style.display = "none";
  nummerOpslaan.style.display = "none";
});
