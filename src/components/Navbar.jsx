import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
          <ul className="flex gap-4 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
        </nav>
    );
};
export default Navbar;