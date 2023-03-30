import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList
} from '@chakra-ui/react'
import { LinkMenu, Translations } from 'components/atoms'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const MainMenu = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext)
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
          <LinkMenu.menu href="#Home">Home</LinkMenu.menu>
          <LinkMenu.menu href="#About">
            {Translations[language].menuLink2}
          </LinkMenu.menu>
          <LinkMenu.menu href="#Projects">
            {Translations[language].menuLink3}
          </LinkMenu.menu>
          <LinkMenu.menu href="#Contact">
            {Translations[language].menuLink4}
          </LinkMenu.menu>
          <LinkMenu.menu href="#Blog">
            {Translations[language].menuLink5}
          </LinkMenu.menu>
        </Menu>
      </Flex>
      <Flex>
        <Image
          id="pt-flag"
          boxSize="50px"
          mr="40px"
          cursor="pointer"
          src="/img/brazil.png"
          alt="Português"
          onClick={() => handleLanguageChange('pt')}
        />
        <Image
          id="en-flag"
          boxSize="50px"
          mr="40px"
          cursor="pointer"
          src="/img/unitedStates.png"
          alt="English"
          onClick={() => handleLanguageChange('en')}
        />
      </Flex>
    </Flex>
  )
}

export const MainMenuMobile = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext)
  return (
    <Flex
      w="100vw"
      mt="10px"
      display={['flex', 'none']}
      alignContent="space-evenly"
      alignItems="center"
    >
      <Flex w="40%">
        <Image boxSize="125px" src="/img/logo.svg" alt="logo" />
      </Flex>
      <Flex w="50%" flexDir="row" justifyContent="space-evenly">
        <Image
          id="pt-flag"
          boxSize="35px"
          cursor="pointer"
          src="/img/brazil.png"
          alt="Português"
          onClick={() => handleLanguageChange('pt')}
        />
        <Image
          id="en-flag"
          boxSize="35px"
          cursor="pointer"
          src="/img/unitedStates.png"
          alt="English"
          onClick={() => handleLanguageChange('en')}
        />
      </Flex>
      <Flex w="20%">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Options"
            variant="outline"
            color="brand.white"
          />
          <MenuList>
            <Flex flexDir="column">
              <LinkMenu.mobile color="brand.greyDark" href="#Home">
                Home
              </LinkMenu.mobile>
              <LinkMenu.mobile href="#About">
                {Translations[language].menuLink2}
              </LinkMenu.mobile>
              <LinkMenu.mobile href="#Projects">
                {Translations[language].menuLink3}
              </LinkMenu.mobile>
              <LinkMenu.mobile href="#Contact">
                {Translations[language].menuLink4}
              </LinkMenu.mobile>
              <LinkMenu.mobile href="#Blog">
                {Translations[language].menuLink5}
              </LinkMenu.mobile>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
