 "use client";
import { useState } from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Shampoo', category: 'Hair', price: 10, description: 'For smooth and shiny hair. Enriched with natural oils and vitamins.', image: 'https://example.com/images/shampoo.jpg' },
  { id: 2, name: 'Face Cream', category: 'Skin', price: 20, description: 'For smooth, hydrated skin. Contains anti-aging properties and antioxidants.', image: 'https://example.com/images/face-cream.jpg' },
  { id: 3, name: 'Body Lotion', category: 'Body', price: 15, description: 'For smooth and supple body. Moisturizes deeply and lasts all day.', image: 'https://example.com/images/body-lotion.jpg' },
  { id: 4, name: 'Hair Oil', category: 'Hair', price: 5, description: 'For healthy and nourished hair. Helps prevent hair breakage and split ends.', image: 'https://example.com/images/hair-oil.jpg' },
  { id: 5, name: 'Face Mask', category: 'Skin', price: 12, description: 'Purifies and rejuvenates the skin. Made with natural clay and essential oils.', image: 'https://example.com/images/face-mask.jpg' },
  { id: 6, name: 'Body Scrub', category: 'Body', price: 18, description: 'Exfoliates and refreshes the body. Contains sea salts and moisturizing agents.', image: 'https://example.com/images/body-scrub.jpg' },
  { id: 7, name: 'Hand Cream', category: 'Skin', price: 8, description: 'For soft and smooth hands. Provides long-lasting hydration and protection.', image: 'https://example.com/images/hand-cream.jpg' },
  { id: 8, name: 'Conditioner', category: 'Hair', price: 11, description: 'Deeply conditions and detangles hair. Fortified with vitamins and natural extracts.', image: 'https://example.com/images/conditioner.jpg' },
  { id: 9, name: 'Foot Cream', category: 'Skin', price: 10, description: 'Soothes and revitalizes tired feet. Contains peppermint and shea butter.', image: 'https://example.com/images/foot-cream.jpg' },
  { id: 10, name: 'Lip Balm', category: 'Skin', price: 7, description: 'Moisturizes and protects lips. Made with natural beeswax and essential oils.', image: 'https://example.com/images/lip-balm.jpg' },
 
];


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (term, category) => {
    let filtered = products;

    if (term) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Product Search</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Hair">Hair</option>
          <option value="Skin">Skin</option>
          <option value="Body">Body</option>
        </select>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <li key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
            <Link href={`/products/${product.id}`}>
         
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600 mt-1">${product.price}</p>
                <p className="text-gray-500 mt-2">{product.description}</p>
    
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}