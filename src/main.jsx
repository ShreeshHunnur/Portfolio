import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'

// Create a custom theme with the new color palette
const theme = extendTheme({
  colors: {
    brand: {
      100: '#DBAFA0', // Lightest shade
      200: '#BB8493',
      300: '#704264',
      400: '#49243E', // Darkest shade
    },
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#49243E' : 'white',
        color: props.colorMode === 'dark' ? '#DBAFA0' : '#49243E',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.200' : 'brand.300',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.400',
          }
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.100' : 'brand.300',
          color: props.colorMode === 'dark' ? 'brand.100' : 'brand.300',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(219, 175, 160, 0.1)' : 'rgba(112, 66, 100, 0.1)',
          }
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: 'tight',
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
