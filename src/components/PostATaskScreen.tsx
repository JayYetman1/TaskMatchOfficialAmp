import { useState } from 'react';
import {
  Flex,
  Text,
  TextField,
  TextAreaField,
  SelectField,
  Button,
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function PostATaskScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    dueDate: '',
    location: '',
    description: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    setIsSubmitting(true);
    try {
      await client.models.Task.create({
        title: formData.title,
        description: formData.description,
        location: formData.location,
        budget: formData.budget,
        dueDate: formData.dueDate,
        status: "Open",
        postedDate: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      });

      alert('Task posted successfully!');
      navigate('/ViewTasks');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error posting task. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        value={formData.title}
        onChange={(e) => handleInputChange('title', e.target.value)}
        required
      />

      <SelectField
        label="When do you need this done?"
        placeholder="Anytime"
        value={formData.dueDate}
        onChange={(e) => handleInputChange('dueDate', e.target.value)}
      >
        <option value="">Select timeframe</option>
        <option value="Anytime">Anytime</option>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="This week">This week</option>
      </SelectField>

      <TextField
        label="Task Location"
        placeholder="Where should your student go?"
        value={formData.location}
        onChange={(e) => handleInputChange('location', e.target.value)}
      />

      <TextAreaField
        label="What are the task details?"
        placeholder="Give a detailed description of what you need help with"
        rows={5}
        value={formData.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
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
        value={formData.budget}
        onChange={(e) => handleInputChange('budget', e.target.value)}
      />

      {/* Submit button */}
      <Button 
        variation="primary" 
        width="100%" 
        size="large"
        onClick={handleSubmit}
        isLoading={isSubmitting}
        loadingText="Posting task..."
      >
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
