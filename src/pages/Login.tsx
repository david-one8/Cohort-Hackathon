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
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebook, FaApple, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

// Demo user credentials
const demoUsers = [
  { email: 'john@cocofit.in', password: 'cocofit123', name: 'John Doe' },
  { email: 'sarah@cocofit.in', password: 'coconut456', name: 'Sarah Smith' },
  { email: 'admin@cocofit.in', password: 'admin123', name: 'Admin User' },
]

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
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
      const user = demoUsers.find(
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
          description: 'Invalid email or password. Try demo: john@cocofit.in / cocofit123',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
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

      <Container maxW="6xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 6 }} minH="100vh" display="flex" alignItems="center">
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
                    Welcome back to
                    <br />
                    India's #1 Coconut Brand
                  </Text>
                  
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="whiteAlpha.800"
                    maxW="400px"
                    lineHeight="1.6"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Sign in to access your account, track orders, and enjoy exclusive 
                    offers on our premium coconut products.
                  </Text>
                </VStack>

                {/* Benefits */}
                <VStack align={{ base: 'center', lg: 'start' }} spacing={3} mt={{ base: 6, md: 8 }}>
                  {[
                    '🎯 Track Your Orders',
                    '💝 Exclusive Member Discounts',
                    '🚚 Free Delivery Updates',
                    '⭐ Earn Loyalty Points'
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

          {/* Right Side - Login Form */}
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
              maxW={{ base: '100%', sm: '400px', md: '450px' }}
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
                    Welcome Back!
                  </Text>
                  <Text color="brand.muted" fontSize={{ base: 'sm', md: 'md' }} className="auth-subtitle">
                    Sign in to your Cocofit account
                  </Text>
                </VStack>

                {/* Social Login */}
                <VStack spacing={3} w="full">
                  <Button
                    w="full"
                    variant="outline"
                    borderColor="gray.200"
                    color="gray.600"
                    leftIcon={<FaGoogle color="#EA4335" />}
                    _hover={{ bg: 'gray.50', borderColor: 'gray.300' }}
                    onClick={() => handleSocialLogin('Google')}
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
                      onClick={() => handleSocialLogin('Facebook')}
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
                    or sign in with email
                  </Text>
                  <Divider />
                </HStack>

                {/* Login Form */}
                <Box as="form" onSubmit={handleSubmit} w="full">
                  <VStack spacing={4}>
                    
                    {/* Email Field */}
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Email Address
                      </FormLabel>
                      <InputGroup className="auth-input-group">
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
                          <FaEnvelope className="auth-input-icon" color="#4D8076" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    {/* Password Field */}
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel color="brand.dark" fontWeight="500">
                        Password
                      </FormLabel>
                      <InputGroup className="auth-input-group">
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

                    {/* Remember Me & Forgot Password */}
                    <HStack justify="space-between" w="full">
                      <Checkbox
                        isChecked={formData.rememberMe}
                        onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                        colorScheme="green"
                        className="auth-checkbox"
                      >
                        <Text fontSize="sm" color="brand.muted">Remember me</Text>
                      </Checkbox>
                      <Link color="brand.primary" fontSize="sm" fontWeight="500">
                        Forgot password?
                      </Link>
                    </HStack>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg="brand.primary"
                      color="white"
                      borderRadius="12px"
                      fontWeight="600"
                      isLoading={isLoading}
                      loadingText="Signing in..."
                      className="auth-submit-button"
                    >
                      Sign In
                    </Button>
                  </VStack>
                </Box>

                {/* Sign Up Link */}
                <HStack spacing={2} justify="center">
                  <Text color="brand.muted" fontSize="sm">
                    Don't have an account?
                  </Text>
                  <Button
                    as={RouterLink}
                    to="/signup"
                    variant="link"
                    color="brand.primary"
                    fontSize="sm"
                    fontWeight="600"
                    _hover={{ textDecoration: 'none', color: '#00B89A' }}
                  >
                    Sign up
                  </Button>
                </HStack>

                {/* Demo Credentials */}
                <Box className="demo-credentials" w="full">
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
              </VStack>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Login
