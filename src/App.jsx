import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Top taskList={taskList} setTaskList={setTaskList} />} />
            </Routes>
        </div>
    );
}

export default App;