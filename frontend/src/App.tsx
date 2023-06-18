import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/GlobalStyles';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
