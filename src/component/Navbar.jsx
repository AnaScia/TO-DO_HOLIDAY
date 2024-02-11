import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-container-div">
        <h1 className="navbar-container-name">Holiday Baby</h1>
        <FontAwesomeIcon icon={faUmbrellaBeach} size="xl" color="gray" />
      </div>

      <ul className="navbar-container-list">
        <li className="navbar-container-li">
          <Link to="/" className="navbar-link">
            Packing
          </Link>
        </li>
        <li className="navbar-container-li">
          <Link to="/budget" className="navbar-link">
            Budget
          </Link>
        </li>
        <li className="navbar-container-li">
          <Link to="/blog" className="navbar-link">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
