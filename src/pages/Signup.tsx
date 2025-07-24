import { useState } from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  useToast,
  Checkbox,
  Link,
  Grid,
  GridItem,
  Progress,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebook, FaApple, FaUser, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    subscribeNewsletter: true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const toast = useToast()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }

    // Calculate password strength
    if (field === 'password' && typeof value === 'string') {
      calculatePasswordStrength(value)
    }
  }

  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 6) strength += 25
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    setPasswordStrength(strength)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 50) return 'red.400'
    if (passwordStrength < 75) return 'yellow.400'
    return 'green.400'
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength < 50) return 'Weak'
    if (passwordStrength < 75) return 'Medium'
    return 'Strong'
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+91\s\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in format: +91 1234567890'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Please agree to terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Account Created Successfully!',
        description: `Welcome to Cocofit, ${formData.name}! Please check your email for verification.`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      setIsLoading(false)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        subscribeNewsletter: true,
      })
      setPasswordStrength(0)
    }, 2000)
  }

  const handleSocialSignup = (provider: string) => {
    toast({
      title: `${provider} Signup`,
      description: `${provider} registration would be integrated here`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box minH="100vh" bg="linear-gradient(135deg, #845EC2 0%, #00C9A7 100%)" position="relative">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      />

      <Container maxW="7xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 6 }} minH="100vh" display="flex" alignItems="center">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 6, md: 8 }} w="full" alignItems="center">
          
          {/* Left Side - Branding */}
          <GridItem order={{ base: 2, lg: 1 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VStack spacing={{ base: 6, md: 8 }} align={{ base: 'center', lg: 'start' }}>
                <VStack align={{ base: 'center', lg: 'start' }} spacing={4}>
                  <HStack spacing={3}>
                    <Text fontSize={{ base: '3xl', md: '4xl' }}>🥥</Text>
                    <Text
                      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                      fontWeight="bold"
                      color="white"
                      fontFamily="'Clash Display', sans-serif"
                    >
                      Cocofit
                    </Text>
                  </HStack>
                  
                  <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    color="whiteAlpha.900"
                    fontWeight="500"
                    lineHeight="1.3"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Join the Coconut
                    <br />
                    Health Revolution
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="whiteAlpha.800"
                    maxW="400px"
                    lineHeight="1.6"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Create your Cocofit account and become part of India's largest 
                    health-conscious community. Unlock exclusive benefits today!
                  </Text>
                </VStack>

                {/* Benefits */}
                <VStack align={{ base: 'center', lg: 'start' }} spacing={3} mt={{ base: 6, md: 8 }}>
                  {[
                    '🎁 Welcome Bonus: 20% Off First Order',
                    '🏆 VIP Member Benefits & Rewards',
                    '📱 Early Access to New Products',
                    '💫 Personalized Health Recommendations'
                  ].map((benefit, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Text color="white" fontSize={{ base: 'sm', md: 'md' }} fontWeight="500">
                        {benefit}
                      </Text>
                    </MotionBox>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          </GridItem>

          {/* Right Side - Signup Form */}
          <GridItem order={{ base: 1, lg: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              bg="white"
              borderRadius={{ base: '20px', md: '24px' }}
              p={{ base: 5, sm: 6, md: 8 }}
              boxShadow="0 20px 60px rgba(0,0,0,0.1)"
              backdropFilter="blur(20px)"
              border="1px solid rgba(255,255,255,0.2)"
              maxW={{ base: '100%', sm: '450px', md: '500px' }}
              mx="auto"
              w="full"
              className="auth-form-container"
            >
              <VStack spacing={{ base: 5, md: 6 }}>
                {/* Header */}
                <VStack spacing={2} textAlign="center">
                  <Text
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="bold"
                    color="brand.dark"
                    fontFamily="'Clash Display', sans-serif"
                    className="auth-title"
                  >
                    Create Your Account
                  </Text>
                  <Text color="brand.muted" fontSize={{ base: 'sm', md: 'md' }} className="auth-subtitle">
                    Join thousands of health enthusiasts
                  </Text>
                </VStack>

                {/* Social Signup */}
                <VStack spacing={3} w="full">
                  <Button
                    w="full"
                    variant="outline"
                    borderColor="gray.200"
                    color="gray.600"
                    leftIcon={<FaGoogle color="#EA4335" />}
                    _hover={{ bg: 'gray.50', borderColor: 'gray.300' }}
                    onClick={() => handleSocialSignup('Google')}
                    className="social-button"
                  >
                    Continue with Google
                  </Button>
                  
                  <HStack w="full" spacing={3}>
                    <Button
                      flex={1}
                      variant="outline"
                      borderColor="gray.200"
                      color="gray.600"
                      leftIcon={<FaFacebook color="#1877F2" />}
                      _hover={{ bg: 'gray.50' }}
                      onClick={() => handleSocialSignup('Facebook')}
                      className="social-button"
                    >
                      Facebook
                    </Button>
                    <Button
                      flex={1}
                      variant="outline"
                      borderColor="gray.200"
                      color="gray.600"
                      leftIcon={<FaApple color="#000000" />}
                      _hover={{ bg: 'gray.50' }}
                      onClick={() => handleSocialSignup('Apple')}
                      className="social-button"
                    >
                      Apple
                    </Button>
                  </HStack>
                </VStack>

                {/* Divider */}
                <HStack w="full" spacing={4}>
                  <Divider />
                  <Text color="gray.500" fontSize="sm" whiteSpace="nowrap">
                    or create with email
                  </Text>
                  <Divider />
                </HStack>

                {/* Signup Form */}
                <Box as="form" onSubmit={handleSubmit} w="full">
                  <VStack spacing={4}>
                    
                    {/* Name Field */}
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Full Name
                      </FormLabel>
                      <InputGroup className="auth-input-group">
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <FaUser className="auth-input-icon" color="#4D8076" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    {/* Email Field */}
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Email Address
                      </FormLabel>
                      <InputGroup className="auth-input-group">
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <FaEnvelope className="auth-input-icon" color="#4D8076" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    {/* Phone Field */}
                    <FormControl isInvalid={!!errors.phone}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Phone Number
                      </FormLabel>
                      <InputGroup className="auth-input-group">
                        <Input
                          placeholder="+91 1234567890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <FaPhone className="auth-input-icon" color="#4D8076" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>

                    {/* Password Field */}
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Password
                      </FormLabel>
                      <InputGroup className="auth-input-group">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                            variant="ghost"
                            onClick={() => setShowPassword(!showPassword)}
                            color="brand.muted"
                          />
                        </InputRightElement>
                      </InputGroup>
                      {formData.password && (
                        <VStack align="start" spacing={1} mt={2}>
                          <Progress
                            value={passwordStrength}
                            size="sm"
                            colorScheme={passwordStrength < 50 ? 'red' : passwordStrength < 75 ? 'yellow' : 'green'}
                            bg="gray.200"
                            borderRadius="full"
                          />
                          <Text fontSize="xs" color={getPasswordStrengthColor()}>
                            Password strength: {getPasswordStrengthText()}
                          </Text>
                        </VStack>
                      )}
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    {/* Confirm Password Field */}
                    <FormControl isInvalid={!!errors.confirmPassword}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Confirm Password
                      </FormLabel>
                      <InputGroup className="auth-input-group">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <IconButton
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            variant="ghost"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            color="brand.muted"
                          />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                    </FormControl>

                    {/* Checkboxes */}
                    <VStack spacing={3} w="full" align="start">
                      <FormControl isInvalid={!!errors.agreeTerms}>
                        <Checkbox
                          isChecked={formData.agreeTerms}
                          onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                          colorScheme="green"
                          className="auth-checkbox"
                        >
                          <Text fontSize="sm" color="brand.muted">
                            I agree to the{' '}
                            <Link color="brand.primary" fontWeight="500">Terms of Service</Link>
                            {' '}and{' '}
                            <Link color="brand.primary" fontWeight="500">Privacy Policy</Link>
                          </Text>
                        </Checkbox>
                        <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
                      </FormControl>

                      <Checkbox
                        isChecked={formData.subscribeNewsletter}
                        onChange={(e) => handleInputChange('subscribeNewsletter', e.target.checked)}
                        colorScheme="green"
                        className="auth-checkbox"
                      >
                        <Text fontSize="sm" color="brand.muted">
                          Subscribe to our newsletter for exclusive offers and health tips
                        </Text>
                      </Checkbox>
                    </VStack>

                    {/* Signup Button */}
                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg="brand.primary"
                      color="white"
                      borderRadius="12px"
                      fontWeight="600"
                      isLoading={isLoading}
                      loadingText="Creating account..."
                      className="auth-submit-button"
                    >
                      Create Account
                    </Button>
                  </VStack>
                </Box>

                {/* Login Link */}
                <HStack spacing={2} justify="center">
                  <Text color="brand.muted" fontSize="sm">
                    Already have an account?
                  </Text>
                  <Button
                    as={RouterLink}
                    to="/login"
                    variant="link"
                    color="brand.primary"
                    fontSize="sm"
                    fontWeight="600"
                    _hover={{ textDecoration: 'none', color: '#00B89A' }}
                  >
                    Sign in
                  </Button>
                </HStack>
              </VStack>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Signup
