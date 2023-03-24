import { Flex } from '@chakra-ui/react'
import { MainMenu } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh">
      <MainMenu />
    </Flex>
  )
}
