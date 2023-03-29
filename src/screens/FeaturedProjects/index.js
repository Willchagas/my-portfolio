import { Box, Button, Flex } from '@chakra-ui/react'
import { ProjectCard, Text, Translations } from 'components'
import { useContext } from 'react'
import { LanguageContext } from 'components/molecules/LanguageContext'

export const ProjectsScreen = () => {
  const { language } = useContext(LanguageContext)
  return (
    <Flex flexDir="column" w={['100vw', '75vw']} m="0 auto" mb="170px">
      <Text.ScreenSubtitle mt="150px" color="brand.white" id="Projects">
        {Translations[language].projectsTitle}
      </Text.ScreenSubtitle>
      <ProjectCard />
      <Flex flexDir="column" w="100%" textAlign="center" mt={['80px', '300px']}>
        <Text.ScreenTitle id="Contact">
          {Translations[language].finalTitle}
        </Text.ScreenTitle>
        <Text.ScreenParagraph mt="100px" mb="100px">
          {Translations[language].finalParagraph1}
          <Box h="20px" /> {Translations[language].finalParagraph2}
        </Text.ScreenParagraph>
        <Button
          as="a"
          w={['200px', '326px']}
          colorScheme="orange"
          variant="outline"
          margin="0 auto"
          target="_blank"
          rel="noopener noreferrer"
          href="https://contate.me/willchagas"
        >
          {Translations[language].button}
        </Button>
      </Flex>
    </Flex>
  )
}
