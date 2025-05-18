import { Box, Heading, Stack, Input, Textarea, Button, useToast, Container, FormControl, FormLabel, InputGroup, InputLeftElement, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import BackgroundBubbles from "./components/BackgroundBubbles";
import Typewriter from 'typewriter-effect';

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const toast = useToast();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast({ 
      title: "Message sent!", 
      description: "I'll get back to you as soon as possible.",
      status: "success", 
      duration: 5000, 
      isClosable: true 
    });
    setForm({ name: "", email: "", message: "" });
  };

  const messages = [
    "Thanks for visiting my portfolio — it means a lot to me!",
    "I hope you found a spark of inspiration, curiosity, or creativity here.",
    "If something caught your eye, let's connect — I'd love to hear from you.",
    "I'm always up for building, brainstorming, or just chatting over coffee ☕",
    "'The best way to predict the future is to create it.' — Let's create it together."
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/shreesh-hunnur",
      color: "#0077B5"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/shreesh_h/",
      color: "#E4405F"
    },
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/ShreeshHunnur",
      color: "#000000"
    }
  ];

  return (
    <Box 
      as="section" 
      id="contact" 
      py={24}
      px={6}
      mt={32}
      mb={32}
      position="relative"
    >
      <BackgroundBubbles />
      <Container maxW="container.xl" position="relative" zIndex={1}>
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
          Let's Connect
        </Heading>

        <Flex 
          gap={8} 
          direction={{ base: "column", lg: "row" }}
          align="stretch"
          maxW="1400px"
          mx="auto"
        >
          {/* Social Links Section - Left Column */}
          <Box 
            flex="1"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Stack spacing={8} align="center">
              <Text color="white" fontSize="2xl" fontWeight="medium" fontFamily="Audiowide, sans-serif">
                Connect with me
              </Text>
              <Stack spacing={6} width="100%">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    isExternal
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    width="100%"
                  >
                    <Flex
                      direction="row"
                      align="center"
                      gap={4}
                      p={4}
                      borderRadius="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.1)",
                        boxShadow: `0 0 20px ${social.color}40`
                      }}
                    >
                      <Icon
                        as={social.icon}
                        w={8}
                        h={8}
                        color={social.color}
                      />
                      <Text color="white" fontSize="lg" fontFamily="Audiowide, sans-serif">
                        {social.name}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Stack>
              <Link
                href="mailto:work.shreesh1060@gmail.com"
                color="teal.400"
                fontSize="xl"
                fontWeight="medium"
                fontFamily="Audiowide, sans-serif"
                _hover={{ color: "teal.300" }}
                display="flex"
                alignItems="center"
                gap={3}
                mt={4}
              >
                <EmailIcon boxSize={6} />
                work.shreesh1060@gmail.com
              </Link>
            </Stack>
          </Box>

          {/* Contact Form - Right Column */}
          <Box 
            flex="1"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            p={10} 
            borderRadius="xl" 
            boxShadow="xl"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            _hover={{
              boxShadow: "0 0 30px rgba(49, 130, 206, 0.2)"
            }}
            transition="all 0.3s ease"
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={6}>
                <FormControl isRequired>
                  <FormLabel color="white" fontFamily="Audiowide, sans-serif">Name</FormLabel>
                  <Input 
                    placeholder="Your name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    size="lg"
                    borderRadius="md"
                    focusBorderColor="teal.400"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "teal.400" }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel color="white" fontFamily="Audiowide, sans-serif">Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.400" />
                    </InputLeftElement>
                    <Input 
                      placeholder="your.email@example.com" 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      size="lg"
                      borderRadius="md"
                      focusBorderColor="teal.400"
                      bg="rgba(255, 255, 255, 0.1)"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{ borderColor: "teal.400" }}
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel color="white" fontFamily="Audiowide, sans-serif">Message</FormLabel>
                  <Textarea 
                    placeholder="Your message" 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    size="lg"
                    borderRadius="md"
                    focusBorderColor="teal.400"
                    minH="150px"
                    resize="vertical"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "teal.400" }}
                  />
                </FormControl>
                
                <Button 
                  colorScheme="teal" 
                  type="submit" 
                  size="lg"
                  py={7}
                  fontFamily="Audiowide, sans-serif"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: '0 0 20px rgba(49, 130, 206, 0.4)' }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Container>

      {/* Typewriter Effect Section */}
      <Box 
        mt={20}
        mb={10}
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <Text
          color="white"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          minH="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
          fontFamily="Audiowide, sans-serif"
        >
          <Typewriter
            options={{
              strings: messages,
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 20,
              cursor: '|',
              wrapperClassName: 'typewriter-text'
            }}
          />
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;