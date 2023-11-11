import React from 'react';
import { Box, Flex, Heading, Text, Collapse, useDisclosure, Icon, List, ListItem, ListIcon } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MdCheckCircle } from 'react-icons/md';

const EducationalContent = () => {
  const mainDisclosure = useDisclosure();

  return (
    <Box mt={5}>
      <Flex
        align="center"
        justify="space-between"
        onClick={mainDisclosure.onToggle}
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
          🔍 مقدمة
        </Heading>
        <Icon
          as={mainDisclosure.isOpen ? ChevronUpIcon : ChevronDownIcon}
          color="primary.500"
          boxSize={6}
        />
      </Flex>
      <Collapse in={mainDisclosure.isOpen} animateOpacity>
        <Box p={4}>
          <Text fontSize="md" mb={2}>
            في عالم أصبحت فيه الشبكات الافتراضية مسرحًا لحياتنا اليومية، ظهرت ظاهرة جديدة تتسلل إلى واقعنا دون أن نشعر، إنها ظاهرة إدمان مواقع التواصل الاجتماعي. هذا الإدمان ليس بالأمر الهين؛ فهو يتجاوز الاستخدام العادي إلى الحاجة الملحة والمستمرة للتواجد على هذه المنصات.
          </Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              الإفراط في استخدام مواقع التواصل يمكن أن يؤدي إلى نتائج عكسية، مثل تأثيرات سلبية على الصحة النفسية، وضعف الروابط الاجتماعية، وانخفاض الإنتاجية.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              مشاكل مالية: يمكن أن يتسبب إدمان التواصل الاجتماعي في إنفاق كمية كبيرة من المال على السلع والخدمات المتعلقة بهذه الوسائل.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              اضطرابات النوم: الاستخدام المفرط لهذه الوسائل قبل النوم يمكن أن يؤدي إلى صعوبة في النوم.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              مشاكل في الصحة البدنية: مثل زيادة خطر الإصابة بالسمنة وأمراض القلب والأوعية الدموية.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              مشاكل في العلاقات: إدمان مواقع التواصل الاجتماعي يسبب مشاكل في العلاقات العائلية والصداقات، نتيجة لإهمال العلاقات الحقيقية.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              مشاكل صحية عقلية: مثل الاكتئاب والقلق والشعور بالعزلة والوحدة والمقارنة غير الصحية مع الآخرين.
            </ListItem>
            {/* Further content can be added here */}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};

export default EducationalContent;
