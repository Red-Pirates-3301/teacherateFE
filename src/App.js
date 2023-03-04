import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Teacher from "./components/Teacher";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/teacher/:id" element={<Teacher />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
