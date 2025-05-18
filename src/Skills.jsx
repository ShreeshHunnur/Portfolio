import { Box, Heading, Text, Container, Image, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import BackgroundBubbles from "./components/BackgroundBubbles";
import PowerBILogo from "./assets/powerbi.png";
import WokwiLogo from "./assets/wokwi.png";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "AI/ML",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" },
      { name: "Seaborn", logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
      { name: "Scikit-learn", logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
    ]
  },
  {
    title: "Data Science",
    skills: [
      { name: "PowerBI", logo: PowerBILogo },
      { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" }
    ]
  },
  {
    title: "Embedded Systems",
    skills: [
      { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Tinkercad", logo: "https://www.tinkercad.com/favicon.ico" },
      { name: "Wokwi", logo: WokwiLogo }
    ]
  }
];

function Skills() {
  const scrollContainerRef = useRef(null);
  const glowColor = useColorModeValue("teal.400", "teal.300");

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value based on your needs
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      as="section" 
      id="skills" 
      py={24}
      px={6}
      mt={32}
      mb={32}
      position="relative"
    >
      <BackgroundBubbles />
      <Container maxW="container.full" px={{ base: 4, md: 8, lg: 12 }}>
        <Heading 
          as="h2" 
          size="2xl" 
          mb={16} 
          textAlign="center"
          position="relative"
          color="white"
          fontFamily="Audiowide, sans-serif"
          textShadow="0 0 20px rgba(49, 130, 206, 0.5), 0 0 40px rgba(49, 130, 206, 0.3)"
          _after={{
            content: '""',
            width: '40px',
            height: '4px',
            backgroundColor: 'teal.400',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: "width 0.3s ease",
            boxShadow: "0 0 20px rgba(49, 130, 206, 0.5)"
          }}
          _hover={{
            _after: {
              width: '100px'
            }
          }}
        >
          Technical Skills
        </Heading>

        <Box position="relative" px={16}>
          <IconButton
            icon={<ChevronLeftIcon boxSize={8} />}
            position="absolute"
            left="-4"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => scroll('left')}
            zIndex={2}
            bg="transparent"
            _hover={{ bg: "transparent", transform: "translateY(-50%) scale(1.1)" }}
            color="white"
            size="lg"
            boxShadow="none"
            transition="all 0.2s ease"
          />
          
          <Flex
            ref={scrollContainerRef}
            overflowX="auto"
            gap={8}
            py={4}
            px={2}
            maxW="calc(100vw - 200px)"
            mx="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <Box
                key={categoryIndex}
                minW="450px"
                maxW="450px"
                flex="0 0 auto"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                p={8}
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                _hover={{
                  boxShadow: '0 0 30px rgba(49, 130, 206, 0.2)',
                  borderColor: 'teal.400'
                }}
                transition="all 0.3s ease"
              >
                <Heading 
                  as="h3" 
                  size="xl" 
                  mb={8} 
                  color="white"
                  textAlign="center"
                  fontSize="2xl"
                  fontFamily="Audiowide, sans-serif"
                >
                  {category.title}
                </Heading>
                <Flex direction="column" gap={6}>
                  {category.skills.map((skill, skillIndex) => (
                    <Flex
                      key={skillIndex}
                      align="center"
                      gap={6}
                      p={4}
                      bg="rgba(255, 255, 255, 0.05)"
                      borderRadius="lg"
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.1)",
                        transform: 'translateX(5px)'
                      }}
                      transition="all 0.3s ease"
                    >
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        boxSize="40px"
                        objectFit="contain"
                      />
                      <Text 
                        color="white" 
                        fontWeight="medium"
                        fontSize="lg"
                      >
                        {skill.name}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>

          <IconButton
            icon={<ChevronRightIcon boxSize={8} />}
            position="absolute"
            right="-4"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => scroll('right')}
            zIndex={2}
            bg="transparent"
            _hover={{ bg: "transparent", transform: "translateY(-50%) scale(1.1)" }}
            color="white"
            size="lg"
            boxShadow="none"
            transition="all 0.2s ease"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Skills; 