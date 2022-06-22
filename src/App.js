import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
