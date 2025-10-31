import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const products = [
    { name: "Chocolate Croissant", img: "https://images.unsplash.com/photo-1587241321921-91e9241b3a36", desc: "Flaky layers with rich chocolate filling." },
    { name: "Strawberry Cake", img: "https://images.unsplash.com/photo-1559628233-016b64e87b33", desc: "Soft sponge layered with fresh strawberries." },
    { name: "Blueberry Muffin", img: "https://images.unsplash.com/photo-1583336663277-620dc1996589", desc: "Moist muffin packed with sweet blueberries." },
    { name: "Classic Baguette", img: "https://images.unsplash.com/photo-1608198093002-ad4e0054848b", desc: "Crispy outside, soft inside. Perfect with butter." },
    { name: "Red Velvet Cupcake", img: "https://images.unsplash.com/photo-1614707267537-9b0f07e6b24e", desc: "Rich, moist, and topped with creamy frosting." },
    { name: "Cinnamon Roll", img: "https://images.unsplash.com/photo-1551022370-1b1a6a1a9f61", desc: "Sweet and sticky perfection with a hint of spice." },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555507036-ab1f4038808a)' }}>
        <div className="bg-black/40 absolute inset-0" />
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold text-white z-10">VickyBest Bakery</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-md md:text-xl text-white mt-4 z-10">Freshly baked happiness, every day.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 z-10">
          <a href="#order" className="inline-block bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 py-3 text-lg">Order Now</a>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-amber-700">Our Story</h2>
        <p className="max-w-3xl mx-auto text-md text-gray-600">At VickyBest Bakery, we believe every bite should spark joy. Our bakers combine tradition and creativity to craft breads, cakes, and pastries that bring warmth to your table. Founded in 2010, our passion has always been to bake with love and the finest ingredients.</p>
      </section>

      {/* Products */}
      <section className="py-16 bg-amber-100 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8 text-amber-700">Our Fresh Delights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p,i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl overflow-hidden shadow">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-800">{p.name}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-semibold text-amber-700 mb-6">Watch Our Bakers in Action</h2>
        {!showVideo ? (
          <div className="relative cursor-pointer inline-block" onClick={() => setShowVideo(true)}>
            <img src="https://images.unsplash.com/photo-1601050690597-2f29d2b0a284" alt="video thumb" className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto" />
            <PlayCircle className="w-16 h-16 text-white absolute inset-0 m-auto" />
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/8ZtInClXe1Q" title="VickyBest Bakery Video" allowFullScreen></iframe>
          </div>
        )}
      </section>

      {/* Order */}
      <section id="order" className="py-16 bg-amber-100 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-amber-700 mb-4">Order Online</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">Place your favorite order online and we’ll have it ready for pickup or delivery fresh from the oven.</p>
        <form className="max-w-3xl mx-auto bg-white rounded-2xl p-6 grid gap-3 shadow">
          <input className="border p-3 rounded-xl" placeholder="Your Name" />
          <input className="border p-3 rounded-xl" placeholder="Your Email" />
          <input className="border p-3 rounded-xl" placeholder="Your Order (e.g. 2 Croissants, 1 Cake)" />
          <textarea className="border p-3 rounded-xl" rows="3" placeholder="Additional notes" />
          <button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-3 text-lg">Submit Order</button>
        </form>
      </section>

      {/* Contact / Visit */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-amber-700 mb-6">Contact</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-amber-700 mb-2" />
            <p className="text-gray-700">02135146456</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-amber-700 mb-2" />
            <p className="text-gray-700">johnwaters460@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-amber-700 mb-2" />
            <p className="text-gray-700">No physical address provided</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-700 text-white text-center py-6">
        <p>&copy; 2025 VickyBest Bakery. All rights reserved.</p>
        <p className="text-amber-200 mt-2">Made with ❤️ and butter.</p>
      </footer>
    </div>
  );
}
