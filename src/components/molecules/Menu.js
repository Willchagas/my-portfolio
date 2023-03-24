import { Flex, Image, Menu } from '@chakra-ui/react'
import { LinkMenu } from 'components/atoms'

export const MainMenu = () => {
  return (
    <Flex flexDir="row" justifyContent="space-between" alignItems="center">
      <Flex>
        <Image boxSize="150px" src="/img/logo.png" alt="logo" />
      </Flex>
      <Flex flexDir="row" justifyContent="space-between">
        <Menu>
          <LinkMenu.menu href="#home">Home</LinkMenu.menu>
          <LinkMenu.menu href="#Sobre">Sobre</LinkMenu.menu>
          <LinkMenu.menu href="#Contato">Contato</LinkMenu.menu>
          <LinkMenu.menu href="#Blog">Blog (em breve)</LinkMenu.menu>
        </Menu>
      </Flex>
      <Flex>
        <Image
          boxSize="50px"
          mr="40px"
          cursor="pointer"
          src="/img/brazil.png"
          alt="pt-br"
        />
        <Image
          boxSize="50px"
          mr="40px"
          cursor="pointer"
          src="/img/unitedStates.png"
          alt="en"
        />
      </Flex>
    </Flex>
  )
}
