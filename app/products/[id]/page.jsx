 "use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

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
  

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();

  
 
  if (!id) {
    return <p className="text-center text-red-500">No product selected!</p>;
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <button 
        onClick={() => router.push('/')} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600 mb-2">Category: <span className="font-semibold text-gray-800">{product.category}</span></p>
      <p className="text-xl text-gray-600 mb-2">Price: <span className="font-semibold text-gray-800">${product.price}</span></p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductPage;
