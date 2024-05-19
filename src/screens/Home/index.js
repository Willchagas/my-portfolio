import { Button, Flex } from '@chakra-ui/react'
import { MainMenu, MainMenuMobile, Text, Translations } from 'components'
import { AboutMeScreen } from 'screens/AboutMe'
import { ProjectsScreen } from 'screens/FeaturedProjects'
import { useContext, useState } from 'react'
import Lottie from 'react-lottie'
import { LanguageContext } from 'components/molecules/LanguageContext'

import animationData from './animation.json'

export const HomeScreen = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const { language } = useContext(LanguageContext)

  return (
    <Flex flexDir="column" w="100vw" h="100vh" overflowX="hidden">
      <MainMenu />
      <MainMenuMobile />
      <Flex w={['100vw', '75vw']} m="0 auto" id="Home">
        <Flex flexDir="column" m={['15px', '50px']}>
          <Text.ScreenCaptionText mt="30px">
            {Translations[language].sentence1}
          </Text.ScreenCaptionText>
          <Text.ScreenTitle>Willian Chagas</Text.ScreenTitle>
          <Text.ScreenSubtitle>
            {Translations[language].sentence3}
          </Text.ScreenSubtitle>
          <Text.ScreenParagraph mt="50px">
            {Translations[language].sentence4}
          </Text.ScreenParagraph>
          <Text.ScreenCaptionText mt="50px">
            {Translations[language].sentence5}
          </Text.ScreenCaptionText>
          <Button
            as="a"
            w={['200px', '326px']}
            mt="20px"
            colorScheme="orange"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://contate.me/willchagas"
          >
            {Translations[language].button}
          </Button>
        </Flex>
        <Flex ml="9%" display={['none', 'flex'] }>
          <Lottie
            options={defaultOptions}
            height={500}
            width={500}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            isClickToPauseDisabled={true}
          />
        </Flex>
      </Flex>
      <AboutMeScreen />
      <ProjectsScreen />
    </Flex>
  )
}
