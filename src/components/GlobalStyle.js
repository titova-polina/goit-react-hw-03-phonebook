import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, ::after, :before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

img {
    display: block;
    object-fit: cover;
    max-width: 75px;
    
}

p {
    margin: 0;
    padding: 0;
}


`;
