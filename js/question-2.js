const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gameContainer = document.querySelector(".container");

const listGames = (games) => {
  gameContainer.innerHTML = "";
  for (i = 0; i < 8; i++) {
    gameContainer.innerHTML += `<div class="item">
        <h2>${games.results[i].name}</h2>
        <p><b>Rating: </b>${games.results[i].rating}</p>
        <p><b>Number of tags:</b> ${games.results[i].tags.length}</p>
        </div>`;
  }
};

fetch(url)
  .then((response) => response.json())
  .then((data) => listGames(data))
  .catch(
    (error) =>
      (gameContainer.innerHTML = `<div class="error">
      <i class="fas fa-exclamation-triangle"></i>
      <h2>An error occured when loading: </h2>
      <p>${error.name}: ${error.message}</p>
      </div>`)
  );
