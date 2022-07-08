import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';
import { CardDetails } from '../components/CardDetails';
import { Header, Button, ButtonDetails } from './styles';
export const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <Button onClick={() => goToLastPage(navigate)}>Voltar</Button>
        <h1>Detalhes do Pokemon</h1>
        <ButtonDetails>Adicionar/remover da pokedex</ButtonDetails>
      </Header>
      <CardDetails />
    </div>
  );
};
