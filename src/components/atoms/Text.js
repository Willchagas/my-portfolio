import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => (
  <ChakraText {...props}>{children}</ChakraText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.primary"
    fontWeight="bold"
    fontSize="100px"
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenTitle.displayName = 'ScreenTitle'
