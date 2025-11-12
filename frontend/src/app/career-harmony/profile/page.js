'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, FileText, Upload, Edit3, Save, Check, Heart } from 'lucide-react';
import CareerHarmonyHeader from '@/components/CareerHarmony/Header';
import CareerHarmonyFooter from '@/components/CareerHarmony/Footer';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
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
        description: 'Built a website to coordinate local food donations, helping distribute over 500 meals to families in need.'
      }
    ],
    education: [
      {
        school: 'Arizona State University',
        degree: 'Bachelor of Arts in Marketing',
        duration: '2018-2022',
        gpa: '3.7'
      }
    ],
    skills: ['Social Media Marketing', 'Content Creation', 'Google Analytics', 'Email Marketing', 'Brand Strategy'],
    awards: []
  });

  // Calculate completion percentage
  const completionItems = [
    { completed: !!profileData.summary, label: 'Professional Summary', description: 'Tell employers what makes you unique' },
    { completed: profileData.experience.length > 0, label: 'Work Experience', description: 'Show your career progression' },
    { completed: false, label: 'Resume Upload', description: 'Share your detailed background' },
    { completed: profileData.skills.length > 0, label: 'Key Skills', description: 'Highlight your expertise' },
    { completed: profileData.education.length > 0, label: 'Education', description: 'Share your learning background' },
    { completed: profileData.projects.length > 0, label: 'Projects', description: 'Showcase your accomplishments' }
  ];

  const completedCount = completionItems.filter(item => item.completed).length;
  const completionPercentage = Math.round((completedCount / completionItems.length) * 100);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addExperience = () => {
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', role: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (index, field, value) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addSkill = (skill) => {
    if (skill.trim() && !profileData.skills.includes(skill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skill.trim()]
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const validateProfile = () => {
    const newErrors = {};
    
    if (!profileData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!profileData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!profileData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(profileData.email)) newErrors.email = 'Please enter a valid email';
    
    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errorCount: Object.keys(newErrors).length };
  };

  const handleSave = () => {
    const validation = validateProfile();
    
    if (validation.isValid) {
      setIsEditing(false);
      setShowToast(false);
      // TODO: Save profile data to backend
    } else {
      setToastMessage(`Please fix ${validation.errorCount} issue${validation.errorCount > 1 ? 's' : ''} to save your profile`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      <CareerHarmonyHeader currentPage="profile" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8 relative">
          {/* Toast Notification */}
          {showToast && (
            <div className="absolute top-16 right-0 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-10 animate-pulse">
              <span className="text-sm font-medium">{toastMessage}</span>
            </div>
          )}
          
          <div>
            <h1 className="text-3xl font-bold text-green-900 mb-2">Your Profile</h1>
            <p className="text-green-700">Tell your professional story with confidence</p>
          </div>
          <button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
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
                <h3 className="text-lg font-semibold text-green-800">Profile Completion</h3>
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

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Heart className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">You're doing great!</span>
                </div>
                <p className="text-sm text-green-700">
                  Adding your resume and completing all sections will help employers get to know the amazing professional you are.
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
                <button className="bg-amber-100 text-green-700 border border-green-300 px-4 py-2 rounded-lg font-medium hover:bg-amber-200 transition-all text-sm">
                  Choose File
                </button>
              </div>
              
              <p className="text-xs text-green-600 mt-3">
                <span className="font-medium">Tip:</span> A well-formatted resume helps employers quickly understand your experience and achievements.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-6">Basic Information</h3>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white/80 ${
                        errors.firstName 
                          ? 'border-red-300 focus:ring-red-400' 
                          : 'border-green-300 focus:ring-green-400'
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white/80 ${
                        errors.lastName 
                          ? 'border-red-300 focus:ring-red-400' 
                          : 'border-green-300 focus:ring-green-400'
                      }`}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Email *</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent bg-white/80 ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-400' 
                          : 'border-green-300 focus:ring-green-400'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-green-800 mb-2">Location</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-green-800 mb-2">Professional Title</label>
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                      placeholder="e.g. Marketing Professional"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-green-900">{profileData.firstName} {profileData.lastName}</h4>
                    <p className="text-green-700 text-lg">{profileData.title}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-green-700">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {profileData.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {profileData.phone}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {profileData.location}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Professional Summary */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Professional Summary</h3>
              
              {isEditing ? (
                <div>
                  <textarea
                    value={profileData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80 resize-none"
                    placeholder="Share what makes you unique as a professional..."
                  />
                  <p className="text-xs text-green-600 mt-2">
                    <span className="font-medium">Tip:</span> Focus on your passion, key strengths, and what value you bring to teams.
                  </p>
                </div>
              ) : (
                <p className="text-green-700 leading-relaxed">{profileData.summary}</p>
              )}
            </div>

            {/* Experience */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-800">Work Experience</h3>
                {isEditing && (
                  <button
                    onClick={addExperience}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    + Add Experience
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-6 pb-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) => updateExperience(index, 'role', e.target.value)}
                            placeholder="Job Title"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => updateExperience(index, 'company', e.target.value)}
                            placeholder="Company Name"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                        </div>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                          placeholder="Duration (e.g., 2022 - Present)"
                          className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                        />
                        <textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(index, 'description', e.target.value)}
                          placeholder="Describe your key responsibilities and achievements..."
                          rows={3}
                          className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80 resize-none"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-green-800">{exp.role}</h4>
                            <p className="text-green-700">{exp.company}</p>
                          </div>
                          <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-green-700 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-800">Education</h3>
                {isEditing && (
                  <button
                    onClick={() => setProfileData(prev => ({
                      ...prev,
                      education: [...prev.education, { school: '', degree: '', duration: '', gpa: '' }]
                    }))}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    + Add Education
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-6 pb-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              education: prev.education.map((item, i) => 
                                i === index ? { ...item, school: e.target.value } : item
                              )
                            }))}
                            placeholder="School/University Name"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              education: prev.education.map((item, i) => 
                                i === index ? { ...item, degree: e.target.value } : item
                              )
                            }))}
                            placeholder="Degree & Major"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={edu.duration}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              education: prev.education.map((item, i) => 
                                i === index ? { ...item, duration: e.target.value } : item
                              )
                            }))}
                            placeholder="Years (e.g., 2018-2022)"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                          <input
                            type="text"
                            value={edu.gpa}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              education: prev.education.map((item, i) => 
                                i === index ? { ...item, gpa: e.target.value } : item
                              )
                            }))}
                            placeholder="GPA (optional)"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-green-800">{edu.degree}</h4>
                            <p className="text-green-700">{edu.school}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                              {edu.duration}
                            </span>
                            {edu.gpa && (
                              <p className="text-xs text-green-600 mt-1">GPA: {edu.gpa}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {profileData.education.length === 0 && !isEditing && (
                  <p className="text-gray-500 text-center py-4">No education information added yet</p>
                )}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-800">Projects</h3>
                {isEditing && (
                  <button
                    onClick={() => setProfileData(prev => ({
                      ...prev,
                      projects: [...prev.projects, { title: '', duration: '', description: '' }]
                    }))}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    + Add Project
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {profileData.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-6 pb-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              projects: prev.projects.map((item, i) => 
                                i === index ? { ...item, title: e.target.value } : item
                              )
                            }))}
                            placeholder="Project Title"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                          <input
                            type="text"
                            value={project.duration}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              projects: prev.projects.map((item, i) => 
                                i === index ? { ...item, duration: e.target.value } : item
                              )
                            }))}
                            placeholder="Timeline (e.g., 2023)"
                            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                          />
                        </div>
                        <textarea
                          value={project.description}
                          onChange={(e) => setProfileData(prev => ({
                            ...prev,
                            projects: prev.projects.map((item, i) => 
                              i === index ? { ...item, description: e.target.value } : item
                            )
                          }))}
                          placeholder="Describe the project and your achievements..."
                          rows={3}
                          className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80 resize-none"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-green-800">{project.title}</h4>
                          </div>
                          <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            {project.duration}
                          </span>
                        </div>
                        <p className="text-green-700 text-sm leading-relaxed">{project.description}</p>
                      </div>
                    )}
                  </div>
                ))}
                {profileData.projects.length === 0 && !isEditing && (
                  <p className="text-gray-500 text-center py-4">No projects added yet</p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Key Skills</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm border border-green-200 flex items-center">
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {isEditing && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="skillInput"
                    placeholder="Add a skill"
                    className="flex-1 px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/80"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        e.preventDefault();
                        addSkill(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById('skillInput');
                      if (input && input.value.trim()) {
                        addSkill(input.value);
                        input.value = '';
                      }
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all text-sm"
                  >
                    Add Skills
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CareerHarmonyFooter simplified={true} />
    </div>
  );
}
