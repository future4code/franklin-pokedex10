import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';
import { Container, Conteudo } from './styles';

const Buttons = styled.div`
  display: flex;
  gap: 5px;
  button {
    padding: 4px 8px;
  }
`;

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
              <p>{pokemon.id}</p>
              <Buttons>
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
