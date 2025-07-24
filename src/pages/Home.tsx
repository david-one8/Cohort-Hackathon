import { Box } from '@chakra-ui/react'
import HeroSection from '../components/sections/HeroSection.tsx'
import ValuePropSection from '../components/sections/ValuePropSection.tsx'
import PremiumMarquee from '../components/sections/PremiumMarquee.tsx'
import ProductShowcase from '../components/sections/ProductShowcase.tsx'
import TestimonialsSection from '../components/sections/TestimonialsSection.tsx'
import NewsletterSection from '../components/sections/NewsletterSection.tsx'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <ValuePropSection />
      <PremiumMarquee />
      <ProductShowcase />
      <PremiumMarquee />
      <TestimonialsSection />
      <NewsletterSection />
    </Box>
  )
}

export default Home
