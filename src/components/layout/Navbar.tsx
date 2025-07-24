import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import MenuIcon from '../ui/MenuIcon'

const MotionBox = motion.create(Box)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Story', path: '/about' },
  { name: 'Franchise', path: '/franchise' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  // Responsive values
  const navHeight = useBreakpointValue({ base: '70px', md: '80px' })
  const logoSize = useBreakpointValue({ base: '32px', md: '40px' })
  const logoFontSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const brandFontSize = useBreakpointValue({ base: 'lg', md: 'xl' })
  const mobileMenuWidth = useBreakpointValue({ base: '280px', sm: '320px' })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    onClose()
    
    // Reset any stuck hover states on all nav links
    setTimeout(() => {
      const navLinks = document.querySelectorAll('[data-nav-link]')
      navLinks.forEach((link) => {
        const element = link as HTMLElement
        const path = element.getAttribute('href')
        const isCurrentActive = location.pathname === path
        
        if (!isCurrentActive) {
          element.style.backgroundColor = 'transparent'
          element.style.transform = 'translateY(0px)'
          element.style.color = isScrolled ? '#1E1E1E' : '#FFFFFF'
        }
      })
    }, 100)
  }, [location.pathname, onClose, isScrolled])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'blur(5px)'}
      borderBottom={isScrolled ? '1px solid' : 'none'}
      borderColor="gray.200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ transition: 'all 0.3s ease' }}
      boxShadow={isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'}
    >
      <Box className="container">
        <Flex h={navHeight} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Flex 
              alignItems="center" 
              gap={{ base: 2, md: 3 }}
              bg={isScrolled ? "transparent" : "rgba(255, 255, 255, 0.1)"}
              px={isScrolled ? 0 : 3}
              py={isScrolled ? 0 : 2}
              borderRadius="12px"
              transition="all 0.3s ease"
              backdropFilter={isScrolled ? "none" : "blur(10px)"}
            >
              <Box
                w={logoSize}
                h={logoSize}
                bg="brand.primary"
                borderRadius={{ base: '8px', md: '12px' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
                color="white"
                fontSize={logoFontSize}
                flexShrink={0}
                boxShadow="0 4px 15px rgba(0, 201, 167, 0.4)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 20px rgba(0, 201, 167, 0.5)"
                }}
              >
                C
              </Box>
              <Text
                fontSize={brandFontSize}
                fontWeight="bold"
                fontFamily="heading"
                color={isScrolled ? "#1E1E1E" : "#FFFFFF"}
                display={{ base: 'block', xs: 'block' }}
                whiteSpace="nowrap"
                textShadow={isScrolled ? "none" : "2px 2px 4px rgba(0,0,0,0.5)"}
                transition="all 0.3s ease"
                opacity={1}
                letterSpacing="1px"
              >
                COCOFIT
              </Text>
            </Flex>
          </Link>

          {/* Desktop Navigation */}
          <HStack
            gap={{ base: 4, lg: 6, xl: 8 }}
            display={{ base: 'none', lg: 'flex' }}
            flex="1"
            justifyContent="center"
            maxW="600px"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-nav-link
                  style={{
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: isActive ? '#00C9A7' : (isScrolled ? '#1E1E1E' : '#FFFFFF'),
                    backgroundColor: isActive ? 'rgba(0, 201, 167, 0.15)' : 'transparent',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                    textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)',
                    border: isActive ? '1px solid rgba(0, 201, 167, 0.3)' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    if (!isActive) {
                      target.style.color = '#00C9A7'
                      target.style.backgroundColor = 'rgba(0, 201, 167, 0.1)'
                      target.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    if (!isActive) {
                      target.style.color = isScrolled ? '#1E1E1E' : '#FFFFFF'
                      target.style.backgroundColor = 'transparent'
                      target.style.transform = 'translateY(0px)'
                    } else {
                      // Ensure active item retains its styling
                      target.style.color = '#00C9A7'
                      target.style.backgroundColor = 'rgba(0, 201, 167, 0.15)'
                      target.style.transform = 'translateY(0px)'
                    }
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
          </HStack>

          {/* CTA Button and Mobile Menu */}
          <HStack gap={{ base: 1, sm: 2, md: 4 }} flexShrink={0}>
            {/* Sign In Button - Always visible but responsive sizing */}
            <Button
              as={Link}
              to="/auth"
              bg="brand.primary"
              color="white"
              size={{ base: 'sm', md: 'md' }}
              display="flex"
              _hover={{
                bg: 'teal.600',
                transform: 'translateY(-2px)',
                textDecoration: 'none',
              }}
              transition="all 0.3s ease"
              whiteSpace="nowrap"
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              px={{ base: 2, sm: 3, md: 6 }}
              py={{ base: 1.5, sm: 2, md: 3 }}
              borderRadius={{ base: '6px', sm: '8px', md: '12px' }}
              fontWeight="600"
              boxShadow="0 2px 8px rgba(0, 201, 167, 0.3)"
              _active={{
                transform: 'scale(0.95)'
              }}
              minW={{ base: '60px', sm: '70px', md: 'auto' }}
            >
              <Text display={{ base: 'none', sm: 'block' }}>Sign In</Text>
              <Text display={{ base: 'block', sm: 'none' }}>Sign In</Text>
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label={isOpen ? "Close menu" : "Open menu"}
              display={{ base: 'flex', lg: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              size={{ base: 'md', md: 'lg' }}
              color={isScrolled ? "#1E1E1E" : "#FFFFFF"}
              bg={isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.15)"}
              border="2px solid"
              borderColor={isScrolled ? "rgba(30, 30, 30, 0.15)" : "rgba(255, 255, 255, 0.4)"}
              _hover={{
                bg: isScrolled ? 'rgba(0, 201, 167, 0.1)' : 'rgba(0, 201, 167, 0.2)',
                borderColor: '#00C9A7',
                color: '#00C9A7',
                transform: 'scale(1.05)'
              }}
              _active={{
                bg: 'rgba(0, 201, 167, 0.3)',
                transform: 'scale(0.95)'
              }}
              w={{ base: '44px', md: '48px' }}
              h={{ base: '44px', md: '48px' }}
              minW="unset"
              borderRadius={{ base: '10px', md: '12px' }}
              transition="all 0.3s ease"
              boxShadow={isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.3)"}
            >
              <MenuIcon 
                isOpen={isOpen} 
                color={isScrolled ? "#1E1E1E" : "#FFFFFF"}
                size="26px"
              />
            </IconButton>
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bg="rgba(0,0,0,0.5)"
            zIndex={999}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MotionBox
              position="absolute"
              top="0"
              right="0"
              w={mobileMenuWidth}
              maxW="90vw"
              h="100vh"
              bg="white"
              p={{ base: 4, sm: 6 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              overflowY="auto"
              boxShadow="-10px 0 30px rgba(0,0,0,0.2)"
            >
              <Flex justifyContent="space-between" alignItems="center" mb={8}>
                <Flex alignItems="center" gap={2}>
                  <Box
                    w="32px"
                    h="32px"
                    bg="brand.primary"
                    borderRadius="8px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    color="white"
                    fontSize="md"
                  >
                    C
                  </Box>
                  <Text fontFamily="heading" fontSize="lg" fontWeight="bold" color="brand.dark">
                    COCOFIT
                  </Text>
                </Flex>
                <IconButton
                  aria-label="Close menu"
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  color="brand.dark"
                >
                  ✕
                </IconButton>
              </Flex>
              
              <VStack gap={2} align="stretch">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    style={{
                      textDecoration: 'none',
                      padding: '16px 12px',
                      fontSize: '18px',
                      fontWeight: '500',
                      color: location.pathname === item.path ? '#00C9A7' : '#1E1E1E',
                      backgroundColor: location.pathname === item.path ? 'rgba(0, 201, 167, 0.1)' : 'transparent',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      borderLeft: location.pathname === item.path ? '4px solid #00C9A7' : '4px solid transparent',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Menu Sign In Button */}
                <Box mt={6} pt={4} borderTop="1px solid" borderColor="gray.200">
                  <Button
                    as={Link}
                    to="/auth"
                    bg="brand.primary"
                    color="white"
                    size="lg"
                    width="full"
                    _hover={{
                      textDecoration: 'none',
                      bg: 'teal.600',
                      transform: 'translateY(-2px)',
                    }}
                    onClick={onClose}
                    borderRadius="12px"
                    py={6}
                    fontSize="18px"
                    fontWeight="600"
                    boxShadow="0 4px 15px rgba(0, 201, 167, 0.3)"
                    _active={{
                      transform: 'scale(0.98)'
                    }}
                  >
                    Sign In to Your Account
                  </Button>
                </Box>
              </VStack>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  )
}

export default Navbar
