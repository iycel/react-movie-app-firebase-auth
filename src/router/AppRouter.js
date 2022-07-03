import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import NavbarMain from "../components/NavbarMain";

const AppRouter = () => {
  return (
    <Router>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
