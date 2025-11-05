'use client';

import { useState } from 'react';
import { Search, Star, MapPin, DollarSign, Users, TrendingUp, ArrowRight, Shield, Zap, Target } from 'lucide-react';

export default function JobFrontier() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-yellow-100" 
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d2691e' fill-opacity='0.05'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
         }}>

      {/* Header - Saloon Style */}
      <header className="bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 border-b-4 border-yellow-600 shadow-lg relative">
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full border-4 border-yellow-400 flex items-center justify-center transform rotate-12 shadow-lg">
                <Star className="w-8 h-8 text-yellow-200 fill-current" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-yellow-200 font-serif tracking-wider drop-shadow-lg" 
                    style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  JobFrontier
                </h1>
                <p className="text-yellow-300 text-sm font-serif italic">~ Est. 1849 • Stake Your Claim ~</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#jobs" className="text-yellow-200 hover:text-yellow-100 font-serif text-lg transition-colors relative group">
                Wanted Ads
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#companies" className="text-yellow-200 hover:text-yellow-100 font-serif text-lg transition-colors relative group">
                Trading Posts
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#saloon" className="text-yellow-200 hover:text-yellow-100 font-serif text-lg transition-colors relative group">
                The Saloon
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all"></span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-yellow-200 hover:text-yellow-100 font-serif text-lg transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 py-3 rounded-lg font-bold font-serif border-2 border-yellow-400 hover:from-amber-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                Join the Posse!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Desert Landscape */}
      <section className="py-20 relative overflow-hidden">
        {/* Desert mountains silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-800 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-amber-800 text-yellow-200 px-6 py-3 border-4 border-yellow-600 transform -rotate-2 shadow-lg font-serif">
                🤠 Welcome to the Career Frontier! 🤠
              </div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-amber-800 mb-8 font-serif leading-tight drop-shadow-lg">
              Rustle Up Your
              <span className="block text-yellow-700">
                Next Career!
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-amber-700 mb-4 font-serif italic">
                &quot;No experience? No problem, partner!&quot;
              </p>
              <p className="text-xl text-amber-600 font-serif">
                We&apos;ll teach you to ride the range of opportunity in the wild frontier of employment.
              </p>
            </div>

            {/* Wooden Sign Search Bar */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-b from-amber-700 to-amber-900 p-8 rounded-none border-8 border-yellow-600 shadow-2xl relative"
                   style={{
                     backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='0.1'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                   }}>
                
                {/* Rope border */}
                <div className="absolute -inset-2 border-4 border-dashed border-yellow-500 opacity-50"></div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif text-center">
                  🔍 Scout the Territory for Opportunities 🔍
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-amber-900 text-sm font-bold mb-2 font-serif">
                      What kind of work, partner?
                    </label>
                    <input
                      type="text"
                      placeholder="Cattle wrangling, gold mining..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-yellow-100 border-4 border-amber-600 p-4 text-amber-800 font-serif text-lg focus:border-yellow-500 focus:outline-none rounded-none shadow-inner"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 text-sm font-bold mb-2 font-serif">
                      Which territory?
                    </label>
                    <input
                      type="text"
                      placeholder="Phoenix, Tucson, Flagstaff..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-yellow-100 border-4 border-amber-600 p-4 text-amber-800 font-serif text-lg focus:border-yellow-500 focus:outline-none rounded-none shadow-inner"
                    />
                  </div>
                  
                  <div className="flex items-end">
                    <button className="w-full bg-gradient-to-b from-red-600 to-red-800 text-white font-bold py-4 px-6 border-4 border-red-400 hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 shadow-lg font-serif text-lg">
                      🤠 Giddy Up! 🤠
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold Rush Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-amber-600 to-amber-800 text-white p-8 border-4 border-yellow-500 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-serif">2,847</div>
                  <div className="text-yellow-200 font-serif text-lg">Claims Available</div>
                  <div className="text-yellow-300 text-sm font-serif italic">⭐ Strike it rich! ⭐</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-red-600 to-red-800 text-white p-8 border-4 border-red-400 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-serif">94%</div>
                  <div className="text-red-200 font-serif text-lg">Success Rate</div>
                  <div className="text-red-300 text-sm font-serif italic">🎯 Sure shot! 🎯</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-green-700 to-green-900 text-white p-8 border-4 border-green-500 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-serif">$∞</div>
                  <div className="text-green-200 font-serif text-lg">Opportunities</div>
                  <div className="text-green-300 text-sm font-serif italic">💰 Endless frontier! 💰</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanted Posters - Job Listings */}
      <section id="jobs" className="py-20 bg-gradient-to-b from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-amber-800 mb-4 font-serif">
              📋 Wanted Ads 📋
            </h2>
            <p className="text-2xl text-amber-600 font-serif italic">
              &quot;High-paying work for honest folk&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Wanted Poster 1 */}
            <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 border-8 border-amber-700 p-8 shadow-2xl hover:shadow-3xl transition-shadow hover:scale-105 relative"
                 style={{
                   backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20s-20 8.954-20 20zm15.64-5.64c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm5.64 5.64c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zM4 20c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16S4 11.163 4 20z'/%3E%3C/g%3E%3C/svg%3E\")"
                 }}>
              
              {/* Nail holes */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-red-800 mb-2 font-serif">WANTED</div>
                <div className="w-20 h-1 bg-red-800 mx-auto mb-4"></div>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-amber-800">
                  <Users className="w-10 h-10 text-yellow-200" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2 font-serif">Senior Trail Boss</h3>
                <p className="text-lg text-amber-700 font-serif">Desert Vista Ranch Co.</p>
                <p className="text-amber-600 font-serif">Phoenix Territory</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-800 mb-2 font-serif">
                  $75,000 - $95,000
                </div>
                <div className="text-green-700 font-serif">Gold Nuggets Per Year</div>
              </div>
              
              <p className="text-amber-800 text-center mb-6 font-serif italic leading-relaxed">
                &quot;Seeking an experienced wrangler to lead our herd through the digital frontier. 
                Must know the lay of the land and how to keep the cattle in line.&quot;
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-amber-700 text-yellow-200 px-3 py-1 text-sm font-serif border-2 border-amber-800">Leadership</span>
                <span className="bg-red-700 text-red-200 px-3 py-1 text-sm font-serif border-2 border-red-800">Team Management</span>
                <span className="bg-green-700 text-green-200 px-3 py-1 text-sm font-serif border-2 border-green-800">Strategy</span>
              </div>
              
              <button className="w-full bg-gradient-to-b from-red-600 to-red-800 text-white font-bold py-4 border-4 border-red-400 hover:from-red-700 hover:to-red-900 transition-all font-serif text-lg shadow-lg">
                🤠 Apply Now, Partner! 🤠
              </button>
            </div>

            {/* Wanted Poster 2 */}
            <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 border-8 border-amber-700 p-8 shadow-2xl hover:shadow-3xl transition-shadow hover:scale-105 relative"
                 style={{
                   backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20s-20 8.954-20 20zm15.64-5.64c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm5.64 5.64c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zM4 20c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16S4 11.163 4 20z'/%3E%3C/g%3E%3C/svg%3E\")"
                 }}>
              
              {/* Nail holes */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-red-800 mb-2 font-serif">WANTED</div>
                <div className="w-20 h-1 bg-red-800 mx-auto mb-4"></div>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-amber-800">
                  <Target className="w-10 h-10 text-yellow-200" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2 font-serif">Saloon Keeper</h3>
                <p className="text-lg text-amber-700 font-serif">Copper Canyon Hospitality</p>
                <p className="text-amber-600 font-serif">Tucson Territory</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-800 mb-2 font-serif">
                  $45,000 - $65,000
                </div>
                <div className="text-green-700 font-serif">Silver Coins + Tips</div>
              </div>
              
              <p className="text-amber-800 text-center mb-6 font-serif italic leading-relaxed">
                &quot;Running the finest establishment this side of the Rio Grande. 
                Need someone who can handle the rowdy crowd and keep &apos;em happy.&quot;
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-amber-700 text-yellow-200 px-3 py-1 text-sm font-serif border-2 border-amber-800">Customer Service</span>
                <span className="bg-red-700 text-red-200 px-3 py-1 text-sm font-serif border-2 border-red-800">Hospitality</span>
                <span className="bg-green-700 text-green-200 px-3 py-1 text-sm font-serif border-2 border-green-800">Operations</span>
              </div>
              
              <button className="w-full bg-gradient-to-b from-red-600 to-red-800 text-white font-bold py-4 border-4 border-red-400 hover:from-red-700 hover:to-red-900 transition-all font-serif text-lg shadow-lg">
                🍺 Join the Crew! 🍺
              </button>
            </div>

            {/* Wanted Poster 3 */}
            <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 border-8 border-amber-700 p-8 shadow-2xl hover:shadow-3xl transition-shadow hover:scale-105 relative"
                 style={{
                   backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20s-20 8.954-20 20zm15.64-5.64c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm5.64 5.64c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zM4 20c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16S4 11.163 4 20z'/%3E%3C/g%3E%3C/svg%3E\")"
                 }}>
              
              {/* Nail holes */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-800 rounded-full shadow-inner"></div>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-red-800 mb-2 font-serif">WANTED</div>
                <div className="w-20 h-1 bg-red-800 mx-auto mb-4"></div>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-amber-800">
                  <Zap className="w-10 h-10 text-yellow-200" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2 font-serif">Telegraph Operator</h3>
                <p className="text-lg text-amber-700 font-serif">Southwest Communications</p>
                <p className="text-amber-600 font-serif">Flagstaff Territory</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-800 mb-2 font-serif">
                  $85,000 - $110,000
                </div>
                <div className="text-green-700 font-serif">Gold Pieces Per Year</div>
              </div>
              
              <p className="text-amber-800 text-center mb-6 font-serif italic leading-relaxed">
                &quot;Fast fingers and sharp mind needed for operating our newfangled communication systems. 
                Messages travel faster than a greased lightning!&quot;
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-amber-700 text-yellow-200 px-3 py-1 text-sm font-serif border-2 border-amber-800">Technology</span>
                <span className="bg-red-700 text-red-200 px-3 py-1 text-sm font-serif border-2 border-red-800">Communications</span>
                <span className="bg-green-700 text-green-200 px-3 py-1 text-sm font-serif border-2 border-green-800">Problem Solving</span>
              </div>
              
              <button className="w-full bg-gradient-to-b from-red-600 to-red-800 text-white font-bold py-4 border-4 border-red-400 hover:from-red-700 hover:to-red-900 transition-all font-serif text-lg shadow-lg">
                ⚡ Ride the Lightning! ⚡
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-b from-amber-600 to-amber-800 text-white px-12 py-6 border-4 border-yellow-500 font-bold text-2xl font-serif hover:from-amber-700 hover:to-amber-900 transition-all transform hover:scale-105 shadow-xl">
              🏜️ Explore More Territory 🏜️
            </button>
          </div>
        </div>
      </section>

      {/* Trading Post Section */}
      <section id="companies" className="py-20 bg-gradient-to-b from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-amber-800 mb-4 font-serif">
              🏪 The Trading Post 🏪
            </h2>
            <p className="text-2xl text-amber-600 font-serif italic">
              &quot;Everything you need for a successful career on the frontier&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-b from-yellow-100 to-yellow-300 border-8 border-amber-700 p-8 text-center shadow-2xl transform hover:scale-105 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-400 shadow-lg">
                <TrendingUp className="w-12 h-12 text-red-200" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4 font-serif">Stake Your Claim</h3>
              <p className="text-amber-700 font-serif text-lg leading-relaxed">
                Plant your flag in the digital frontier. Upload your skills and experience 
                to claim the best opportunities before others prospect the same ground.
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-100 to-yellow-300 border-8 border-amber-700 p-8 text-center shadow-2xl transform hover:scale-105 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-green-400 shadow-lg">
                <Users className="w-12 h-12 text-green-200" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4 font-serif">Join the Posse</h3>
              <p className="text-amber-700 font-serif text-lg leading-relaxed">
                Connect with fellow pioneers, share trail wisdom, and build lasting 
                partnerships. The frontier is big, but we ride together.
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-100 to-yellow-300 border-8 border-amber-700 p-8 text-center shadow-2xl transform hover:scale-105 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-blue-400 shadow-lg">
                <Shield className="w-12 h-12 text-blue-200" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4 font-serif">Sheriff&apos;s Protection</h3>
              <p className="text-amber-700 font-serif text-lg leading-relaxed">
                We keep the bad actors out of town. All employers are verified, 
                all opportunities are legitimate. Your career is safe in our hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Sunset */}
      <section className="py-20 bg-gradient-to-b from-orange-300 via-red-400 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 font-serif drop-shadow-lg">
            Ready to Ride Into the Sunset?
          </h2>
          <p className="text-2xl text-yellow-100 mb-12 font-serif leading-relaxed drop-shadow-lg">
            The frontier awaits, partner. Your next adventure is just over the next ridge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-gradient-to-b from-yellow-500 to-yellow-700 text-amber-900 px-12 py-6 font-bold text-2xl font-serif border-4 border-yellow-300 hover:from-yellow-600 hover:to-yellow-800 transition-all transform hover:scale-105 shadow-xl">
              🤠 Saddle Up! 🤠
            </button>
            <button className="bg-transparent border-4 border-white text-white px-12 py-6 font-bold text-2xl font-serif hover:bg-white hover:text-amber-800 transition-all transform hover:scale-105 shadow-xl">
              🏜️ Scout the Territory 🏜️
            </button>
          </div>
          
          <p className="text-yellow-200 font-serif text-lg mt-8 drop-shadow-lg">
            🌟 No outlaws • Honest work • Gold rush guaranteed 🌟
          </p>
        </div>
      </section>

      {/* Footer - Wooden Boardwalk */}
      <footer className="bg-gradient-to-b from-amber-900 to-amber-950 border-t-8 border-yellow-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full border-4 border-yellow-400 flex items-center justify-center transform rotate-12 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-200 fill-current" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-yellow-200 font-serif tracking-wider drop-shadow-lg">
                    JobFrontier
                  </h1>
                  <p className="text-yellow-300 text-sm font-serif italic">~ Est. 1849 • Stake Your Claim ~</p>
                </div>
              </div>
              <p className="text-yellow-300 max-w-md font-serif text-lg leading-relaxed">
                Where honest work meets honest pay. We&apos;ve been connecting pioneers 
                with opportunities since the gold rush days.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-200 mb-6 font-serif text-xl">Trail Map</h4>
              <div className="space-y-3 text-lg font-serif">
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Wanted Ads</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Trading Posts</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">The Saloon</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Sheriff&apos;s Office</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-200 mb-6 font-serif text-xl">Frontier Code</h4>
              <div className="space-y-3 text-lg font-serif">
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Privacy Policy</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Terms of Service</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Help & Support</a>
                <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-colors block">Contact the Marshal</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t-4 border-yellow-600 text-center">
            <p className="text-yellow-300 font-serif text-lg">
              © 2024 JobFrontier • &quot;Where careers are born and legends are made&quot; • Arizona Territory
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

