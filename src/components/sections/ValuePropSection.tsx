import { Box, Container, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

const ValuePropSection = () => {
  const benefits = [
    {
      title: 'Low Calories',
      description: 'Guilt-free indulgence with naturally low calorie coconut base',
      icon: '🥥',
      color: 'brand.primary'
    },
    {
      title: 'Coconut Milk',
      description: 'Pure coconut milk packed with essential nutrients and vitamins',
      icon: '🌴',
      color: 'brand.accent'
    },
    {
      title: 'Less Cholesterol',
      description: 'Heart-healthy alternative with significantly reduced cholesterol',
      icon: '❤️',
      color: 'brand.cta'
    }
  ]

  return (
    <Box py={{ base: 12, md: 20 }} bg="brand.white">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 12 }} textAlign="center">
          <Text 
            className="heading-2" 
            color="brand.dark"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            px={{ base: 4, md: 0 }}
          >
            Why Choose Coconut?
          </Text>
          
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            gap={{ base: 6, md: 8 }}
            w="full"
          >
            {benefits.map((benefit, index) => (
              <MotionBox
                key={index}
                p={{ base: 6, md: 8 }}
                bg="white"
                borderRadius="20px"
                boxShadow="0 4px 20px rgba(0,0,0,0.1)"
                textAlign="center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                maxW={{ base: '320px', md: 'none' }}
                mx="auto"
              >
                <Text 
                  fontSize={{ base: '3xl', md: '4xl' }} 
                  mb={{ base: 3, md: 4 }}
                >
                  {benefit.icon}
                </Text>
                <Text 
                  className="heading-3" 
                  color={benefit.color} 
                  mb={{ base: 3, md: 4 }}
                  fontSize={{ base: 'lg', md: 'xl' }}
                >
                  {benefit.title}
                </Text>
                <Text 
                  color="brand.muted" 
                  lineHeight="1.6"
                  fontSize={{ base: 'sm', md: 'md' }}
                  px={{ base: 2, md: 0 }}
                >
                  {benefit.description}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default ValuePropSection
