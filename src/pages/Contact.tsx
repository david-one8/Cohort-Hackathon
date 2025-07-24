import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Text, 
  VStack, 
  HStack, 
  SimpleGrid, 
  Input, 
  Textarea, 
  Button, 
  Icon,
  Badge,
  Divider,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaStore,
  FaPaperPlane,
  FaGithub
} from 'react-icons/fa'
import '../styles/contact.css'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ContactInfo {
  icon: React.ComponentType
  title: string
  details: string[]
  color: string
}

interface StoreLocation {
  city: string
  location: string
  type: 'flagship' | 'premium' | 'express'
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaPhone,
    title: "Phone Support",
    details: ["+91 9876543210", "Mon-Sun: 10 AM - 10 PM"],
    color: "#00C9A7"
  },
  {
    icon: FaEnvelope,
    title: "Email Support", 
    details: ["info@cocofit.in", "franchise@cocofit.in"],
    color: "#845EC2"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Head Office",
    details: ["Hyderabad, Telangana", "India"],
    color: "#FF6B6B"
  },
  {
    icon: FaGithub,
    title: "GitHub Repository",
    details: ["github.com/david-one8", "Open source projects"],
    color: "#333"
  }
]

const storeLocations: StoreLocation[] = [
  { city: "Hyderabad", location: "JNTU Addagutta Society", type: "flagship" },
  { city: "Hyderabad", location: "Sarath City Capital Mall", type: "premium" },
  { city: "Hyderabad", location: "Nallakunta", type: "express" },
  { city: "Hyderabad", location: "Hitech City", type: "premium" },
  { city: "Mumbai", location: "Dombivli", type: "premium" },
  { city: "Bangalore", location: "Gallerial Mall", type: "flagship" },
  { city: "Bangalore", location: "City Center", type: "express" },
  { city: "Vijayawada", location: "Benz Circle", type: "premium" },
  { city: "Vijayawada", location: "Tikkel Road", type: "express" },
  { city: "Chennai", location: "City Center", type: "premium" },
  { city: "Rajkot", location: "Gujarat", type: "express" },
  { city: "Anantapur", location: "Main Road", type: "express" },
  { city: "Guntur", location: "City Center", type: "express" },
  { city: "Tirupathi", location: "Temple Road", type: "express" },
  { city: "Kurnool", location: "Main Street", type: "express" },
  { city: "Other Locations", location: "Uttarpradesh, Ongole, Hindupur, Khammam, Nandhyala, Proddutur, Kadappa", type: "express" }
]

const socialMedia = [
  { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/davidfule/", color: "#0077B5" },
  { icon: FaInstagram, name: "Instagram", url: "https://www.instagram.com/l.david_97/", color: "#E4405F" },
  { icon: FaTwitter, name: "Twitter", url: "https://x.com/davidfule18", color: "#1DA1F2" }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const toast = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      })
    }
  }

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setFormErrors({})
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setShowSuccessMessage(true)
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    })
    setIsSubmitting(false)
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccessMessage(false), 5000)
  }

  return (
    <Box pt="80px" minH="100vh" bg="gray.50" className="contact-page">
      {/* Hero Section */}
      <Container maxW="1200px" py={16} pt={{ base: 20, md: 24 }}>
        <MotionVStack
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          gap={8} 
          textAlign="center"
          mb={16}
        >
          <Text 
            className="heading-1 contact-hero-text" 
            color="brand.dark"
            textAlign="center"
            maxW="800px"
          >
            Get in Touch with 
            <Text as="span" color="brand.primary"> India's First</Text>
            <br />
            Coconut Ice Cream Brand
          </Text>
          <Text className="body-large" maxW="600px" color="brand.muted">
            We're here to help with your queries, feedback, franchise opportunities, 
            or any other business inquiries. Reach out to us!
          </Text>
        </MotionVStack>

        {/* Contact Info Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mb={16} id="contact-info">
          {contactInfo.map((info, index) => (
            <MotionBox
              key={info.title}
              className="contact-info-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              bg="white"
              p={8}
              borderRadius="24px"
              boxShadow="0 20px 40px rgba(0,0,0,0.1)"
              textAlign="center"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
              }}
            >
              <VStack gap={4}>
                <Box
                  bg={info.color}
                  p={4}
                  borderRadius="full"
                  color="white"
                  fontSize="xl"
                >
                  <Icon as={info.icon} />
                </Box>
                <VStack gap={2}>
                  <Text className="heading-4" color="brand.dark">
                    {info.title}
                  </Text>
                  {info.details.map((detail, idx) => (
                    <Text 
                      key={idx}
                      className="body-medium" 
                      color={idx === 0 ? "brand.primary" : "brand.muted"}
                      fontWeight={idx === 0 ? "600" : "400"}
                    >
                      {detail}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Main Content Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} mb={16}>
          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form-container"
            bg="white"
            p={10}
            borderRadius="32px"
            boxShadow="0 30px 60px rgba(0,0,0,0.1)"
            position="relative"
            overflow="hidden"
          >
            <VStack gap={6} align="stretch">
              <VStack gap={3} align="start">
                <Text className="heading-2" color="brand.dark">
                  Send us a Message
                </Text>
                <Text className="body-medium" color="brand.muted">
                  Fill out the form below and we'll get back to you within 24 hours.
                </Text>
              </VStack>

              {showSuccessMessage && (
                <Alert status="success" borderRadius="12px" mb={6}>
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Message sent successfully!</AlertTitle>
                    <AlertDescription>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </AlertDescription>
                  </Box>
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <VStack gap={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    <FormControl isRequired isInvalid={!!formErrors.name}>
                      <FormLabel color="brand.dark" fontWeight="600">Full Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        bg="gray.50"
                        border="2px solid transparent"
                        _focus={{
                          borderColor: 'brand.primary',
                          bg: 'white'
                        }}
                        _invalid={{
                          borderColor: 'red.500'
                        }}
                        borderRadius="12px"
                        h="50px"
                      />
                      <FormErrorMessage>{formErrors.name}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isRequired isInvalid={!!formErrors.email}>
                      <FormLabel color="brand.dark" fontWeight="600">Email Address</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        bg="gray.50"
                        border="2px solid transparent"
                        _focus={{
                          borderColor: 'brand.primary',
                          bg: 'white'
                        }}
                        _invalid={{
                          borderColor: 'red.500'
                        }}
                        borderRadius="12px"
                        h="50px"
                      />
                      <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    <FormControl isRequired isInvalid={!!formErrors.phone}>
                      <FormLabel color="brand.dark" fontWeight="600">Phone Number</FormLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        bg="gray.50"
                        border="2px solid transparent"
                        _focus={{
                          borderColor: 'brand.primary',
                          bg: 'white'
                        }}
                        _invalid={{
                          borderColor: 'red.500'
                        }}
                        borderRadius="12px"
                        h="50px"
                      />
                      <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isRequired>
                      <FormLabel color="brand.dark" fontWeight="600">Inquiry Type</FormLabel>
                      <Select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        bg="gray.50"
                        border="2px solid transparent"
                        _focus={{
                          borderColor: 'brand.primary',
                          bg: 'white'
                        }}
                        borderRadius="12px"
                        h="50px"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="franchise">Franchise Opportunity</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="feedback">Feedback/Support</option>
                        <option value="media">Media & Press</option>
                      </Select>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired isInvalid={!!formErrors.subject}>
                    <FormLabel color="brand.dark" fontWeight="600">Subject</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      bg="gray.50"
                      border="2px solid transparent"
                      _focus={{
                        borderColor: 'brand.primary',
                        bg: 'white'
                      }}
                      _invalid={{
                        borderColor: 'red.500'
                      }}
                      borderRadius="12px"
                      h="50px"
                    />
                    <FormErrorMessage>{formErrors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!formErrors.message}>
                    <FormLabel color="brand.dark" fontWeight="600">Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry... (minimum 10 characters)"
                      rows={6}
                      bg="gray.50"
                      border="2px solid transparent"
                      _focus={{
                        borderColor: 'brand.primary',
                        bg: 'white'
                      }}
                      _invalid={{
                        borderColor: 'red.500'
                      }}
                      borderRadius="12px"
                      resize="vertical"
                    />
                    <FormErrorMessage>{formErrors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    className="contact-submit-btn"
                    size="lg"
                    w="full"
                    h="60px"
                    bg="brand.primary"
                    color="white"
                    fontSize="lg"
                    fontWeight="600"
                    borderRadius="16px"
                    rightIcon={<Icon as={FaPaperPlane} />}
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    isDisabled={Object.keys(formErrors).length > 0}
                    _hover={{
                      bg: 'teal.600',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(0,201,167,0.3)'
                    }}
                    _disabled={{
                      opacity: 0.6,
                      cursor: 'not-allowed'
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </MotionBox>

          {/* Store Locations */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id="store-locations"
          >
            <VStack gap={8} align="stretch" h="full">
              <VStack gap={3} align="start">
                <Text className="heading-2" color="brand.dark">
                  Store Locations
                </Text>
                <Text className="body-medium" color="brand.muted">
                  Visit our outlets across India for the best coconut ice cream experience.
                </Text>
              </VStack>

              <Box
                bg="white"
                borderRadius="24px"
                p={8}
                maxH="600px"
                overflowY="auto"
                boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                className="store-locations-container"
              >
                <VStack gap={4} align="stretch">
                  {storeLocations.map((store, index) => (
                    <MotionBox
                      key={`${store.city}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="store-location-item"
                      p={4}
                      bg="gray.50"
                      borderRadius="16px"
                      _hover={{ bg: 'brand.light' }}
                      cursor="pointer"
                    >
                      <HStack justify="space-between" align="center">
                        <HStack gap={3}>
                          <Icon as={FaStore} color="brand.primary" fontSize="lg" />
                          <VStack gap={0} align="start">
                            <Text fontWeight="600" color="brand.dark" fontSize="sm">
                              {store.location}
                            </Text>
                            <Text color="brand.muted" fontSize="xs">
                              {store.city}
                            </Text>
                          </VStack>
                        </HStack>
                        <Badge
                          bg={
                            store.type === 'flagship' ? 'brand.primary' :
                            store.type === 'premium' ? 'brand.accent' : 'brand.secondary'
                          }
                          color="white"
                          px={2}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          textTransform="capitalize"
                        >
                          {store.type}
                        </Badge>
                      </HStack>
                    </MotionBox>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </SimpleGrid>

        {/* Social Media & Additional Info */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          bg="white"
          borderRadius="32px"
          p={10}
          boxShadow="0 30px 60px rgba(0,0,0,0.1)"
          textAlign="center"
        >
          <VStack gap={8}>
            <VStack gap={3}>
              <Text className="heading-2" color="brand.dark">
                Connect With Us
              </Text>
              <Text className="body-medium" color="brand.muted" maxW="500px">
                Follow us on social media for the latest updates, new flavors, and special offers!
              </Text>
            </VStack>

            <Flex gap={6} justify="center" wrap="wrap">
              {socialMedia.map((social, index) => (
                <Box
                  key={social.name}
                  as="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-block"
                >
                  <MotionBox
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="social-media-link"
                    bg={social.color}
                    color="white"
                    p={4}
                    borderRadius="full"
                    fontSize="xl"
                    _hover={{
                      transform: 'scale(1.2) translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}
                    cursor="pointer"
                    display="inline-block"
                  >
                    <Icon as={social.icon} />
                  </MotionBox>
                </Box>
              ))}
              
              {/* GitHub Repository */}
              <Box
                as="a"
                href="https://github.com/david-one8"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-block"
              >
                <MotionBox
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="social-media-link"
                  bg="#333"
                  color="white"
                  p={4}
                  borderRadius="full"
                  fontSize="xl"
                  _hover={{
                    transform: 'scale(1.2) translateY(-4px)',
                    boxShadow: '0 10px 30px rgba(51, 51, 51, 0.3)'
                  }}
                  cursor="pointer"
                  display="inline-block"
                >
                  <Icon as={FaGithub} />
                </MotionBox>
              </Box>
            </Flex>

            <Divider />

            <VStack gap={2}>
              <Text className="body-large" color="brand.dark" fontWeight="600">
                COCOFIT Mission
              </Text>
              <Text className="body-medium" color="brand.muted" maxW="600px" textAlign="center">
                To deliver the best quality and safe product with reasonable price for all 
                end customers without any added preservatives.
              </Text>
            </VStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Contact
