import { ChakraProvider } from '@chakra-ui/react'
import NewNavbar from './components/NewNavbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import useScrollAnimation from './hooks/useScrollAnimation'
import DateTimeDisplay from './components/DateTimeDisplay'

function App() {
  useScrollAnimation();

  return (
    <ChakraProvider>
      <NewNavbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <DateTimeDisplay />
    </ChakraProvider>
  )
}

export default App