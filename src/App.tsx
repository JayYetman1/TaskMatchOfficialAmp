// import { useEffect, useState } from "react";
// //added
// import { useAuthenticator } from '@aws-amplify/ui-react';
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

// function App() {
//   const { signOut } = useAuthenticator();
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }

//   return (
//     <main>
//       <h1>My todos</h1>
//       <button onClick={createTodo}>+ new</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.content}</li>
//         ))}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
//           Review next step of this tutorial.
//         </a>
//       </div>
//       <button onClick={signOut}>Sign out</button> 
//     </main>
//   );
// }
// // added line 39

// export default App;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

import TodoApp from "./TodoApp";
//import LegacyApp from "./legacy/App";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // Authenticator will redirect to SignIn if not logged in
  return <Authenticator>{() => <>{children}</>}</Authenticator>;
}

export default function App() {
  return (
    <Routes>
      {/* Default → /todos */}
      <Route path="/" element={<Navigate to="/todos" replace />} />

      {/* /todos is protected */}
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <TodoApp />
          </ProtectedRoute>
        }
      />

      {/* /site/* serves your legacy site (public) */}
      {/* <Route path="/site/*" element={<LegacyApp />} /> */}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/todos" replace />} />
    </Routes>
  );
}

// line 77 was commented out