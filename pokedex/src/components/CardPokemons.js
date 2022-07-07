import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  //box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
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
