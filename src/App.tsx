import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';
import AppWrapper from "./components/AppWrapper";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  // added user
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <AppWrapper>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      {/* <h1>My todos</h1> */}
      
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <div style={{ margin: "20px 0" }}>
        <button 
          onClick={() => navigate('/taskmatch')} 
          style={{ 
            backgroundColor: "#007bff", 
            color: "white", 
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          🌐 Visit TaskMatch Website
        </button>
      </div>
      <button onClick={signOut}>Sign out</button> 
    </AppWrapper>
  );
}
// added line 39

export default App;



