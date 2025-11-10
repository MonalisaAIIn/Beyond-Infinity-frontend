import { Link } from 'react-router-dom';
import { Shirt, Package } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    price: 49.99,
    image:
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    price: 79.99,
    image:
      'https://images.pexels.com/photos/7679876/pexels-photo-7679876.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Designer Graphic Tee',
    price: 59.99,
    image:
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Home() {
  return (
    <div>
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Elevate Your Style</h1>
          <p className="text-xl text-white mb-8">
            Discover timeless elegance and contemporary sophistication with our exclusive
            collections. Experience luxury redefined.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link
            to="/shop?category=tshirts"
            className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="T-Shirts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="p-6 text-white">
                <Shirt className="w-8 h-8 mb-2" />
                <h3 className="text-2xl font-bold">T-Shirts</h3>
                <p className="text-sm">Premium cotton collection</p>
              </div>
            </div>
          </Link>

          <Link
            to="/shop?category=hoodies"
            className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="https://images.pexels.com/photos/7679876/pexels-photo-7679876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hoodies"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="p-6 text-white">
                <Package className="w-8 h-8 mb-2" />
                <h3 className="text-2xl font-bold">Hoodies</h3>
                <p className="text-sm">Cozy and stylish</p>
              </div>
            </div>
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
