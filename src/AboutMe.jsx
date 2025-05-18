import { Box, Heading, Text, Stack, Container, Flex, VStack, useColorModeValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BackgroundBubbles from "./components/BackgroundBubbles";
import ProfileImg from "./assets/Profile_img.jpg";

const MotionBox = motion(Box);

function AboutMe() {
  const glowColor = useColorModeValue("teal.400", "teal.300");

  return (
    <Box 
      as="section" 
      id="about" 
      py={24}
      px={6}
      mt={32}
      mb={32}
      position="relative"
    >
      <BackgroundBubbles />
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={12}>
          <Box flexShrink={0} textAlign="center" w={{ base: '100%', md: '45%' }}>
            <Image
              src={ProfileImg}
              alt="Shreesh Profile"
              w="100%"
              maxW="350px"
              h="auto"
              borderRadius="xl"
              boxShadow="0 0 40px 10px rgba(255, 255, 255, 0.6)"
              border="6px solid"
              borderColor="whiteAlpha.800"
              mx="auto"
              mb={{ base: 8, md: 0 }}
              objectFit="cover"
              _hover={{
                transform: 'scale(1.15)'
              }}
              transition="transform 0.3s ease-in-out"
            />
          </Box>
          <VStack align="start" spacing={8} flex={1}>
            <Box textAlign={{ base: "center", md: "left" }} w="full">
              <Heading 
                as="h2" 
                size="2xl" 
                mb={6}
                color="white"
                fontFamily="Audiowide, sans-serif"
                textShadow="0 0 20px rgba(49, 130, 206, 0.5), 0 0 40px rgba(49, 130, 206, 0.3)"
                position="relative"
                _after={{
                  content: '""',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'teal.400',
                  position: 'absolute',
                  bottom: '-10px',
                  left: { base: '50%', md: '0' },
                  transform: { base: 'translateX(-50%)', md: 'none' },
                  transition: "width 0.3s ease",
                  boxShadow: "0 0 20px rgba(49, 130, 206, 0.5)"
                }}
                _hover={{
                  _after: {
                    width: '100px'
                  }
                }}
              >
                About Me
              </Heading>
              <Text 
                fontSize="xl" 
                textAlign={{ base: "center", md: "left" }}
                maxW="container.sm"
                mx={{ base: "auto", md: "0" }}
                lineHeight="tall"
                color="white"
                textShadow="0 0 10px rgba(0, 0, 0, 0.3)"
              >
                Hi, I'm Shreesh a passionate developer proficient in web development, AI, and data science. Constantly learning and evolving, I thrive on adapting to new challenges and technologies. As a team player, I excel in collaborative environments, delivering innovative and efficient solutions. With a strong foundation in crafting impactful digital experiences and harnessing the power of data, I'm driven to make a meaningful impact through technology. Let's build something extraordinary together!
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default AboutMe;