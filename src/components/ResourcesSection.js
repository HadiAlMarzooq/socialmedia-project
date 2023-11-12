import React, { useState } from 'react';
import { Box, Heading, VStack, Link, Collapse, Flex, Icon, Text } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const ResourcesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

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
          مصادر مفيدة
        </Heading>
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={6}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={4} mt={4} align="start" p={4}>
          <Text fontSize="md">استكشف هذه المصادر للحصول على مزيد من المعلومات والنصائح:</Text>
          <Link color="teal.500" href="https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm" isExternal>
            الفوائد والجوانب الإيجابية لوسائل التواصل الاجتماعي
          </Link>
          <Link color="teal.500" href="https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm" isExternal>
            الآثار السلبية لاستخدام وسائل التواصل الاجتماعي
          </Link>
          <Link color="teal.500" href="https://www.psychiatry.org/News-room/APA-Blogs/Tips-to-Take-Control-of-Your-Social-Media-Use" isExternal>
            نصائح لتقليل استخدام وسائل التواصل الاجتماعي
          </Link>
          <Link color="teal.500" href="https://chicagopolicyreview.org/2021/01/06/are-we-better-off-with-less-social-media-evidence-says-yes/" isExternal>
            فوائد التخلص من الإدمان الرقمي وتقليل استخدام وسائل التواصل
          </Link>
          {/* Add more resources as needed */}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default ResourcesSection;
