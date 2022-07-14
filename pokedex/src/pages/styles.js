import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  color: white;
  background-color: #00509d;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  justify-content: center;
  position: relative;
`;
export const HeaderText = styled.h1`
  background: rgb(255, 255, 255);
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 56%,
    rgba(0, 80, 157, 0.4542410714285714) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Button = styled.button`
  position: absolute;
  left: 20px;
  margin-top: 28px;
`;

export const ButtonDetails = styled.button`
  position: absolute;
  right: 20px;
  margin-top: 28px;
`;

export const Span = styled.span`
  color: white;
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
