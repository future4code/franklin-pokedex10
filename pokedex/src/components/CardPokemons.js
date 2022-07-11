import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';
import { Container, Conteudo } from './styles';

const Buttons = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  z-index: 2;
  flex-direction: column;
  background-color: #0077b6;
  padding: 5px;
  border-radius: 10px;
  gap: 5px;
  button {
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    border: 1px solid white;
    color: #00509d;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
  }
  h3 {
    font-weight: bold;
    color: white;
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
