import { Box } from '@chakra-ui/react'
import Marquee from '../ui/Marquee'

const PremiumMarquee = () => {
  const premiumFeatures = [
    "🥥 100% Pure Coconut Milk",
    "🌱 Zero Preservatives",
    "💚 Heart Healthy Choice",
    "🏆 Premium Quality Ingredients",
    "🇮🇳 Made in India",
    "✨ Artisanal Crafted",
    "🌿 Natural & Organic",
    "💪 Protein Rich",
    "🎯 Low Calorie Indulgence",
    "🌟 Award Winning Taste"
  ]

  return (
    <Box
      py={6}
      bg="linear-gradient(135deg, #00C9A7 0%, #845EC2 50%, #FF6B6B 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)"
        backgroundSize="100px 50px"
        animation="float 20s ease-in-out infinite"
      />
      
      <Marquee 
        items={premiumFeatures}
        speed={30}
        direction="left"
        className="premium-marquee"
      />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
        }
      `}</style>
    </Box>
  )
}

export default PremiumMarquee