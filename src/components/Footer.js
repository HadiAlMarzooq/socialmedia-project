import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" p={4} textAlign="center">
      <Text fontSize="sm">أعضاء المشروع:</Text>
      <Text fontSize="sm">1- هادي المرزوق</Text>
      <Text fontSize="sm">2- بدر الوقيصي</Text>
      <Text fontSize="sm">3- حسن العبدالعال</Text>
    </Box>
  );
};

export default Footer;
