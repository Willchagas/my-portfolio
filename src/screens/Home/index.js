import { Button, Flex, Image } from '@chakra-ui/react'
import { MainMenu, MainMenuMobile, Text } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh">
      <MainMenu />
      <MainMenuMobile />
      <Flex w={['100vw', '75vw']} m="0 auto">
        <Flex flexDir="column" m={['15px', '0px']}>
          <Text.ScreenCaptionText mt="30px">
            Olá, meu nome é
          </Text.ScreenCaptionText>
          <Text.ScreenTitle>Willian Chagas</Text.ScreenTitle>
          <Text.ScreenSubtitle>
            Resolvo problemas usando tecnologia.
          </Text.ScreenSubtitle>
          <Text.ScreenParagraph mt="50px">
            Sou desenvolvedor front-end especializado em criar soluções web
            excepcionais.
          </Text.ScreenParagraph>
          <Text.ScreenCaptionText mt="50px">
            Precisa de uma solução?
          </Text.ScreenCaptionText>
          <Button
            w={['200px', '326px']}
            mt="20px"
            colorScheme="orange"
            variant="outline"
          >
            Entre em contato
          </Button>
        </Flex>
        <Flex alignItems="flex-end" display={['none', 'flex']}>
          <Image boxSize="600px" src="/img/MacbookPro.svg" alt="logo" />
        </Flex>
      </Flex>
    </Flex>
  )
}
