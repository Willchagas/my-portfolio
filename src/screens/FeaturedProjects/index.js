import { Box, Button, Flex } from '@chakra-ui/react'
import { ProjectCard, Text } from 'components'

export const ProjectsScreen = () => {
  return (
    <Flex flexDir="column" w={['100vw', '75vw']} m="0 auto" mb="170px">
      <Text.ScreenSubtitle mt="150px" color="brand.white" id="Projects">
        Projetos em destaque
      </Text.ScreenSubtitle>
      <ProjectCard />
      <Flex flexDir="column" w="100%" textAlign="center" mt={['80px', '300px']}>
        <Text.ScreenTitle id="Contact">Qual será o próximo?</Text.ScreenTitle>
        <Text.ScreenParagraph mt="100px" mb="100px">
          Estou aberto a propostas de trabalho ou freelance,
          <Box h="20px" /> clique no botão abaixo e vamos conversar.
        </Text.ScreenParagraph>
        <Button
          w={['200px', '326px']}
          colorScheme="orange"
          variant="outline"
          margin="0 auto"
        >
          Entre em contato
        </Button>
      </Flex>
    </Flex>
  )
}
