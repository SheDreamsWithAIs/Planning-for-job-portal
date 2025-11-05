'use client';

import { useState } from 'react';
import { Search, Briefcase, Users, Zap, Star, ArrowRight, Heart, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

export default function JobJoyLanding() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                JobJoy
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                How It Works
              </a>
              <a href="#for-employers" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                For Employers
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Success Stories
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Log In
              </button>
              <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Spark Joy in Your Career Journey!
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Work That 
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                {" "}Sparks Joy!
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Say goodbye to soul-crushing job searches! Our AI-powered platform makes finding your dream job as joyful as Marie Kondo organizing your closet.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="What kind of work sparks joy for you?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent text-lg"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Where do you want to thrive?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent text-lg"
                  />
                </div>
                
                <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Find Joy
                </button>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              💼 <strong>2,847</strong> joyful jobs posted this week • 
              ⭐ <strong>1,293</strong> dream matches made • 
              🎉 <strong>98%</strong> happiness rate
            </p>
          </div>
        </div>
      </section>

      {/* Sample Jobs Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Joyful Opportunities 
              <span className="text-pink-500">Waiting for You</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real jobs from real companies who care about employee happiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {[
              {
                title: "Senior UX Designer",
                company: "Bloom Creative",
                location: "Remote",
                salary: "$85k - $110k",
                tags: ["Creative Freedom", "Work-Life Balance", "Remote-First"],
                match: "98% match"
              },
              {
                title: "Full Stack Developer",
                company: "Happy Code Co.",
                location: "San Francisco, CA",
                salary: "$120k - $150k",
                tags: ["Learning Culture", "Flexible Hours", "Great Benefits"],
                match: "94% match"
              },
              {
                title: "Product Manager",
                company: "Sunshine Tech",
                location: "Austin, TX",
                salary: "$100k - $130k",
                tags: ["Innovation", "Team Collaboration", "Growth Mindset"],
                match: "91% match"
              },
              {
                title: "Marketing Specialist",
                company: "Bright Ideas Co.",
                location: "Denver, CO",
                salary: "$65k - $85k",
                tags: ["Creativity", "Growth Opportunities", "Fun Team"],
                match: "89% match"
              },
              {
                title: "DevOps Engineer",
                company: "Cloud Nine Tech",
                location: "Remote",
                salary: "$110k - $140k",
                tags: ["Remote Culture", "Learning Budget", "Flexible PTO"],
                match: "92% match"
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{job.title}</h3>
                    <p className="text-orange-600 font-medium truncate">{job.company}</p>
                    <p className="text-gray-500 text-sm truncate">{job.location}</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                    {job.match}
                  </div>
                </div>
                
                <p className="text-lg font-bold text-gray-900 mb-4">{job.salary}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {job.tags.length > 2 && (
                    <span className="text-gray-400 text-xs px-2 py-1">+{job.tags.length - 2}</span>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Apply with Joy
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all flex items-center mx-auto">
              See All Joyful Jobs
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Make Job Hunting 
              <span className="text-orange-500"> Joyful</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your career journey from stressful to spectacular!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Spark Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your resume and tell us what makes you light up at work. Our AI learns what truly sparks joy for you!
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Joyful Matches</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized job recommendations that align with your values, skills, and happiness goals. No more endless scrolling!
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply with Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                One-click applications and real-time tracking. Watch your career bloom as you move through each joyful step!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="for-employers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hiring Happy People
                <span className="text-pink-500"> Makes Everyone Joyful</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find candidates who are genuinely excited about your mission. Our AI matches personalities, values, and growth goals—not just skills.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">AI-powered culture fit matching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Happiness-focused candidate profiles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Streamlined, joyful hiring process</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Start Hiring Happy People
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-pink-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Happy Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-pink-500">89%</div>
                    <div className="text-gray-600">Higher retention rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-500">3.2x</div>
                    <div className="text-gray-600">Faster hiring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500">94%</div>
                    <div className="text-gray-600">Culture fit success</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-500">€127k</div>
                    <div className="text-gray-600">Average cost savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Spark Joy in Your Career? ✨
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of happy job seekers and employers who&apos;ve found their perfect match
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              Find Your Dream Job
            </button>
            <button className="bg-purple-600 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
              Post a Joyful Job
            </button>
          </div>
          
          <p className="text-white/80 text-sm mt-6">
            Free to join • No credit card required • Happiness guaranteed 😊
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">JobJoy</span>
            </div>
            
            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Help Center</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 JobJoy. Made with 💖 for happier careers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

