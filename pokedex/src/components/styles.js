import styled from 'styled-components';

export const Imagem = styled.img`
  max-width: 200px;
`;

export const Buttons = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  z-index: 2;
  flex-direction: column;
  background-color: #0077b6;
  padding: 5px;
  border-radius: 10px;
  gap: 5px;
  button {
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    border: 1px solid white;
    color: #00509d;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
  }
  h3 {
    font-weight: bold;
    color: white;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
`;

export const Conteudo = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
  padding: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
export const Div2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div3 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const Div4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Div5 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
