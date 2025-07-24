import { Box, Text } from '@chakra-ui/react'

interface MarqueeProps {
  items: string[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

const Marquee = ({ items, speed = 30, direction = 'left', className }: MarqueeProps) => {
  const allItems = [...items, ...items] // Duplicate for seamless loop

  return (
    <Box
      className={className}
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      w="100%"
    >
      <Box
        display="flex"
        animation={`marquee-${direction} ${speed}s linear infinite`}
        gap={8}
      >
        {allItems.map((item, index) => (
          <Text
            key={index}
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight="600"
            color="white"
            whiteSpace="nowrap"
            flex="none"
            px={4}
          >
            {item}
          </Text>
        ))}
      </Box>
      
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </Box>
  )
}

export default Marquee