 
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyShop</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/products" className="text-white hover:text-gray-400">Products</Link>
        /
        </div>
        <div>
 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
