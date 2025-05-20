import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/completedtasks" element={<CompletedTasks />} />
    </Routes>
  );
}

export default App;
