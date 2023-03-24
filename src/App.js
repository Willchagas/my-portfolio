import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { HomeScreen } from 'screens'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomeScreen />
    </ChakraProvider>
  )
}

export default App
