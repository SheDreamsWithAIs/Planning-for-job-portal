'use client';

import { useState } from 'react';
import { Search, Users, TrendingUp, ArrowRight, Building2, Award, Target, RefreshCw, Zap, Globe } from 'lucide-react';

export default function JobesthesiaLanding() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [currentBuzzword, setCurrentBuzzword] = useState('Synergistic blockchain solutions for agile transformation');

  const generateBuzzword = () => {
    const prefixes = ['Synergistic', 'Data-driven', 'Scalable', 'Innovative', 'Strategic'];
    const middles = ['blockchain solutions', 'AI algorithms', 'cloud platforms', 'digital ecosystems'];
    const suffixes = ['for agile transformation', 'driving exponential growth', 'through innovative disruption'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    setCurrentBuzzword(`${prefix} ${middle} ${suffix}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-800">Jobesthesia</span>
                <div className="text-xs text-gray-500">Professional Networking • Reimagined</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-slate-700 font-medium transition-colors">
                Solutions
              </a>
              <a href="#talent" className="text-gray-600 hover:text-slate-700 font-medium transition-colors">
                Talent Pool
              </a>
              <a href="#insights" className="text-gray-600 hover:text-slate-700 font-medium transition-colors">
                Industry Insights
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-slate-700 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Finally, Painless Job Hunting
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Disrupt Your Career
              <span className="block text-slate-600">
                Through Strategic Searching
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              <em>Side effects may include:</em> Landing your dream job, expanding your professional network, 
              and actually enjoying the process. Consult your career advisor if networking persists beyond expectations.
            </p>

            {/* Search Interface */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for synergistic opportunities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder='Location (or "Remote-first paradigm")'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg"
                  />
                </div>
                
                <button className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Start Searching
                </button>
              </div>
            </div>

            {/* Buzzword Generator */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Corporate Speak Generator™</h3>
                <button 
                  onClick={generateBuzzword}
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Generate Synergy</span>
                </button>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-700 font-medium italic">&quot;{currentBuzzword}&quot;</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Perfect for LinkedIn posts, cover letters, and impressing absolutely no one
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">847K</div>
                <div className="text-gray-600">Strategic Professionals</div>
                <div className="text-sm text-gray-500">*Actual humans, not bots</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">94%</div>
                <div className="text-gray-600">Success Rate</div>
                <div className="text-sm text-gray-500">*Results may vary by industry</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">Zero</div>
                <div className="text-gray-600">Soul-Crushing Experiences</div>
                <div className="text-sm text-gray-500">*Side effects not guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Strategic Career Opportunities
            </h2>
            <p className="text-slate-600 text-xl">
              (aka &quot;Jobs that don&apos;t make you question your life choices&quot;)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Senior Growth Hacker</h3>
                  <p className="text-slate-600 font-medium">DisruptCorp</p>
                  <p className="text-gray-500 text-sm">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 mb-4">$120k - $150k + Equity</p>
              <p className="text-gray-700 mb-4">Seeking a ninja rockstar to disrupt our growth paradigm through innovative funnel optimization...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#GrowthHacking</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#DataDriven</span>
              </div>
              <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Apply Strategically
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Solutions Architect</h3>
                  <p className="text-slate-600 font-medium">Enterprise Dynamics</p>
                  <p className="text-gray-500 text-sm">Austin, TX</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 mb-4">$160k - $190k</p>
              <p className="text-gray-700 mb-4">Lead our digital transformation initiative through scalable cloud-native solutions...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#CloudArchitecture</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#Strategic</span>
              </div>
              <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Apply Strategically
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">VP of Customer Success</h3>
                  <p className="text-slate-600 font-medium">ScaleUp Ventures</p>
                  <p className="text-gray-500 text-sm">New York, NY</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 mb-4">$180k - $220k</p>
              <p className="text-gray-700 mb-4">Drive customer-centric excellence through innovative relationship optimization strategies...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#CustomerSuccess</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">#Leadership</span>
              </div>
              <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Apply Strategically
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-slate-700 border-2 border-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all flex items-center mx-auto">
              Explore More Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Networking Solutions
            </h2>
            <p className="text-slate-600 text-xl">(Buzzword compliance: 100%)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Talent Acquisition</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Leverage our AI-powered algorithms to synergistically optimize your talent pipeline through data-driven recruitment methodologies.
              </p>
              <p className="text-sm text-gray-500 italic">
                *Translation: We help you find good people without the corporate nonsense
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Network Ecosystem Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Disrupt traditional networking paradigms with our innovative relationship-building framework designed for exponential professional growth.
              </p>
              <p className="text-sm text-gray-500 italic">
                *Translation: Make connections that actually matter
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Career Acceleration Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transform your professional trajectory through our proprietary career optimization engine, delivering measurable ROI across all touchpoints.
              </p>
              <p className="text-sm text-gray-500 italic">
                *Translation: Get promoted faster, with less pain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Disrupt Your Career Paradigm?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join the strategic professional network that delivers measurable ROI on your career investments.
          </p>
          <p className="text-slate-400 mb-8">
            <em>(Side effects may include: getting hired, professional fulfillment, and reduced networking anxiety)</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Optimize Network Now
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-800 transition-all">
              Schedule Consultation
            </button>
          </div>
          
          <p className="text-slate-400 text-sm mt-6">
            Enterprise-grade security • GDPR compliant • 0% buzzword-free guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Jobesthesia</span>
                  <div className="text-xs text-gray-400">Professional Networking • Reimagined</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Finally, a job platform that admits networking can be painful. We&apos;re here to make it less terrible.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Strategic Solutions</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors block">Talent Acquisition</a>
                <a href="#" className="hover:text-white transition-colors block">Network Optimization</a>
                <a href="#" className="hover:text-white transition-colors block">Career Acceleration</a>
                <a href="#" className="hover:text-white transition-colors block">Enterprise Solutions</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors block">Industry Insights</a>
                <a href="#" className="hover:text-white transition-colors block">Thought Leadership</a>
                <a href="#" className="hover:text-white transition-colors block">Career Development</a>
                <a href="#" className="hover:text-white transition-colors block">Networking Events</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Jobesthesia. Professional networking without the pain.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

