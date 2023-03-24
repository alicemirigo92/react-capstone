import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            <FaArrowLeft />
          </NavLink>
        </li>
        <li>
          <NavLink to="/details">
            <FaArrowLeft />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
