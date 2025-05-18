import { Box, Heading, SimpleGrid, Text, Link, Image, Container, Button, Flex, Badge, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import BackgroundBubbles from "./components/BackgroundBubbles";

const projects = [
  {
    title: "Social Media Text Analyzer",
    description: "A powerful text analysis tool that processes social media content to extract insights, sentiment, and key metrics. Built with Python, it uses advanced NLP techniques to analyze text data, providing valuable insights for social media monitoring and content analysis.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/ShreeshHunnur/SocialMediaTextAnalyzer",
    tags: ["Python", "NLP", "Data Analysis", "Machine Learning"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Chakra UI. Features include smooth animations, dark theme with glassmorphism effects, interactive project showcase, and a dynamic skills section. The website demonstrates proficiency in frontend development, UI/UX design, and modern web technologies.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/ShreeshHunnur/portfolio",
    tags: ["React", "Chakra UI", "JavaScript", "CSS", "Responsive Design"]
  },
  {
    title: "MedInsight AI",
    description: "An AI-powered healthcare analytics platform that helps medical professionals make data-driven decisions. Features include patient data analysis, treatment recommendations, and predictive analytics for better healthcare outcomes. Built with advanced machine learning algorithms and secure data handling.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/ShreeshHunnur/MedInsight-AI",
    tags: ["Python", "Machine Learning", "Healthcare", "Data Science", "AI"]
  },
  {
    title: "NewsAI Summary",
    description: "An intelligent news summarization tool that uses AI to generate concise summaries of news articles. Features include real-time news processing, customizable summary length, and support for multiple languages. Built with state-of-the-art NLP models for accurate and coherent summaries.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/ShreeshHunnur/NewsAI-Summary",
    tags: ["Python", "NLP", "AI", "News Processing", "Text Summarization"]
  },
  {
    title: "WCE Colon Disease Classification",
    description: "A deep learning-based system for classifying colon diseases using Wireless Capsule Endoscopy (WCE) images. Features include automated disease detection, high-accuracy classification of various colon pathologies, and a user-friendly interface for medical professionals. Built with TensorFlow and Keras for robust medical image analysis.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    link: "https://github.com/ShreeshHunnur/WCE-Curated-Colon-Disease-Classification-using-Deep-Learning",
    tags: ["Deep Learning", "TensorFlow", "Keras", "Medical AI", "Computer Vision"]
  }
];

function Projects() {
  const scrollContainerRef = useRef(null);

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
      id="projects" 
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
          Projects
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
          <Box 
            ref={scrollContainerRef}
            overflowX="auto" 
            css={{
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(49, 130, 206, 0.5)',
                borderRadius: '4px',
                '&:hover': {
                  background: 'rgba(49, 130, 206, 0.7)',
                },
              },
            }}
          >
            <Flex 
              gap={8} 
              pb={4}
              minW="max-content"
              px={2}
            >
              {projects.map((project, idx) => (
                <Box 
                  key={idx} 
                  boxShadow="xl" 
                  borderRadius="xl" 
                  overflow="hidden" 
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(10px)"
                  color="white"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  transition="all 0.3s ease"
                  _hover={{ 
                    transform: 'translateY(-8px)', 
                    boxShadow: '0 0 30px rgba(49, 130, 206, 0.2)',
                    borderColor: 'teal.400'
                  }}
                  w={{ base: "300px", md: "400px" }}
                  flexShrink={0}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    w="100%" 
                    h="250px" 
                    objectFit="cover" 
                    opacity="0.8"
                    transition="all 0.3s ease"
                    _hover={{ opacity: 1 }}
                  />
                  <Box p={8}>
                    <Heading as="h3" size="lg" mb={3} color="white" fontFamily="Audiowide, sans-serif">{project.title}</Heading>
                    <Flex mb={4} gap={2} flexWrap="wrap">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          colorScheme="teal" 
                          fontSize="sm" 
                          px={2} 
                          py={1} 
                          borderRadius="md"
                          bg="rgba(49, 130, 206, 0.2)"
                          color="teal.300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Flex>
                    <Text mb={6} fontSize="md" color="whiteAlpha.900">{project.description}</Text>
                    <Button 
                      as={Link} 
                      href={project.link} 
                      colorScheme="teal" 
                      isExternal
                      bg="rgba(49, 130, 206, 0.2)"
                      color="teal.300"
                      border="1px solid"
                      borderColor="teal.400"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: "rgba(49, 130, 206, 0.3)",
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 20px rgba(49, 130, 206, 0.4)',
                        textDecoration: 'none'
                      }}
                      _active={{
                        transform: 'translateY(0)',
                        boxShadow: '0 0 10px rgba(49, 130, 206, 0.3)'
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
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

export default Projects;