import React from 'react';
import useCustomHook from './hooks/useCustomHook';
import CharacterCard from './components/CharacterCard';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemonData = useCustomHook(urlPokemon)
  const rickData = useCustomHook(urlRick)
  
  return (
    <>
      <h1>Custom Hook</h1>
      <section>
        <h2>Personaje Pokemon</h2>
        {pokemonData ? (
          <CharacterCard
            name={pokemonData.name}
            image={pokemonData.sprites?.other?.dream_world?.front_default}
          />  
        ) : (
          <p>Cargando</p>
        )}
      </section>
      <section>
        <h2>Personaje Rick y Morty</h2>
        {rickData ? (
          <CharacterCard
            name={rickData.name}
            image={rickData.image}
          />  
        ) : (
          <p>Cargando</p>
        )}
      </section>
    </>
  );
}

export default App;
