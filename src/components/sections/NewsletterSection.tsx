import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion.create(Box)

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 2000)
    }
  }

  return (
    <Box py={{ base: 16, md: 20 }} bg="linear-gradient(135deg, #845EC2 0%, #00C9A7 100%)">
      <Container maxW="800px" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <VStack gap={{ base: 6, md: 8 }}>
            <VStack gap={{ base: 3, md: 4 }} px={{ base: 4, md: 0 }}>
              <Text 
                className="heading-2" 
                color="white"
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                textAlign="center"
              >
                Stay Updated with COCOFIT
              </Text>
              <Text 
                fontSize={{ base: 'md', md: 'lg' }} 
                color="whiteAlpha.900" 
                maxW={{ base: '95%', sm: '80%', md: '500px' }}
                lineHeight={{ base: '1.5', md: '1.6' }}
                textAlign="center"
                px={{ base: 2, md: 0 }}
              >
                Get the latest news about new flavors, health tips, and exclusive offers 
                delivered straight to your inbox.
              </Text>
            </VStack>

            <Box
              as="form"
              onSubmit={handleSubmit}
              w="full"
              maxW={{ base: '95%', sm: '400px' }}
              p={{ base: 4, md: 6 }}
              bg="whiteAlpha.200"
              borderRadius="20px"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
              mx="auto"
            >
              <VStack gap={{ base: 3, md: 4 }}>
                <Box w="full">
                  <Text 
                    color="white" 
                    fontSize={{ base: 'xs', md: 'sm' }} 
                    fontWeight="600" 
                    mb={2}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.400"
                    color="white"
                    _placeholder={{ color: 'whiteAlpha.700' }}
                    borderRadius="12px"
                    size={{ base: 'md', md: 'lg' }}
                    fontSize={{ base: 'sm', md: 'md' }}
                    textAlign="center"
                  />
                </Box>

                <Button
                  type="submit"
                  bg="brand.secondary"
                  color="brand.dark"
                  size={{ base: 'md', md: 'lg' }}
                  w="full"
                  borderRadius="12px"
                  fontWeight="600"
                  fontSize={{ base: 'sm', md: 'md' }}
                  disabled={isSubmitted}
                  _hover={{
                    bg: 'yellow.300',
                    transform: 'translateY(-2px)',
                  }}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {isSubmitted ? '✓ Subscribed!' : 'Subscribe Now'}
                </Button>
              </VStack>
            </Box>

            <HStack 
              gap={{ base: 4, md: 6 }} 
              fontSize={{ base: 'xs', md: 'sm' }} 
              color="whiteAlpha.800"
              flexWrap="wrap"
              justify="center"
              px={{ base: 4, md: 0 }}
            >
              <Text textAlign="center">✓ No spam, ever</Text>
              <Text>✓ Unsubscribe anytime</Text>
              <Text>✓ Exclusive offers</Text>
            </HStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default NewsletterSection
