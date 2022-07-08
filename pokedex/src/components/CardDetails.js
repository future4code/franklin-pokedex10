import React from 'react';
import { useRequestDetails } from '../hooks/useRequestDetails';
import { BASE_URL } from '../constants/urls';
import {
  Container,
  ContainerDetails,
  Column1,
  ContainerColumn1,
} from './styles';

export const CardDetails = () => {
  const [data, error, isLoading] = useRequestDetails(
    `${BASE_URL}pokemon/bulbasaur`,
  );

  return (
    <Container>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading && data && (
        <ContainerDetails>
          <ContainerColumn1>
            <Column1>
              <p>{data.species.name}</p>
              <p>Imagem frontal </p>
            </Column1>
            <Column1>
              <p>{data.species.name}</p>
              <p>Imagem de costas </p>
            </Column1>
          </ContainerColumn1>
          <div>
            <p> Stats </p>
          </div>
          <div>
            <p>type 1 </p>
          </div>
          <div>
            <p>moves</p>
          </div>
        </ContainerDetails>
      )}
    </Container>
  );
};
