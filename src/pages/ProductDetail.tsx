import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const MOCK_PRODUCT = {
  id: 1,
  name: 'Eternal Elegance Leather Tote',
  price: 550.0,
  description:
    'The Eternal Elegance Leather Tote is a masterpiece of design and craftsmanship, exuding sophisticated luxury for the discerning individual. Handcrafted from the finest full-grain Italian leather, this tote boasts a sumptuously soft texture and remarkable durability. Its minimalist silhouette is complemented by subtle gold-tone hardware, providing a touch of opulent refinement.',
  images: [
    'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Black', hex: '#000000' },
    { name: 'Brown', hex: '#8B4513' },
    { name: 'Navy', hex: '#000080' },
  ],
  rating: 4.8,
  reviews: 124,
};

const MOCK_REVIEWS = [
  {
    id: 1,
    rating: 5,
    comment: 'Absolutely love this product! The quality is exceptional.',
    user: 'Sarah Johnson',
    date: '2025-01-05',
  },
  {
    id: 2,
    rating: 4,
    comment: 'Great purchase, fits perfectly and looks amazing.',
    user: 'Michael Chen',
    date: '2025-01-03',
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={MOCK_PRODUCT.images[0]}
              alt={MOCK_PRODUCT.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {MOCK_PRODUCT.images.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity"
              >
                <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{MOCK_PRODUCT.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(MOCK_PRODUCT.rating)
                      ? 'fill-current'
                      : 'stroke-current fill-none'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({MOCK_PRODUCT.reviews} reviews)</span>
          </div>

          <div className="text-4xl font-bold text-pink-600 mb-6">
            ₹{MOCK_PRODUCT.price.toFixed(2)}
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Size</label>
            <div className="flex gap-2">
              {MOCK_PRODUCT.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border rounded-lg font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-pink-600 text-white border-pink-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-pink-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Color</label>
            <div className="flex gap-2">
              {MOCK_PRODUCT.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-pink-600 scale-110'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('description')}
            className={`px-6 py-3 font-semibold ${
              activeTab === 'description'
                ? 'border-b-2 border-pink-600 text-pink-600'
                : 'text-gray-600'
            }`}
          >
            Product Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-semibold ${
              activeTab === 'reviews'
                ? 'border-b-2 border-pink-600 text-pink-600'
                : 'text-gray-600'
            }`}
          >
            Customer Reviews ({MOCK_REVIEWS.length})
          </button>
        </div>

        {activeTab === 'description' ? (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{MOCK_PRODUCT.description}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-current' : 'stroke-current fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{review.user}</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
