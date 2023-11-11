import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';
import Header from './components/Header';
import EducationalContent from './components/EducationalContent';
// import Quiz from './components/Quiz';
// import MindfulnessSection from './components/MindfulnessSection';
// import ResourcesSection from './components/ResourcesSection';
// import Footer from './components/Footer';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <EducationalContent />
      {/* <Quiz />
      <MindfulnessSection />
      <ResourcesSection />
      <Footer /> */}
    </ChakraProvider>
  );
};

export default App;
