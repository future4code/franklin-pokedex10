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
