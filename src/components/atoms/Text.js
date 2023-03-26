import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => (
  <ChakraText {...props}>{children}</ChakraText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.primary"
    fontWeight="bold"
    fontSize={{ base: '50px', md: '40px', lg: '70px', xl: '90px' }}
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenTitle.displayName = 'ScreenTitle'

Text.ScreenSubtitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.grey"
    fontWeight="bold"
    fontSize={{ base: '24px', md: '40px', lg: '70px', xl: '30px' }}
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenSubtitle.displayName = 'ScreenSubtitle'

Text.ScreenCaptionText = ({ children, ...props }) => (
  <ChakraText
    color="brand.white"
    fontWeight="bold"
    fontSize={{ base: '18px', md: '40px', lg: '70px', xl: '20px' }}
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenCaptionText.displayName = 'ScreenCaptionText'

Text.ScreenParagraph = ({ children, ...props }) => (
  <ChakraText
    color="brand.grey"
    fontWeight="light"
    fontSize={{ base: '18px', md: '40px', lg: '70px', xl: '20px' }}
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenParagraph.displayName = 'ScreenParagraph'
