import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center div {
    border: 1px solid black;
  }
`;

export const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 14px;
  margin: 38px;
  height: 73vh;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Img = styled.img`
  width: 50%;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
export const Div2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
export const Div3 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  padding: 10px;
`;
export const Div4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  padding: 10px;
`;
export const Div5 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  padding: 10px;
`;
