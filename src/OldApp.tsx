// src/OldApp.tsx
import { Routes, Route } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import HomeScreen from "./components/HomeScreen";
import PostATaskScreen from "./components/PostATaskScreen";
import Explanation from "./components/Explanation";
import ViewTasks from "./components/ViewTasks";

export default function OldApp() {
  return (
    <AppWrapper isTaskMatch={true}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/post" element={<PostATaskScreen />} />
        <Route path="/other" element={<PostATaskScreen />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/view" element={<ViewTasks />} />
        <Route path="/ViewTasks" element={<ViewTasks />} />
        <Route path="/how-it-works" element={<Explanation />} />
        <Route path="/signup" element={<PostATaskScreen />} />
        <Route path="/post-task" element={<PostATaskScreen />} />
      </Routes>
    </AppWrapper>
  );
}
