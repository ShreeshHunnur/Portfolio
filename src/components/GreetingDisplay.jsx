import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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

function GreetingDisplay() {
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

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
      position="fixed"
      top="50%"
      left="0"
      transform="translateY(-50%)"
      zIndex="9999"
      p={4} // Keep padding for spacing from corner
      textAlign="left"
      color="white"
      fontSize="xl"
      m={4} // Keep margin for spacing from edge
      pointerEvents="none" // Allow clicks to pass through
    >
      <Text fontWeight="bold">{currentGreeting}</Text>
    </Box>
  );
}

export default GreetingDisplay; 