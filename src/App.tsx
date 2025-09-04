import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import { temalight, temaDark } from './themes/light'

function App() {
  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setestaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temalight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

//npx prettier --write .\src\
