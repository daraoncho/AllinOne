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
  const basename =
    import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <LazyMotion features={domAnimation}>
      <div className="App">
        <Router basename={basename}>
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
