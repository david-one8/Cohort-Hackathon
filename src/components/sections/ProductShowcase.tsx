import { Box, Container, Text, VStack, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const MotionBox = motion(Box)

const ProductShowcase = () => {
  const [cartItems, setCartItems] = useState<Set<number>>(new Set())

  const handleCartToggle = (itemId: number) => {
    setCartItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
        // Auto reset after 3 seconds
        setTimeout(() => {
          setCartItems(current => {
            const resetSet = new Set(current)
            resetSet.delete(itemId)
            return resetSet
          })
        }, 3000)
      }
      return newSet
    })
  }

  const products = [
    {
      id: 1,
      name: 'Classic Coconut Ice Cream',
      price: 89,
      description: 'Pure coconut flavored ice cream made with fresh coconut milk',
      category: 'Ice Cream',
      gradient: 'linear-gradient(135deg, #00C9A7, #845EC2)',
      emoji: '🥥'
    },
    {
      id: 2,
      name: 'Coconut Mango Delight',
      price: 95,
      description: 'Tropical blend of coconut and fresh mango flavors',
      category: 'Ice Cream',
      gradient: 'linear-gradient(135deg, #F9F871, #00C9A7)',
      emoji: '🥭'
    },
    {
      id: 3,
      name: 'Coconut Chocolate Fusion',
      price: 99,
      description: 'Rich chocolate with coconut base for the perfect indulgence',
      category: 'Ice Cream',
      gradient: 'linear-gradient(135deg, #845EC2, #FF6B6B)',
      emoji: '🍫'
    },
    {
      id: 4,
      name: 'Coconut Berry Blast',
      price: 92,
      description: 'Mixed berries with creamy coconut for a refreshing treat',
      category: 'Ice Cream',
      gradient: 'linear-gradient(135deg, #FF6B6B, #F9F871)',
      emoji: '🍓'
    },
    {
      id: 5,
      name: 'Coconut Vanilla Supreme',
      price: 85,
      description: 'Classic vanilla enhanced with coconut goodness',
      category: 'Ice Cream',
      gradient: 'linear-gradient(135deg, #F9F871, #845EC2)',
      emoji: '🍦'
    },
    {
      id: 6,
      name: 'Coconut Smoothie Bowl',
      price: 79,
      description: 'Refreshing coconut smoothie packed with nutrients',
      category: 'Smoothie',
      gradient: 'linear-gradient(135deg, #00C9A7, #F9F871)',
      emoji: '🥤'
    },
    {
      id: 7,
      name: 'Coconut Water Cooler',
      price: 69,
      description: 'Chilled coconut water with natural flavors',
      category: 'Cooler',
      gradient: 'linear-gradient(135deg, #4D8076, #00C9A7)',
      emoji: '🌴'
    },
    {
      id: 8,
      name: 'Coconut Pistachio Crunch',
      price: 105,
      description: 'Premium coconut ice cream with crunchy pistachios',
      category: 'Premium',
      gradient: 'linear-gradient(135deg, #845EC2, #00C9A7)',
      emoji: '🌰'
    }
  ]

  return (
    <Box py={{ base: 16, md: 20 }} bg="brand.light">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack gap={{ base: 8, md: 12 }} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            px={{ base: 4, md: 0 }}
          >
            <Text 
              className="heading-2" 
              color="brand.dark" 
              mb={{ base: 3, md: 4 }}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              textAlign="center"
            >
              Featured Products
            </Text>
            <Text 
              className="body-large" 
              maxW={{ base: "95%", sm: "80%", md: "600px" }}
              mx="auto"
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              px={{ base: 2, md: 0 }}
              lineHeight={{ base: "1.5", md: "1.6" }}
              color="brand.muted"
              textAlign="center"
            >
              Discover our signature coconut-based treats, crafted with love and 
              the finest natural ingredients.
            </Text>
          </MotionBox>

          <Box w="full" position="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              centeredSlides={false}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                }
              }}
              className="product-showcase-swiper"
            >
              {products.map((product) => (
                <SwiperSlide key={`product-${product.id}`}>
                  <Box
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    as={motion.div}
                    w="full"
                    maxW="320px"
                    mx="auto"
                    h="450px"
                    borderRadius="20px"
                    overflow="hidden"
                    bg="white"
                    boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                    position="relative"
                    cursor="pointer"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    }}
                    sx={{
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Product Image Area */}
                    <Box
                      h="200px"
                      background={product.gradient}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                    >
                      <Text
                        fontSize="6xl"
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                      >
                        {product.emoji}
                      </Text>
                      
                      {/* Category Badge */}
                      <Box
                        position="absolute"
                        top={4}
                        left={4}
                        bg="whiteAlpha.900"
                        px={3}
                        py={1}
                        borderRadius="full"
                        backdropFilter="blur(10px)"
                      >
                        <Text
                          fontSize="xs"
                          fontWeight="600"
                          color="brand.accent"
                          textTransform="uppercase"
                          letterSpacing="wider"
                        >
                          {product.category}
                        </Text>
                      </Box>
                    </Box>

                    {/* Product Details */}
                    <VStack
                      p={{ base: 4, md: 5 }}
                      gap={{ base: 2, md: 3 }}
                      h="250px"
                      justify="space-between"
                      align="stretch"
                      textAlign="center"
                    >
                      <VStack gap={{ base: 1, md: 2 }} align="center">
                        <Text
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="600"
                          color="brand.dark"
                          lineHeight="1.2"
                          noOfLines={2}
                          textAlign="center"
                          px={{ base: 1, md: 0 }}
                        >
                          {product.name}
                        </Text>
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          color="brand.muted"
                          lineHeight="1.4"
                          noOfLines={3}
                          textAlign="center"
                          px={{ base: 2, md: 0 }}
                        >
                          {product.description}
                        </Text>
                      </VStack>

                      <VStack gap={{ base: 2, md: 3 }} align="stretch">
                        <Text
                          fontSize={{ base: "2xl", md: "3xl" }}
                          fontWeight="bold"
                          color="brand.primary"
                          textAlign="center"
                        >
                          ₹{product.price}
                        </Text>
                        <Button
                          size={{ base: "sm", md: "md" }}
                          bg={cartItems.has(product.id) ? "green.500" : "brand.cta"}
                          color="white"
                          borderRadius="12px"
                          fontWeight="600"
                          fontSize={{ base: "sm", md: "md" }}
                          onClick={() => handleCartToggle(product.id)}
                          _hover={{
                            bg: cartItems.has(product.id) ? "green.600" : '#ff5757',
                            transform: 'translateY(-2px)',
                            boxShadow: cartItems.has(product.id) 
                              ? '0 8px 20px rgba(72, 187, 120, 0.3)' 
                              : '0 8px 20px rgba(255, 107, 107, 0.3)',
                          }}
                          transition="all 0.3s ease"
                          transform={cartItems.has(product.id) ? 'scale(0.98)' : 'scale(1)'}
                          leftIcon={cartItems.has(product.id) ? <Text fontSize="sm">✓</Text> : undefined}
                        >
                          {cartItems.has(product.id) ? 'Added!' : 'Add to Cart'}
                        </Button>
                      </VStack>
                    </VStack>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Box
              className="swiper-button-prev-custom"
              position="absolute"
              left="-20px"
              top="50%"
              transform="translateY(-50%)"
              w="50px"
              h="50px"
              borderRadius="50%"
              bg="white"
              boxShadow="0 4px 15px rgba(0,0,0,0.1)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              zIndex={10}
              color="brand.primary"
              fontSize="20px"
              _hover={{
                bg: 'brand.primary',
                color: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              }}
              transition="all 0.3s ease"
            >
              ←
            </Box>
            
            <Box
              className="swiper-button-next-custom"
              position="absolute"
              right="-20px"
              top="50%"
              transform="translateY(-50%)"
              w="50px"
              h="50px"
              borderRadius="50%"
              bg="white"
              boxShadow="0 4px 15px rgba(0,0,0,0.1)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              zIndex={10}
              color="brand.primary"
              fontSize="20px"
              _hover={{
                bg: 'brand.primary',
                color: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              }}
              transition="all 0.3s ease"
            >
              →
            </Box>
          </Box>
        </VStack>
      </Container>

    </Box>
  )
}

export default ProductShowcase
