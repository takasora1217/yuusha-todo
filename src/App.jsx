import { Routes, Route } from "react-router-dom"
import Top from "./pages/Top"

function App() {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Top/>} />
            </Routes>
        </div>
    );
}
export default App