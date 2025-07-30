// src/OldApp.tsx
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import PostATaskScreen from "./components/PostATaskScreen";
import Explanation from "./components/Explanation";
import ViewTasks from "./components/ViewTasks";

export default function OldApp() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/post" element={<PostATaskScreen />} />
      <Route path="/explanation" element={<Explanation />} />
      <Route path="/view" element={<ViewTasks />} />
    </Routes>
  );
}
