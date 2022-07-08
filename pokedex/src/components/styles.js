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
  display: flex;
  flex-direction: column;
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0px 40px;
  padding: 20px;
  width: 90%;
  margin-top: 20%;
`;

export const ContainerColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;
