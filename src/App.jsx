import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { LazyMotion, domAnimation } from "motion/react";
import PageNotFound from "./pages/PageNotFound.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </Router>
      </div>
    </LazyMotion>
  );
}

export default App;
