import { useContext, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import profile from "../assets/profile.png";
import UserContext from "../contexts/UserContext";

const HeaderDropDown = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user-id");
    setCurrentUser(null);
    navigate("/login");
  };

  if (currentUser === undefined) {
    return <LoadingSpinner />;
  }

  if (!currentUser) {
    return (
      <div>
        <Link to="login">
          <div className="py-2 px-5 hover:bg-gray-100 transition-all">
            Login
          </div>
        </Link>
        <Link to="register">
          <div className="py-2 px-5 hover:bg-gray-100 transition-all">
            Register
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="profile">
        <div className="py-2 px-5 hover:bg-gray-100 transition-all">
          Profile
        </div>
      </Link>
      <button onClick={handleLogout}>
        <div className="py-2 px-5 hover:bg-gray-100 transition-all">Logout</div>
      </button>
    </div>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentUser] = useContext(UserContext);

  return (
    <div className="w-full max-w-4xl m-auto flex items-center justify-between p-5">
      <h1 className="text-blue-500 font-bold text-xl">Mur magique</h1>
      <ul className="flex items-center justify-evenly gap-5 font-bold">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/list">File d'attente</Link>
        </li>
        <li>
          {currentUser && currentUser.role === "student" && (
            <Link to="/upload">Upload code</Link>
          )}
        </li>
      </ul>
      <div
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="cursor-pointer relative"
      >
        <div className="h-16 w-16">
          <img src={profile} alt="profile" className="w-full" />
        </div>
        {isOpen && (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="absolute bg-white shadow-lg rounded-lg">
              <HeaderDropDown />
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default Header;
