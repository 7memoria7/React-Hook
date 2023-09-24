// App.js
import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import MyComponent from "./MyComponent";
import MovePage from "./MovePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/move">MovePage로 이동</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/move" element={<MovePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
