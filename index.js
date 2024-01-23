const btn = document.getElementById("btn");

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.style.display = "block";
    imgElement.src = pokemonSprite;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

btn.addEventListener("click", fetchData);
