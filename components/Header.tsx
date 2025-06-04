import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 border border-dashed border-red-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold">
          <Link href="/">My Website</Link>
        </div>

        {/* Navigation and Login */}
        <nav className="flex items-center space-x-4 md:space-x-40">
          {/* Menu */}
          <ul className="flex space-x-6 md:space-x-48">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/summary">Summary</Link></li>
            <li><Link href="/results">Results</Link></li>
            {/* Add more pages as needed */}
          </ul>

          {/* Login Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 