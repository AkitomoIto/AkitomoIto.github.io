
function funcPokemon (){
  const name = document.getElementById("PokemonSelect").value;
  for (const element of allPokemon){
    if (element["name"]=== name ){
      const pokemonUrl = element["url"]
      document.getElementById("pokeCard").src = pokemonUrl;
    }
  }
}
