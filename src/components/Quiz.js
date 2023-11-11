import React, { useState } from 'react';
import { Box, Button, Radio, RadioGroup, Stack, Text, Heading, useToast } from '@chakra-ui/react';
import useStore from '../store/QuizStore'; // Adjust the path according to your project structure

const Quiz = () => {
  const { quizScore, incrementScore, resetScore } = useStore();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const toast = useToast();

  // Array of quiz questions and options
  const questions = [
    {
      question: "كم ساعة تقضي يوميًا على مواقع التواصل الاجتماعي؟",
      options: ["أقل من ساعة", "1-2 ساعات", "2-4 ساعات", "أكثر من 4 ساعات"],
      points: [0, 1, 2, 3], // Points for each option
    },
    // Add more questions here
  ];

  const handleNext = () => {
    if (!answerSelected) {
      toast({
        title: 'الرجاء اختيار إجابة',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Show results or tips based on the score
    }
    setAnswerSelected(false);
  };

  const handleSelect = (value) => {
    incrementScore(questions[questionIndex].points[value]);
    setAnswerSelected(true);
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading mb={6}>{questions[questionIndex].question}</Heading>
      <RadioGroup onChange={handleSelect}>
        <Stack direction="column">
          {questions[questionIndex].options.map((option, index) => (
            <Radio key={index} value={index.toString()}>
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button mt={4} colorScheme="blue" onClick={handleNext}>
        التالي
      </Button>
    </Box>
  );
};

export default Quiz;
