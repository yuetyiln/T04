//provided to fill the leading zero.
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
   }
   async function fetchPokemon(url) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/21/");
    const pokemon = await response.json();
    console.log(pokemon);
    let allPokemons = pokemon.results;

   }
   async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
    const pokemon = await response.json();
    console.log(pokemon);
    let allPokemons = pokemon.results;




    //const spearow = document.createElement("div");
    //spearow.classList.add('pokemon');
    //div.append(spearow);

    //const fearow = document.createElement("div");
    //fearow.classList.add('pokemon');
    //div.append(fearow);

    //const ekans = document.createElement("div");
    //ekans.classList.add('pokemon');
    //div.append(ekans);

    //const arbok = document.createElement("div");
    //arbok.classList.add('pokemon');
    //div.append(arbok);

    //const pikachu = document.createElement("div");
    //pikachu.classList.add('pokemon');
    //div.append(pikachu);

    //const pikachu = document.createElement("div");
    //pikachu.classList.add('pokemon');
    //div.append(pikachu);

    //const raichu = document.createElement("div");
    //raichu.classList.add('pokemon');
    //div.append(raichu);

    //const sandshrew = document.createElement("div");
    //sandshrew.classList.add('pokemon');
    //div.append(sandshrew);

    //const sandslash = document.createElement("div");
    //sandslash.classList.add('pokemon');
    //div.append(sandslash);

    //const nidoranf = document.createElement("div");
    //nidoranf.classList.add('pokemon');
    //div.append(nidoranf);

    //const nidorina = document.createElement("div");
    //nidorina.classList.add('pokemon');
    //div.append(nidorina);

    //const nidoqueen = document.createElement("div");
    //nidoqueen.classList.add('pokemon');
    //div.append(nidoqueen);



   //TODO 1: Call API https://pokeapi.co/api/v2/pokemon?offset=20&limit=20 to fetch
   // the pokemons and store the returned JSON in a variable.
   // const response = await fetch(“https://pokeapi.co/...”);
   //TODO 2: For each pokemon, use “document.createElement” to create a div, set the
   // pokemon’s name as the div’s id, and set the class to ‘pokemon’. Append
   // the new created div to the given pokemons div
   // You may use setAttribute and appendChild function accordingly.
   //TODO 3: After that inside the same loop,
   // call second API to fetch individual Pokémon.
   }
   fetchPokemons()
