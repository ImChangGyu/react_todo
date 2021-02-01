import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // css reset

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 1rem;
		color:#fff;
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: url(https://source.unsplash.com/7vKP5BAm8wg/1600x900);
        background-size:cover;
    }
`;

export default GlobalStyle;
