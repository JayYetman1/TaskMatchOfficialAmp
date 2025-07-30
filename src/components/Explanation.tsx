import { View, Flex, Heading, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function Explanation() {
  const navigate = useNavigate();

  return (
    <View
      width="100%"
      height="100vh"
      backgroundColor="white"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Flex direction="column" alignItems="center" gap="1rem">
        <Heading level={2} color="black">
          Explanation Screen
        </Heading>
        <Text color="black" fontSize="1.25rem">
          If you can see this, navigation is working!
        </Text>
        <Button variation="primary" onClick={() => navigate(-1)}>
          ← Back to Home
        </Button>
      </Flex>
    </View>
  );
}





