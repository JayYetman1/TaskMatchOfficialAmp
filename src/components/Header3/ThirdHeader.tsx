import { Flex, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import GuyReading1 from '../../ImageCodes/GuyReading1';

export default function ThirdHeader({
  outerPadding = '2%',
  panelPadding = '4%',
  borderRadius = '40px',
}) {
  const navigate = useNavigate();

  const handlePostTask = () => {
    navigate('/taskmatch/other');
  };

  return (
    <Flex
      as="section"
      width="100%"
      padding={outerPadding}
    >
      {/* — Full-width orange panel with image inside — */}
      <Flex
        direction={{ base: 'column', medium: 'row' }}
        width="100%"
        padding={panelPadding}
        backgroundColor="rgba(255,188,106,0.68)"
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
            Let TaskMatch do it
          </Text>
          <Text
            fontFamily="Playfair Display"
            fontSize="clamp(1.25rem, 3vw, 2.5rem)"
            lineHeight="1.4"
            marginBottom="1rem"
          >
            Clear up that list of chores, and do more of what you love!
          </Text>
          <Text
            fontFamily="Playfair Display"
            fontSize="clamp(1rem, 2.5vw, 1.7rem)"
            lineHeight="1.4"
          >
            Let us help you with any general labour jobs you might have around
            the house, so you can relax knowing the job is getting done.
          </Text>
          <Button
            onClick={handlePostTask}
            width="clamp(200px, 40%, 350px)"
            fontSize="clamp(1rem, 2vw, 1.55rem)"
            borderRadius="clamp(12px, 1vw, 20px)"
            variation="warning"
            size="large"
            alignSelf="flex-start"
            marginTop="1.5rem"
          >
            Post a Task now
          </Button>
        </Flex>

        {/* — Image inside orange panel — */}
        <Flex
          basis={{ base: '100%', medium: '35%' }}
          alignItems="center"
          justifyContent="center"
          style={{
            aspectRatio: '4 / 5',
            borderRadius,
            overflow: 'hidden',
          }}
        >
          <GuyReading1 width="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
}