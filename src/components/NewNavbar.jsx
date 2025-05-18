import { Box, IconButton, useDisclosure, VStack, HStack, Text, Slide, useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function NewNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBg = useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(26, 32, 44, 0.9)');
  const borderColor = useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)');
  const hoverBg = useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)');
  const toggleButtonBg = useColorModeValue('whiteAlpha.800', 'transparent');
  const toggleButtonHoverBg = useColorModeValue('whiteAlpha.900', hoverBg);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Download Resume', href: '/src/assets/Shreesh Hunnur Resume.pdf', download: 'Shreesh Hunnur Resume.pdf' }
  ];

  return (
    <>
      <Box position="fixed" top={4} left={4} zIndex={9999}>
        {!isOpen && (
          <IconButton
            aria-label="Open Menu"
            icon={
              <MotionBox
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <HamburgerIcon boxSize={8} color="whiteAlpha.800" />
              </MotionBox>
            }
            variant="ghost"
            size="lg"
            onClick={onOpen}
            _hover={{ bg: hoverBg }}
            _active={{ bg: hoverBg }}
            borderRadius="md"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor={borderColor}
          />
        )}
      </Box>

      {/* Resume Download Button */}
      <Box position="fixed" top={4} right={4} zIndex={9999}>
        <Button
          leftIcon={<DownloadIcon boxSize={5} />}
          size="lg"
          variant="outline"
          color="white"
          borderColor="whiteAlpha.600"
          borderWidth="2px"
          _hover={{
            bg: 'whiteAlpha.100',
            borderColor: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(255, 255, 200, 0.3)',
            _before: {
              transform: 'translateX(100%)'
            }
          }}
          _active={{
            transform: 'translateY(0)',
            boxShadow: 'none'
          }}
          transition="all 0.3s ease"
          backdropFilter="blur(10px)"
          borderRadius="full"
          fontWeight="semibold"
          letterSpacing="wide"
          px={8}
          py={6}
          fontSize="lg"
          as="a"
          href="/src/assets/Shreesh Hunnur Resume.pdf"
          download="Shreesh Hunnur Resume.pdf"
          textTransform="uppercase"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(255, 255, 200, 0.15), transparent)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease'
          }}
          fontFamily="Audiowide, sans-serif"
        >
          Resume
        </Button>
      </Box>

      <Slide direction="left" in={isOpen} style={{ zIndex: 9998 }}>
        <Box
          w={{ base: '80%', md: '300px' }}
          bg={menuBg}
          backdropFilter="blur(10px)"
          color="white"
          p={8}
          shadow="md"
          h="100vh"
          borderRight="1px solid"
          borderColor={borderColor}
        >
          <HStack justify="space-between" mb={8}>
            <Text fontSize="2xl" fontWeight="bold" bgGradient="linear(to-r, white, whiteAlpha.900)" bgClip="text" fontFamily="Audiowide, sans-serif">&gt;_ Navigate</Text>
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon boxSize={6} color="whiteAlpha.800" />}
              variant="ghost"
              size="md"
              onClick={onClose}
              _hover={{ bg: hoverBg }}
              _active={{ bg: hoverBg }}
            />
          </HStack>
          <VStack as="nav" spacing={4} align="stretch">
            {navItems.map((item) => (
              <Box
                key={item.label}
                as="a"
                href={item.href}
                download={item.download}
                fontSize="xl"
                fontWeight="medium"
                p={3}
                borderRadius="md"
                border="1px solid"
                borderColor={borderColor}
                fontFamily="Audiowide, sans-serif"
                _hover={{ 
                  bg: hoverBg,
                  transform: 'translateX(4px)',
                  borderColor: borderColor
                }}
                transition="all 0.2s"
                textAlign="center"
              >
                {item.label}
              </Box>
            ))}
          </VStack>
          <HStack mt="auto" pt={8} justify="space-between" w="full">
             <Text>
               Toggle Theme
             </Text>
             <IconButton
               onClick={toggleColorMode}
               icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
               aria-label="Toggle theme"
               size="md"
               variant="ghost"
               _hover={{ bg: toggleButtonHoverBg }}
               bg={toggleButtonBg}
             />
           </HStack>
        </Box>
      </Slide>
    </>
  );
} 