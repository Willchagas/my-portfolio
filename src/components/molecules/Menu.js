import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { LinkMenu } from 'components/atoms'

export const MainMenu = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      display={['none', 'flex']}
    >
      <Flex>
        <Image boxSize="150px" src="/img/logo.svg" alt="logo" />
      </Flex>
      <Flex flexDir="row" justifyContent="space-between">
        <Menu>
          <LinkMenu.menu href="#home">Home</LinkMenu.menu>
          <LinkMenu.menu href="#Sobre">Sobre</LinkMenu.menu>
          <LinkMenu.menu href="#Projetos">Projetos</LinkMenu.menu>
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

export const MainMenuMobile = () => {
  return (
    <Flex w="100vw" display={['flex', 'none']}>
      <Flex w="88%">
        <Image boxSize="125px" src="/img/logo.svg" alt="logo" />
      </Flex>
      <Flex w="12%" mt="25px">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Options"
            variant="outline"
            color="brand.white"
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Projetos</MenuItem>
            <MenuItem>Contato</MenuItem>
            <MenuItem>Blog (em breve)</MenuItem>
            <MenuDivider />
            <MenuGroup title="Idioma | Language">
              <MenuItem>
                <Image
                  boxSize="30px"
                  mr="40px"
                  cursor="pointer"
                  src="/img/brazil.png"
                  alt="pt-br"
                />
              </MenuItem>
              <MenuItem>
                <Image
                  boxSize="30px"
                  mr="40px"
                  cursor="pointer"
                  src="/img/unitedStates.png"
                  alt="en"
                />
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
