'use client';

import { useState, useEffect } from 'react';
import { Search, Anchor, Waves, Fish, Shell, Navigation, Compass, Ship, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

export default function AquaCareers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create floating bubbles
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-teal-600 text-white relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="fixed inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute bg-white opacity-10 rounded-full animate-bounce"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              bottom: '-50px',
            }}
          />
        ))}
      </div>

      {/* Header - Ship Navigation */}
      <header className="relative bg-gradient-to-r from-blue-800/90 to-teal-800/90 border-b-4 border-cyan-400 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-cyan-300 flex items-center justify-center shadow-lg animate-pulse">
                <Anchor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-cyan-200 tracking-wide drop-shadow-lg">
                  AquaCareers
                </h1>
                <p className="text-cyan-300 text-sm italic">~ Dive Deep into Opportunity ~</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#depths" className="text-cyan-200 hover:text-cyan-100 font-semibold transition-colors relative group flex items-center">
                <Waves className="w-4 h-4 mr-1" />
                Explore Depths
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-300 group-hover:w-full transition-all rounded"></span>
              </a>
              <a href="#marine" className="text-cyan-200 hover:text-cyan-100 font-semibold transition-colors relative group flex items-center">
                <Fish className="w-4 h-4 mr-1" />
                Marine Life
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-300 group-hover:w-full transition-all rounded"></span>
              </a>
              <a href="#treasures" className="text-cyan-200 hover:text-cyan-100 font-semibold transition-colors relative group flex items-center">
                <Shell className="w-4 h-4 mr-1" />
                Hidden Treasures
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-300 group-hover:w-full transition-all rounded"></span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-cyan-200 hover:text-cyan-100 font-semibold transition-colors">
                Surface
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:from-blue-500 hover:to-teal-500 transition-all transform hover:scale-105 shadow-lg">
                Dive In!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Deep Ocean */}
      <section className="py-20 relative">
        {/* Underwater light rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-300 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-transparent transform -rotate-6"></div>
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-teal-300 to-transparent transform rotate-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-cyan-300 shadow-lg">
                <div className="flex items-center space-x-2 text-white">
                  <Navigation className="w-5 h-5" />
                  <span className="font-semibold">Navigate Your Career Ocean</span>
                  <Navigation className="w-5 h-5 transform rotate-180" />
                </div>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                DIVE INTO
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                Your Next Wave
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-cyan-200 mb-4">
                Explore the depths of opportunity in the vast ocean of careers
              </p>
              <p className="text-xl text-blue-200">
                From shallow tide pools to deep-sea adventures, find your perfect current
              </p>
            </div>

            {/* Message in a Bottle Search */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-teal-600/80 to-blue-700/80 backdrop-blur-md p-8 rounded-3xl border-3 border-cyan-400 shadow-2xl relative">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 text-cyan-300 opacity-60">
                  <Shell className="w-6 h-6" />
                </div>
                <div className="absolute bottom-4 left-4 text-blue-300 opacity-60">
                  <Fish className="w-6 h-6" />
                </div>
                
                <h3 className="text-3xl font-bold text-cyan-200 mb-8 text-center flex items-center justify-center">
                  <Ship className="w-8 h-8 mr-3" />
                  Cast Your Net for Opportunities
                  <Ship className="w-8 h-8 ml-3 transform scale-x-[-1]" />
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative">
                    <label className="block text-cyan-200 text-sm font-semibold mb-3">
                      🐠 What depths interest you?
                    </label>
                    <input
                      type="text"
                      placeholder="Marine biology, naval engineering..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white/90 border-3 border-cyan-400 p-4 text-blue-900 font-medium text-lg rounded-xl focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-inner"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-cyan-200 text-sm font-semibold mb-3">
                      🌊 Which waters?
                    </label>
                    <input
                      type="text"
                      placeholder="Pacific Coast, Atlantic Shores..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white/90 border-3 border-cyan-400 p-4 text-blue-900 font-medium text-lg rounded-xl focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-inner"
                    />
                  </div>
                  
                  <div className="flex items-end">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg text-lg flex items-center justify-center">
                      <Compass className="w-5 h-5 mr-2" />
                      Set Sail!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ocean Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-colors shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-cyan-300">7,847</div>
                  <div className="text-cyan-200 text-lg font-semibold">Active Currents</div>
                  <div className="text-cyan-400 text-sm italic">🌊 New waves daily</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-600/20 backdrop-blur-md p-8 rounded-2xl border-2 border-teal-400 hover:border-teal-300 transition-colors shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-teal-300">96%</div>
                  <div className="text-teal-200 text-lg font-semibold">Navigation Success</div>
                  <div className="text-teal-400 text-sm italic">⚓ Safe harbor guaranteed</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-400 hover:border-blue-300 transition-colors shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-blue-300">∞</div>
                  <div className="text-blue-200 text-lg font-semibold">Deep Possibilities</div>
                  <div className="text-blue-400 text-sm italic">🐙 Endless ocean</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings - Treasure Chest */}
      <section id="depths" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Hidden Treasures
              </span>
            </h2>
            <p className="text-2xl text-cyan-200">
              🏴‍☠️ Rare opportunities waiting to be discovered 🏴‍☠️
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Treasure Chest 1 */}
            <div className="bg-gradient-to-br from-blue-800/80 to-teal-700/80 backdrop-blur-sm p-8 rounded-2xl border-3 border-cyan-400 shadow-2xl hover:shadow-cyan-400/20 hover:scale-105 transition-all relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-cyan-300">
                      <Fish className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-300 font-bold">Coral Reef Enterprises</div>
                      <div className="text-blue-300 text-sm">Pacific Research Division</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    RARE FIND
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Senior Marine Biologist</h3>
                <div className="text-3xl font-bold text-cyan-300 mb-4">$85k - $120k</div>
                
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Dive deep into coral ecosystem research. Study the vibrant underwater communities 
                  and help preserve our ocean&apos;s most colorful neighborhoods.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-cyan-600/50 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400">Marine Research</span>
                  <span className="bg-teal-600/50 text-teal-200 px-3 py-1 rounded-full text-sm border border-teal-400">Conservation</span>
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400">PhD Preferred</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg flex items-center justify-center">
                  <Anchor className="w-5 h-5 mr-2" />
                  Claim This Treasure
                </button>
              </div>
            </div>

            {/* Treasure Chest 2 */}
            <div className="bg-gradient-to-br from-teal-800/80 to-cyan-700/80 backdrop-blur-sm p-8 rounded-2xl border-3 border-teal-400 shadow-2xl hover:shadow-teal-400/20 hover:scale-105 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center border-2 border-teal-300">
                      <Ship className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-teal-300 font-bold">Neptune&apos;s Logistics</div>
                      <div className="text-cyan-300 text-sm">Global Shipping Division</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    HOT CURRENT
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Harbor Operations Manager</h3>
                <div className="text-3xl font-bold text-teal-300 mb-4">$75k - $95k</div>
                
                <p className="text-cyan-200 mb-6 leading-relaxed">
                  Captain the bustling harbor operations. Coordinate maritime traffic, 
                  manage dock schedules, and ensure smooth sailing for all vessels.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-teal-600/50 text-teal-200 px-3 py-1 rounded-full text-sm border border-teal-400">Operations</span>
                  <span className="bg-cyan-600/50 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400">Leadership</span>
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400">Maritime Experience</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Navigate to Opportunity
                </button>
              </div>
            </div>

            {/* Treasure Chest 3 */}
            <div className="bg-gradient-to-br from-purple-800/80 to-blue-700/80 backdrop-blur-sm p-8 rounded-2xl border-3 border-purple-400 shadow-2xl hover:shadow-purple-400/20 hover:scale-105 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-purple-300">
                      <Shell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-purple-300 font-bold">Seahorse Solutions</div>
                      <div className="text-blue-300 text-sm">Underwater Technology</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    LEGENDARY
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Deep Sea Data Analyst</h3>
                <div className="text-3xl font-bold text-purple-300 mb-4">$90k - $125k</div>
                
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Explore data depths like an underwater explorer. Analyze oceanic patterns, 
                  marine trends, and discover insights hidden in the digital depths.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-purple-600/50 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400">Data Science</span>
                  <span className="bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400">Python/R</span>
                  <span className="bg-teal-600/50 text-teal-200 px-3 py-1 rounded-full text-sm border border-teal-400">Remote OK</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg flex items-center justify-center">
                  <Compass className="w-5 h-5 mr-2" />
                  Dive Into Data
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-cyan-600/80 to-blue-700/80 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-2xl border-2 border-cyan-400 hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-xl flex items-center mx-auto">
              <Waves className="w-8 h-8 mr-3" />
              Explore Deeper Waters
              <Waves className="w-8 h-8 ml-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Coral Reef Community Section */}
      <section id="marine" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Join Our Reef Community
              </span>
            </h2>
            <p className="text-2xl text-cyan-200">
              🐠 Swim with like-minded professionals in our vibrant ecosystem 🐠
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/30 backdrop-blur-md p-10 rounded-3xl border-2 border-cyan-400 text-center hover:border-cyan-300 transition-all shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-cyan-300 shadow-lg">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-cyan-200 mb-6">Chart Your Course</h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                Navigate through career currents with our advanced compass technology. 
                Plot your professional journey across the vast ocean of opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-600/30 to-cyan-700/30 backdrop-blur-md p-10 rounded-3xl border-2 border-teal-400 text-center hover:border-teal-300 transition-all shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-teal-300 shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-teal-200 mb-6">School Together</h3>
              <p className="text-cyan-200 text-lg leading-relaxed">
                Like fish in the sea, we&apos;re stronger together. Connect with fellow marine professionals 
                and create lasting bonds in our underwater network.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/30 to-purple-700/30 backdrop-blur-md p-10 rounded-3xl border-2 border-blue-400 text-center hover:border-blue-300 transition-all shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-blue-300 shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-200 mb-6">Discover Pearls</h3>
              <p className="text-purple-200 text-lg leading-relaxed">
                Uncover rare career gems hidden in the depths. Our pearl-diving algorithms 
                surface the most valuable opportunities just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Sunset Ocean */}
      <section className="py-20 bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            Ready to Make Waves?
          </h2>
          <p className="text-2xl text-orange-100 mb-12 leading-relaxed drop-shadow-lg">
            The tide is turning, and your perfect career current awaits. 
            <br />
            Don&apos;t let this opportunity drift away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
              <Anchor className="w-8 h-8 mr-3" />
              Drop Anchor Here
            </button>
            <button className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
              <Compass className="w-8 h-8 mr-3" />
              Explore First
            </button>
          </div>
          
          <p className="text-orange-200 text-lg mt-8 drop-shadow-lg">
            🌊 Safe harbor guaranteed • Deep opportunities • Endless horizons 🌊
          </p>
        </div>
      </section>

      {/* Footer - Ocean Floor */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 border-t-4 border-cyan-400 py-16 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-cyan-300 flex items-center justify-center shadow-lg">
                  <Anchor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-cyan-200 tracking-wide">
                    AquaCareers
                  </h1>
                  <p className="text-cyan-300 text-sm italic">~ Dive Deep into Opportunity ~</p>
                </div>
              </div>
              <p className="text-cyan-300 max-w-md text-lg leading-relaxed">
                Navigate the depths of possibility. From tide pools to ocean trenches, 
                we&apos;ll help you find your perfect current in the sea of careers.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-cyan-200 mb-6 text-xl flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                Navigation
              </h4>
              <div className="space-y-3 text-lg">
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Explore Depths</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Marine Life</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Hidden Treasures</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Lighthouse Support</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-cyan-200 mb-6 text-xl flex items-center">
                <Shell className="w-5 h-5 mr-2" />
                Sea Laws
              </h4>
              <div className="space-y-3 text-lg">
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Privacy Tides</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Terms of Sail</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Maritime Support</a>
                <a href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors block">Captain&apos;s Contact</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t-2 border-cyan-600 text-center">
            <p className="text-cyan-300 text-lg">
              © 2024 AquaCareers • &quot;Where careers flow like ocean currents&quot; • Deep Sea Division
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

