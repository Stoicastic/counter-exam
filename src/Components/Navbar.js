import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="nav-link">
                <Link to="/">COUNTER-APP</Link>
                <Link to="/about">ABOUT-THE-APP</Link>
            </div>
        </nav>
        
    </div>
  );
};

export default Navbar;