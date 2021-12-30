import Topbar from "./components/topbar/Topbar";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Settings from "./page/settings/Settings";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./components/singlepost/SinglePost";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/write" element={currentUser ? <Register /> : <Write />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
