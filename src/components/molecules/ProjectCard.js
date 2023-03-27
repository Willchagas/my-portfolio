import { Box, Divider, Flex, Image } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'

export const ProjectCard = () => {
  return (
    <Flex flexDir="column" p={['10px', '0px']}>
      <Flex flexDir={['column', 'row']} mt="40px">
        <Flex w={['100%', '50%']} flexDir="column">
          <Text.ScreenCaptionText>Bookclub</Text.ScreenCaptionText>

          <Text.ScreenParagraph mt="20px">
            App feito em React.js com a função principal de uma biblioteca
            virtual. O usuário pode pesquisar livros e autores, obter suas
            informações e favoritar os livros.
          </Text.ScreenParagraph>

          <Text.ScreenParagraph mt="20px">
            React.JS | ChakraUI | Axios | React query
          </Text.ScreenParagraph>

          <Flex mt="10px">
            <Box
              mr="10px"
              as="a"
              href="https://bookclub-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white'
              }}
            >
              <AiOutlineLink size={30} />
            </Box>
            <Box
              as="a"
              href="https://github.com/Willchagas/bookclub-web"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white'
              }}
            >
              <AiFillGithub size={30} />
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Image
            boxSize="225px"
            src="/img/MockupBookClub.svg"
            alt="MockupBookClub"
          />
          <Image
            boxSize="225px"
            src="/img/DemoBookClub.svg"
            alt="DemoBookClub"
          />
        </Flex>
      </Flex>

      <Divider />

      <Flex flexDir={['column', 'row']} mt="40px">
        <Flex w={['100%', '50%']} flexDir="column">
          <Text.ScreenCaptionText>Supermarket List</Text.ScreenCaptionText>
          <Text.ScreenParagraph mt="20px">
            Esta é uma aplicação construída usando React.js, com o objetivo de
            facilitar a criação de listas de supermercado. Foi utilizado o
            Atomic Design Concept para organizar os componentes.
          </Text.ScreenParagraph>

          <Text.ScreenParagraph mt="20px">
            React.JS | Styled Components | Axios | Eslint Prettier | Absolute
            Imports
          </Text.ScreenParagraph>

          <Flex mt="10px">
            <Box
              mr="10px"
              as="a"
              href="https://supermarket-list-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white'
              }}
            >
              <AiOutlineLink size={30} />
            </Box>
            <Box
              as="a"
              href="https://github.com/Willchagas/supermarket-list-frontend"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white'
              }}
            >
              <AiFillGithub size={30} />
            </Box>
          </Flex>
        </Flex>
        <Flex m="0 auto">
          <Image
            boxSize="250px"
            src="/img/DemoSupermarketList.svg"
            alt="DemoSupermarketList"
          />
        </Flex>
      </Flex>

      <Divider />

      <Flex flexDir="column" mt="100px">
        <Box>
          <Text.ScreenSubtitle color="brand.white">
            Outros Projetos
          </Text.ScreenSubtitle>
        </Box>
        <Flex>
          <Flex flexDir={['column', 'row']} mt="40px" w="100%">
            <Flex w={['100%', '50%']} flexDir="column">
              <Text.ScreenCaptionText>Amazon Clone</Text.ScreenCaptionText>

              <Text.ScreenParagraph mt="20px">
                Projeto feito com o objetivo de estudar o consumo de API.
              </Text.ScreenParagraph>

              <Text.ScreenParagraph mt="20px">
                HTML | CSS | JavaScript
              </Text.ScreenParagraph>

              <Flex mt="10px">
                <Box
                  mr="10px"
                  as="a"
                  href="https://willchagas.github.io/amazon-clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white'
                  }}
                >
                  <AiOutlineLink size={30} />
                </Box>
                <Box
                  as="a"
                  href="https://github.com/Willchagas/amazon-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white'
                  }}
                >
                  <AiFillGithub size={30} />
                </Box>
              </Flex>
            </Flex>
            <Flex w={['100%', '50%']} flexDir="column" mt={['30px', '0px']}>
              <Text.ScreenCaptionText>Decolar Clone</Text.ScreenCaptionText>
              <Text.ScreenParagraph mt="20px">
                Esse projeto foi feito com o objetivo de reforçar os estudos
                sobre html, css, js e responsividade.
              </Text.ScreenParagraph>
              <Text.ScreenParagraph mt="20px">
                HTML | CSS | JavaScript
              </Text.ScreenParagraph>
              <Flex mt="10px">
                <Box
                  mr="10px"
                  as="a"
                  href="https://willchagas.github.io/decolar-clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white'
                  }}
                >
                  <AiOutlineLink size={30} />
                </Box>
                <Box
                  as="a"
                  href="https://github.com/Willchagas/decolar-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white'
                  }}
                >
                  <AiFillGithub size={30} />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
