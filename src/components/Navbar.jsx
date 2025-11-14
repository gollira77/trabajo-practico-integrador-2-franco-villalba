import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg">Menu</span>

        <ul className="flex gap-4 text-sm">
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
