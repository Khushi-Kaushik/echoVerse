import LandingPage from "./LandingPage";
import ZenPage from "./ZenPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // <ZenPage />
  return (
    <div>
      <BrowserRouter>
      {/* Switch between pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/zen" element={<ZenPage />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
};

export default App;
