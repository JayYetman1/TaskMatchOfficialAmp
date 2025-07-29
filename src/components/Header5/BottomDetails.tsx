import { Flex, Text } from '@aws-amplify/ui-react';

export default function Example() {
  return (
    <Flex
      as="nav"
      width="100%"
      padding="clamp(1rem, 2vw, 2rem)"
      backgroundColor="rgba(255,255,255,1)"
      direction={{ base: 'column', medium: 'row' }}
      justifyContent="space-between"
      alignItems="flex-start"
      wrap="wrap"
      gap="clamp(1rem, 2vw, 2rem)"
    >
      {/* Column 1 */}
      <Flex
        direction="column"
        basis={{ base: '100%', medium: '30%' }}
        minWidth="150px"
        gap="0.5rem"
      >
        <Text
          fontFamily="Inter"
          fontSize="clamp(1rem, 2vw, 1.25rem)"
          fontWeight="600"
        >
          Discover
        </Text>
        {['How TaskMatch works', 'Marketplace Rules', 'FAQ’s'].map((item) => (
          <Text
            key={item}
            fontFamily="Inter"
            fontSize="clamp(1rem, 2vw, 1.25rem)"
            fontWeight="400"
          >
            {item}
          </Text>
        ))}
      </Flex>

      {/* Column 2 */}
      <Flex
        direction="column"
        basis={{ base: '100%', medium: '30%' }}
        minWidth="150px"
        gap="0.5rem"
      >
        <Text
          fontFamily="Inter"
          fontSize="clamp(1rem, 2vw, 1.25rem)"
          fontWeight="600"
        >
          TaskMatch
        </Text>
        {['About us', 'Contact us', 'Press & Investors'].map((item) => (
          <Text
            key={item}
            fontFamily="Inter"
            fontSize="clamp(1rem, 2vw, 1.25rem)"
            fontWeight="400"
          >
            {item}
          </Text>
        ))}
      </Flex>

      {/* Column 3 */}
      <Flex
        direction="column"
        basis={{ base: '100%', medium: '30%' }}
        minWidth="150px"
        gap="0.5rem"
      >
        <Text
          fontFamily="Inter"
          fontSize="clamp(1rem, 2vw, 1.25rem)"
          fontWeight="600"
        >
          Work for us
        </Text>
        {['Work for us'].map((item, i) => (
          <Text
            key={i}
            fontFamily="Inter"
            fontSize="clamp(1rem, 2vw, 1.25rem)"
            fontWeight="400"
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
