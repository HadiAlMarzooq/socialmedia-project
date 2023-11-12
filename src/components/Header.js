import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Header = () => {
  return (
    <MotionBox as="header" bg="primary.100" p={4} margin="1rem" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <MotionHeading as="h1" size="lg" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        كيف نخفف من ادمان مواقع التواصل الاجتماعي
      </MotionHeading>

      <Player
        src="./animation.json"
        background="transparent"
        speed="1"
        style={{ width: '200px', height: '200px' }} 
        loop 
        autoplay 
      />

      <MotionText fontSize="sm" mt={2} initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        هذا المشروع يهدف إلى توفير استراتيجيات وأدوات فعّالة لمساعدتك على التحكم
        في استخدام مواقع التواصل الاجتماعي. نستعرض من خلاله طرق لتحسين الوعي
        الذاتي والتوازن الرقمي، ونقدم موارد مفيدة لتحقيق حياة أكثر إنتاجية
        وإشباعًا.
      </MotionText>
    </MotionBox>
  );
};

export default Header;