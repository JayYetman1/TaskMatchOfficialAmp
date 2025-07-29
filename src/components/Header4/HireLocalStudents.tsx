import { Flex, Text} from '@aws-amplify/ui-react';
import GroupOfStudents1 from '../../ImageCodes/GroupOfStudents1';

interface HireLocalStudentsProps {
  outerPadding?: string;
  panelPadding?: string;
  borderRadius?: string;
}

export default function HireLocalStudents({
  outerPadding = '2%',
  panelPadding = '4%',
  borderRadius = '40px',
}: HireLocalStudentsProps) {
  return (
    <Flex
      as="section"
      width="100%"
      padding={outerPadding}
    >
      {/* — Full-width teal panel with image inside — */}
      <Flex
        direction={{ base: 'column', medium: 'row' }}
        width="100%"
        padding={panelPadding}
        backgroundColor="rgba(109,201,181,0.51)"
        style={{ borderRadius }}
        alignItems="center"
        justifyContent="space-between"
        gap="2%"
      >
        {/* — Text column — */}
        <Flex
          direction="column"
          basis={{ base: '100%', medium: '60%' }}
          paddingRight={{ base: '0', medium: panelPadding }}
        >
          <Text
            as="h2"
            fontFamily="Playfair Display"
            fontSize="clamp(2rem, 5vw, 5rem)"
            fontWeight="700"
            lineHeight="1.2"
            marginBottom="1rem"
          >
            Hire Local Students!
          </Text>
          <Text
            fontFamily="Playfair Display"
            fontSize="clamp(1.25rem, 3vw, 2.5rem)"
            lineHeight="1.4"
            marginBottom="1.5rem"
          >
            Students from your neighbourhood ready to help
          </Text>
          <Text
            fontFamily="Playfair Display"
            fontSize="clamp(1rem, 2.5vw, 1.7rem)"
            lineHeight="1.4"
          >
            Organically hire local students who would be more than happy to assist you
            with whatever work you need done at a fair price!
          </Text>
        </Flex>

        {/* — Image inside panel — */}
        <Flex
          basis={{ base: '100%', medium: '35%' }}
          alignItems="center"
          justifyContent="center"
          style={{
            aspectRatio: '4.5 / 5',
            borderRadius,
            overflow: 'hidden',
          }}
        >
          <GroupOfStudents1 width="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
}
