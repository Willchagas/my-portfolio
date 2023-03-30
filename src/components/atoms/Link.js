import { Link as ChakraLink } from '@chakra-ui/react'

export const LinkMenu = ({ children, ...props }) => (
  <ChakraLink {...props}>{children}</ChakraLink>
)

LinkMenu.menu = ({ children, ...props }) => (
  <ChakraLink
    color="brand.white"
    fontWeight="bold"
    fontSize="20px"
    ml="50px"
    {...props}
  >
    {children}
  </ChakraLink>
)

LinkMenu.menu.displayName = 'menu'

LinkMenu.mobile = ({ children, ...props }) => (
  <ChakraLink
    color="brand.greyDark"
    fontWeight="bold"
    fontSize="15px"
    ml="10px"
    {...props}
  >
    {children}
  </ChakraLink>
)

LinkMenu.menu.displayName = 'mobile'
