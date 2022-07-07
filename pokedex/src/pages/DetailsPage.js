import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';
import { CardDetails } from '../components/CardDetails';
import { Header, Button } from './HomePage';
export const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <Button onClick={() => goToLastPage(navigate)}>Voltar</Button>
        <h1>Detalhes do Pokemon</h1>
        <button>Adicionar/remover da pokedex</button>
      </Header>
      <CardDetails />
    </div>
  );
};
