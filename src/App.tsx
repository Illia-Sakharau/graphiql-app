import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routesConfig } from "./utils/router/routesConfig";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Router>
        <Header />
        <main>
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
