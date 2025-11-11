'use client';

import React, { useState, useEffect } from 'react';

// Types based on Career Harmony documentation
interface RegistrationData {
  email: string;
  password: string;
  confirm_password: string;
  account_type: 'employer';
  first_name: string;
  last_name: string;
}

interface CompanyProfile {
  company_name: string;
  description: string;
  industry: string;
  company_size: string;
  location: string;
  website: string;
  phone: string;
  job_title: string;
  founded_year: string;
  remote_policy: string;
  work_environment: string[];
  benefits: string[];
}

type TabType = 'register' | 'profile' | 'preview';

const CompanyRegistration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('register');
  const [showSuccess, setShowSuccess] = useState(false);

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    email: '',
    password: '',
    confirm_password: '',
    account_type: 'employer',
    first_name: '',
    last_name: '',
  });

  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>({
    company_name: '',
    description: '',
    industry: '',
    company_size: '',
    location: '',
    website: '',
    phone: '',
    job_title: '',
    founded_year: '',
    remote_policy: 'flexible',
    work_environment: [],
    benefits: [],
  });

  const handleRegistrationChange = (field: keyof RegistrationData, value: string) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileChange = (field: keyof CompanyProfile, value: string | string[]) => {
    setCompanyProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: 'work_environment' | 'benefits', value: string, checked: boolean) => {
    setCompanyProfile(prev => {
      const currentValues = prev[field];
      const newValues = checked
        ? [...currentValues, value]
        : currentValues.filter(v => v !== value);
      return { ...prev, [field]: newValues };
    });
  };

  const submitRegistration = async () => {
    // Validation
    if (registrationData.password !== registrationData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    if (registrationData.password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    const fullRegistrationData = {
      ...registrationData,
      company_profile: companyProfile,
    };

    console.log('Registration data:', fullRegistrationData);

    // In production, make API call to /api/v1/auth/register
    try {
      // const response = await fetch('/api/v1/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(fullRegistrationData),
      // });
      // const data = await response.json();

      setShowSuccess(true);
      setTimeout(() => {
        alert('In production, you would now be redirected to your employer dashboard!');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-2">
            🌱 Career Harmony
          </h1>
          <p className="text-green-800 text-lg font-medium">
            Building sustainable careers, nurturing authentic connections
          </p>
        </header>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-2 border-green-200/50 animate-slide-up">
          {/* Tabs */}
          <div className="flex gap-3 mb-8 border-b-2 border-green-100">
            <button
              onClick={() => setActiveTab('register')}
              className={`px-6 py-3 font-semibold text-base transition-all border-b-3 ${
                activeTab === 'register'
                  ? 'text-green-800 border-green-500'
                  : 'text-green-600 border-transparent hover:bg-green-50'
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-semibold text-base transition-all border-b-3 ${
                activeTab === 'profile'
                  ? 'text-green-800 border-green-500'
                  : 'text-green-600 border-transparent hover:bg-green-50'
              }`}
            >
              Company Profile
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-3 font-semibold text-base transition-all border-b-3 ${
                activeTab === 'preview'
                  ? 'text-green-800 border-green-500'
                  : 'text-green-600 border-transparent hover:bg-green-50'
              }`}
            >
              Preview
            </button>
          </div>

          {/* Registration Tab */}
          {activeTab === 'register' && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-green-100/40 to-green-200/40 border-l-4 border-green-500 p-4 rounded-xl mb-6 text-green-900">
                ✨ Welcome to Career Harmony! Create an employer account to connect with talented job seekers who value meaningful work.
              </div>

              {/* Account Information */}
              <section className="mb-8">
                <h2 className="text-2xl text-green-800 font-semibold mb-5 pb-3 border-b-2 border-green-100 flex items-center gap-3">
                  <span className="text-3xl">🔐</span>
                  Account Information
                </h2>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Email Address<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      value={registrationData.email}
                      onChange={(e) => handleRegistrationChange('email', e.target.value)}
                      placeholder="company@example.com"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Company Name<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={companyProfile.company_name}
                      onChange={(e) => handleProfileChange('company_name', e.target.value)}
                      placeholder="Your Company Name"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Password<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="password"
                      value={registrationData.password}
                      onChange={(e) => handleRegistrationChange('password', e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Confirm Password<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="password"
                      value={registrationData.confirm_password}
                      onChange={(e) => handleRegistrationChange('confirm_password', e.target.value)}
                      placeholder="Re-enter password"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Primary Contact */}
              <section className="mb-8">
                <h2 className="text-2xl text-green-800 font-semibold mb-5 pb-3 border-b-2 border-green-100 flex items-center gap-3">
                  <span className="text-3xl">👤</span>
                  Primary Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      First Name<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={registrationData.first_name}
                      onChange={(e) => handleRegistrationChange('first_name', e.target.value)}
                      placeholder="Contact first name"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Last Name<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={registrationData.last_name}
                      onChange={(e) => handleRegistrationChange('last_name', e.target.value)}
                      placeholder="Contact last name"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={companyProfile.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">Job Title</label>
                    <input
                      type="text"
                      value={companyProfile.job_title}
                      onChange={(e) => handleProfileChange('job_title', e.target.value)}
                      placeholder="e.g., HR Manager"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>
                </div>
              </section>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className="px-8 py-3 bg-green-100 text-green-800 font-semibold rounded-xl border-2 border-green-300 hover:bg-green-200 transition-all"
                >
                  Next: Company Profile →
                </button>
              </div>
            </div>
          )}

          {/* Company Profile Tab */}
          {activeTab === 'profile' && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-green-100/40 to-green-200/40 border-l-4 border-green-500 p-4 rounded-xl mb-6 text-green-900">
                🌿 Tell us about your company. This helps job seekers understand your culture and values.
              </div>

              {/* Company Details */}
              <section className="mb-8">
                <h2 className="text-2xl text-green-800 font-semibold mb-5 pb-3 border-b-2 border-green-100 flex items-center gap-3">
                  <span className="text-3xl">🏢</span>
                  Company Details
                </h2>

                <div className="flex flex-col mb-5">
                  <label className="text-green-900 font-semibold mb-2">
                    Company Description<span className="text-red-600 ml-1">*</span>
                  </label>
                  <textarea
                    value={companyProfile.description}
                    onChange={(e) => handleProfileChange('description', e.target.value)}
                    placeholder="Tell us about your company mission, values, and what makes you unique..."
                    className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all min-h-[120px] resize-y"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Industry<span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      value={companyProfile.industry}
                      onChange={(e) => handleProfileChange('industry', e.target.value)}
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="finance">Finance</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="nonprofit">Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Company Size<span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      value={companyProfile.company_size}
                      onChange={(e) => handleProfileChange('company_size', e.target.value)}
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="startup">Startup (1-10)</option>
                      <option value="small">Small (11-50)</option>
                      <option value="medium">Medium (51-200)</option>
                      <option value="large">Large (201-1000)</option>
                      <option value="enterprise">Enterprise (1000+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">Website</label>
                    <input
                      type="url"
                      value={companyProfile.website}
                      onChange={(e) => handleProfileChange('website', e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">
                      Location<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={companyProfile.location}
                      onChange={(e) => handleProfileChange('location', e.target.value)}
                      placeholder="City, State"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Company Culture & Values */}
              <section className="mb-8">
                <h2 className="text-2xl text-green-800 font-semibold mb-5 pb-3 border-b-2 border-green-100 flex items-center gap-3">
                  <span className="text-3xl">💚</span>
                  Company Culture & Values
                </h2>

                <div className="mb-5">
                  <label className="text-green-900 font-semibold mb-3 block">Work Environment</label>
                  <div className="flex flex-wrap gap-4">
                    {['collaborative', 'innovative', 'supportive', 'flexible', 'diverse'].map((env) => (
                      <label key={env} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={companyProfile.work_environment.includes(env)}
                          onChange={(e) => handleCheckboxChange('work_environment', env, e.target.checked)}
                          className="w-5 h-5 text-green-600 border-2 border-green-300 rounded focus:ring-2 focus:ring-green-200"
                        />
                        <span className="text-green-900 capitalize">{env}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">Remote Work Policy</label>
                    <select
                      value={companyProfile.remote_policy}
                      onChange={(e) => handleProfileChange('remote_policy', e.target.value)}
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    >
                      <option value="remote">Fully Remote</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="onsite">On-Site</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-green-900 font-semibold mb-2">Founded Year</label>
                    <input
                      type="number"
                      value={companyProfile.founded_year}
                      onChange={(e) => handleProfileChange('founded_year', e.target.value)}
                      placeholder="2020"
                      min="1800"
                      max="2024"
                      className="px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>
                </div>
              </section>

              {/* Benefits & Perks */}
              <section className="mb-8">
                <h2 className="text-2xl text-green-800 font-semibold mb-5 pb-3 border-b-2 border-green-100 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Benefits & Perks
                </h2>

                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'health_insurance', label: 'Health Insurance' },
                    { value: 'dental', label: 'Dental & Vision' },
                    { value: '401k', label: '401(k) Matching' },
                    { value: 'pto', label: 'Generous PTO' },
                    { value: 'wellness', label: 'Wellness Programs' },
                    { value: 'learning', label: 'Learning & Development' },
                    { value: 'equity', label: 'Equity/Stock Options' },
                    { value: 'parental', label: 'Parental Leave' },
                  ].map((benefit) => (
                    <label key={benefit.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={companyProfile.benefits.includes(benefit.value)}
                        onChange={(e) => handleCheckboxChange('benefits', benefit.value, e.target.checked)}
                        className="w-5 h-5 text-green-600 border-2 border-green-300 rounded focus:ring-2 focus:ring-green-200"
                      />
                      <span className="text-green-900">{benefit.label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setActiveTab('register')}
                  className="px-8 py-3 bg-green-100 text-green-800 font-semibold rounded-xl border-2 border-green-300 hover:bg-green-200 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Preview Profile →
                </button>
              </div>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === 'preview' && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-green-100/40 to-green-200/40 border-l-4 border-green-500 p-4 rounded-xl mb-6 text-green-900">
                👀 Here's how your company profile will appear to job seekers. Make sure everything looks great!
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-4xl border-2 border-green-500 flex-shrink-0">
                    🏢
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-1">
                      {companyProfile.company_name || 'Your Company Name'}
                    </h3>
                    <p className="text-green-700 mb-1">{companyProfile.location || 'Location'}</p>
                    <p className="text-green-600">
                      {companyProfile.industry ? `${companyProfile.industry.charAt(0).toUpperCase() + companyProfile.industry.slice(1)} • ` : ''}
                      {companyProfile.company_size ? companyProfile.company_size.charAt(0).toUpperCase() + companyProfile.company_size.slice(1) : 'Size'}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">About Us</h4>
                  <p className="text-green-700 leading-relaxed">
                    {companyProfile.description || 'Company description will appear here...'}
                  </p>
                </div>

                {companyProfile.work_environment.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Work Environment</h4>
                    <div className="flex flex-wrap gap-2">
                      {companyProfile.work_environment.map((env) => (
                        <span
                          key={env}
                          className="inline-block bg-green-200/50 text-green-800 px-3 py-1.5 rounded-full text-sm border border-green-400 capitalize"
                        >
                          {env}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {companyProfile.benefits.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {companyProfile.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block bg-green-200/50 text-green-800 px-3 py-1.5 rounded-full text-sm border border-green-400"
                        >
                          {benefit.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Remote Work</h4>
                  <span className="inline-block bg-green-200/50 text-green-800 px-3 py-1.5 rounded-full text-sm border border-green-400 capitalize">
                    {companyProfile.remote_policy}
                  </span>
                </div>
              </div>

              {showSuccess && (
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center mb-6 animate-slide-up">
                  <h3 className="text-2xl font-bold mb-2">🎉 Registration Successful!</h3>
                  <p>Welcome to Career Harmony! Your company profile has been created.</p>
                </div>
              )}

              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className="px-8 py-3 bg-green-100 text-green-800 font-semibold rounded-xl border-2 border-green-300 hover:bg-green-200 transition-all"
                >
                  ← Edit Profile
                </button>
                <button
                  onClick={submitRegistration}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Complete Registration ✓
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .border-b-3 {
          border-bottom-width: 3px;
        }
      `}</style>
    </div>
  );
};

export default CompanyRegistration;