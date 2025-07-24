import { Box, Container, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Amazing taste! Finally found a healthy ice cream that my kids love too.',
      rating: 5,
    },
    {
      name: 'Raj Patel',
      location: 'Bangalore',
      text: 'The coconut base makes it so creamy and guilt-free. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Anita Reddy',
      location: 'Hyderabad',
      text: 'Best healthy dessert option. Love the variety of flavors available.',
      rating: 5,
    },
  ]

  return (
    <Box py={{ base: 12, md: 20 }} bg="brand.white">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 12 }} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            px={{ base: 4, md: 0 }}
            textAlign="center"
          >
            <Text 
              className="heading-2" 
              color="brand.dark" 
              mb={{ base: 3, md: 4 }}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              What Our Customers Say
            </Text>
            <Text 
              className="body-large" 
              maxW={{ base: '95%', sm: '80%', md: '600px' }} 
              mx="auto"
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              color="brand.muted"
              lineHeight={{ base: '1.5', md: '1.6' }}
              px={{ base: 2, md: 0 }}
            >
              Join thousands of satisfied customers who've made the healthy switch to COCOFIT.
            </Text>
          </MotionBox>

          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            gap={{ base: 6, md: 8 }}
            w="full"
          >
            {testimonials.map((testimonial, index) => (
              <MotionBox
                key={index}
                p={{ base: 5, md: 6 }}
                bg="white"
                borderRadius="20px"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                maxW={{ base: '320px', md: 'none' }}
                mx="auto"
              >
                <VStack gap={{ base: 3, md: 4 }}>
                  <Text 
                    color="brand.secondary" 
                    fontSize={{ base: 'xl', md: '2xl' }}
                  >
                    {'⭐'.repeat(testimonial.rating)}
                  </Text>
                  <Text 
                    fontSize={{ base: 'sm', md: 'md' }} 
                    color="brand.dark" 
                    fontStyle="italic" 
                    lineHeight="1.6"
                    textAlign="center"
                    px={{ base: 2, md: 0 }}
                  >
                    "{testimonial.text}"
                  </Text>
                  <Box textAlign="center">
                    <Text 
                      fontWeight="600" 
                      color="brand.dark"
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      {testimonial.name}
                    </Text>
                    <Text 
                      fontSize={{ base: 'xs', sm: 'sm' }} 
                      color="brand.muted"
                    >
                      {testimonial.location}
                    </Text>
                  </Box>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default TestimonialsSection
