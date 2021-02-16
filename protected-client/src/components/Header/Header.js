import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../services/auth";

const handleLogout = () => {
  logout();
};

const Header = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/tasks" className="header-menu">
          Home
        </Link>

        <div className="header-float-right">
          <NavLink to="/tasks/addtask" className="header-menu">
            Cadastrar nova tarefa
          </NavLink>
        </div>
        <div className="header-float-right-logout">
          <span onClick={(e) => handleLogout()} >
            
            <a href=".">Logout</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
