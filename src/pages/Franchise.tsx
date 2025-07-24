import { 
  Box, 
  Container, 
  Text, 
  VStack, 
  HStack,
  Badge,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useToast
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import '../styles/franchise.css'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionContainer = motion(Container)
const MotionVStack = motion(VStack)
const MotionButton = motion(Button)

const Franchise = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 48 hours with franchise details.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      investment: '',
      experience: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Franchise statistics
  const stats = [
    {
      icon: '🏪',
      number: '50+',
      label: 'Active Outlets',
      description: 'Successful franchise partners across India'
    },
    {
      icon: '👥',
      number: '100K+',
      label: 'Happy Customers',
      description: 'Satisfied customers served monthly'
    },
    {
      icon: '📈',
      number: '300%',
      label: 'ROI Potential',
      description: 'Average return on investment'
    },
    {
      icon: '🌟',
      number: '4.8/5',
      label: 'Customer Rating',
      description: 'Average customer satisfaction score'
    }
  ]

  // Franchise models
  const franchiseModels = [
    {
      title: 'Express Kiosk',
      subtitle: 'Perfect for High-Traffic Areas',
      investment: '₹3-5 Lakhs',
      area: '200-400 sq ft',
      returns: '25-30%',
      description: 'Compact model ideal for malls, airports, and busy streets. Quick setup with high footfall potential.',
      features: [
        'Minimal space requirement',
        'Quick ROI within 12-18 months',
        'High-traffic location support',
        'Complete branding package',
        'Training & operational support'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, #00C9A7, #4FD1C7)',
      icon: '🥤'
    },
    {
      title: 'Cocofit Café',
      subtitle: 'Full Experience Store',
      investment: '₹8-12 Lakhs',
      area: '800-1200 sq ft',
      returns: '35-40%',
      description: 'Complete café experience with full menu, seating, and premium ambiance. Perfect for food courts and standalone locations.',
      features: [
        'Complete product portfolio',
        'Dine-in experience',
        'Premium store design',
        'Advanced POS system',
        'Marketing & promotional support'
      ],
      popular: true,
      gradient: 'linear-gradient(135deg, #FF6B6B, #845EC2)',
      icon: '☕'
    },
    {
      title: 'Premium Store',
      subtitle: 'Flagship Experience',
      investment: '₹15-25 Lakhs',
      area: '1500+ sq ft',
      returns: '45-50%',
      description: 'Premium flagship store with complete coconut experience, events space, and community hub features.',
      features: [
        'Flagship store design',
        'Event hosting capability',
        'Complete menu + exclusives',
        'Dedicated territory rights',
        'Premium location support'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, #845EC2, #F9F871)',
      icon: '🏢'
    }
  ]

  // Franchise benefits
  const benefits = [
    {
      icon: '🎯',
      title: 'Proven Business Model',
      description: 'Battle-tested franchise system with documented success across multiple markets.',
      color: 'brand.primary'
    },
    {
      icon: '📚',
      title: 'Comprehensive Training',
      description: 'Complete training program covering operations, customer service, and business management.',
      color: 'brand.accent'
    },
    {
      icon: '🛠️',
      title: 'Ongoing Support',
      description: '24/7 operational support, regular audits, and continuous business development assistance.',
      color: 'brand.cta'
    },
    {
      icon: '📱',
      title: 'Technology Integration',
      description: 'Advanced POS systems, inventory management, and digital marketing tools included.',
      color: 'brand.secondary'
    },
    {
      icon: '📢',
      title: 'Marketing Support',
      description: 'National advertising campaigns, local marketing support, and promotional materials.',
      color: 'brand.primary'
    },
    {
      icon: '🏆',
      title: 'Brand Recognition',
      description: 'Leverage the power of India\'s most trusted coconut-based food brand.',
      color: 'brand.accent'
    }
  ]

  // Process steps
  const processSteps = [
    {
      step: '01',
      title: 'Application',
      description: 'Submit your franchise application with basic details and preferred location.',
      icon: '📝',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Initial Discussion',
      description: 'One-on-one discussion with our franchise team to understand your goals.',
      icon: '💬',
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Location Assessment',
      description: 'Our experts evaluate your proposed location for business viability.',
      icon: '📍',
      duration: '1 week'
    },
    {
      step: '04',
      title: 'Agreement Signing',
      description: 'Finalize franchise agreement terms and complete documentation.',
      icon: '✍️',
      duration: '2-3 days'
    },
    {
      step: '05',
      title: 'Store Setup',
      description: 'Complete store design, setup, equipment installation, and branding.',
      icon: '🏗️',
      duration: '3-4 weeks'
    },
    {
      step: '06',
      title: 'Training Program',
      description: 'Comprehensive training for you and your staff on all aspects of operations.',
      icon: '🎓',
      duration: '1 week'
    },
    {
      step: '07',
      title: 'Grand Opening',
      description: 'Launch your Cocofit franchise with marketing support and grand opening event.',
      icon: '🎉',
      duration: '1 day'
    }
  ]

  return (
    <Box minHeight="100vh" bg="brand.light" position="relative" overflow="hidden">
      {/* Background Particles */}
      <Box className="franchise-particles-container">
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            className="franchise-particle"
            left={`${Math.random() * 100}%`}
            style={{
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
      </Box>

      {/* Hero Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100vh"
        bgGradient="linear(to-br, brand.primary, brand.accent, brand.cta)"
        opacity="0.1"
        zIndex="0"
      />

      <MotionContainer maxW="1400px" px={6} py={20} pt={{ base: 24, md: 28 }} position="relative" zIndex="1">
        {/* Hero Section */}
        <MotionVStack
          gap={8}
          textAlign="center"
          mb={20}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          p={12}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: "linear(45deg, brand.primary, brand.accent)",
            borderRadius: "32px",
            p: "2px",
            zIndex: -1
          }}
        >
          <Badge
            bg="brand.cta"
            color="white"
            px={6}
            py={2}
            borderRadius="full"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Franchise Opportunity
          </Badge>
          
          <MotionText
            className="franchise-hero-text"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            maxW="900px"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Partner with India's #1 Coconut Brand
          </MotionText>
          
          <Text 
            className="body-large" 
            color="brand.muted" 
            maxW="700px"
            fontSize="xl"
            lineHeight="1.8"
          >
            Join our mission to revolutionize India's food landscape with pure, preservative-free 
            coconut products. Be part of a proven business model with exceptional returns.
          </Text>

          <Text 
            fontSize="2xl" 
            color="brand.accent" 
            fontWeight="600"
            fontStyle="italic"
          >
            It's Refreshing, It's Ravishing, It's Recharging
          </Text>
        </MotionVStack>

        {/* Stats Section */}
        <MotionBox
          mb={20}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          p={8}
          bg="white"
          borderRadius="24px"
          boxShadow="0 20px 40px rgba(0,0,0,0.1)"
          bgGradient="linear(135deg, brand.light, white)"
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                className="franchise-stat-card"
                p={6}
                bg="white"
                borderRadius="20px"
                boxShadow="0 15px 35px rgba(0,0,0,0.1)"
                border="2px solid"
                borderColor="brand.primary"
                textAlign="center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                bgGradient="linear(135deg, white, brand.light)"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px rgba(0,201,167,0.2)",
                  borderColor: "brand.accent"
                }}
              >
                <VStack gap={3}>
                  <Text className="stat-icon" fontSize="3xl">{stat.icon}</Text>
                  <Text className="heading-2" color="brand.primary">
                    {stat.number}
                  </Text>
                  <Text className="heading-5" color="brand.dark">
                    {stat.label}
                  </Text>
                  <Text className="body-small" color="brand.muted" textAlign="center">
                    {stat.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Franchise Models */}
        <MotionBox
          mb={20}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          p={10}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          bgGradient="linear(to-br, white, brand.light)"
        >
          <VStack gap={12}>
            <VStack gap={4} textAlign="center" mb={8}>
              <Badge
                bg="brand.accent"
                color="white"
                px={6}
                py={2}
                borderRadius="full"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Investment Options
              </Badge>
              <Text className="heading-2" color="brand.dark">
                Choose Your Franchise Model
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                We offer flexible franchise options to match your investment capacity and business goals
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8} w="full">
              {franchiseModels.map((model, index) => (
                <MotionBox
                  key={model.title}
                  className="franchise-model-card"
                  position="relative"
                  p={{ base: 6, md: 8 }}
                  bg="white"
                  borderRadius="24px"
                  boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                  border="2px solid"
                  borderColor={model.popular ? "brand.cta" : "brand.primary"}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  bgGradient={model.popular ? 
                    "linear(135deg, rgba(255,107,107,0.05), white)" : 
                    "linear(135deg, rgba(0,201,167,0.05), white)"
                  }
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                    borderColor: model.popular ? "brand.accent" : "brand.cta"
                  }}
                >
                  {model.popular && (
                    <Badge
                      className="popular-badge"
                      position="absolute"
                      top={2}
                      right={8}
                      bg="brand.cta"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      Most Popular 🔥
                    </Badge>
                  )}

                  <VStack gap={6} align="stretch">
                    <VStack gap={3} align="center">
                      <Text fontSize={{ base: "3xl", md: "4xl" }}>{model.icon}</Text>
                      <VStack gap={1}>
                        <Text 
                          className="heading-3" 
                          color="brand.dark" 
                          textAlign="center"
                          fontSize={{ base: "xl", md: "2xl" }}
                        >
                          {model.title}
                        </Text>
                        <Text 
                          className="heading-5" 
                          color="brand.muted" 
                          textAlign="center"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          {model.subtitle}
                        </Text>
                      </VStack>
                    </VStack>

                    <Box p={4} bg="brand.light" borderRadius="16px" border="2px solid" borderColor="brand.primary">
                      <VStack gap={2}>
                        <Text 
                          className="heading-2" 
                          color="brand.primary"
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {model.investment}
                        </Text>
                        <Text 
                          className="body-medium" 
                          color="brand.muted"
                          textAlign={{ base: "center", md: "left" }}
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          Total Investment Required
                        </Text>
                      </VStack>
                    </Box>

                    <VStack gap={3} align="stretch">
                      <HStack 
                        justify={{ base: "center", md: "space-between" }}
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 1, md: 0 }}
                        textAlign={{ base: "center", md: "left" }}
                      >
                        <Text 
                          className="body-medium" 
                          color="brand.muted"
                          fontSize={{ base: "sm", md: "md" }}
                        >Space Required:</Text>
                        <Text 
                          className="body-medium" 
                          color="brand.dark" 
                          fontWeight="600"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {model.area}
                        </Text>
                      </HStack>
                      <HStack 
                        justify={{ base: "center", md: "space-between" }}
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 1, md: 0 }}
                        textAlign={{ base: "center", md: "left" }}
                      >
                        <Text 
                          className="body-medium" 
                          color="brand.muted"
                          fontSize={{ base: "sm", md: "md" }}
                        >Expected Returns:</Text>
                        <Text 
                          className="body-medium" 
                          color="brand.primary" 
                          fontWeight="600"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {model.returns}
                        </Text>
                      </HStack>
                    </VStack>

                    <Text 
                      className="body-medium" 
                      color="brand.muted" 
                      lineHeight="1.6"
                      textAlign={{ base: "center", md: "left" }}
                      fontSize={{ base: "sm", md: "md" }}
                      px={{ base: 2, md: 0 }}
                    >
                      {model.description}
                    </Text>

                    <VStack gap={2} align="stretch">
                      <Text 
                        className="heading-5" 
                        color="brand.dark"
                        textAlign={{ base: "center", md: "left" }}
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        What's Included:
                      </Text>
                      {model.features.map((feature, i) => (
                        <HStack 
                          key={i} 
                          gap={2}
                          justify={{ base: "center", md: "flex-start" }}
                        >
                          <Text color="brand.primary">✓</Text>
                          <Text 
                            className="body-small" 
                            color="brand.muted"
                            fontSize={{ base: "xs", md: "sm" }}
                            textAlign={{ base: "center", md: "left" }}
                          >
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    <MotionButton
                      size="lg"
                      bg="transparent"
                      border="2px solid"
                      borderColor="brand.primary"
                      color="brand.primary"
                      borderRadius="full"
                      py={6}
                      _hover={{ 
                        bg: 'brand.primary',
                        color: 'white',
                        transform: 'scale(1.02)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' })
                        setFormData(prev => ({ ...prev, investment: model.investment }))
                      }}
                    >
                      Get Started with {model.title}
                    </MotionButton>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* Benefits Section */}
        <MotionBox
          mb={20}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          p={10}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          bgGradient="linear(to-tr, white, brand.light)"
        >
          <VStack gap={12}>
            <VStack gap={4} textAlign="center" mb={8}>
              <Badge
                bg="brand.cta"
                color="white"
                px={6}
                py={2}
                borderRadius="full"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Benefits & Support
              </Badge>
              <Text className="heading-2" color="brand.dark">
                Why Choose Cocofit Franchise?
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                Join a proven system with comprehensive support and exceptional growth potential
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
              {benefits.map((benefit, index) => (
                <MotionBox
                  key={benefit.title}
                  className="benefit-card"
                  p={6}
                  bg="white"
                  borderRadius="20px"
                  boxShadow="0 15px 30px rgba(0,0,0,0.1)"
                  border="2px solid"
                  borderColor={benefit.color}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  bgGradient={`linear(135deg, white, ${benefit.color}.50)`}
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    borderColor: "brand.accent"
                  }}
                >
                  <VStack gap={4} textAlign="center">
                    <Box
                      fontSize={{ base: "2xl", md: "3xl" }}
                      p={4}
                      borderRadius="full"
                      bg="white"
                      color={benefit.color}
                      border="3px solid"
                      borderColor={benefit.color}
                      boxShadow="0 8px 20px rgba(0,0,0,0.1)"
                    >
                      {benefit.icon}
                    </Box>
                    <Text 
                      className="heading-4" 
                      color="brand.dark"
                      textAlign="center"
                      fontSize={{ base: "lg", md: "xl" }}
                    >
                      {benefit.title}
                    </Text>
                    <Text 
                      className="body-medium" 
                      color="brand.muted" 
                      lineHeight="1.6"
                      textAlign="center"
                      fontSize={{ base: "sm", md: "md" }}
                      px={{ base: 2, md: 0 }}
                    >
                      {benefit.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* Process Timeline */}
        <MotionBox
          mb={20}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          p={10}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          bgGradient="linear(to-bl, white, brand.light)"
        >
          <VStack gap={12}>
            <VStack gap={4} textAlign="center" mb={8}>
              <Badge
                bg="brand.accent"
                color="white"
                px={6}
                py={2}
                borderRadius="full"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Process Timeline
              </Badge>
              <Text className="heading-2" color="brand.dark">
                Your Journey to Success
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                Our streamlined process ensures a smooth transition from application to grand opening
              </Text>
            </VStack>

            {/* Desktop Timeline */}
            <Box 
              position="relative" 
              w="full" 
              display={{ base: 'none', lg: 'block' }}
            >
              {/* Timeline Line */}
              <Box
                position="absolute"
                left="50%"
                top="0"
                bottom="0"
                w="4px"
                bgGradient="linear(to-b, brand.primary, brand.accent, brand.cta)"
                transform="translateX(-50%)"
                zIndex={0}
                borderRadius="full"
                boxShadow="0 0 20px rgba(0,201,167,0.3)"
              />

              <VStack gap={16} position="relative" zIndex={1}>
                {processSteps.map((step, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <MotionBox
                      key={step.step}
                      w="full"
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                    >
                      <HStack
                        gap={12}
                        justify="center"
                        align="center"
                        direction={isLeft ? 'row' : 'row-reverse'}
                      >
                        {/* Content Side */}
                        <Box flex={1} textAlign={isLeft ? 'right' : 'left'}>
                          <MotionBox
                            bg="white"
                            p={8}
                            borderRadius="24px"
                            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
                            border="2px solid"
                            borderColor="brand.primary"
                            position="relative"
                            whileHover={{
                              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                              y: -4
                            }}
                            transition={{ duration: 0.3 }}
                            maxW="400px"
                            ml={isLeft ? "auto" : 0}
                            mr={isLeft ? 0 : "auto"}
                            bgGradient={isLeft ? 
                              "linear(135deg, white, brand.light)" : 
                              "linear(135deg, brand.light, white)"
                            }
                          >
                            <VStack gap={4} align={isLeft ? 'end' : 'start'}>
                              <HStack gap={3} direction={isLeft ? 'row-reverse' : 'row'}>
                                <Badge
                                  bg="brand.primary"
                                  color="white"
                                  px={4}
                                  py={2}
                                  borderRadius="full"
                                  fontSize="sm"
                                  fontWeight="600"
                                >
                                  {step.duration}
                                </Badge>
                                <Text
                                  fontSize="3xl"
                                  fontWeight="700"
                                  color="brand.primary"
                                  opacity={0.3}
                                >
                                  {step.step}
                                </Text>
                              </HStack>
                              <Text
                                className="heading-4"
                                color="brand.dark"
                                fontSize="xl"
                                fontWeight="700"
                                textAlign={isLeft ? 'right' : 'left'}
                                w="full"
                              >
                                {step.title}
                              </Text>
                              <Text
                                className="body-medium"
                                color="brand.muted"
                                lineHeight="1.6"
                                textAlign={isLeft ? 'right' : 'left'}
                                w="full"
                              >
                                {step.description}
                              </Text>
                            </VStack>
                            
                            {/* Arrow pointing to center */}
                            <Box
                              position="absolute"
                              top="50%"
                              right={isLeft ? "-12px" : "auto"}
                              left={isLeft ? "auto" : "-12px"}
                              transform="translateY(-50%)"
                              w="24px"
                              h="24px"
                              bg="brand.primary"
                              borderRadius="4px"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize="12px"
                              color="white"
                              fontWeight="bold"
                            >
                              {isLeft ? "→" : "←"}
                            </Box>
                          </MotionBox>
                        </Box>

                        {/* Center Icon */}
                        <MotionBox
                          w="100px"
                          h="100px"
                          borderRadius="full"
                          bg="white"
                          border="4px solid"
                          borderColor="brand.primary"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="2xl"
                          boxShadow="0 15px 35px rgba(0,201,167,0.2)"
                          position="relative"
                          zIndex={2}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 20px 40px rgba(0,201,167,0.3)"
                          }}
                        >
                          {step.icon}
                          
                          {/* Step number overlay */}
                          <Box
                            position="absolute"
                            top="-8px"
                            right="-8px"
                            w="32px"
                            h="32px"
                            bg="brand.cta"
                            color="white"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="sm"
                            fontWeight="bold"
                            border="3px solid white"
                          >
                            {step.step}
                          </Box>
                        </MotionBox>

                        {/* Empty space for alternating layout */}
                        <Box flex={1}></Box>
                      </HStack>
                    </MotionBox>
                  )
                })}
              </VStack>
            </Box>

            {/* Mobile Timeline */}
            <Box display={{ base: 'block', lg: 'none' }} w="full">
              <VStack gap={8} align="stretch">
                {processSteps.map((step, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <MotionBox
                      key={step.step}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      w="full"
                      display="flex"
                      justifyContent={isLeft ? "flex-start" : "flex-end"}
                    >
                      <Box
                        w={{ base: "95%", sm: "85%" }}
                        bg="white"
                        p={6}
                        borderRadius="20px"
                        boxShadow="0 10px 25px rgba(0,0,0,0.08)"
                        border="1px solid"
                        borderColor="gray.100"
                        position="relative"
                      >
                        {/* Step Number Indicator */}
                        <Box
                          position="absolute"
                          top="-12px"
                          left={isLeft ? "20px" : "auto"}
                          right={isLeft ? "auto" : "20px"}
                          w="24px"
                          h="24px"
                          bg="brand.primary"
                          color="white"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="xs"
                          fontWeight="bold"
                        >
                          {step.step}
                        </Box>

                        <VStack gap={4} align={isLeft ? "start" : "end"} w="full">
                          {/* Header Section */}
                          <VStack gap={2} align={isLeft ? "start" : "end"} w="full">
                            <HStack 
                              gap={3} 
                              direction={isLeft ? "row" : "row-reverse"}
                              w="full"
                              justify={isLeft ? "flex-start" : "flex-end"}
                            >
                              <Box
                                w="50px"
                                h="50px"
                                borderRadius="full"
                                bg="brand.primary"
                                color="white"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="lg"
                                flexShrink={0}
                                boxShadow="0 8px 20px rgba(0,201,167,0.2)"
                              >
                                {step.icon}
                              </Box>
                              
                              <Badge
                                bg="brand.secondary"
                                color="brand.dark"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="600"
                              >
                                {step.duration}
                              </Badge>
                            </HStack>
                            
                            <Text
                              fontSize="lg"
                              fontWeight="700"
                              color="brand.dark"
                              lineHeight="1.2"
                              textAlign={isLeft ? "left" : "right"}
                              w="full"
                            >
                              {step.title}
                            </Text>
                          </VStack>

                          <Text
                            fontSize="sm"
                            color="brand.muted"
                            lineHeight="1.5"
                            textAlign={isLeft ? "left" : "right"}
                            w="full"
                          >
                            {step.description}
                          </Text>
                        </VStack>

                        {/* Arrow indicator */}
                        <Box
                          position="absolute"
                          top="50%"
                          left={isLeft ? "-8px" : "auto"}
                          right={isLeft ? "auto" : "-8px"}
                          transform="translateY(-50%)"
                          w="16px"
                          h="16px"
                          bg="brand.primary"
                          borderRadius="4px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="10px"
                          color="white"
                          fontWeight="bold"
                        >
                          {isLeft ? "→" : "←"}
                        </Box>
                      </Box>
                    </MotionBox>
                  )
                })}
              </VStack>
            </Box>
          </VStack>
        </MotionBox>

        {/* Application Form */}
        <MotionBox
          id="franchise-form"
          className="franchise-form-card"
          p={12}
          bg="white"
          borderRadius="32px"
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          border="3px solid"
          borderColor="brand.primary"
          bgGradient="linear(to-br, white, brand.light)"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            bgGradient: "linear(45deg, brand.primary, brand.accent, brand.cta)",
            borderRadius: "34px",
            zIndex: -1
          }}
        >
          <VStack gap={8}>
            <VStack gap={4} textAlign="center">
              <Badge
                bg="brand.cta"
                color="white"
                px={8}
                py={3}
                borderRadius="full"
                fontSize="md"
                textTransform="uppercase"
                letterSpacing="wide"
                fontWeight="bold"
                boxShadow="0 8px 20px rgba(255,107,107,0.3)"
              >
                Apply Now
              </Badge>
              <Text className="heading-2" color="brand.dark">
                Start Your Franchise Journey
              </Text>
              <Text className="body-large" color="brand.muted" maxW="600px">
                Fill out this form and our franchise team will contact you within 48 hours 
                to discuss your opportunity in detail.
              </Text>
            </VStack>

            <Box as="form" onSubmit={handleSubmit} w="full" maxW="800px">
              <VStack gap={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                  <FormControl isRequired>
                    <FormLabel 
                      color="brand.dark" 
                      fontWeight="600"
                      fontSize="md"
                    >
                      Full Name
                    </FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel 
                      color="brand.dark"
                      fontWeight="600"
                      fontSize="md"
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    />
                  </FormControl>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                  <FormControl isRequired>
                    <FormLabel 
                      color="brand.dark"
                      fontWeight="600"
                      fontSize="md"
                    >
                      Phone Number
                    </FormLabel>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel 
                      color="brand.dark"
                      fontWeight="600"
                      fontSize="md"
                    >
                      Preferred City
                    </FormLabel>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    />
                  </FormControl>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                  <FormControl isRequired>
                    <FormLabel 
                      color="brand.dark"
                      fontWeight="600"
                      fontSize="md"
                    >
                      Investment Capacity
                    </FormLabel>
                    <Select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      placeholder="Select investment range"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    >
                      <option value="₹3-5 Lakhs">₹3-5 Lakhs (Express Kiosk)</option>
                      <option value="₹8-12 Lakhs">₹8-12 Lakhs (Cocofit Café)</option>
                      <option value="₹15-25 Lakhs">₹15-25 Lakhs (Premium Store)</option>
                      <option value="Custom">Custom Investment Range</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel 
                      color="brand.dark"
                      fontWeight="600"
                      fontSize="md"
                    >
                      Business Experience
                    </FormLabel>
                    <Select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Select experience level"
                      size="lg"
                      borderRadius="16px"
                      borderColor="brand.primary"
                      borderWidth="2px"
                      bg="white"
                      _placeholder={{ color: "brand.muted" }}
                      _focus={{
                        borderColor: 'brand.accent',
                        boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                        bg: "brand.light"
                      }}
                      _hover={{
                        borderColor: 'brand.accent'
                      }}
                    >
                      <option value="First-time entrepreneur">First-time entrepreneur</option>
                      <option value="1-3 years">1-3 years experience</option>
                      <option value="3-5 years">3-5 years experience</option>
                      <option value="5+ years">5+ years experience</option>
                      <option value="Franchise owner">Existing franchise owner</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>

                <FormControl>
                  <FormLabel 
                    color="brand.dark"
                    fontWeight="600"
                    fontSize="md"
                  >
                    Additional Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your location, timeline, or any specific questions..."
                    rows={4}
                    borderRadius="16px"
                    borderColor="brand.primary"
                    borderWidth="2px"
                    bg="white"
                    _placeholder={{ color: "brand.muted" }}
                    _focus={{
                      borderColor: 'brand.accent',
                      boxShadow: '0 0 0 3px rgba(132,94,194,0.1)',
                      bg: "brand.light"
                    }}
                    _hover={{
                      borderColor: 'brand.accent'
                    }}
                  />
                </FormControl>

                <MotionButton
                  type="submit"
                  className="franchise-submit-btn"
                  size="lg"
                  bgGradient="linear(45deg, brand.primary, brand.accent)"
                  color="white"
                  borderRadius="full"
                  py={8}
                  px={16}
                  fontSize="lg"
                  fontWeight="700"
                  boxShadow="0 15px 35px rgba(0,201,167,0.3)"
                  border="3px solid"
                  borderColor="transparent"
                  _hover={{ 
                    bgGradient: "linear(45deg, brand.accent, brand.cta)",
                    boxShadow: "0 20px 40px rgba(132,94,194,0.4)",
                    borderColor: "white"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  w={{ base: 'full', md: 'auto' }}
                >
                  Submit Application
                </MotionButton>

                <VStack gap={3} textAlign="center">
                  <Text className="body-small" color="brand.muted">
                    By submitting this form, you agree to be contacted by our franchise team 
                    regarding business opportunities.
                  </Text>
                  
                  <HStack gap={4} justify="center" flexWrap="wrap">
                    <Badge bg="brand.secondary" color="brand.dark" px={3} py={1} borderRadius="full" fontSize="xs">
                      ✓ 48-hour response guaranteed
                    </Badge>
                    <Badge bg="brand.primary" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
                      ✓ Free consultation
                    </Badge>
                    <Badge bg="brand.accent" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
                      ✓ No hidden costs
                    </Badge>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </MotionBox>
      </MotionContainer>
    </Box>
  )
}

export default Franchise
