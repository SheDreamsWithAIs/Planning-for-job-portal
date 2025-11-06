import React, { useState } from 'react';
import { Leaf, User, Mail, Phone, MapPin, Calendar, FileText, Upload, Camera, Edit3, Save, X, Check, Star, Briefcase, GraduationCap, Award, Heart, Bell, Settings, Sparkles, Zap } from 'lucide-react';

const JobSeekerProfile = () => {
  /*
   * DESIGN PHILOSOPHY for Career Harmony Profile Page:
   * 
   * 1. EMPOWERMENT OVER OPTIMIZATION: This page focuses on helping users tell their authentic 
   *    story rather than optimizing them for algorithms. Users are likely feeling vulnerable 
   *    and disenfranchised from traditional job searching.
   * 
   * 2. POSITIVE PSYCHOLOGY: Language emphasizes strengths and progress rather than deficiencies.
   *    - "Profile Strength" not "Profile Completion"
   *    - "You're doing great!" rather than "Incomplete sections"
   *    - Tips explain benefits rather than demanding compliance
   * 
   * 3. GENTLE GUIDANCE: Suggestions feel supportive rather than prescriptive
   *    - "Tell employers what makes you unique" vs "Write professional summary"
   *    - Micro-copy explains why each section helps them, not just what to fill out
   * 
   * 4. HUMAN-CENTERED APPROACH: No AI suggestions on this page - this is about the person 
   *    building confidence in their own story and value
   * 
   * 5. VISUAL PROGRESS: Progress bars and checkmarks celebrate current achievements while 
   *    gently encouraging next steps
   */

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@email.com',
    phone: '(555) 123-4567',
    location: 'Phoenix, AZ',
    title: 'Marketing Professional',
    summary: 'Passionate marketing professional with 3+ years of experience in digital marketing, content creation, and customer engagement. I believe in building authentic connections between brands and their communities.',
    experience: [
      {
        company: 'Digital Marketing Agency',
        role: 'Marketing Coordinator',
        duration: '2022 - Present',
        description: 'Managed social media campaigns, created content calendars, and increased client engagement by 40%.'
      }
    ],
    projects: [
      {
        title: 'Community Food Drive Website',
        duration: '2023',
        description: 'Built a website to coordinate local food donations, helping distribute over 500 meals to families in need.',
        technologies: 'HTML, CSS, JavaScript'
      }
    ],
    education: [
      {
        school: 'Arizona State University',
        degree: 'Bachelor of Arts in Communications',
        year: '2022'
      }
    ],
    skills: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'Google Analytics', 'Project Management']
  });

  // Completion tracking - focuses on celebrating progress rather than highlighting gaps
  const completionItems = [
    { label: 'Personal Information', completed: true, description: 'Contact details and location' },
    { label: 'Professional Summary', completed: true, description: 'Brief overview of your experience' },
    { label: 'Work Experience', completed: true, description: 'Employment history and achievements' },
    { label: 'Projects & Initiatives', completed: true, description: 'Personal projects and volunteer work' },
    { label: 'Education', completed: true, description: 'Academic background' },
    { label: 'Skills & Expertise', completed: true, description: 'Technical and soft skills' },
    { label: 'Resume Upload', completed: false, description: 'Current resume document' },
    { label: 'Profile Photo', completed: false, description: 'Professional headshot' }
  ];

  const completedCount = completionItems.filter(item => item.completed).length;
  const completionPercentage = Math.round((completedCount / completionItems.length) * 100);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
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
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">Dashboard</button>
              <button className="text-green-700 hover:text-green-800 font-medium transition-colors">Job Search</button>
              <button className="text-green-800 font-semibold">Profile</button>
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
                You have worth!
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-900 mb-2">Your Profile</h1>
            <p className="text-green-700">Tell your professional story with confidence</p>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center"
          >
            {isEditing ? <Save className="w-5 h-5 mr-2" /> : <Edit3 className="w-5 h-5 mr-2" />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Completion */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Completion Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-800">Profile Strength</h3>
                <span className="text-2xl font-bold text-green-900">{completionPercentage}%</span>
              </div>
              
              <div className="w-full bg-green-100 rounded-full h-3 mb-6">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>

              <div className="space-y-3">
                {completionItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      item.completed ? 'bg-green-500' : 'bg-gray-200'
                    }`}>
                      {item.completed && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${item.completed ? 'text-green-800' : 'text-gray-600'}`}>
                        {item.label}
                      </p>
                      <p className="text-xs text-green-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ENCOURAGEMENT CARD: Key UX principle - always celebrate progress before suggesting improvements.
                   This reduces anxiety and builds confidence rather than creating pressure. */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Heart className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">You're doing great!</span>
                </div>
                <p className="text-sm text-green-700">
                  Adding a resume and photo will help employers get to know the amazing professional you are.
                </p>
              </div>
            </div>

            {/* Resume Upload Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </h3>
              
              <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                <Upload className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="text-sm font-medium text-green-800 mb-1">Upload your resume</p>
                <p className="text-xs text-green-600 mb-4">PDF, DOC, or DOCX files accepted</p>
                <button className="bg-yellow-100 text-green-700 border border-green-300 px-4 py-2 rounded-lg font-medium hover:bg-yellow-200 transition-all text-sm">
                  Choose File
                </button>
              </div>
              
              {/* SUPPORTIVE TIPS: Notice the language focuses on benefits to the user rather than 
                   demands from the system. This respects user agency and reduces anxiety. */}
              <p className="text-xs text-green-600 mt-3">
                <span className="font-medium">Tip:</span> A well-formatted resume helps employers quickly understand your experience and achievements.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-green-900 flex items-center">
                  <User className="w-6 h-6 mr-2" />
                  Personal Information
                </h3>
                
                {/* Profile Photo */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-amber-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900">{profileData.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900">{profileData.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900">{profileData.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-green-800 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                      placeholder="City, State"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900">{profileData.location}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2" />
                Professional Summary
              </h3>
              
              <div>
                {/* EMPOWERING LABELS: "Tell employers what makes you unique" positions the user as 
                     having inherent value to share, rather than needing to prove themselves */}
                <label className="block text-sm font-medium text-green-800 mb-2">
                  Tell employers what makes you unique
                </label>
                {isEditing ? (
                  <textarea
                    value={profileData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    placeholder="Share your professional story, key strengths, and career goals..."
                  />
                ) : (
                  <p className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-900 leading-relaxed">{profileData.summary}</p>
                )}
                <p className="text-xs text-green-600 mt-2">
                  <span className="font-medium">Tip:</span> Focus on your strengths, achievements, and what you are passionate about in your career.
                </p>
              </div>
            </div>

            {/* Projects & Initiatives */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Projects & Initiatives
              </h3>
              
              {/* INCLUSIVE DESIGN: This section celebrates all types of contributions - personal projects,
                   volunteer work, side hustles, community initiatives. Not everyone has traditional work
                   experience, but everyone has valuable contributions to highlight. */}
              
              {profileData.projects.map((project, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-green-900">{project.title}</h4>
                      {project.technologies && (
                        <p className="text-green-600 text-sm">Technologies: {project.technologies}</p>
                      )}
                    </div>
                    <span className="text-sm text-green-600">{project.duration}</span>
                  </div>
                  <p className="text-green-800 text-sm">{project.description}</p>
                </div>
              ))}
              
              <button className="w-full bg-yellow-100 text-green-700 border border-green-300 py-3 rounded-lg font-medium hover:bg-yellow-200 transition-all flex items-center justify-center">
                <Zap className="w-4 h-4 mr-2" />
                Add Project
              </button>
              
              {/* ENCOURAGING GUIDANCE: Shows value of diverse experiences beyond traditional employment */}
              <p className="text-xs text-green-600 mt-3">
                <span className="font-medium">Showcase your impact:</span> Include volunteer work, personal projects, community initiatives, or creative endeavors that demonstrate your skills and values.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Work Experience
              </h3>
              
              {profileData.experience.map((exp, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-green-900">{exp.role}</h4>
                      <p className="text-green-700">{exp.company}</p>
                    </div>
                    <span className="text-sm text-green-600">{exp.duration}</span>
                  </div>
                  <p className="text-green-800 text-sm">{exp.description}</p>
                </div>
              ))}
              
              <button className="w-full bg-yellow-100 text-green-700 border border-green-300 py-3 rounded-lg font-medium hover:bg-yellow-200 transition-all flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Add Experience
              </button>
            </div>

            {/* Education & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h3>
                
                {profileData.education.map((edu, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-green-900">{edu.degree}</h4>
                    <p className="text-green-700 text-sm">{edu.school}</p>
                    <p className="text-green-600 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Skills
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {profileData.skills.map((skill, index) => (
                    <span key={index} className="bg-yellow-50 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-yellow-100 text-green-700 border border-green-300 py-2 rounded-lg font-medium hover:bg-yellow-200 transition-all text-sm">
                  Add Skills
                </button>
              </div>
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

export default JobSeekerProfile;