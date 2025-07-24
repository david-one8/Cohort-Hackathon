import { 
  Box, 
  Container, 
  Text, 
  VStack, 
  HStack, 
  SimpleGrid, 
  Badge, 
  Button,
  Tabs,
  TabList,
  Tab,
  useColorModeValue,
  Card,
  CardBody,
  Stack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

const Menu = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [orderedItems, setOrderedItems] = useState<Set<number>>(new Set())

  const handleOrderToggle = (itemId: number) => {
    setOrderedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
        // Auto reset after 3 seconds
        setTimeout(() => {
          setOrderedItems(current => {
            const resetSet = new Set(current)
            resetSet.delete(itemId)
            return resetSet
          })
        }, 3000)
      }
      return newSet
    })
  }

  const categories = [
    { id: 'all', name: 'All Items', emoji: '🥥' },
    { id: 'ice-cream', name: 'Ice Creams', emoji: '🍦' },
    { id: 'coolers', name: 'Coolers', emoji: '🥤' },
    { id: 'smoothies', name: 'Smoothies', emoji: '🥤' },
    { id: 'shakes', name: 'Shakes', emoji: '🥛' }
  ]

  const menuItems = [
    // Ice Creams
    {
      id: 1,
      name: 'Coconut Ice Cream',
      price: 89,
      category: 'ice-cream',
      description: 'Classic pure coconut base ice cream with natural coconut milk',
      features: ['Preservative Free', 'Low Calories', 'Coconut Milk'],
      gradient: 'linear-gradient(135deg, #00C9A7, #4D8076)',
      emoji: '🥥'
    },
    {
      id: 2,
      name: 'Coconut Mango Ice Cream',
      price: 95,
      category: 'ice-cream',
      description: 'Tropical blend of coconut and fresh mango flavors',
      features: ['Fruit Based', 'Natural Flavors', 'Low Cholesterol'],
      gradient: 'linear-gradient(135deg, #F9F871, #00C9A7)',
      emoji: '🥭'
    },
    {
      id: 3,
      name: 'Coconut Chocolate Ice Cream',
      price: 99,
      category: 'ice-cream',
      description: 'Rich chocolate with coconut base for perfect indulgence',
      features: ['Premium Cocoa', 'Coconut Base', 'Rich Flavor'],
      gradient: 'linear-gradient(135deg, #845EC2, #FF6B6B)',
      emoji: '🍫'
    },
    {
      id: 4,
      name: 'Coconut Strawberry Ice Cream',
      price: 92,
      category: 'ice-cream',
      description: 'Fresh strawberry essence with creamy coconut base',
      features: ['Real Strawberry', 'Creamy Texture', 'Natural Colors'],
      gradient: 'linear-gradient(135deg, #FF6B6B, #F9F871)',
      emoji: '🍓'
    },
    {
      id: 5,
      name: 'Coconut Coffee Almond Ice Cream',
      price: 105,
      category: 'ice-cream',
      description: 'Premium coffee blend with crunchy almonds and coconut',
      features: ['Premium Coffee', 'Real Almonds', 'Energy Boost'],
      gradient: 'linear-gradient(135deg, #8B4513, #D2691E)',
      emoji: '☕'
    },
    {
      id: 6,
      name: 'Coconut Charcoal Ice Cream',
      price: 110,
      category: 'ice-cream',
      description: 'Unique activated charcoal flavor for detox benefits',
      features: ['Detox Properties', 'Unique Flavor', 'Health Benefits'],
      gradient: 'linear-gradient(135deg, #2C2C2C, #4A4A4A)',
      emoji: '⚫'
    },
    {
      id: 7,
      name: 'Coconut Guava Ice Cream',
      price: 95,
      category: 'ice-cream',
      description: 'Tropical guava flavor with smooth coconut base',
      features: ['Tropical Taste', 'Vitamin C Rich', 'Exotic Flavor'],
      gradient: 'linear-gradient(135deg, #FFB6C1, #FF69B4)',
      emoji: '🍃'
    },
    {
      id: 8,
      name: 'Coconut Jackfruit Ice Cream',
      price: 98,
      category: 'ice-cream',
      description: 'Traditional jackfruit flavor with coconut milk base',
      features: ['Traditional Taste', 'Fiber Rich', 'Authentic Flavor'],
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      emoji: '🥭'
    },
    // Coolers
    {
      id: 9,
      name: 'Coco Lemon',
      price: 79,
      category: 'coolers',
      description: 'Refreshing coconut water with fresh lemon zest',
      features: ['Hydrating', 'Vitamin C', 'Refreshing'],
      gradient: 'linear-gradient(135deg, #F9F871, #FFFFE0)',
      emoji: '🍋'
    },
    {
      id: 10,
      name: 'Coco Mosambi',
      price: 79,
      category: 'coolers',
      description: 'Sweet lime coconut cooler for instant refreshment',
      features: ['Natural Sugars', 'Electrolytes', 'Cooling'],
      gradient: 'linear-gradient(135deg, #90EE90, #00FF7F)',
      emoji: '🟢'
    },
    {
      id: 11,
      name: 'Coco Choco',
      price: 79,
      category: 'coolers',
      description: 'Chocolate flavored coconut cooler drink',
      features: ['Chocolate Flavor', 'Energy Drink', 'Protein Rich'],
      gradient: 'linear-gradient(135deg, #D2691E, #8B4513)',
      emoji: '🍫'
    },
    {
      id: 12,
      name: 'Coco Charcoal',
      price: 79,
      category: 'coolers',
      description: 'Detox charcoal coconut cooler for cleansing',
      features: ['Detox Drink', 'Cleansing', 'Health Benefits'],
      gradient: 'linear-gradient(135deg, #2C2C2C, #696969)',
      emoji: '⚫'
    },
    {
      id: 13,
      name: 'Coco Grape',
      price: 79,
      category: 'coolers',
      description: 'Purple grape flavored coconut refresher',
      features: ['Antioxidants', 'Natural Grape', 'Refreshing'],
      gradient: 'linear-gradient(135deg, #9370DB, #8A2BE2)',
      emoji: '🍇'
    },
    {
      id: 14,
      name: 'Coco Pine',
      price: 79,
      category: 'coolers',
      description: 'Tropical pineapple coconut cooler drink',
      features: ['Tropical Taste', 'Vitamin C', 'Digestive'],
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      emoji: '🍍'
    },
    {
      id: 15,
      name: 'Coco Melon',
      price: 79,
      category: 'coolers',
      description: 'Sweet watermelon coconut cooler for summer',
      features: ['Hydrating', 'Summer Special', 'Low Calories'],
      gradient: 'linear-gradient(135deg, #FF69B4, #FF1493)',
      emoji: '🍉'
    },
    // Smoothies
    {
      id: 16,
      name: 'Coconut Banana Smoothie',
      price: 85,
      category: 'smoothies',
      description: 'Creamy banana coconut smoothie packed with nutrients',
      features: ['Potassium Rich', 'Energy Boost', 'Creamy Texture'],
      gradient: 'linear-gradient(135deg, #FFFF00, #FFD700)',
      emoji: '🍌'
    },
    {
      id: 17,
      name: 'Coconut Berry Smoothie',
      price: 95,
      category: 'smoothies',
      description: 'Mixed berries with coconut milk for antioxidant boost',
      features: ['Antioxidants', 'Vitamin Rich', 'Immune Boost'],
      gradient: 'linear-gradient(135deg, #FF69B4, #8B008B)',
      emoji: '🫐'
    },
    {
      id: 18,
      name: 'Coconut Green Smoothie',
      price: 98,
      category: 'smoothies',
      description: 'Healthy green smoothie with coconut and spinach',
      features: ['Super Healthy', 'Iron Rich', 'Detox Blend'],
      gradient: 'linear-gradient(135deg, #90EE90, #32CD32)',
      emoji: '🥬'
    },
    // Shakes
    {
      id: 19,
      name: 'Coconut Vanilla Shake',
      price: 89,
      category: 'shakes',
      description: 'Classic vanilla shake with coconut milk base',
      features: ['Classic Flavor', 'Creamy', 'Vanilla Extract'],
      gradient: 'linear-gradient(135deg, #F5F5DC, #FFFAF0)',
      emoji: '🍦'
    },
    {
      id: 20,
      name: 'Coconut Oreo Shake',
      price: 105,
      category: 'shakes',
      description: 'Crushed oreo cookies blended with coconut shake',
      features: ['Cookie Crunch', 'Rich Flavor', 'Indulgent'],
      gradient: 'linear-gradient(135deg, #2F4F4F, #000000)',
      emoji: '🍪'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 50%, #F9F871 100%)',
    'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #845EC2 100%)'
  )

  return (
    <Box pt="80px" minH="100vh" bg={bgGradient}>
      <Container maxW="1400px" py={16}>
        <VStack gap={12} textAlign="center">
          {/* Header Section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text 
              className="heading-1" 
              color="brand.dark" 
              mb={4}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              🥥 Our Coconut Menu
            </Text>
            <Text 
              className="body-large" 
              maxW="800px" 
              mx="auto"
              fontSize={{ base: "lg", md: "xl" }}
            >
              Discover India's first coconut-based ice cream brand with over 65+ product variants. 
              All preservative-free, low-calorie, and made with pure coconut milk.
            </Text>
          </MotionBox>

          {/* Category Filter Tabs */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            w="full"
          >
            <Tabs 
              variant="soft-rounded" 
              colorScheme="teal" 
              onChange={(index) => setSelectedCategory(categories[index].id)}
              align="center"
            >
              <TabList 
                flexWrap="wrap" 
                gap={2} 
                justifyContent="center"
                bg="white"
                p={4}
                borderRadius="20px"
                boxShadow="0 10px 30px rgba(0,0,0,0.1)"
              >
                {categories.map((category) => (
                  <Tab 
                    key={category.id}
                    _selected={{ 
                      bg: 'brand.primary', 
                      color: 'white',
                      transform: 'scale(1.05)'
                    }}
                    borderRadius="full"
                    px={6}
                    py={3}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="600"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(0,201,167,0.3)'
                    }}
                  >
                    <HStack>
                      <Text>{category.emoji}</Text>
                      <Text>{category.name}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </MotionBox>

          {/* Menu Items Grid */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            w="full"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <MotionCard
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    bg="white"
                    borderRadius="24px"
                    overflow="hidden"
                    boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                    _hover={{
                      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    }}
                    cursor="pointer"
                    position="relative"
                  >
                    {/* Product Image/Gradient Area */}
                    <Box
                      h="200px"
                      background={item.gradient}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      overflow="hidden"
                    >
                      <Text
                        fontSize="5xl"
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
                        transform={hoveredItem === item.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)'}
                        transition="all 0.3s ease"
                      >
                        {item.emoji}
                      </Text>
                      
                      {/* Floating Elements */}
                      <Box
                        position="absolute"
                        top="20px"
                        right="20px"
                        bg="white"
                        borderRadius="full"
                        p={2}
                        transform={hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)'}
                        transition="all 0.3s ease"
                      >
                        <Text fontSize="lg" fontWeight="bold" color="brand.primary">
                          ₹{item.price}
                        </Text>
                      </Box>
                    </Box>

                    <CardBody p={6}>
                      <Stack spacing={4}>
                        <VStack align="start" spacing={2}>
                          <Badge 
                            colorScheme="purple" 
                            fontSize="xs" 
                            px={2} 
                            py={1}
                            borderRadius="full"
                          >
                            {categories.find(cat => cat.id === item.category)?.name}
                          </Badge>
                          
                          <Text 
                            fontSize="xl" 
                            fontWeight="bold" 
                            color="brand.dark"
                            lineHeight="1.2"
                          >
                            {item.name}
                          </Text>
                          
                          <Text 
                            fontSize="sm" 
                            color="brand.muted" 
                            lineHeight="1.4"
                          >
                            {item.description}
                          </Text>
                        </VStack>

                        {/* Features */}
                        <VStack align="start" spacing={2}>
                          <Text fontSize="xs" fontWeight="600" color="brand.accent">
                            KEY FEATURES:
                          </Text>
                          <HStack wrap="wrap" spacing={1}>
                            {item.features.map((feature, idx) => (
                              <Badge 
                                key={idx}
                                size="sm" 
                                colorScheme="green" 
                                variant="subtle"
                                fontSize="xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </HStack>
                        </VStack>

                        {/* Action Button */}
                        <Button
                          bg={orderedItems.has(item.id) ? "green.500" : "brand.cta"}
                          color="white"
                          borderRadius="full"
                          size="md"
                          w="full"
                          _hover={{
                            bg: orderedItems.has(item.id) ? "green.600" : "red.600",
                            transform: 'translateY(-2px)',
                            boxShadow: orderedItems.has(item.id) 
                              ? '0 8px 20px rgba(72, 187, 120, 0.4)' 
                              : '0 8px 20px rgba(255, 107, 107, 0.4)',
                          }}
                          transition="all 0.3s ease"
                          onClick={() => handleOrderToggle(item.id)}
                          transform={orderedItems.has(item.id) ? 'scale(0.98)' : 'scale(1)'}
                          leftIcon={orderedItems.has(item.id) ? <Text>✓</Text> : undefined}
                        >
                          {orderedItems.has(item.id) ? 'Ordered!' : `Order Now - ₹${item.price}`}
                        </Button>
                      </Stack>
                    </CardBody>
                  </MotionCard>
                ))}
              </AnimatePresence>
            </SimpleGrid>
          </MotionBox>

          {/* Bottom CTA Section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            textAlign="center"
            bg="white"
            p={8}
            borderRadius="24px"
            boxShadow="0 20px 40px rgba(0,0,0,0.1)"
            maxW="600px"
          >
            <VStack spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="brand.dark">
                Can't find what you're looking for?
              </Text>
              <Text color="brand.muted">
                We have many more flavors and custom options available at our stores!
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  bg="brand.primary"
                  color="white"
                  size="lg"
                  borderRadius="full"
                  _hover={{
                    bg: 'teal.600',
                    transform: 'translateY(-2px)',
                  }}
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
                  zIndex={10}
                >
                  Visit Store
                </Button>
                <Button
                  variant="outline"
                  borderColor="brand.accent"
                  color="brand.accent"
                  size="lg"
                  borderRadius="full"
                  _hover={{
                    bg: 'brand.accent',
                    color: 'white',
                  }}
                  onClick={() => {
                    navigate('/contact#contact-info')
                    setTimeout(() => {
                      const element = document.getElementById('contact-info')
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
                  zIndex={10}
                >
                  Call Us
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Menu
