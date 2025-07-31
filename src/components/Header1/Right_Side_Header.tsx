import { Flex, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function Right_Side_Header() {
  const navigate = useNavigate();
  return (
    <Flex direction="row" alignItems="center" gap="1rem">
      <Button variation="link" onClick={() => navigate('/taskmatch/how-it-works')}>How it works</Button>
      <Button variation="primary" onClick={() => navigate('/taskmatch/signup')}>Sign up</Button>
      <Button variation="warning" onClick={() => navigate('/taskmatch/post-task')}>Post task</Button>
      <Button variation="link" onClick={() => navigate('/taskmatch/ViewTasks')}>View My Tasks</Button>
    </Flex>
  );
}

// have to add all the functonality
