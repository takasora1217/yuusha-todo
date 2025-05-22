import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import CompletedTasks from "./pages/CompletedTasks";
import Congrat from "./pages/Congrat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/completedtasks" element={<CompletedTasks />} />
      <Route path="/congrat" element={<Congrat />} />
    </Routes>
  );
}

export default App;

