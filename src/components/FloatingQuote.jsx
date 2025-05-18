import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const quotes = [
  "The best way to predict the future is to create it.",
  "Believe you can and you're halfway there.",
  "Strive not to be a success, but rather to be of value.",
  "Your time is limited, don't waste it living someone else's life.",
  "The only way to do great work is to love what you do."
];

function FloatingQuote() {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    // Display a random quote initially
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const intervalId = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Box
      position="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      zIndex="9999"
      textAlign="center"
      color="white"
      maxW="90%"
      width="fit-content"
      mt={4}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        textShadow="0 0 10px rgba(255, 255, 255, 0.5)"
        animation="slideFadeIn 0.5s ease-out forwards"
        key={currentQuote}
        fontFamily="Audiowide, sans-serif"
      >
        ✨ {currentQuote} ✨
      </Text>
      <style>{`
        @keyframes slideFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}

export default FloatingQuote; 