import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    html {
        height: 100%;
        width: 100%;
        &, * {
            margin: 0;
            padding: 0;
        }
    }

    body {
        background: #fadcac;
        &, button, input {
            font: 1rem/1.2 Poppins, sans-serif;
        }
    }

    h1, p {
        &::selection {
            color: #fadcac;
            background-color: #197163;
        }
    }
`;

export default GlobalStyle;