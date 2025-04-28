import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-center gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blogs" className="hover:underline">Blogs</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}

export default Header;
