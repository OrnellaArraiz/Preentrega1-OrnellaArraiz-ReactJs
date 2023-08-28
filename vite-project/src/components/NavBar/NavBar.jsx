import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
      <div>
        <nav>
          <h1>
            <Link to="/">La Relojería</Link>
          </h1>
  
          <ul>
            <li>
              <NavLink to="/category/watches">Relojes</NavLink>
            </li>
            <li>
              <NavLink to="/category/smartwatches">Smartwatch</NavLink>
            </li>
            <li> 
              <NavLink to="/category/accessories">Accesorios</NavLink>
            </li>
          </ul>
        </nav>
  
        <CartWidget/>
      </div>
    );
  };
  
  export default Navbar;
