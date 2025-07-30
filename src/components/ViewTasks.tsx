import { useState } from 'react';
import { View, Flex, Text, Heading, Button } from '@aws-amplify/ui-react';

const dummyTasks = [
  {
    id: 1,
    title: 'Assemble chairs',
    location: 'Moneyatta Commons, Saggart, Co. Dublin',
    dueRange: 'Monday 21 Jul to Sunday 27 Jul 2025',
    postedDate: '21 Jul 2025',
    price: '€25',
    status: 'Open',
    description: 'Assemble chairs and hang up a picture',
  },
  {
    id: 2,
    title: 'Lay laminate in 1 room',
    location: 'Caherdavin, Limerick',
    dueRange: 'Monday 21 Jul to Sunday 27 Jul 2025',
    postedDate: '21 Jul 2025',
    price: '€300',
    status: 'Open',
    description: 'Lay laminate flooring in 1 medium-sized bedroom.',
  },
  // Add more dummy tasks as needed
];

export default function MyTasks() {
  const [selectedTask, setSelectedTask] = useState(dummyTasks[0]);

  return (
    <View width="100%" padding="2rem" backgroundColor="#f9f9f9" height="100vh">
      <Heading level={2} marginBottom="1rem">My Tasks</Heading>
      <Flex direction="row" gap="2rem" height="85vh">
        
        {/* LEFT SIDE: Task List */}
        <Flex
          direction="column"
          width="30%"
          padding="1rem"
          backgroundColor="white"
          borderRadius="8px"
          overflow="auto"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
        >
          {dummyTasks.map((task) => (
            <Button
              key={task.id}
              variation={selectedTask?.id === task.id ? 'primary' : 'link'}
              justifyContent="flex-start"
              onClick={() => setSelectedTask(task)}
              marginBottom="0.5rem"
            >
              {task.title}
            </Button>
          ))}
        </Flex>

        {/* RIGHT SIDE: Task Details */}
        <Flex
          direction="column"
          width="70%"
          padding="2rem"
          backgroundColor="white"
          borderRadius="8px"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
        >
          {selectedTask ? (
            <>
              <Heading level={3} marginBottom="0.5rem">{selectedTask.title}</Heading>
              <Text fontWeight="bold" fontSize="1.25rem" marginBottom="1rem">{selectedTask.price}</Text>
              <Text marginBottom="0.75rem"><strong>Description:</strong> {selectedTask.description}</Text>
              <Text marginBottom="0.5rem"><strong>Task Location:</strong> {selectedTask.location}</Text>
              <Text marginBottom="0.5rem"><strong>Due Date:</strong> {selectedTask.dueRange}</Text>
              <Text marginBottom="0.5rem"><strong>Date Posted:</strong> {selectedTask.postedDate}</Text>
              <Text marginBottom="0.5rem"><strong>Status:</strong> {selectedTask.status}</Text>
            </>
          ) : (
            <Text>Select a task to see details</Text>
          )}
        </Flex>
      </Flex>
    </View>
  );
}
