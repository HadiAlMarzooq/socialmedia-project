import React, { useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Heading,
  Collapse,
  Icon,
  VStack,
  Alert,
  AlertIcon,
  Progress,
  useToast,
  Text,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import useStore from "../stores/QuizStore";

const Quiz = () => {
  const { quizScore, incrementScore } = useStore();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const toast = useToast();
  const [quizStarted, setQuizStarted] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const questions = [
    {
      question: "كم ساعة تقضي يوميًا على مواقع التواصل الاجتماعي؟",
      options: ["أقل من ساعة", "1-2 ساعات", "2-4 ساعات", "أكثر من 4 ساعات"],
      points: [0, 1, 2, 3],
    },
    {
      question:
        "هل تشعر بالقلق أو الضيق عند عدم القدرة على الوصول إلى مواقع التواصل؟",
      options: ["نادرًا", "أحيانًا", "غالبًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "هل تفحص هاتفك أول شيء عند الاستيقاظ صباحًا؟",
      options: ["لا أفعل ذلك", "أحيانًا", "غالبًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "هل تجد صعوبة في التوقف عن استخدام وسائل التواصل الاجتماعي؟",
      options: ["ليس لدي مشكلة", "نادرًا ما أواجه صعوبة", "أحيانًا", "غالبًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "هل تستخدم وسائل التواصل الاجتماعي أثناء تناول الوجبات؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "كيف تؤثر مواقع التواصل الاجتماعي على نومك؟",
      options: ["لا تؤثر", "تؤثر قليلاً", "تؤثر بشكل متوسط", "تؤثر بشكل كبير"],
      points: [0, 1, 2, 3],
    },
    {
      question:
        "هل تشعر بالحاجة إلى مشاركة التفاصيل اليومية على مواقع التواصل الاجتماعي؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "كيف تؤثر التعليقات أو الإعجابات على منشوراتك في مزاجك؟",
      options: ["لا تؤثر", "تؤثر قليلاً", "تؤثر بشكل متوسط", "تؤثر بشكل كبير"],
      points: [0, 1, 2, 3],
    },
    {
      question:
        "هل تفضل استخدام وسائل التواصل الاجتماعي على قضاء الوقت مع العائلة أو الأصدقاء؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "غالبًا"],
      points: [0, 1, 2, 3],
    },
    {
      question:
        "هل تشعر بالإحباط أو الغيرة من مشاركات الآخرين على مواقع التواصل؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question: "هل تعتمد على مواقع التواصل الاجتماعي للحصول على الأخبار؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
    {
      question:
        "هل تجد صعوبة في الاستمتاع بالأنشطة بدون توثيقها على وسائل التواصل الاجتماعي؟",
      options: ["أبدًا", "نادرًا", "أحيانًا", "دائمًا"],
      points: [0, 1, 2, 3],
    },
  ];
  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const scoreMeter = () => {
    let status, colorScheme;
    if (quizScore <= 10) {
      status = "success";
      colorScheme = "green";
    } else if (quizScore <= 20) {
      status = "warning";
      colorScheme = "yellow";
    } else {
      status = "error";
      colorScheme = "red";
    }
    return (
      <Box>
        <Progress
          hasStripe
          value={(quizScore / 30) * 100}
          colorScheme={colorScheme}
        />
        <Alert status={status} mt={4}>
          <AlertIcon />
          {resultsMessage()}
        </Alert>
        <Text mt={4}>
          كيفية التسجيل: يتم احتساب الإجابات بنقاط من 0 إلى 3، حيث يمثل 0 انخفاض
          خطر الإدمان، و3 يمثل أعلى مستوى من الخطر.
        </Text>
        <Text mt={4}>
          هذا الاختبار قائم على مجهود شخصي، ونتيجته ليست تشخيصية.
        </Text>
      </Box>
    );
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast({
        title: "الرجاء اختيار إجابة",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    incrementScore(
      questions[questionIndex].points[parseInt(selectedOption, 10)]
    );

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResults(true);
    }

    setSelectedOption(null);
  };
  const resultsMessage = () => {
    if (quizScore <= 10) {
      return `نتيجتك هي ${quizScore}: يبدو أن استخدامك لمواقع التواصل الاجتماعي معتدل. حافظ على هذا التوازن!`;
    } else if (quizScore <= 20) {
      return `نتيجتك هي ${quizScore}: احذر، أنت في خطر متزايد للإفراط في استخدام مواقع التواصل. حاول تقليل الوقت الذي تقضيه عليها.`;
    } else {
      return `نتيجتك هي ${quizScore}: يبدو أن لديك ميل للإفراط في استخدام مواقع التواصل الاجتماعي. من المهم إيجاد أنشطة بديلة ووضع قيود زمنية لاستخدامك.`;
    }
  };

  return (
    <Box margin="1rem">
      <Flex
        align="center"
        justify="space-between"
        onClick={toggleOpen}
        cursor="pointer"
        bg="primary.100"
        p={4}
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: "primary.200",
        }}
      >
        <Heading size="lg" color="primary.500">
          📄 أداة تقييم
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={6}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {showResults ? (
          <VStack p={4} spacing={4}>
            {scoreMeter()}
            <Button colorScheme="blue" onClick={() => window.location.reload()}>
              إعادة الاختبار
            </Button>
          </VStack>
        ) : (
          <Box p={4}>
            {!quizStarted ? (
              <VStack p={4} spacing={4}>
                <Text>
                  هذا الاختبار سيساعدك في تقييم استخدامك لمواقع التواصل
                  الاجتماعي. انقر على الزر أدناه لبدء الاختبار.
                </Text>
                <Button
                  colorScheme="green"
                  onClick={() => setQuizStarted(true)}
                >
                  بدء الاختبار
                </Button>
              </VStack>
            ) : (
              <>
                <Heading mb={6}>{questions[questionIndex].question}</Heading>
                <RadioGroup
                  key={questionIndex} // Add a unique key
                  onChange={handleSelect}
                  value={selectedOption}
                >
                  <Stack direction="column">
                    {questions[questionIndex].options.map((option, index) => (
                      <Radio key={index} value={index.toString()}>
                        {option}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>

                <Button mt={4} colorScheme="green" onClick={handleNext}>
                  التالي
                </Button>
              </>
            )}
          </Box>
        )}
      </Collapse>
    </Box>
  );
};

export default Quiz;
