import React from "react";
import { ChakraProvider, Box, Link, Icon, Text, Flex, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import theme from "./theme";
import Header from "./components/Header";
import EducationalContent from "./components/EducationalContent";
import Quiz from "./components/Quiz";
import MindfulnessSection from "./components/MindfulnessSection";
import ResourcesSection from "./components/ResourcesSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack minHeight="100vh" justify="space-between" width="100%">
        <Box>
          <Header />
          <EducationalContent />
          <Quiz />
          <MindfulnessSection />
          <ResourcesSection />
        </Box>
        <Box>
          <Footer />
          <Flex
            textAlign="center"
            p={4}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xs">
              Ⓒ جميع حقوق النشر للنطاقات تحت hadi.zone محفوظة لـ هادي المرزوق
            </Text>
            <Link href="https://github.com/HadiAlmarzooq" isExternal>
              <Icon as={FaGithub} mx={1} />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default App;