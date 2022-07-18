import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage, goToDetails } from '../routes/coordinator';
import { GlobalStateContext } from '../context/global/GlobalStateContext';
import { Header, Button, Container } from './styles';
import * as S from './styles';

export const PokedexPage = () => {
  const navigate = useNavigate();

  const { states, setters, requests } = useContext(GlobalStateContext);
  const { pokedex } = states
  const { setPokedex } = setters

  const pokemonsPokedex = pokedex && pokedex.map((pokemon) => {
    return (
      <S.Conteudo key={pokemon.name}>
        <S.Imagem src={pokemon.image} alt={pokemon.name} />
        <S.Buttons>
          <h3>{pokemon.name}</h3>
          <button
            onClick={() => removePokemon(pokemon.name)}
          >
            Remover pokemon
          </button>
          <button
            onClick={() => goToDetails(navigate, pokemon.name)}
          >
            Detalhes
          </button>
        </S.Buttons>
      </S.Conteudo>
    )
  })

  const removePokemon = (name) => {
    const newPokedex = pokedex.filter((pokemon) => {
      return name !== pokemon.name
    })

    setPokedex([...newPokedex])
  }

  return (
    <div>
      <Header>
        <Button onClick={() => goToLastPage(navigate)}>Voltar para a lista de pokemons</Button>
        <h1>Lista de Pokémons</h1>
      </Header>
      <Container>
        {pokemonsPokedex}
      </Container>
    </div>
  );
};
