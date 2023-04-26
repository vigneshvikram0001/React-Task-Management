import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./Nav";
import Application from "./Application";
import { Routes, Route } from "react-router-dom";
import Dash from "./Dash";

function App() {
  return (
    <div className="container-fluid bg-dark min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
        </div>
        <div className="col px-0">
          <Nav />
          {/* <Application /> */}
          <Routes>
            <Route path="/" element={<Dash />} />
            <Route path="/Application" element={<Application />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
