import { useState, useEffect } from 'react';
import { View, Flex, Text, Heading, Button } from '@aws-amplify/ui-react';
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function ViewTasks() {
  const [tasks, setTasks] = useState<Array<Schema["Task"]["type"]>>([]);
  const [selectedTask, setSelectedTask] = useState<Schema["Task"]["type"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await client.models.Task.list();
      setTasks(data);
      if (data.length > 0) {
        setSelectedTask(data[0]);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View width="100%" padding="2rem" backgroundColor="#f9f9f9" height="100vh">
        <Heading level={2} marginBottom="1rem">My Tasks</Heading>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View width="100%" padding="2rem" backgroundColor="#f9f9f9" height="100vh">
        <Heading level={2} marginBottom="1rem">My Tasks</Heading>
        <Text>No tasks found. Create your first task to get started!</Text>
      </View>
    );
  }

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
          {tasks.map((task) => (
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
              <Text fontWeight="bold" fontSize="1.25rem" marginBottom="1rem">
                {selectedTask.budget ? `€${selectedTask.budget}` : 'Budget not specified'}
              </Text>
              <Text marginBottom="0.75rem">
                <strong>Description:</strong> {selectedTask.description || 'No description provided'}
              </Text>
              <Text marginBottom="0.5rem">
                <strong>Task Location:</strong> {selectedTask.location || 'Location not specified'}
              </Text>
              <Text marginBottom="0.5rem">
                <strong>Due Date:</strong> {selectedTask.dueDate || 'No due date specified'}
              </Text>
              <Text marginBottom="0.5rem">
                <strong>Date Posted:</strong> {selectedTask.postedDate}
              </Text>
              <Text marginBottom="0.5rem">
                <strong>Status:</strong> {selectedTask.status}
              </Text>
            </>
          ) : (
            <Text>Select a task to see details</Text>
          )}
        </Flex>
      </Flex>
    </View>
  );
}
