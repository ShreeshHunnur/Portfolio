import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDayTime, setFormattedDayTime] = useState("");

  const [typedDate, setTypedDate] = useState("");
  const [typedDayTime, setTypedDayTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format Date as "1st January 2025"
      const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatterDate = new Intl.DateTimeFormat('en-US', optionsDate);
      const parts = formatterDate.formatToParts(now);
      
      const day = parts.find(part => part.type === 'day').value;
      const month = parts.find(part => part.type === 'month').value;
      const year = parts.find(part => part.type === 'year').value;

      let daySuffix;
      if (day === '1' || day === '21' || day === '31') {
        daySuffix = 'st';
      } else if (day === '2' || day === '22') {
        daySuffix = 'nd';
      } else if (day === '3' || day === '23') {
        daySuffix = 'rd';
      } else {
        daySuffix = 'th';
      }

      const dateString = `${day}${daySuffix} ${month} ${year}`;
      setFormattedDate(dateString);

      // Get Day and Time (HH:MM AM/PM)
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = days[now.getDay()];
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // 12-hour format
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

      setFormattedDayTime(`${dayOfWeek}, ${timeString}`);
    };

    updateDateTime(); // Update initially
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  // Typewriter effect for Date (Right to Left)
  useEffect(() => {
    if (!formattedDate) return;

    let i = formattedDate.length;
    setTypedDate(""); // Clear previous text

    const typingInterval = setInterval(() => {
      if (i >= 0) {
        setTypedDate(formattedDate.slice(i));
        i--;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [formattedDate]);

  // Typewriter effect for Day and Time (Right to Left)
  useEffect(() => {
    if (!formattedDayTime) return;

    let i = formattedDayTime.length;
    setTypedDayTime(""); // Clear previous text

    const typingInterval = setInterval(() => {
      if (i >= 0) {
        setTypedDayTime(formattedDayTime.slice(i));
        i--;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [formattedDayTime]);

  return (
    <Box
      position="fixed"
      bottom="0"
      right="0"
      zIndex="9999"
      p={4} // Keep padding for spacing from corner
      // Removed background, backdropFilter, borderRadius
      textAlign="right"
      color="white"
      m={4} // Keep margin for spacing from edge
      pointerEvents="none" // Allow clicks to pass through
    >
      <Text fontSize="lg" fontWeight="bold">{typedDate}</Text>
      <Text fontSize="md">{typedDayTime}</Text>
    </Box>
  );
}

export default DateTimeDisplay; 