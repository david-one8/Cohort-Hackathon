import { 
  Box, 
  Container, 
  Text, 
  VStack, 
  HStack,
  Badge,
  Button,
  SimpleGrid
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/about.css'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionContainer = motion(Container)
const MotionVStack = motion(VStack)
const MotionButton = motion(Button)

const About = () => {
  const navigate = useNavigate()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  // Timeline data with rich story content
  const timelineData = [
    {
      year: '2019',
      title: 'The Beginning',
      subtitle: 'A Vision Born from Passion',
      description: 'Founded with a simple yet revolutionary idea - to bring pure, preservative-free coconut products to health-conscious consumers across India.',
      icon: '🌱',
      gradient: 'linear(to-br, brand.primary, brand.secondary)',
      facts: ['First store in Chennai', 'Zero preservatives promise', '100% natural products']
    },
    {
      year: '2020',
      title: 'Innovation Era',
      subtitle: 'Pioneering Natural Alternatives',
      description: 'Developed unique coconut-based ice creams and beverages using traditional methods combined with modern food technology.',
      icon: '🥥',
      gradient: 'linear(to-br, brand.accent, brand.cta)',
      facts: ['15 unique flavors', 'Patent pending recipes', 'Award-winning taste']
    },
    {
      year: '2021',
      title: 'Market Expansion',
      subtitle: 'Growing the Coconut Revolution',
      description: 'Expanded to 5 cities with overwhelming customer response, establishing Cocofit as India\'s premier coconut brand.',
      icon: '🚀',
      gradient: 'linear(to-br, brand.cta, brand.primary)',
      facts: ['50+ outlets', '100K+ customers', '5 major cities']
    },
    {
      year: '2022',
      title: 'Recognition & Awards',
      subtitle: 'Industry Leadership Acknowledged',
      description: 'Received multiple awards for innovation in food technology and sustainable business practices in the F&B industry.',
      icon: '🏆',
      gradient: 'linear(to-br, brand.secondary, brand.accent)',
      facts: ['Best Innovation Award', 'Sustainability Champion', 'Customer Choice Award']
    },
    {
      year: '2023-2025',
      title: 'Future Vision',
      subtitle: 'Scaling New Heights',
      description: 'Embarking on franchise expansion with a goal to become India\'s most loved coconut brand with 200+ outlets nationwide.',
      icon: '🌟',
      gradient: 'linear(to-br, brand.primary, brand.cta)',
      facts: ['Franchise model', '200+ outlets goal', 'Pan-India presence']
    }
  ]

  // Story cards for interactive section
  const storyCards = [
    {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'Pure. Natural. Delicious.',
      description: 'To revolutionize the way India experiences coconut-based products by delivering pure, preservative-free alternatives that don\'t compromise on taste.',
      icon: '🎯',
      year: 'Core Value',
      gradient: 'linear-gradient(135deg, rgba(0,201,167,0.9), rgba(132,94,194,0.9))',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&q=80',
      facts: ['Zero preservatives', 'Natural ingredients', 'Health-focused']
    },
    {
      id: 'innovation',
      title: 'Innovation',
      subtitle: 'Traditional Meets Modern',
      description: 'Combining age-old coconut processing wisdom with cutting-edge food technology to create products that are both authentic and innovative.',
      icon: '💡',
      year: 'Philosophy',
      gradient: 'linear-gradient(135deg, rgba(255,107,107,0.9), rgba(249,248,113,0.9))',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
      facts: ['R&D focused', 'Patent recipes', 'Quality assured']
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      subtitle: 'Caring for Tomorrow',
      description: 'Every aspect of our business is designed with environmental consciousness, from sourcing to packaging, ensuring a better future.',
      icon: '🌍',
      year: 'Commitment',
      gradient: 'linear-gradient(135deg, rgba(132,94,194,0.9), rgba(0,201,167,0.9))',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
      facts: ['Eco-friendly packaging', 'Sustainable sourcing', 'Carbon neutral']
    }
  ]

  // Company values
  const values = [
    { icon: '🌿', title: 'Natural', description: '100% natural ingredients with no artificial additives' },
    { icon: '❤️', title: 'Health-First', description: 'Promoting wellness through nutritious coconut products' },
    { icon: '🔬', title: 'Innovation', description: 'Continuous R&D for better products and experiences' },
    { icon: '🤝', title: 'Community', description: 'Building relationships with customers, partners, and communities' },
    { icon: '🌱', title: 'Sustainable', description: 'Environmentally responsible practices in all operations' },
    { icon: '⭐', title: 'Excellence', description: 'Uncompromising quality in every product we create' }
  ]

  return (
    <Box minHeight="100vh" bg="white" position="relative" overflow="hidden">
      {/* Background Particles */}
      <Box className="about-particles-container">
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            className="about-particle"
            left={`${Math.random() * 100}%`}
            style={{
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </Box>

      <MotionContainer maxW="1400px" px={6} py={20} pt={{ base: 24, md: 28 }}>
        {/* Hero Section */}
        <MotionVStack
          gap={8}
          textAlign="center"
          mb={20}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            bg="brand.primary"
            color="white"
            px={6}
            py={2}
            borderRadius="full"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Our Journey
          </Badge>
          
          <MotionText
            className="about-hero-text"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            maxW="900px"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From Humble Beginnings to Coconut Excellence
          </MotionText>
          
          <Text 
            className="body-large" 
            color="brand.muted" 
            maxW="700px"
            fontSize="xl"
            lineHeight="1.8"
          >
            Discover how a simple passion for coconuts transformed into India's most innovative 
            preservative-free food brand, one delicious product at a time.
          </Text>
        </MotionVStack>

        {/* Timeline Section */}
        <MotionBox
          mb={20}
          className="timeline-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Text className="heading-2" color="brand.dark">
                Our Story Timeline
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                Every milestone in our journey has been driven by passion, innovation, and 
                an unwavering commitment to quality.
              </Text>
            </VStack>

            {/* Timeline Items */}
            <VStack gap={8} w="full" maxW="1000px">
              {timelineData.map((item, index) => (
                <MotionBox
                  key={item.year}
                  className="timeline-milestone"
                  w="full"
                  p={{ base: 6, md: 8 }}
                  bg="white"
                  borderRadius="24px"
                  boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <VStack 
                    gap={{ base: 4, md: 6 }} 
                    align={{ base: "center", md: "start" }}
                    direction={{ base: "column", md: "row" }}
                    as={HStack}
                    spacing={{ base: 0, md: 6 }}
                  >
                    <VStack gap={3} minW={{ base: "auto", md: "120px" }} align="center">
                      <Box fontSize={{ base: "2xl", md: "3xl" }}>{item.icon}</Box>
                      <Badge
                        className="timeline-year"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="bold"
                      >
                        {item.year}
                      </Badge>
                    </VStack>
                    
                    <VStack 
                      align={{ base: "center", md: "start" }} 
                      gap={4} 
                      flex={1}
                      textAlign={{ base: "center", md: "left" }}
                      w="full"
                    >
                      <VStack align={{ base: "center", md: "start" }} gap={2} w="full">
                        <Text 
                          className="heading-3" 
                          color="brand.dark"
                          fontSize={{ base: "xl", md: "2xl" }}
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {item.title}
                        </Text>
                        <Text 
                          className="heading-5" 
                          color="brand.primary"
                          fontSize={{ base: "md", md: "lg" }}
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {item.subtitle}
                        </Text>
                      </VStack>
                      
                      <Text 
                        className="body-medium" 
                        color="brand.muted" 
                        lineHeight="1.7"
                        fontSize={{ base: "sm", md: "md" }}
                        textAlign={{ base: "center", md: "left" }}
                        px={{ base: 2, md: 0 }}
                      >
                        {item.description}
                      </Text>
                      
                      <HStack 
                        gap={3} 
                        flexWrap="wrap"
                        justify={{ base: "center", md: "flex-start" }}
                        w="full"
                      >
                        {item.facts.map((fact, i) => (
                          <Badge
                            key={i}
                            bg="brand.light"
                            color="brand.primary"
                            px={3}
                            py={1}
                            borderRadius="lg"
                            fontSize={{ base: "xs", md: "sm" }}
                          >
                            {fact}
                          </Badge>
                        ))}
                      </HStack>
                    </VStack>
                  </VStack>
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </MotionBox>

        {/* Interactive Story Section */}
        <MotionVStack
          gap={12}
          mb={20}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={4} textAlign="center">
            <Text className="heading-2" color="brand.dark">
              What Drives Us
            </Text>
            <Text className="body-large" color="brand.muted" maxW="600px">
              Our core values and principles that guide every decision we make
            </Text>
            <HStack>
              <Badge
                bg="brand.secondary"
                color="brand.dark"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
              >
                ✨ Interactive Experience
              </Badge>
            </HStack>
          </VStack>

          {/* Story Cards Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {storyCards.map((card, index) => (
              <MotionBox
                key={card.id}
                className="story-card"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setSelectedCard(card.id)}
                onHoverEnd={() => setSelectedCard(null)}
              >
                <Box 
                  position="relative" 
                  h="500px" 
                  overflow="hidden" 
                  borderRadius="24px"
                  boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  {/* Background Image */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundImage={`url(${card.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    opacity={0.3}
                    filter="blur(1px)"
                  />
                  
                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    background={card.gradient}
                    opacity={0.9}
                  />
                  
                  {/* Content */}
                  <VStack 
                    position="relative" 
                    zIndex={10} 
                    h="full" 
                    p={6} 
                    justify="space-between"
                    align="flex-start"
                    textAlign="left"
                  >
                    {/* Header */}
                    <VStack align="flex-start" gap={3} w="full">
                      <HStack justify="space-between" w="full">
                        <MotionBox
                          className="story-icon"
                          fontSize="3xl"
                          animate={selectedCard === card.id ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0]
                          } : {}}
                          transition={{ duration: 1 }}
                        >
                          {card.icon}
                        </MotionBox>
                        <Badge
                          bg="rgba(255,255,255,0.2)"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          backdropFilter="blur(10px)"
                        >
                          {card.year}
                        </Badge>
                      </HStack>
                      
                      <VStack align="flex-start" gap={2}>
                        <Text 
                          className="heading-3" 
                          color="white" 
                          fontWeight="bold"
                          textShadow="0 2px 4px rgba(0,0,0,0.3)"
                        >
                          {card.title}
                        </Text>
                        <Text 
                          className="heading-5" 
                          color="rgba(255,255,255,0.9)"
                          textShadow="0 1px 2px rgba(0,0,0,0.3)"
                        >
                          {card.subtitle}
                        </Text>
                      </VStack>
                    </VStack>

                    {/* Description */}
                    <Box flex={1} display="flex" alignItems="center">
                      <Text 
                        className="body-medium" 
                        color="rgba(255,255,255,0.95)"
                        textShadow="0 1px 2px rgba(0,0,0,0.3)"
                        lineHeight="1.6"
                      >
                        {card.description}
                      </Text>
                    </Box>

                    {/* Facts */}
                    <VStack align="flex-start" gap={3} w="full">
                      <HStack flexWrap="wrap" gap={2}>
                        {card.facts.map((fact, i) => (
                          <Badge
                            key={i}
                            bg="rgba(255,255,255,0.15)"
                            color="white"
                            px={2}
                            py={1}
                            borderRadius="lg"
                            fontSize="xs"
                            backdropFilter="blur(5px)"
                            border="1px solid rgba(255,255,255,0.2)"
                          >
                            {fact}
                          </Badge>
                        ))}
                      </HStack>
                    </VStack>
                  </VStack>

                  {/* Hover Glow Effect */}
                  <MotionBox
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    background="radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
                    opacity={selectedCard === card.id ? 1 : 0}
                    transition={{ duration: 0.3 }}
                    pointerEvents="none"
                  />
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionVStack>

        {/* Values Section */}
        <MotionBox
          mb={20}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={12} className="values-grid">
            <VStack gap={4} textAlign="center">
              <Text className="heading-2" color="brand.dark">
                Our Core Values
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                The principles that define who we are and how we operate every day
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
              {values.map((value, index) => (
                <MotionBox
                  key={value.title}
                  className="value-item"
                  p={6}
                  bg="white"
                  borderRadius="20px"
                  boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <VStack gap={4}>
                    <Text fontSize="3xl">{value.icon}</Text>
                    <Text className="heading-4" color="brand.dark">
                      {value.title}
                    </Text>
                    <Text className="body-medium" color="brand.muted" lineHeight="1.6">
                      {value.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* Bottom CTA */}
        <MotionBox
          mt={20}
          p={12}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          textAlign="center"
          position="relative"
          overflow="hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Background Pattern */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            className="cta-pattern"
          />
          
          <VStack gap={6} zIndex={2} position="relative">
            <Text className="heading-2" color="brand.dark" maxW="600px">
              Ready to Experience Our Story?
            </Text>
            <Text className="body-large" color="brand.muted" maxW="500px">
              From ancient legends to modern innovation - join thousands who have discovered the pure taste of coconut excellence.
            </Text>
            
            <HStack gap={4} flexWrap="wrap" justify="center">
              <MotionButton
                className="cta-button"
                size="lg"
                bg="brand.primary"
                color="white"
                borderRadius="full"
                px={8}
                py={6}
                _hover={{ bg: 'brand.primary' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,201,167,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/menu')}
                cursor="pointer"
              >
                Explore Our Menu 🥥
              </MotionButton>
              
              <MotionButton
                className="cta-button"
                size="lg"
                variant="outline"
                borderColor="brand.primary"
                color="brand.primary"
                borderRadius="full"
                px={8}
                py={6}
                whileHover={{ 
                  scale: 1.05
                }}
                _hover={{
                  bg: 'brand.primary',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/contact#store-locations')
                  setTimeout(() => {
                    const element = document.getElementById('store-locations')
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                      })
                    }
                  }, 300)
                }}
                cursor="pointer"
              >
                Find a Store 📍
              </MotionButton>
            </HStack>
          </VStack>
        </MotionBox>
      </MotionContainer>
    </Box>
  )
}

export default About
