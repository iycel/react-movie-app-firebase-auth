import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";
import { warningToastify } from "../utils/toastify";

const Navbar = () => {
  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // const currentUser = { displayName: 'Maddox' }
  const [hover, setHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      navigate("/search", { state: searchTerm });
      setSearchTerm("");
    } else if (!currentUser) {
      warningToastify("Please log in to search a movie");
      setSearchTerm("");
      // alert("Please log in to search a movie");
    } else {
      warningToastify("Please enter a text");
      setSearchTerm("");
      // alert("Please enter a text");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleHover = () => {
    setHover((prevState) => !prevState);
  };

  const [isVisible, setIsVisible] = useState(true);
  // const currentUser = false;
  return (
    // <div>
    //     {
    //         (isVisible) ? (
    //             <nav className="navbar navbar-expand-lg navbar-light">
    //                 <div className="container-fluid d-flex justify-content-around">
    //                     <Link to={'/'} className='navbar-brand'>
    //                         <span style={{ color: '#FF6000' }} className='fw-bold fs-3'>React MovieApp</span>
    //                     </Link>
    //                     <form>
    //                         <div className='input-group input-group-lg form-outline'>
    //                             <input className={hover ? 'form-control border-warning' : 'form-control'} type="search" placeholder="Search something" aria-label="Search" onMouseLeave={toggleHover} onMouseEnter={toggleHover} />
    //                             <button className='btn btn-secondary' type="submit" id="button-addon2"><Link className='fw-bold fs-5 text-decoration-none text-white' to={'/search'}>Search</Link></button>
    //                         </div>
    //                     </form>

    //                     <div className="d-flex justify-content-end align-items-center p-2">
    //                         {
    //                             currentUser ? (
    //                                 <div className="dropdown mx-2">
    //                                     <button className="btn btn-outline-secondary btn-sm dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                         <span className='fw-bold text-dark'>{currentUser?.displayName}</span>
    //                                     </button>
    //                                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                                         <Link className="dropdown-item" to={'/login'} onClick={() => logOut()}>Logout</Link>
    //                                     </div>
    //                                 </div>
    //                             ) : (
    //                                 <div className="dropdown mx-2">
    //                                     <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                                         <span className='fw-bold text-dark'>Login</span><br /><span> or Register</span>
    //                                     </button>
    //                                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                                         <Link className="dropdown-item" to={'/login'} onClick={() => setIsVisible(!isVisible)}>Login</Link>
    //                                         <Link className="dropdown-item" to={'/register'} onClick={() => setIsVisible(!isVisible)}>Register</Link>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         }
    //                     </div>
    //                 </div >
    //             </nav >) : (
    //             <nav className="navbar navbar-expand-lg navbar-light mt-3">
    //                 <div className="container-fluid d-flex justify-content-center">
    //                     <Link to={'/'} className='navbar-brand' onClick={() => setIsVisible(!isVisible)}>
    //                         <span style={{ color: '#FF6000' }} className='fw-bold fs-3'>React MovieApp</span>
    //                     </Link>
    //                 </div>
    //             </nav>
    //         )
    //     }

    // </div >
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-around">
          <Link to={"/"} className="navbar-brand">
            <span style={{ color: "#FF6000" }} className="fw-bold fs-3">
              React MovieApp
            </span>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group-lg form-outline">
              <input
                className={
                  hover ? "form-control border-warning" : "form-control"
                }
                type="search"
                placeholder="Search something"
                aria-label="Search"
                onMouseLeave={toggleHover}
                onMouseEnter={toggleHover}
                value={searchTerm || ""}
                onChange={handleChange}
              />
              <button
                className="btn btn-secondary"
                type="submit"
                id="button-addon2"
              >
                {/* <Link className='fw-bold fs-5 text-decoration-none text-white' to={'/search'}>Search</Link> */}
                Search
              </button>
            </div>
          </form>

          <div className="d-flex justify-content-end align-items-center p-2">
            {currentUser ? (
              <div className="dropdown mx-2">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ padding: "10px" }}
                >
                  <span className="fw-bold text-dark">
                    {currentUser?.displayName}
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item"
                    to={"/login"}
                    onClick={() => logOut()}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="dropdown mx-2">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fw-bold text-dark">Login</span>
                  <br />
                  <span> or Register</span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item"
                    to={"/login"}
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    Login
                  </Link>
                  <Link
                    className="dropdown-item"
                    to={"/register"}
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
