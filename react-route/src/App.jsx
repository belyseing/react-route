import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
