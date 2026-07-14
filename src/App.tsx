import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;