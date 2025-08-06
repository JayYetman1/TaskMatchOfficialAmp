import { Flex, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function Right_Side_Header() {
  const navigate = useNavigate();
  return (
    <Flex direction="row" alignItems="center" gap="1rem">
      <Button variation="link" onClick={() => navigate('/how-it-works')}>How it works</Button>
      <Button variation="primary" onClick={() => navigate('/signup')}>Sign up</Button>
      <Button variation="warning" onClick={() => navigate('/post-task')}>Post task</Button>
      <Button variation="link" onClick={() => navigate('/ViewTasks')}>View My Tasks</Button>
    </Flex>
  );
}

// have to add all the functonality
