import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Translate from "./pages/Translate";
import Trans from "./pages/Trans";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Translate" element={<Translate />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
