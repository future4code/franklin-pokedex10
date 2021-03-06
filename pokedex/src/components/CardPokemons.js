import React, { useContext } from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';
import { Container, Conteudo, Buttons, Imagem } from './styles';
import { GlobalStateContext } from '../context/global/GlobalStateContext';

export const CardPokemons = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons, error, isLoading] = useRequestData(`${BASE_URL}pokemon/`);
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { pokedex } = states;
  const { setPokedex } = setters;

  const addPokemon = (pokemon, url) => {
    setPokedex([...pokedex, {...pokemon, image: url}])
  }

  return (
    <Container>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading &&
        pokemons &&
        pokemons.length >= 0 &&
        pokemons.map((pokemon, index) => {
          const str = pokemon.name;
          const nome_pokemon = str[0].toUpperCase() + str.substr(1);
          let PegaIndex = 1 + index;
          let url = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PegaIndex}.png`;
          return (
            <Conteudo key={index}>
              <Imagem src={url} alt={pokemon.name} />
              <Buttons>
                <h3>{nome_pokemon}</h3>
                <button onClick={() => addPokemon(pokemon, url)}>
                  Adicionar a Pokédex
                </button>
                <button
                  onClick={() => goToDetails(navigate, pokemon.name)}
                  key={pokemon.name}
                >
                  Detalhes
                </button>
              </Buttons>
            </Conteudo>
          );
        })}
    </Container>
  );
};
