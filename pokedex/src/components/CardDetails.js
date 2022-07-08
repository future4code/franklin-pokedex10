import React from 'react';
import { useRequestDetails } from '../hooks/useRequestDetails';
import { BASE_URL } from '../constants/urls';
import { Parent, Div1, Div2, Div3, Div4, Div5, Img } from './styles';

export const CardDetails = () => {
  const [data, error, isLoading] = useRequestDetails(
    `${BASE_URL}pokemon/bulbasaur`,
  );

  return (
    <Parent>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading && data && (
        <>
          <Div1>
            <Img src={data.sprites.front_default} alt={data.species.name} />
          </Div1>
          <Div2>
            <Img src={data.sprites.back_default} alt={data.species.name} />
          </Div2>
          <Div3>
            <h2> Poderes </h2>
            <p> Hp: {data.stats[0].base_stat} </p>
            <p> attack: {data.stats[1].base_stat} </p>
            <p> defense:{data.stats[2].base_stat} </p>
            <p> special-attack:{data.stats[3].base_stat} </p>
            <p> special-defense:{data.stats[4].base_stat} </p>
            <p> speed:{data.stats[5].base_stat} </p>
          </Div3>
          <Div4>
            <p>{data.types[0].type.name}</p>
            <p>{data.types[1].type.name}</p>
          </Div4>
          <Div5>
            <h2>Principais ataques</h2>
            <p>{data.moves[0].move.name}</p>
            <p>{data.moves[1].move.name}</p>
            <p>{data.moves[2].move.name}</p>
            <p>{data.moves[3].move.name}</p>
            <p>{data.moves[4].move.name}</p>
          </Div5>
        </>
      )}
    </Parent>
  );
};
