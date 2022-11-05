import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="nav-link">
                <Link to="/">USE-REDUCER-HOOK</Link>
                <Link to="/about">USE-STATE-HOOK</Link>
            </div>
        </nav>
        
    </div>
  );
};

export default Navbar;