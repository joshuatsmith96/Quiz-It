import "./App.css";
import IntroPage from "./pages/IntroPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from './pages/ResultsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/results" element={<ResultsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
