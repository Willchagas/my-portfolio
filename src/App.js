import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { HomeScreen } from 'screens'
import { Footer } from 'components'
import { LanguageProvider } from 'components/molecules/LanguageContext'

const App = () => {
  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <HomeScreen />
        <Footer />
      </ChakraProvider>
    </LanguageProvider>
  )
}

export default App
