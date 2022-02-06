import "./App.css";
import React from "react";
import { Astrtoid } from "./views/Asteroids";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { NavBar } from "./container/NavBar";
import { Details } from "./views/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import { AsteroidsFilter } from "./views/AsteroidsFilter";
import { ProblemStatement } from "./views/ProblemStatement";

function App() {
  return (
    <div>
      <NavBar />
      <HashRouter>
        <React.Suspense>
          <Routes >
            <Route
              exact
              path="/asteroids"
              name="Intruduction Page"
              element={<Astrtoid />}
            />
            <Route path="/" name="Home" element={<Home />} />
            <Route
              path="/search/date"
              name="Home"
              element={<AsteroidsFilter />}
            />

            <Route
              path="/problemStatement"
              name="Home"
              element={<ProblemStatement />}
            />

            <Route path="/details/" name="Home" element={<Details />} />
          </Routes>
        </React.Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
