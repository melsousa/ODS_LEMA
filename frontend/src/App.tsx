import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/Globalstyles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
