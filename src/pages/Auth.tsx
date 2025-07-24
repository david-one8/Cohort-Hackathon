import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGoogle, FaFacebook, FaApple, FaUser, FaEnvelope, FaLock, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

// Dummy user data for validation
const dummyUsers = [
  { email: 'john@cocofit.in', password: 'cocofit123', name: 'John Doe', phone: '+91 9876543210' },
  { email: 'sarah@cocofit.in', password: 'coconut456', name: 'Sarah Smith', phone: '+91 9876543211' },
  { email: 'admin@cocofit.in', password: 'admin123', name: 'Admin User', phone: '+91 9876543212' },
]

const Auth = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Sign up specific validations
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required'
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required'
      } else if (!/^\+91\s\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be in format: +91 1234567890'
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'Please agree to terms and conditions'
      }
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
      if (isLogin) {
        // Check login credentials
        const user = dummyUsers.find(
          u => u.email === formData.email && u.password === formData.password
        )
        if (user) {
          toast({
            title: 'Login Successful!',
            description: `Welcome back, ${user.name}!`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          // Redirect to home page after successful login
          setTimeout(() => {
            navigate('/')
          }, 1000)
        } else {
          toast({
            title: 'Login Failed',
            description: 'Invalid email or password. Try: john@cocofit.in / cocofit123',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      } else {
        // Sign up success
        toast({
          title: 'Account Created!',
          description: 'Welcome to Cocofit! Please check your email for verification.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        // Redirect to home page after successful signup
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `${provider} authentication would be integrated here`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  const switchMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      agreeTerms: false,
    })
    setErrors({})
  }

  return (
    <Box minH="100vh" bg="linear-gradient(135deg, #00C9A7 0%, #845EC2 100%)" position="relative">
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
        <Grid 
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }} 
          gap={{ base: 6, md: 8 }} 
          w="full" 
          alignItems="center"
          className="grid-container"
        >
          
          {/* Left Side - Branding */}
          <GridItem order={{ base: 2, lg: 1 }} className="auth-branding">
            <MotionVStack
              spacing={8}
              align="start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
                <VStack spacing={{ base: 6, md: 8 }} align="start">
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
                    India's First Coconut-Based
                    <br />
                    Ice Cream & Beverage Brand
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="whiteAlpha.800"
                    maxW="400px"
                    lineHeight="1.6"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Join thousands of health-conscious food lovers who choose our premium, 
                    natural coconut products for a healthier lifestyle.
                  </Text>
                </VStack>

              {/* Features */}
              <VStack align={{ base: 'center', lg: 'start' }} spacing={3} mt={{ base: 6, md: 8 }}>
                {[
                  '🌱 100% Natural & Organic',
                  '🏥 Health-Tech Approved',
                  '🚚 Free Home Delivery',
                  '⭐ 4.9/5 Customer Rating'
                ].map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="feature-item"
                  >
                    <Text color="white" fontSize={{ base: 'sm', md: 'md' }} fontWeight="500">
                      {feature}
                    </Text>
                  </MotionBox>
                ))}
              </VStack>
            </MotionVStack>
          </GridItem>

          {/* Right Side - Auth Form */}
          <GridItem order={{ base: 1, lg: 2 }} className="auth-form">
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
                    {isLogin ? 'Welcome Back!' : 'Create Account'}
                  </Text>
                  <Text color="brand.muted" fontSize={{ base: 'sm', md: 'md' }} className="auth-subtitle">
                    {isLogin 
                      ? 'Sign in to your Cocofit account' 
                      : 'Join the healthy coconut revolution'
                    }
                  </Text>
                </VStack>

                {/* Social Login Buttons */}
                <VStack spacing={3} w="full" className="auth-social-buttons">
                  <Button
                    w="full"
                    variant="outline"
                    borderColor="gray.200"
                    color="gray.600"
                    leftIcon={<FaGoogle color="#EA4335" />}
                    _hover={{ bg: 'gray.50', borderColor: 'gray.300' }}
                    onClick={() => handleSocialLogin('Google')}
                    size={{ base: 'md', md: 'lg' }}
                    className="social-button"
                  >
                    Continue with Google
                  </Button>
                  
                  <HStack w="full" spacing={{ base: 2, md: 3 }} className="auth-social-buttons">
                    <Button
                      flex={1}
                      variant="outline"
                      borderColor="gray.200"
                      color="gray.600"
                      leftIcon={<FaFacebook color="#1877F2" />}
                      _hover={{ bg: 'gray.50' }}
                      onClick={() => handleSocialLogin('Facebook')}
                      size={{ base: 'sm', md: 'md' }}
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
                      onClick={() => handleSocialLogin('Apple')}
                      size={{ base: 'sm', md: 'md' }}
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
                    or continue with email
                  </Text>
                  <Divider />
                </HStack>

                {/* Form */}
                <Box as="form" onSubmit={handleSubmit} w="full">
                  <VStack spacing={4}>
                    
                    <AnimatePresence mode="wait">
                      {!isLogin && (
                        <MotionBox
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          w="full"
                        >
                          <VStack spacing={4}>
                            {/* Name Field */}
                            <FormControl isInvalid={!!errors.name}>
                              <FormLabel color="brand.dark" fontWeight="500">
                                Full Name
                              </FormLabel>
                              <InputGroup>
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
                                  <FaUser color="#4D8076" />
                                </InputRightElement>
                              </InputGroup>
                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>

                            {/* Phone Field */}
                            <FormControl isInvalid={!!errors.phone}>
                              <FormLabel color="brand.dark" fontWeight="500">
                                Phone Number
                              </FormLabel>
                              <InputGroup>
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
                                  <FaPhone color="#4D8076" />
                                </InputRightElement>
                              </InputGroup>
                              <FormErrorMessage>{errors.phone}</FormErrorMessage>
                            </FormControl>
                          </VStack>
                        </MotionBox>
                      )}
                    </AnimatePresence>

                    {/* Email Field */}
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Email Address
                      </FormLabel>
                      <InputGroup>
                        <Input
                          type="email"
                          placeholder="john@cocofit.in"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          borderRadius="12px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'brand.primary' }}
                          _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px #00C9A7' }}
                          pl="12"
                        />
                        <InputRightElement>
                          <FaEnvelope color="#4D8076" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    {/* Password Field */}
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
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
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <AnimatePresence mode="wait">
                      {!isLogin && (
                        <MotionBox
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          w="full"
                        >
                          {/* Confirm Password Field */}
                          <FormControl isInvalid={!!errors.confirmPassword}>
                            <FormLabel color="brand.dark" fontWeight="500">
                              Confirm Password
                            </FormLabel>
                            <InputGroup>
                              <Input
                                type="password"
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
                                <FaLock color="#4D8076" />
                              </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                          </FormControl>
                        </MotionBox>
                      )}
                    </AnimatePresence>

                    {/* Checkboxes */}
                    <VStack spacing={3} w="full" align="start">
                      {isLogin ? (
                        <HStack justify="space-between" w="full">
                          <Checkbox
                            isChecked={formData.rememberMe}
                            onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                            colorScheme="green"
                          >
                            <Text fontSize="sm" color="brand.muted">Remember me</Text>
                          </Checkbox>
                          <Link color="brand.primary" fontSize="sm" fontWeight="500">
                            Forgot password?
                          </Link>
                        </HStack>
                      ) : (
                        <FormControl isInvalid={!!errors.agreeTerms}>
                          <Checkbox
                            isChecked={formData.agreeTerms}
                            onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                            colorScheme="green"
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
                      )}
                    </VStack>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg="brand.primary"
                      color="white"
                      borderRadius="12px"
                      fontWeight="600"
                      isLoading={isLoading}
                      loadingText={isLogin ? 'Signing in...' : 'Creating account...'}
                      _hover={{
                        bg: '#00B89A',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0, 201, 167, 0.3)',
                      }}
                      _active={{ transform: 'translateY(0px)' }}
                      transition="all 0.3s ease"
                    >
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                  </VStack>
                </Box>

                {/* Switch Mode */}
                <HStack spacing={2} justify="center">
                  <Text color="brand.muted" fontSize="sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </Text>
                  <Button
                    variant="link"
                    color="brand.primary"
                    fontSize="sm"
                    fontWeight="600"
                    onClick={switchMode}
                    _hover={{ textDecoration: 'none', color: '#00B89A' }}
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </Button>
                </HStack>

                {/* Demo Credentials */}
                {isLogin && (
                  <Box
                    bg="brand.light"
                    p={4}
                    borderRadius="12px"
                    border="1px solid"
                    borderColor="gray.200"
                    w="full"
                  >
                    <Text fontSize="sm" fontWeight="600" color="brand.dark" mb={2}>
                      Demo Credentials:
                    </Text>
                    <VStack spacing={1} align="start">
                      <Text fontSize="xs" color="brand.muted">
                        Email: john@cocofit.in | Password: cocofit123
                      </Text>
                      <Text fontSize="xs" color="brand.muted">
                        Email: admin@cocofit.in | Password: admin123
                      </Text>
                    </VStack>
                  </Box>
                )}
              </VStack>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Auth
