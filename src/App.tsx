import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
