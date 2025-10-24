import { useState, useEffect } from 'react';
import { Heart, Rocket, Search, Sprout} from 'lucide-react';

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', address);
  };

  return (
    <div>
      <div
        className="fixed left-0 top-1/4 w-64 h-64 pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-9xl">🍕</div>
      </div>

      <div
        className="fixed right-0 top-1/3 w-64 h-64 pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(${scrollY * -0.4}px) rotate(${-scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-9xl">🍕</div>
      </div>

      <div
        className="fixed left-10 bottom-1/4 w-48 h-48 pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.15}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-8xl">🍕</div>
      </div>

      <div
        className="fixed right-20 top-2/3 w-48 h-48 pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(${scrollY * -0.25}px) rotate(${-scrollY * 0.12}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-8xl">🍕</div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Every Slice
            <span className="block text-amber-500 mt-2">Right On Time</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The fastest pizza delivery in town, crafted with real ingredients and real love
          </p>


          <form onSubmit={handleSearch} className="max-w-2xl mx-auto px-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-full shadow-2xl flex items-center overflow-hidden border-2 border-transparent group-hover:border-red-200 transition-all duration-300">
                <Search className="sm:block w-6 h-6 text-gray-400 ml-6 flex-shrink-0" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address..."
                  className="flex-1 px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg outline-none text-gray-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="hidden sm:block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 m-1 rounded-full shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"><Rocket className='text-amber-800'/></span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your pizza delivered in 30 minutes or less</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"><Sprout className='text-amber-800'/></span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Every Bite</h3>
              <p className="text-gray-600">Only premium ingredients, baked daily for that perfect taste.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"><Heart className='text-amber-800'/></span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Handcrafted pizzas baked to perfection, just for you.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
                Terms & Conditions
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500 text-sm font-light">
              Made with ❤️ by Angshuman
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
