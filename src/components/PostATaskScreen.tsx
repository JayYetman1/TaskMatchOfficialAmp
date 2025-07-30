import {
  Flex,
  Text,
  TextField,
  TextAreaField,
  SelectField,
  Button,
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function Explanation() {
  const navigate = useNavigate();

  return (
    <Flex
      as="main"
      direction="column"
      width="100%"
      maxWidth="600px"
      margin="0 auto"
      padding="2rem"
      gap="1.5rem"
    >
      {/* Back button */}
      <Flex justifyContent="flex-start">
        <Button variation="link" onClick={() => navigate(-1)}>
          ← Go Back
        </Button>
      </Flex>

      {/* Header */}
      <Text
        as="h1"
        fontFamily="Playfair Display, serif"
        fontSize="clamp(2rem, 5vw, 3rem)"
        fontWeight="700"
        textAlign="center"
      >
        TaskMatch
      </Text>
      <Text
        as="h2"
        fontFamily="Inter, sans-serif"
        fontSize="clamp(1.25rem, 3vw, 1.75rem)"
        textAlign="center"
      >
        Tell us what you need done
      </Text>

      {/* Form fields */}
      <TextField
        label="Task Title"
        placeholder="e.g. Remove some garden waste"
      />

      <SelectField
        label="When do you need this done?"
        placeholder="Anytime"
      >
        <option value="anytime">Anytime</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="this_week">This week</option>
      </SelectField>

      <TextField
        label="Task Location"
        placeholder="Where should your student go?"
      />

      <TextAreaField
        label="What are the task details?"
        placeholder="Give a detailed description of what you need help with"
        rows={5}
      />

      <Flex direction="column" gap="0.5rem">
        <Text fontWeight="500">Photos</Text>
        <input type="file" />
        <Text color="var(--amplify-colors-neutral-60)">
          No file chosen
        </Text>
      </Flex>

      <TextField
        label="Budget"
        placeholder="What you think is a fair price?"
        prefix="€"
      />

      {/* Submit button */}
      <Button variation="primary" width="100%" size="large">
        Submit Task
      </Button>

      {/* Footer */}
      <Flex
        direction="column"
        alignItems="center"
        marginTop="2rem"
        fontSize="0.875rem"
        color="var(--amplify-colors-neutral-60)"
      >
      </Flex>
    </Flex>
  );
}
