import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
}

export default App;
