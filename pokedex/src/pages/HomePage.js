import * as React from 'react';
import { CardPokemons } from '../components/CardPokemons';
import { useNavigate } from 'react-router-dom';
import { goToList } from '../routes/coordinator';
import { Header, Button } from './styles';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <Button onClick={() => goToList(navigate)}>Pokedex</Button>
        <h1>Lista de Pokémons</h1>
      </Header>
      <CardPokemons />
    </div>
  );
};
