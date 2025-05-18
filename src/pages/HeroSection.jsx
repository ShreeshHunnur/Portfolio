import { Box, Heading, Text, Button, Stack, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BackgroundBubbles from "./components/BackgroundBubbles";
import FloatingQuote from './components/FloatingQuote';

const greetings = {
  morning: {
    en: "Good Morning",
    hi: "शुभ प्रभात (Shubh Prabhat)",
    es: "Buenos Días",
    ja: "おはようございます (Ohayou Gozaimasu)",
    kn: "ಶುಭೋದಯ (Shubhodaya)",
    mr: "सुप्रभात (Suprabhat)",
  },
  afternoon: {
    en: "Good Afternoon",
    hi: "शुभ दोपहर (Shubh Dopahar)",
    es: "Buenas Tardes",
    ja: "こんにちは (Konnichiwa)",
    kn: "ಶುಭ ಮಧ್ಯಾಹ್ನ (Shubha Madhyahna)",
    mr: "शुभ दुपार (Shubh Dupar)",
  },
  evening: {
    en: "Good Evening",
    hi: "शुभ संध्या (Shubh Sandhya)",
    es: "Buenas Noches", // Also used for evening
    ja: "こんばんは (Konbanwa)",
    kn: "ಶುಭ ಸಂಜೆ (Shubha Sanje)",
    mr: "शुभ संध्याकाळ (Shubh Sandhyakal)",
  },
  night: {
    en: "Good Night",
    hi: "शुभ रात्रि (Shubh Ratri)",
    es: "Buenas Noches",
    ja: "おやすみなさい (Oyasuminasai)",
    kn: "ಶುಭ ರಾತ್ರಿ (Shubha Ratri)",
    mr: "शुभ रात्री (Shubh Ratri)",
  },
};

const languages = Object.keys(greetings.morning); // Get language codes

function HeroSection() {
  const texts = [
    "Hi, I'm Shreesh",
    "Web Developer",
    "AI/ML Enthusiast",
    "UI/UX Designer",
    "Problem Solver"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // State and Effect for GreetingDisplay
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setTypingSpeed(100);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, typingSpeed]);

  // Effect for GreetingDisplay
  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      let timeOfDay;
      if (hour < 12) {
        timeOfDay = 'morning';
      } else if (hour < 17) {
        timeOfDay = 'afternoon';
      } else if (hour < 21) {
        timeOfDay = 'evening';
      } else {
        timeOfDay = 'night';
      }

      const lang = languages[currentLanguageIndex];
      setCurrentGreeting(greetings[timeOfDay][lang]);
    };

    updateGreeting(); // Initial display

    const languageInterval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000); // Change language every 3 seconds

    const timeInterval = setInterval(() => {
      // Update greeting if time of day changes
      const now = new Date();
      const hour = now.getHours();
      let timeOfDay;
      if (hour < 12) {
        timeOfDay = 'morning';
      } else if (hour < 17) {
        timeOfDay = 'afternoon';
      } else if (hour < 21) {
        timeOfDay = 'evening';
      } else {
        timeOfDay = 'night';
      }
      const lang = languages[currentLanguageIndex]; // Use current language index
      setCurrentGreeting(greetings[timeOfDay][lang]);
    }, 60000); // Check time of day every minute

    return () => {
      clearInterval(languageInterval);
      clearInterval(timeInterval);
    };

  }, [currentLanguageIndex]); // Rerun effect when language index changes

  return (
    <Box 
      as="section" 
      h="100vh"
      position="relative"
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      flexDir="column" 
      bg="transparent"
      py={0}
      m={0}
      mb={32}
      overflow="hidden"
    >
      <BackgroundBubbles />
      <FloatingQuote position="absolute" top="0" left="50%" transform="translateX(-50%)" mt={4} />
      
      <Container 
        maxW="container.lg" 
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <Box position="relative" display="inline-block">
          <Heading 
            as="h1" 
            size="4xl" 
            color="white" 
            mb={6}
            fontWeight="extrabold"
            letterSpacing="tight"
            minH="120px"
            fontFamily="Audiowide, sans-serif"
            bgGradient="linear(to-r, white, whiteAlpha.900)"
            bgClip="text"
            position="relative"
            zIndex={2}
          >
            {displayedText}
            <span style={{
              display: 'inline-block',
              width: '1ch',
              animation: 'blink 1s steps(1) infinite',
              color: 'white',
              marginLeft: '2px'
            }}>_</span>
          </Heading>
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            background="radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)"
            animation="subtleShimmer 3s ease-in-out infinite alternate"
            zIndex={1}
            pointerEvents="none"
          />
        </Box>
        <Text 
          fontSize="2xl" 
          color="whiteAlpha.900" 
          mb={10}
          maxW="container.md"
          mx="auto"
          fontFamily="Audiowide, sans-serif"
          letterSpacing="wide"
          animation="float 6s ease-in-out infinite"
          _hover={{
            transform: "scale(1.05)"
          }}
          transition="transform 0.3s ease"
          sx={{
            '@keyframes float': {
              '0%': {
                transform: 'translateY(0px)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
              '100%': {
                transform: 'translateY(0px)',
              },
            },
          }}
        >
          Turning ideas into reality, one code at a time.
        </Text>

        <Stack direction="row" spacing={6} justify="center">
          <Button 
            size="lg" 
            px={8} 
            py={7} 
            fontSize="lg"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bg: 'whiteAlpha.800'
            }}
            transition="all 0.3s ease"
            bg="whiteAlpha.900"
            color="gray.800"
            fontFamily="Audiowide, sans-serif"
            borderRadius="full"
            fontWeight="bold"
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            px={8} 
            py={7} 
            fontSize="lg"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bg: 'whiteAlpha.200',
              borderColor: 'whiteAlpha.800'
            }}
            transition="all 0.3s ease"
            borderColor="whiteAlpha.500"
            color="white"
            fontFamily="Audiowide, sans-serif"
            borderRadius="full"
            fontWeight="bold"
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </Button>
        </Stack>

        {/* Removed Greeting Display from here */}
      
      </Container>
      {/* Moved Greeting Box outside Container but still within HeroSection Box */}
      <Box
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        zIndex="9999"
        p={4} // Keep padding for spacing from corner
        textAlign="center"
        color="white"
        fontSize="2xl"
        m={4} // Keep margin for spacing from edge
        pointerEvents="none" // Allow clicks to pass through
      >
        <Text fontWeight="bold" fontFamily="Audiowide, sans-serif">{currentGreeting}</Text>
      </Box>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes subtleShimmer {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.2; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
      `}</style>
    </Box>
  );
}

export default HeroSection;