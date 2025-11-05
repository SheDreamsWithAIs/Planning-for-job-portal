'use client';

import { useState } from 'react';
import { Search, Briefcase, Users, Activity, Shield, BarChart3, ArrowRight, Stethoscope, TrendingUp, CheckCircle, Zap, Target, FileText, Calendar, Award } from 'lucide-react';

export default function HireHealthLanding() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Clinical Header */}
      <header className="bg-slate-800 text-white border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">HireHealth</div>
                  <div className="text-xs text-gray-300">Clinical Hiring Solutions</div>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#diagnostics" className="text-gray-300 hover:text-white transition-colors">Diagnostics</a>
              <a href="#treatment" className="text-gray-300 hover:text-white transition-colors">Treatment Plans</a>
              <a href="#outcomes" className="text-gray-300 hover:text-white transition-colors">Clinical Outcomes</a>
              <a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Sign In
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clinical Dashboard Style Hero */}
      <section className="bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Patient Info Style Header */}
          <div className="bg-white border-2 border-gray-300 rounded-none mb-6">
            <div className="bg-blue-50 border-b border-gray-300 px-6 py-3">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Job Matching Assessment</h1>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Assessment Summary:</strong> Analytical job matching platform connecting qualified candidates 
                with suitable employers through systematic evaluation and AI-powered recommendations.
              </p>
              
              {/* Clinical Search Interface */}
              <div className="border-2 border-gray-300 bg-gray-50">
                <div className="bg-gray-200 border-b border-gray-300 px-4 py-2">
                  <h3 className="font-medium text-gray-900">Position Search & Matching Tool</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position/Specialty</label>
                      <input
                        type="text"
                        placeholder="e.g., Senior Software Engineer"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location/Preference</label>
                      <input
                        type="text"
                        placeholder="e.g., Boston, MA or Remote"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>
                    
                    <div className="flex items-end">
                      <button className="w-full bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <Activity className="w-4 h-4 mr-2" />
                        Analyze Matches
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vital Signs Style Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-blue-50 border-b border-gray-300 px-3 py-2">
                <div className="text-xs font-medium text-gray-600">ACTIVE JOBS</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-blue-600">2,847</div>
                <div className="text-xs text-gray-500">positions available</div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-green-50 border-b border-gray-300 px-3 py-2">
                <div className="text-xs font-medium text-gray-600">SUCCESSFUL MATCHES</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-green-600">1,293</div>
                <div className="text-xs text-gray-500">this month</div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-purple-50 border-b border-gray-300 px-3 py-2">
                <div className="text-xs font-medium text-gray-600">SATISFACTION RATE</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <div className="text-xs text-gray-500">user satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Case Files - Job Listings */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-gray-300 mb-6">
            <div className="bg-blue-50 border-b border-gray-300 px-6 py-3">
              <h2 className="text-xl font-bold text-gray-900">Current Opportunities - Available Positions</h2>
              <p className="text-sm text-gray-600">Verified opportunities with documented performance metrics</p>
            </div>
            
            {/* Table-style job listings */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Job ID / Position</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Organization</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Location</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Compensation</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Compatibility</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      caseId: "JOB-2024-001",
                      title: "Senior Software Engineer",
                      company: "MedTech Solutions Inc",
                      location: "Boston, MA",
                      salary: "$140k - $170k",
                      compatibility: 97,
                      status: "Critical Match"
                    },
                    {
                      caseId: "JOB-2024-015",
                      title: "Data Scientist",
                      company: "Analytics Health Corp",
                      location: "Remote",
                      salary: "$120k - $150k",
                      compatibility: 94,
                      status: "High Priority"
                    },
                    {
                      caseId: "JOB-2024-008",
                      title: "Product Manager",
                      company: "Digital Health Inc",
                      location: "San Francisco, CA",
                      salary: "$130k - $160k",
                      compatibility: 92,
                      status: "Recommended"
                    },
                    {
                      caseId: "JOB-2024-023",
                      title: "Clinical Research Coordinator",
                      company: "BioPharma Research Labs",
                      location: "Research Triangle, NC",
                      salary: "$75k - $95k",
                      compatibility: 91,
                      status: "Good Match"
                    },
                    {
                      caseId: "JOB-2024-011",
                      title: "UX Research Lead",
                      company: "HealthTech Innovations",
                      location: "Seattle, WA",
                      salary: "$110k - $140k",
                      compatibility: 89,
                      status: "Suitable"
                    }
                  ].map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div>
                          <div className="text-xs text-gray-500 font-mono">{job.caseId}</div>
                          <div className="font-medium text-gray-900">{job.title}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{job.company}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{job.location}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">{job.salary}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{width: `${job.compatibility}%`}}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{job.compatibility}%</span>
                        </div>
                        <div className={`text-xs mt-1 ${
                          job.status === 'Critical Match' ? 'text-red-600' : 
                          job.status === 'High Priority' ? 'text-orange-600' :
                          job.status === 'Recommended' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {job.status}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <button className="bg-blue-600 text-white px-3 py-1 text-sm hover:bg-blue-700 transition-colors">
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="border-t border-gray-300 px-6 py-4 bg-gray-50">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                View Complete Job Database
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Protocol Section */}
      <section id="treatment" className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Treatment Plan 1 */}
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-red-50 border-b border-gray-300 px-4 py-3">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-red-600" />
                  Step 1: Assessment & Analysis
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Resume parsing and profile creation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Skills and experience evaluation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Job preference analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    AI-powered job recommendations
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 border border-red-200">
                  <div className="text-xs text-red-700">
                    <strong>Outcome:</strong> Personalized job matching based on qualifications
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Plan 2 */}
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-blue-50 border-b border-gray-300 px-4 py-3">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Step 2: Matching Protocol
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Application management system
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Candidate recommendation engine
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Interview scheduling tools
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Job posting and management
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200">
                  <div className="text-xs text-blue-700">
                    <strong>Outcome:</strong> Streamlined hiring process for employers
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Plan 3 */}
            <div className="bg-white border-2 border-gray-300">
              <div className="bg-green-50 border-b border-gray-300 px-4 py-3">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Step 3: Performance Tracking
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Job seeker dashboard metrics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Application status tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Employer hiring analytics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Performance reporting tools
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 border border-green-200">
                  <div className="text-xs text-green-700">
                    <strong>Result:</strong> Data-driven insights for both parties
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Medical Style */}
      <footer className="bg-slate-800 text-white py-8 border-t-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold">HireHealth</div>
                  <div className="text-xs text-gray-300">Clinical Hiring Solutions</div>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Talent acquisition with medical-grade precision.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">For Job Seekers</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Profile Creation</div>
                <div>Job Recommendations</div>
                <div>Application Tracking</div>
                <div>Dashboard Analytics</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">For Employers</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Job Posting</div>
                <div>Candidate Matching</div>
                <div>Application Management</div>
                <div>Hiring Reports</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Platform</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Company Profiles</div>
                <div>Interview Scheduling</div>
                <div>Notifications</div>
                <div>AI Features</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-300">
              © 2024 HireHealth Clinical Solutions. All protocols clinically validated.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

