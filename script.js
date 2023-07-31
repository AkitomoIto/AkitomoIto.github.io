
function funcPokemon (){
  const name = document.getElementById("PokemonSelect").value;
  // console.log(name);
  // console.log(allPokemon[name]);
  for (const element of allPokemon){
    // console.log(element["name"])
    if (element["name"]=== name ){
      const pokemonUrl = element["url"]
      console.log(pokemonUrl);
      document.getElementById("pokeCard").src = pokemonUrl;
    }
  }
  
}
