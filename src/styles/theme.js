import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  colors: {
    brand: colors
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inria sans',
        padding: 0,
        margin: 0,
        backgroundColor: colors.background
      }
    }
  }
})
