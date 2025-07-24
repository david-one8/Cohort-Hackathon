import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion.create(Box)
const MotionText = motion.create(Text)

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Dynamically import GSAP to reduce initial bundle size
    let ctx: { revert: () => void } | null = null
    
    import('gsap').then(({ gsap }) => {
      ctx = gsap.context(() => {
        // Animate title words
        gsap.fromTo(
          '.hero-word',
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          }
        )

        // Animate floating elements
        gsap.to('.floating-element', {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          stagger: 0.3,
        })
      }, heroRef)
    })

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  const heroWords = [
    { text: 'Transform', color: 'brand.dark' },
    { text: 'your', color: 'brand.dark' },
    { text: 'health', color: 'brand.primary' },
    { text: 'with', color: 'brand.dark' },
    { text: 'COCOFIT', color: 'brand.accent' },
  ]

  return (
    <Box
      ref={heroRef}
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 50%, #F9F871 100%)"
    >
      {/* Animated Background Elements */}
      <Box position="absolute" top="10%" left="10%" className="floating-element">
        <Box
          w="80px"
          h="80px"
          borderRadius="50%"
          bg="brand.primary"
          opacity={0.1}
        />
      </Box>
      <Box position="absolute" top="20%" right="15%" className="floating-element">
        <Box
          w="60px"
          h="60px"
          borderRadius="50%"
          bg="brand.accent"
          opacity={0.1}
        />
      </Box>
      <Box position="absolute" bottom="30%" left="20%" className="floating-element">
        <Box
          w="100px"
          h="100px"
          borderRadius="50%"
          bg="brand.cta"
          opacity={0.08}
        />
      </Box>

      <Container maxW="1200px" h="100vh">
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="full"
          textAlign="center"
          pt="80px"
        >
          {/* Hero Title */}
          <VStack gap={4} mb={8}>
            <Box ref={titleRef} overflow="hidden" px={{ base: 4, sm: 2, md: 0 }}>
              <Flex wrap="wrap" justify="center" gap={{ base: 2, sm: 3, md: 4 }} align="center">
                {heroWords.map((word, index) => (
                  <Text
                    key={index}
                    className="hero-word"
                    fontSize={{ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' }}
                    fontWeight="bold"
                    fontFamily="heading"
                    color={word.color}
                    lineHeight="1.1"
                    textAlign="center"
                  >
                    {word.text}
                  </Text>
                ))}
              </Flex>
            </Box>

            <MotionText
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              color="brand.muted"
              maxW={{ base: '90%', sm: '80%', md: '600px' }}
              lineHeight={{ base: '1.5', md: '1.6' }}
              textAlign="center"
              px={{ base: 4, sm: 2, md: 0 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              India's first coconut-based ice cream brand delivering premium quality, 
              preservative-free treats that fuel your wellness journey.
            </MotionText>
          </VStack>

          {/* CTA Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            px={{ base: 4, md: 0 }}
          >
            <VStack 
              spacing={{ base: 8, md: 0 }}
              direction={{ base: 'column', md: 'row' }}
              as={HStack}
              gap={{ base: 0, md: 8 }} 
              flexWrap="wrap" 
              justify="center"
              align="center"
            >
              <Button
                bg="brand.primary"
                color="white"
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: 'md', md: 'lg' }}
                borderRadius="full"
                w={{ base: 'full', sm: 'auto' }}
                maxW={{ base: '280px', sm: 'none' }}
                mb={{ base: 4, md: 0 }}
                onClick={() => navigate('/menu')}
                _hover={{
                  bg: 'teal.600',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(0, 201, 167, 0.4)',
                }}
                style={{ transition: 'all 0.3s ease' }}
              >
                Explore Our Menu
              </Button>
              <Button
                variant="outline"
                borderColor="brand.accent"
                color="brand.accent"
                size={{ base: 'md', md: 'lg' }}
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: 'md', md: 'lg' }}
                borderRadius="full"
                w={{ base: 'full', sm: 'auto' }}
                maxW={{ base: '280px', sm: 'none' }}
                onClick={() => navigate('/about')}
                _hover={{
                  bg: 'brand.accent',
                  color: 'white',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(132, 94, 194, 0.4)',
                }}
                style={{ transition: 'all 0.3s ease' }}
              >
                Our Story
              </Button>
            </VStack>
          </MotionBox>

          {/* Trust Indicators */}
          <MotionBox
            mt={{ base: 12, md: 16 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            px={{ base: 4, md: 0 }}
          >
            <VStack gap={{ base: 3, md: 4 }}>
              <Text 
                fontSize={{ base: 'xs', md: 'sm' }} 
                color="brand.muted" 
                fontWeight="500"
                textAlign="center"
                letterSpacing="wider"
              >
                TRUSTED BY THOUSANDS ACROSS INDIA
              </Text>
              <Flex 
                gap={{ base: 4, sm: 6, md: 8 }} 
                flexWrap="wrap" 
                justify="center"
                align="center"
                direction={{ base: 'column', sm: 'row' }}
              >
                <Box textAlign="center" minW={{ base: '120px', sm: 'auto' }}>
                  <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="brand.primary">
                    65+
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.muted">
                    Product Variants
                  </Text>
                </Box>
                <Box textAlign="center" minW={{ base: '120px', sm: 'auto' }}>
                  <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="brand.primary">
                    100%
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.muted">
                    Preservative Free
                  </Text>
                </Box>
                <Box textAlign="center" minW={{ base: '120px', sm: 'auto' }}>
                  <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="brand.primary">
                    50K+
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="brand.muted">
                    Happy Customers
                  </Text>
                </Box>
              </Flex>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}

export default HeroSection
