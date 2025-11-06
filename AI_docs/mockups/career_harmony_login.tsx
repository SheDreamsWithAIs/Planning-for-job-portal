import React, { useState } from 'react';
import { Leaf, Mail, Lock, Eye, EyeOff, Heart } from 'lucide-react';

const CareerHarmonyLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
    alert('Welcome back to Career Harmony! 🌱');
  };

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
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Solutions
              </button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Career Search
              </button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                About Us
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Join Community
              </button>
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
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-sm w-full space-y-8 relative z-10">
          {/* Page Content Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-green-700 mb-8">
              Continue cultivating your purposeful career
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-green-200 p-8">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-green-800 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-green-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-green-500" />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80 transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-green-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-green-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-400"
                  />
                  <span className="text-sm text-green-700">Remember me</span>
                </label>
                
                <button className="text-sm text-green-700 hover:text-green-800 underline transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Sign In
              </button>
            </div>

            {/* Sign-up link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-green-700">
                New to Career Harmony?{' '}
                <button className="font-medium text-green-800 underline hover:text-green-900 transition-colors">
                  Join our community
                </button>
              </p>
            </div>
          </div>

          {/* Welcome Back Message */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-green-200 p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-amber-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <h3 className="font-semibold text-green-800 mb-2">Welcome Back to Your Journey</h3>
            <p className="text-sm text-green-700">
              Ready to continue building a career that honors your whole self? 
              Your community is here to support your growth.
            </p>
          </div>
        </div>
      </div>

      {/* Simplified Footer */}
      <footer className="bg-green-950 text-white py-8">
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

export default CareerHarmonyLogin;