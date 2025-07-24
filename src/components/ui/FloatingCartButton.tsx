import { Box, Button, VStack, Text, useDisclosure, Slide } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)

interface FloatingMenuProps {
  totalItems: number
  totalPrice: number
}

const FloatingCartButton = ({ totalItems, totalPrice }: FloatingMenuProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const [isHovered, setIsHovered] = useState(false)

  if (totalItems === 0) return null

  return (
    <>
      {/* Floating Cart Button */}
      <MotionBox
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex={1000}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          borderRadius="full"
          bg="brand.primary"
          color="white"
          boxShadow="0 10px 30px rgba(0, 201, 167, 0.4)"
          _hover={{
            bg: "teal.600",
            boxShadow: "0 15px 40px rgba(0, 201, 167, 0.6)",
          }}
          onClick={onToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          position="relative"
          overflow="hidden"
          minW="60px"
          h="60px"
          p={0}
        >
          {/* Ripple Effect */}
          <MotionBox
            position="absolute"
            top="50%"
            left="50%"
            w="100%"
            h="100%"
            borderRadius="full"
            bg="white"
            opacity={0.3}
            scale={0}
            animate={isHovered ? { scale: [0, 1.5], opacity: [0.3, 0] } : {}}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{ x: "-50%", y: "-50%" }}
          />
          
          <VStack spacing={0}>
            <Text fontSize="xl">🛒</Text>
            <Text fontSize="xs" fontWeight="bold">
              {totalItems}
            </Text>
          </VStack>
        </Button>
      </MotionBox>

      {/* Slide-out Cart Panel */}
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 999 }}>
        <Box
          bg="white"
          p={6}
          borderTopRadius="24px"
          boxShadow="0 -10px 30px rgba(0,0,0,0.2)"
          borderTop="3px solid"
          borderColor="brand.primary"
        >
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold" color="brand.dark">
              Your Order Summary
            </Text>
            <Text color="brand.muted">
              {totalItems} items selected
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="brand.primary">
              Total: ₹{totalPrice}
            </Text>
            <Button
              bg="brand.cta"
              color="white"
              size="lg"
              borderRadius="full"
              w="full"
              _hover={{
                bg: "red.600",
                transform: "translateY(-2px)",
              }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="ghost"
              color="brand.muted"
              onClick={onToggle}
            >
              Continue Shopping
            </Button>
          </VStack>
        </Box>
      </Slide>
    </>
  )
}

export default FloatingCartButton
