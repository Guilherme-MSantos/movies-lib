import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Home />
    </div>
  );
}

export default App;
