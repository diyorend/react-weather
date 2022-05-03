import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    transition: all 0.5s ease;
    scroll-behavior: smooth;
    @media (max-width: 700px){
      font-size: 80%;
    }
  }
  body{
    background: #4f6286;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  h3{
    font-weight: 400;
    font-size: 1.2rem;
  }
  h1{
    font-size: 1.8rem;
  }
  
`;

export default GlobalStyled;
