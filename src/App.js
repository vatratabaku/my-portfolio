import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import HomeLayout from "./components/HomeLayout";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMatrix, setShowMatrix] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {(isLoading && <Loading />) || (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home setShowMatrix={setShowMatrix} showMatrix={showMatrix} />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
