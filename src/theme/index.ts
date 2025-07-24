import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    primary: '#00C9A7',
    secondary: '#F9F871',
    accent: '#845EC2',
    cta: '#FF6B6B',
    dark: '#1E1E1E',
    light: '#F7F7F7',
    white: '#FFFFFF',
    muted: '#4D8076'
  },
  teal: {
    50: '#E6FFFA',
    500: '#00C9A7',
    600: '#00B496',
    700: '#009F85'
  },
  purple: {
    500: '#845EC2',
    600: '#7551B8',
    700: '#6544AE'
  }
}

const fonts = {
  heading: '"Clash Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  body: '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
}

const styles = {
  global: {
    body: {
      bg: 'brand.white',
      color: 'brand.dark',
      fontSize: '16px',
      lineHeight: '1.6'
    },
    '*': {
      boxSizing: 'border-box'
    }
  }
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: '12px',
      transition: 'all 0.3s ease'
    },
    variants: {
      primary: {
        bg: 'brand.primary',
        color: 'white',
        _hover: {
          bg: 'teal.600',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(0, 201, 167, 0.3)'
        }
      },
      secondary: {
        bg: 'brand.accent',
        color: 'white',
        _hover: {
          bg: 'purple.600',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(132, 94, 194, 0.3)'
        }
      },
      cta: {
        bg: 'brand.cta',
        color: 'white',
        _hover: {
          bg: '#ff5757',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)'
        }
      }
    },
    defaultProps: {
      variant: 'primary'
    }
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
}

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components
})

export default theme
