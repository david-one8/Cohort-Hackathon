import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface MenuIconProps {
  isOpen: boolean
  color?: string
  size?: string
}

const MenuIcon = ({ isOpen, color = "currentColor", size = "24px" }: MenuIconProps) => {
  return (
    <Box
      width={size}
      height={size}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top line */}
        <motion.path
          d="M4 6h16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isOpen ? { 
            rotate: 45, 
            y: 6,
            opacity: 1
          } : { 
            rotate: 0, 
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Middle line */}
        <motion.path
          d="M4 12h16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isOpen ? { 
            opacity: 0,
            x: -10
          } : { 
            opacity: 1,
            x: 0
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        
        {/* Bottom line */}
        <motion.path
          d="M4 18h16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isOpen ? { 
            rotate: -45, 
            y: -6,
            opacity: 1
          } : { 
            rotate: 0, 
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </Box>
  )
}

export default MenuIcon
