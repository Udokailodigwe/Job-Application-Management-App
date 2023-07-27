import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Dashboard, Register, Example } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/example" element={<Example />} /> */}
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
