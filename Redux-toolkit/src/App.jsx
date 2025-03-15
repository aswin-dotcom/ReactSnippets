import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Users from "./Pages/Users";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
