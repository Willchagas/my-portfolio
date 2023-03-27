import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { HomeScreen } from 'screens'
import { Footer } from 'components'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomeScreen />
      <Footer />
    </ChakraProvider>
  )
}

export default App
