import React from 'react';
import { useRequestDetails } from '../hooks/useRequestDetails';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';

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
`;

export const CardDetails = () => {
  const [data, error, isLoading] = useRequestDetails(
    `${BASE_URL}pokemon/bulbasaur`,
  );

  return (
    <Container>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading && data && (
        <Conteudo>
          <h1>teste</h1>
          <p>{data.species.name}</p>
        </Conteudo>
      )}
    </Container>
  );
};
