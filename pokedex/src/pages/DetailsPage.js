import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';
import { CardDetails } from '../components/CardDetails';
import { Header, Button, ButtonDetails, Span, HeaderText } from './styles';
import { useParams } from 'react-router-dom';

export const DetailsPage = () => {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <Button onClick={() => goToLastPage(navigate)}>Voltar</Button>
        <HeaderText>
          Detalhes do <Span>{pokemonId}</Span>
        </HeaderText>
        <ButtonDetails>Adicionar/remover da pokedex</ButtonDetails>
      </Header>
      <CardDetails />
    </div>
  );
};
