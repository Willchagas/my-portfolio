import { Box, Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai'

export const Footer = () => {
  return (
    <Flex w="100vw" flexDir="row" position="fixed">
      <Flex w="10%" display={['none', 'flex']}>
        <Box w="100%" position="relative">
          <Box
            as="a"
            href="https://www.instagram.com/will.jsdev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              position: 'absolute',
              top: '-9.5rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <AiOutlineInstagram size={30} />
          </Box>
          <Box
            as="a"
            href="https://github.com/Willchagas"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              position: 'absolute',
              top: '-12.5rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <AiFillGithub size={30} />
          </Box>
          <Box
            as="a"
            href="https://www.linkedin.com/in/willchagas/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              position: 'absolute',
              top: '-15.5rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <AiFillLinkedin size={30} />
          </Box>

          <Box
            w="1px"
            h="15vh"
            bg="gray.200"
            bottom="0"
            ml="5%"
            position="fixed"
            transform="translateX(-50%)"
          />
        </Box>
      </Flex>
      <Flex w="90%" alignContent="center">
        <Box
          style={{
            position: 'absolute',
            top: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <Text.ScreenParagraph fontSize="xs" textAlign="center">
            ©Todos os direitos reservados - Feito por Willian P. Chagas
          </Text.ScreenParagraph>
        </Box>
      </Flex>
    </Flex>
  )
}
