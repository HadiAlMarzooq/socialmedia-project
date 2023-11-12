import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg="primary.100" p={4} margin="1rem">
      <Heading as="h1" size="xl">كيف نخفف من ادمان مواقع التواصل الاجتماعي</Heading>
    </Box>
  );
};

export default Header;
