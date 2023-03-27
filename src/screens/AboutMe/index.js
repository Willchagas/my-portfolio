import { Box, Flex, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { Text } from 'components'

export const AboutMeScreen = () => {
  return (
    <Flex flexDir="column" w="1094px" m="0 auto">
      <Flex flexDir="row" w="1100px" mt="100px" mb="100px">
        <Flex flexDir="row" w="50%" wrap="wrap" alignContent="flex-start">
          <Text.ScreenSubtitle color="brand.white">
            Sobre mim
          </Text.ScreenSubtitle>
          <Text.ScreenParagraph mt="40px">
            Meu nome é Willian e eu gosto de criar soluções web que ajudem
            pessoas e empresas a atingir seus objetivos.
            <Box h="20px" />
            Tive meu primeiro contato com programação no ensino médio técnico em
            informática, onde aprendi o básico da programação como Lógica,
            Pascal, JavaScript, HTML, CSS, SQL, Banco de dados relacional e não
            relacional.
            <Box h="20px" />
            Procuro sempre me manter atualizado com novas tecnologias e
            técnicas, para manter meus projetos com códigos cada mais limpos e
            bem organizados.
          </Text.ScreenParagraph>
        </Flex>
        <Flex
          ml="100px"
          mt="80px"
          boxShadow="dark-lg"
          p="3"
          borderRadius="10px"
        >
          <Image boxSize="350px" src="/img/myPhoto.svg" alt="myPhoto" />
        </Flex>
      </Flex>
      <Flex flexDir="row">
        <Box w="50%">
          <Text.ScreenCaptionText>
            Essas são algumas das tecnologias que mais tenho usado recentemente:
          </Text.ScreenCaptionText>
        </Box>
        <Flex
          w="50%"
          flexDir="row"
          justifyContent="space-evenly"
          color="brand.white"
          fontSize="20px"
        >
          <UnorderedList>
            <ListItem>JavaScript</ListItem>
            <ListItem>React.JS</ListItem>
            <ListItem>ChakraUI</ListItem>
            <ListItem>Styled Components</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>Redux Toolkit</ListItem>
            <ListItem>Axios</ListItem>
            <ListItem>React Query</ListItem>
            <ListItem>Atomic Design</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  )
}
