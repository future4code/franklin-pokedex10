import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';
import { Container, Conteudo, Buttons } from './styles';
export const CardPokemons = () => {
  const navigate = useNavigate();
  const [pokemons, error, isLoading] = useRequestData(`${BASE_URL}pokemon/`);
  return (
    <Container>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading &&
        pokemons &&
        pokemons.length >= 0 &&
        pokemons.map((pokemon, index) => {
          let PegaIndex = 1 + index;
          let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PegaIndex}.png`;
          return (
            <Conteudo key={index}>
              <img src={url} alt={pokemon.name} />
              <Buttons>
                <h3>{pokemon.name}</h3>
                <button>Adicionar a Pokédex</button>
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
