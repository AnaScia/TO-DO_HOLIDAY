import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container-div">
        <h1 className="navbar-container-name">Holiday Baby</h1>
        <FontAwesomeIcon icon={faUmbrellaBeach} size="xl" color="gray" />
      </div>
      <ul className="navbar-container-list">
        <li className="navbar-container-li">Packing</li>
        <li className="navbar-container-li">Budget</li>
        <li className="navbar-container-li">Blog</li>
      </ul>
    </div>
  );
}
export default Navbar;
