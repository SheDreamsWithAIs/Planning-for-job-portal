'use client';

import { useState } from 'react';
import { Search, Users, TrendingUp, ArrowRight, Building2, Award, Target, RefreshCw, Zap, Globe, Leaf, Sun } from 'lucide-react';

export default function GreenCareers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [currentBuzzword, setCurrentBuzzword] = useState('Sustainable innovation driving regenerative growth');

  const generateBuzzword = () => {
    const prefixes = ['Sustainable', 'Regenerative', 'Collaborative', 'Holistic', 'Purpose-driven'];
    const middles = ['innovation ecosystems', 'community solutions', 'growth patterns', 'work environments'];
    const suffixes = ['for positive impact', 'driving regenerative growth', 'building better futures'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    setCurrentBuzzword(`${prefix} ${middle} ${suffix}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">GreenCareers</span>
                <div className="text-xs text-green-600">Sustainable Work • Regenerative Growth</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Solutions
              </a>
              <a href="#talent" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Talent Community
              </a>
              <a href="#insights" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Future Insights
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-sm">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full text-green-800 text-sm font-medium border border-green-200">
                <Sun className="w-4 h-4 mr-2" />
                Work That Nurtures People & Planet
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
              Cultivate Your Career
              <span className="block bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
                In Harmony with Nature
              </span>
            </h1>
            
            <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              <em>Grow with purpose:</em> Discover meaningful work that regenerates communities, 
              nurtures personal growth, and creates a thriving future for all life on Earth.
            </p>

            {/* Search Interface */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-6 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for regenerative opportunities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder='Location (or "Wherever good grows")'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
                  />
                </div>
                
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center shadow-sm">
                  <Target className="w-5 h-5 mr-2" />
                  Plant Seeds
                </button>
              </div>
            </div>

            {/* Inspiration Generator */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-green-200 p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-800">Purpose-Driven Vision Generator™</h3>
                <button 
                  onClick={generateBuzzword}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Cultivate Vision</span>
                </button>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium italic">&quot;{currentBuzzword}&quot;</p>
              </div>
              <p className="text-xs text-green-600 mt-2">
                *Perfect for mission statements that actually mean something
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">247K</div>
                <div className="text-green-600">Purpose-Driven Professionals</div>
                <div className="text-sm text-green-500">*Real humans creating real change</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">98%</div>
                <div className="text-green-600">Workplace Satisfaction</div>
                <div className="text-sm text-green-500">*When work aligns with values</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">∞</div>
                <div className="text-green-600">Potential for Good</div>
                <div className="text-sm text-green-500">*Together we grow stronger</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Meaningful Career Opportunities
            </h2>
            <p className="text-green-700 text-xl">
              (Work that nourishes your soul and the world)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-green-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-900 mb-1">Sustainability Director</h3>
                  <p className="text-green-700 font-medium">EcoGrowth Co.</p>
                  <p className="text-green-600 text-sm">Portland, OR</p>
                </div>
              </div>
              <p className="text-lg font-bold text-green-800 mb-4">$85k - $105k + Impact Bonus</p>
              <p className="text-green-700 mb-4">Lead regenerative practices that heal communities while growing sustainable business solutions...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Regenerative</span>
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Community</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Cultivate Change
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-green-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-900 mb-1">Community Tech Lead</h3>
                  <p className="text-green-700 font-medium">Bright Future Labs</p>
                  <p className="text-green-600 text-sm">Remote + Local Hubs</p>
                </div>
              </div>
              <p className="text-lg font-bold text-green-800 mb-4">$95k - $120k</p>
              <p className="text-green-700 mb-4">Build technology that empowers communities and creates equitable access to digital resources...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#TechForGood</span>
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Collaborative</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Cultivate Change
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-green-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-900 mb-1">Regenerative Business Strategist</h3>
                  <p className="text-green-700 font-medium">Living Systems Inc</p>
                  <p className="text-green-600 text-sm">Boulder, CO</p>
                </div>
              </div>
              <p className="text-lg font-bold text-green-800 mb-4">$105k - $135k</p>
              <p className="text-green-700 mb-4">Design business models that thrive by giving back more than they take from the world...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#SystemsThinking</span>
                <span className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Purpose</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Cultivate Change
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white/80 backdrop-blur-sm text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all flex items-center mx-auto shadow-sm">
              Explore More Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Regenerative Workforce Solutions
            </h2>
            <p className="text-green-700 text-xl">(Growing people and planet together)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-green-200 p-8 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Purpose-Driven Talent Matching</h3>
              <p className="text-green-700 leading-relaxed mb-4">
                Connect with opportunities that align your skills with your values, creating meaningful work that contributes to a thriving world.
              </p>
              <p className="text-sm text-green-600 italic">
                *Because your career should feed your soul, not just your bank account
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-green-200 p-8 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Community-Centered Networks</h3>
              <p className="text-green-700 leading-relaxed mb-4">
                Build authentic relationships with like-minded professionals who share your commitment to creating positive change in the world.
              </p>
              <p className="text-sm text-green-600 italic">
                *Real connections that grow into lasting partnerships
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-green-200 p-8 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Holistic Growth Platform</h3>
              <p className="text-green-700 leading-relaxed mb-4">
                Develop your whole self through work that challenges you professionally while nurturing your personal growth and well-being.
              </p>
              <p className="text-sm text-green-600 italic">
                *Career development that honors your humanity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Purpose-Driven Career?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join a community of professionals cultivating meaningful work that nurtures people, communities, and our planet.
          </p>
          <p className="text-green-200 mb-8">
            <em>(Side effects may include: deep fulfillment, authentic relationships, and helping heal the world)</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors">
              Plant Your Career Seeds
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-800 transition-all">
              Schedule Growth Session
            </button>
          </div>
          
          <p className="text-green-200 text-sm mt-6">
            Community-first approach • Regenerative practices • 100% authentic connections
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">GreenCareers</span>
                  <div className="text-xs text-green-300">Sustainable Work • Regenerative Growth</div>
                </div>
              </div>
              <p className="text-green-200 max-w-md">
                Cultivating careers that nourish people and planet. Because work should be a force for good in the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-100">Growing Solutions</h4>
              <div className="space-y-2 text-sm text-green-300">
                <a href="#" className="hover:text-white transition-colors block">Purpose-Driven Matching</a>
                <a href="#" className="hover:text-white transition-colors block">Community Networks</a>
                <a href="#" className="hover:text-white transition-colors block">Holistic Growth</a>
                <a href="#" className="hover:text-white transition-colors block">Regenerative Business</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-100">Nurturing Resources</h4>
              <div className="space-y-2 text-sm text-green-300">
                <a href="#" className="hover:text-white transition-colors block">Future of Work</a>
                <a href="#" className="hover:text-white transition-colors block">Sustainable Leadership</a>
                <a href="#" className="hover:text-white transition-colors block">Community Building</a>
                <a href="#" className="hover:text-white transition-colors block">Wellness at Work</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 text-sm text-green-300 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            </div>
            <p className="text-green-300 text-sm">
              © 2024 GreenCareers. Growing together toward a thriving future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

