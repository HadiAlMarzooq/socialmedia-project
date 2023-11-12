import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Collapse,
  Flex,
  Icon,
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

const BoxBreathing = () => {
  const [breathingStep, setBreathingStep] = useState("استنشق");
  const [progress, setProgress] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [duration, setDuration] = useState(120); // 2 minutes in seconds
  const [isBoxBreathingOpen, setIsBoxBreathingOpen] = useState(false);

  useEffect(() => {
    const steps = ["استنشق", "احتفظ بالنفس", "ازفر", "احتفظ بالهواء خارجًا"];
    const timerInterval = 1000; // Update every 1 second
    const totalDuration = 4000; // Each step lasts for 4 seconds
    let intervalId;
    if (isBreathing && duration > 0) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < totalDuration) {
            return prevProgress + timerInterval;
          } else {
            setBreathingStep(
              steps[(steps.indexOf(breathingStep) + 1) % steps.length]
            );
            return 0;
          }
        });
        setDuration(duration - 1);
      }, timerInterval);
    } else if (!isBreathing || duration === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [breathingStep, isBreathing, duration]);

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
  };
  const toggleBoxBreathing = () => {
    setIsBoxBreathingOpen(!isBoxBreathingOpen);
  };


  return (
    <Box margin="1rem">
      <Flex
        align="center"
        justify="space-between"
        onClick={toggleBoxBreathing}
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
          أداة مساعدة لتقليل القلق
        </Heading>
        <Icon
          as={isBoxBreathingOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={6}
        />
      </Flex>
      <Collapse in={isBoxBreathingOpen} animateOpacity>
        <VStack spacing={4} mt={4} align="center" margin="1rem">
          {/* Additional Educational Content */}
          <Text fontSize="md" textAlign="justify">
            التنفس المربع، المعروف أيضًا بالتنفس 4-4-4-4، هو تقنية بسيطة لكنها
            فعالة لتهدئة العقل وتقليل التوتر. يتضمن التنفس بعمق لأربع ثوانٍ،
            الاحتفاظ بالنفس لأربع ثوانٍ، الزفير لأربع ثوانٍ، ثم الانتظار لأربع
            ثوانٍ قبل التنفس مرة أخرى. هذه التقنية مفيدة بشكل خاص في التحكم
            بالتوتر والقلق، ويمكن ممارستها في أي وقت ومكان.
          </Text>
          <Text fontSize="md" textAlign="justify">
            استخدام التنفس المربع بانتظام يمكن أن يساعد في تحسين التركيز، تقليل
            التوتر، وتعزيز الاسترخاء العام. يوصى به كممارسة يومية لتعزيز الوعي
            الذهني وتحقيق الهدوء الداخلي.
          </Text>

          <Heading size="md">{breathingStep}</Heading>
          <CircularProgress
            value={(progress / 4000) * 100}
            color="teal"
            thickness="12px"
          >
            <CircularProgressLabel>
              {Math.round(progress / 1000)}
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize="md">اتبع التوجيهات للتنفس المربع.</Text>

          <Button colorScheme="green" onClick={toggleBreathing}>
            {isBreathing ? "وقف" : "ابدأ"} تمرين التنفس
          </Button>
          {isBreathing && (
            <Text>
              الوقت المتبقي: {Math.floor(duration / 60)}:
              {duration % 60 < 10 ? "0" : ""}
              {duration % 60}
            </Text>
          )}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default BoxBreathing;
