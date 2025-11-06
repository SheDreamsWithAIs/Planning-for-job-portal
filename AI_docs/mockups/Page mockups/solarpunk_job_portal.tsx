import React, { useState } from 'react';
import { Search, Users, TrendingUp, ArrowRight, Building2, Award, Target, RefreshCw, Zap, Globe, Leaf, Sun } from 'lucide-react';

const CareerHarmony = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const healthyReminders = [
    'Your worth is not defined by your job title or salary.',
    'Rejection is redirection—the right opportunity is waiting for you.',
    'It\'s okay to take breaks and rest during your job search.',
    'Your skills and experience have value, even if one employer doesn\'t recognize it.',
    'Job hunting is a process, not a reflection of your capabilities.',
    'You deserve work that respects your boundaries and wellbeing.',
    'Every "no" brings you closer to the right "yes".',
    'Your career journey is valid, regardless of how long it takes.',
    'It\'s perfectly normal to feel discouraged—give yourself grace.',
    'You are more than your resume or LinkedIn profile.',
    'Quality over quantity—better to apply to fewer jobs if your mental health is already frayed.',
    'Your mental health matters more than landing any particular job.',
    'Rejection does not diminish your value as a person.',
    'Take care of yourself first—everything else can wait.',
    'Your path is uniquely yours—comparison robs you of joy.'
  ];

  const [currentReminder, setCurrentReminder] = useState(healthyReminders[0]);

  const generateReminder = () => {
    const randomIndex = Math.floor(Math.random() * healthyReminders.length);
    setCurrentReminder(healthyReminders[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">Career Harmony</span>
                <div className="text-xs text-green-600">Work-Life Balance • Professional Growth</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Solutions
              </a>
              <a href="#CareerSearch" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Career Search
              </a>
              <a href="#AboutUs" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                About Us
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-sm">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
              Cultivate Your Career
              <span className="block bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent">
                In Harmony with Your Best Self
              </span>
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-amber-100 rounded-full text-green-800 text-sm font-medium border border-green-200">
                <Sun className="w-4 h-4 mr-2" />
                Work That Nurtures Career and Soul
              </div>
            </div>
            
            <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              <em>Work in harmony:</em> Find careers that honor your whole self—where you don't have to sacrifice 
              your wellbeing, values, or dignity just to make a living.
            </p>

            {/* Search Interface */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-6 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Location (City, State)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
                  />
                </div>
                
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center shadow-sm">
                  <Target className="w-5 h-5 mr-2" />
                  Search Future Growth Opportunities
                </button>
              </div>
            </div>

            {/* Healthy Reminders Generator */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-green-200 p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-800">Healthy Reminders™</h3>
                <button 
                  onClick={generateReminder}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">New Reminder</span>
                </button>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-amber-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium italic">&quot;{currentReminder}&quot;</p>
              </div>
              <p className="text-xs text-green-600 mt-2">
                *Remember that job hunting outcomes are not a reflection of your personal worth.
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
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
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Regenerative</span>
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Community</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Cultivate Change
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-green-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-600" />
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
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#TechForGood</span>
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Collaborative</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Cultivate Change
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 hover:border-green-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
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
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#SystemsThinking</span>
                <span className="bg-gradient-to-r from-green-100 to-amber-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">#Purpose</span>
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
      <section id="solutions" className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Sustainable Workforce Solutions
            </h2>
            <p className="text-green-700 text-xl">(Growing people and community together)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-green-200 p-8 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center mb-6">
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center mb-6">
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-amber-600" />
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
              Search Future Growth Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Career Harmony</span>
                  <div className="text-xs text-green-300">Work-Life Balance • Professional Growth</div>
                </div>
              </div>
              <p className="text-green-200 max-w-md">
                Cultivating careers that honor your whole self. Because you shouldn't have to sacrifice your dignity, 
                wellbeing, or values just to make a living.
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
              © 2024 Career Harmony. Finding balance between work and life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerHarmony;
