import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssueProvider } from './contexts/IssuesContext'
import { Router } from './Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <IssueProvider>
          <Router />
        </IssueProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
