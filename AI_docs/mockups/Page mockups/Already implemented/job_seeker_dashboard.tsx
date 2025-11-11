import React, { useState } from 'react';
import { Leaf, Heart, Search, FileText, Star, Calendar, TrendingUp, Plus, Bell, Settings, User, Briefcase, Clock, CheckCircle, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';

const JobSeekerDashboard = () => {
  const [currentReminder, setCurrentReminder] = useState("Remember: Every 'no' brings you closer to your perfect 'yes'.");

  const healthyReminders = [
    "Remember: Every 'no' brings you closer to your perfect 'yes'.",
    "Your worth isn't determined by application responses.",
    "It's okay to take breaks from job searching when you need them.",
    "Quality applications matter more than quantity.",
    "You're allowed to have standards for how you want to be treated.",
    "Job hunting is temporary - your resilience is permanent."
  ];

  const generateReminder = () => {
    const randomIndex = Math.floor(Math.random() * healthyReminders.length);
    setCurrentReminder(healthyReminders[randomIndex]);
  };

  const applications = [
    { id: 1, company: "TechFlow Solutions", role: "Marketing Coordinator", status: "Interview Scheduled", appliedDate: "2 days ago", nextStep: "Video interview tomorrow at 2 PM" },
    { id: 2, company: "DataCore Industries", role: "Business Analyst", status: "Under Review", appliedDate: "1 week ago", nextStep: "Waiting for initial response" },
    { id: 3, company: "Summit Financial", role: "Customer Success Associate", status: "Application Submitted", appliedDate: "3 days ago", nextStep: "Application in queue for review" }
  ];

  const recommendations = [
    { id: 1, company: "InnovateNow Corp", role: "Project Manager", match: "94%", reason: "Perfect match for your project coordination experience" },
    { id: 2, company: "Metro Healthcare Group", role: "Administrative Assistant", match: "89%", reason: "Aligns with your organizational and communication skills" },
    { id: 3, company: "BlueTech Systems", role: "Sales Representative", match: "85%", reason: "Great fit for your customer service background" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Shared Header */}
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
              <button className="text-green-800 font-semibold">Dashboard</button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">Job Search</button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">Profile</button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">Applications</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-green-700 hover:text-green-800 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-green-700 hover:text-green-800 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-amber-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-green-700" />
              </div>
              <div className="bg-gradient-to-r from-amber-100 to-green-100 text-green-800 px-4 py-2 rounded-full font-medium border border-green-200 shadow-sm" style={{
                animation: 'glow 2s ease-in-out infinite alternate',
                boxShadow: '0 0 10px rgba(255, 255, 200, 0.4)'
              }}>
                <style jsx>{`
                  @keyframes glow {
                    from {
                      box-shadow: 0 0 10px rgba(255, 255, 200, 0.4), 0 0 20px rgba(255, 255, 200, 0.2);
                    }
                    to {
                      box-shadow: 0 0 20px rgba(255, 255, 200, 0.6), 0 0 30px rgba(255, 255, 200, 0.3);
                    }
                  }
                `}</style>
                ✨ You have worth!
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-2 flex items-center">
            Good morning, Alex! 
            <Leaf className="w-8 h-8 ml-3 text-green-600" />
          </h1>
          <p className="text-green-700">Ready to continue nurturing your career growth?</p>
        </div>

        {/* Daily Reminder */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-800 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Your Daily Reminder
            </h3>
            <button 
              onClick={generateReminder}
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">New Reminder</span>
            </button>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-amber-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium italic">"{currentReminder}"</p>
          </div>
        </div>

        {/* Quick Stats with Integrated Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-700">Applications This Week</h3>
              <Briefcase className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-900">3</p>
            <p className="text-xs text-green-600 mb-4 flex items-center">
              Quality over quantity 
              <Heart className="w-3 h-3 ml-1 text-green-500" />
            </p>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center text-sm">
                <Search className="w-4 h-4 mr-2" />
                Search New Jobs
              </button>
              <button 
                onClick={() => document.getElementById('applications-section').scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-green-50 text-green-700 border border-green-300 py-2 px-4 rounded-lg font-medium hover:bg-green-100 transition-all flex items-center justify-center text-sm"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View Applications
              </button>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-700">Interviews Scheduled</h3>
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-900">1</p>
            <p className="text-xs text-green-600 mb-4 flex items-center">
              You've got this!
              <Calendar className="w-3 h-3 ml-1 text-green-500" />
            </p>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Manage Interviews
            </button>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-700">Profile Views</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-900">12</p>
            <p className="text-xs text-green-600 mb-4 flex items-center">
              People notice you 
              <Star className="w-3 h-3 ml-1 text-amber-500" />
            </p>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center text-sm">
              <User className="w-4 h-4 mr-2" />
              Update Profile
            </button>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-700">New Matches</h3>
              <Star className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-900">5</p>
            <p className="text-xs text-green-600 mb-4 flex items-center">
              Great opportunities waiting!
              <TrendingUp className="w-3 h-3 ml-1 text-green-500" />
            </p>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center text-sm">
                <FileText className="w-4 h-4 mr-2" />
                Update Resume
              </button>
              <button 
                onClick={() => document.getElementById('recommendations-section').scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-green-50 text-green-700 border border-green-300 py-2 px-4 rounded-lg font-medium hover:bg-green-100 transition-all flex items-center justify-center text-sm"
              >
                <Star className="w-4 h-4 mr-2" />
                View Matches
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <div id="applications-section" className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-green-900">Your Applications</h2>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-white/60 rounded-lg p-4 border border-green-100">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-green-900">{app.role}</h3>
                      <p className="text-sm text-green-700">{app.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {app.status === 'Interview Scheduled' && <Calendar className="w-4 h-4 text-amber-600" />}
                      {app.status === 'Under Review' && <Clock className="w-4 h-4 text-blue-600" />}
                      {app.status === 'Application Submitted' && <CheckCircle className="w-4 h-4 text-green-600" />}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        app.status === 'Interview Scheduled' ? 'bg-amber-100 text-amber-800' :
                        app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mb-2">Applied {app.appliedDate}</p>
                  <p className="text-sm text-green-700">{app.nextStep}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Track New Application
            </button>
          </div>

          {/* Recommendations */}
          <div id="recommendations-section" className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-green-900">Recommended for You</h2>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                See More
              </button>
            </div>
            
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-white/60 rounded-lg p-4 border border-green-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-900">{rec.role}</h3>
                      <p className="text-sm text-green-700">{rec.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-medium text-green-800">{rec.match} match</span>
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mb-3 flex items-start">
                    <span className="flex items-center mr-2">
                      <span className="font-medium">Harmony says</span>
                      <Sparkles className="w-3 h-3 ml-1 text-amber-500" />
                    </span>
                    <span className="italic">"{rec.reason}"</span>
                  </p>
                  <button className="text-green-700 hover:text-green-800 font-medium text-sm transition-colors">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Footer */}
      <footer className="bg-green-950 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">Career Harmony</span>
                <div className="text-xs text-green-300">Work-Life Balance • Professional Growth</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6 text-sm text-green-300">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <button className="hover:text-white transition-colors">Terms of Service</button>
              </div>
              <p className="text-green-300 text-sm">
                © 2024 Career Harmony
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobSeekerDashboard;