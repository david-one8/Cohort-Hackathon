import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionContainer = motion(Container)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // Responsive values
  const logoSize = useBreakpointValue({ base: "60px", md: "80px" })
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })

  const footerSections = {
    company: {
      title: 'Company',
      icon: '🏢',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Story', path: '/about' },
        { name: 'Franchise', path: '/franchise' },
        { name: 'Careers', path: '/about' },
        { name: 'Investor Relations', path: '#' },
      ]
    },
    products: {
      title: 'Products',
      icon: '🥥',
      links: [
        { name: 'Ice Creams', path: '/menu' },
        { name: 'Smoothies', path: '/menu' },
        { name: 'Coconut Water', path: '/menu' },
        { name: 'Beverages', path: '/menu' },
        { name: 'Limited Edition', path: '/menu' },
      ]
    },
    support: {
      title: 'Support',
      icon: '🛟',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Help Center', path: '/contact' },
        { name: 'Track Order', path: '#' },
        { name: 'Returns & Refunds', path: '#' },
        { name: 'Bulk Orders', path: '/contact' },
      ]
    },
    legal: {
      title: 'Legal',
      icon: '📋',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Cookie Policy', path: '#' },
        { name: 'FSSAI License', path: '#' },
        { name: 'Food Safety', path: '#' },
      ]
    }
  }

  return (
    <MotionBox
      as="footer"
      position="relative"
      bg="gray.900"
      color="white"
      overflow="hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(135deg, rgba(0,201,167,0.1), rgba(132,94,194,0.1), rgba(255,107,107,0.1))"
        zIndex="0"
      />
      
      {/* Animated Top Border */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="4px"
        bgGradient="linear(90deg, brand.primary, brand.accent, brand.cta, brand.secondary)"
        backgroundSize="300% 100%"
        sx={{
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' }
          },
          animation: 'gradientShift 4s ease-in-out infinite'
        }}
        zIndex="1"
      />

      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        backgroundImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)"
        backgroundSize="100px 100px"
        zIndex="0"
      />

      <MotionContainer
        maxW="1400px"
        px={containerPadding}
        py={{ base: 12, md: 16, lg: 20 }}
        position="relative"
        zIndex="2"
      >
        {/* Main Footer Content */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 5 }}
          gap={{ base: 10, md: 8, lg: 12 }}
          mb={{ base: 12, md: 16 }}
        >
          {/* Brand Section */}
          <Box gridColumn={{ base: "1", lg: "1 / 2" }}>
            <VStack align={{ base: "center", lg: "start" }} spacing={6}>
              {/* Logo */}
              <HStack spacing={3} justify={{ base: "center", lg: "start" }} w="full">
                <MotionBox
                  w={logoSize}
                  h={logoSize}
                  bgGradient="linear(45deg, brand.primary, brand.accent)"
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="white"
                  boxShadow="0 10px 30px rgba(0,201,167,0.3)"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(0,201,167,0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  🥥
                </MotionBox>
                <VStack align={{ base: "center", lg: "start" }} spacing={0}>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="900"
                    fontFamily="heading"
                    bgGradient="linear(135deg, brand.primary, brand.accent)"
                    bgClip="text"
                    lineHeight="1"
                  >
                    COCOFIT
                  </Text>
                  <Badge
                    bg="brand.cta"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                  >
                    Premium
                  </Badge>
                </VStack>
              </HStack>
              
              {/* Brand Description */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.300"
                lineHeight="1.8"
                maxW="320px"
                textAlign={{ base: "center", lg: "left" }}
              >
                India's first premium coconut-based ice cream brand delivering 
                pure, preservative-free treats that redefine indulgence.
              </Text>
            </VStack>
          </Box>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <VStack 
              key={key} 
              align={{ base: 'center', lg: 'start' }} 
              spacing={4}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              {/* Section Header */}
              <HStack spacing={2} justify={{ base: "center", lg: "start" }}>
                <Text fontSize="lg">{section.icon}</Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontWeight="700"
                  color="white"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  {section.title}
                </Text>
              </HStack>
              
              {/* Section Links */}
              <VStack 
                align={{ base: 'center', lg: 'start' }} 
                spacing={3}
              >
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                  >
                    <MotionBox
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        color="gray.400"
                        _hover={{
                          color: 'brand.primary',
                          textDecoration: 'none'
                        }}
                        transition="color 0.3s ease"
                        textAlign={{ base: 'center', lg: 'left' }}
                        cursor="pointer"
                      >
                        {link.name}
                      </Text>
                    </MotionBox>
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Divider */}
        <Box
          height="1px"
          bgGradient="linear(90deg, transparent, whiteAlpha.300, transparent)"
          mb={{ base: 6, md: 8 }}
        />

        {/* Bottom Footer */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={{ base: 4, md: 6 }}
          textAlign="center"
        >
          {/* Copyright */}
          <VStack 
            align={{ base: 'center', md: 'start' }} 
            spacing={1}
            order={{ base: 2, md: 1 }}
          >
            <Text 
              fontSize={{ base: 'sm', md: 'md' }} 
              color="gray.400"
              textAlign={{ base: 'center', md: 'left' }}
            >
              © {currentYear} COCOFIT PVT. LTD. • All rights reserved.
            </Text>
            <Text 
              fontSize="xs" 
              color="gray.500"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Crafted with ❤️ by David Fule • Made in India 🇮🇳
            </Text>
          </VStack>
          
          {/* Brand Taglines */}
          <VStack 
            align={{ base: 'center', md: 'end' }} 
            spacing={1}
            order={{ base: 1, md: 2 }}
          >
            <HStack spacing={2} justify={{ base: "center", md: "end" }}>
              <Badge
                bg="brand.secondary"
                color="brand.dark"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                🏆 India's #1 Coconut Brand
              </Badge>
              <Badge
                bg="brand.primary"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
              >
                🌱 100% Natural
              </Badge>
            </HStack>
            <Text 
              fontSize="xs" 
              color="gray.500"
              textAlign={{ base: 'center', md: 'right' }}
              fontStyle="italic"
            >
              "It's Refreshing, It's Ravishing, It's Recharging"
            </Text>
          </VStack>
        </Flex>
      </MotionContainer>
    </MotionBox>
  )
}

export default Footer
