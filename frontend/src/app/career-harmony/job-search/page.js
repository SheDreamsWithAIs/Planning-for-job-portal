'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, DollarSign, Bookmark, BookmarkCheck, Building2, Users, Clock, SlidersHorizontal, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import CareerHarmonyHeader from '@/components/CareerHarmony/Header';
import CareerHarmonyFooter from '@/components/CareerHarmony/Footer';

export default function JobSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [saveMessages, setSaveMessages] = useState({});
  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const jobs = [
    {
      id: 1,
      title: 'Marketing Coordinator',
      company: 'TechFlow Solutions',
      location: 'Phoenix, AZ',
      type: 'Full-time',
      salary: '$45,000 - $55,000',
      posted: '2 days ago',
      description: 'Join our dynamic marketing team to create engaging campaigns and build meaningful connections with our community.',
      requirements: ['2+ years marketing experience', 'Social media management', 'Content creation'],
      benefits: ['Health insurance', 'Flexible schedule', '401k matching'],
      values: ['Innovation', 'Work-Life Balance', 'Community Impact'],
      cultureFit: ['Collaborative team environment', 'Creative problem-solving encouraged', 'Casual dress code']
    },
    {
      id: 2,
      title: 'Business Analyst',
      company: 'DataCore Industries',
      location: 'Scottsdale, AZ',
      type: 'Full-time',
      salary: null,
      posted: '1 week ago',
      description: 'Analyze business processes and collaborate with teams to drive data-informed decision making.',
      requirements: ['Bachelor\'s degree preferred', 'Excel proficiency', 'Problem-solving skills'],
      benefits: ['Remote work options', 'Professional development', 'Team outings'],
      values: null,
      cultureFit: ['Data-driven decision making', 'Cross-functional collaboration', 'Continuous learning mindset']
    },
    {
      id: 3,
      title: 'Customer Success Associate',
      company: 'Summit Financial',
      location: 'Remote',
      type: 'Full-time',
      salary: '$42,000 - $50,000',
      posted: '3 days ago',
      description: 'Help our clients achieve their financial goals while building lasting relationships.',
      requirements: ['Strong communication skills', 'Customer service experience', 'Detail-oriented'],
      benefits: ['Health & dental', 'Home office stipend', 'Growth opportunities'],
      values: ['Client-First Approach', 'Integrity', 'Professional Growth'],
      cultureFit: ['Relationship-focused environment', 'Empathy and patience valued', 'Results-oriented team']
    },
    {
      id: 4,
      title: 'Project Manager',
      company: 'InnovateNow Corp',
      location: 'Tempe, AZ',
      type: 'Full-time',
      salary: '$65,000 - $75,000',
      posted: '5 days ago',
      description: 'Lead cross-functional teams to deliver impactful projects that drive business growth.',
      requirements: ['3+ years project management', 'Agile methodology', 'Leadership experience'],
      benefits: ['Comprehensive benefits', 'Flexible PTO', 'Learning budget'],
      values: ['Innovation', 'Transparency', 'Continuous Improvement'],
      cultureFit: null
    },
    {
      id: 5,
      title: 'Administrative Assistant',
      company: 'Metro Healthcare Group',
      location: 'Phoenix, AZ',
      type: 'Part-time',
      salary: '$16 - $19 per hour',
      posted: '1 day ago',
      description: 'Support our healthcare team with administrative tasks in a caring, patient-focused environment.',
      requirements: ['High school diploma', 'Microsoft Office', 'Healthcare experience preferred'],
      benefits: ['Healthcare discount', 'Flexible hours', 'Supportive team'],
      values: ['Patient Care', 'Compassion', 'Teamwork'],
      cultureFit: ['Caring and supportive atmosphere', 'Patient-first mentality', 'Collaborative healthcare team']
    },
    {
      id: 6,
      title: 'Sales Representative',
      company: 'BlueTech Systems',
      location: 'Mesa, AZ',
      type: 'Full-time',
      salary: null,
      posted: '4 days ago',
      description: 'Build relationships with clients and help them find technology solutions that fit their needs.',
      requirements: ['Sales experience helpful', 'Relationship building', 'Tech interest'],
      benefits: ['Commission structure', 'Training program', 'Career advancement'],
      values: null,
      cultureFit: null,
      hasApplied: false
    },
    {
      id: 7,
      title: 'UX Designer',
      company: 'Creative Solutions Co.',
      location: 'Phoenix, AZ',
      type: 'Full-time',
      salary: '$55,000 - $70,000',
      posted: '1 week ago',
      description: 'Design user-centered experiences that delight customers and drive business results.',
      requirements: ['2+ years UX design', 'Figma proficiency', 'User research experience'],
      benefits: ['Health insurance', 'Creative freedom', 'Design conference budget'],
      values: ['User-Centered Design', 'Innovation', 'Collaboration'],
      cultureFit: ['Design thinking culture', 'Feedback-driven environment', 'Work-life balance focus'],
      hasApplied: true,
      appliedDate: '2024-10-28'
    }
  ];

  const handleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(jobId)) {
        newSaved.delete(jobId);
        setSaveMessages(prev => ({ ...prev, [jobId]: 'Job removed from saved' }));
      } else {
        newSaved.add(jobId);
        setSaveMessages(prev => ({ ...prev, [jobId]: 'Job saved!' }));
      }
      
      setTimeout(() => {
        setSaveMessages(prev => {
          const newMessages = { ...prev };
          delete newMessages[jobId];
          return newMessages;
        });
      }, 2000);
      
      return newSaved;
    });
  };

  const toggleJobExpansion = (jobId) => {
    setExpandedJobs(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(jobId)) {
        newExpanded.delete(jobId);
      } else {
        newExpanded.add(jobId);
      }
      return newExpanded;
    });
  };

  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      <CareerHarmonyHeader currentPage="job-search" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-2">Find Your Perfect Match</h1>
          <p className="text-green-700">Discover opportunities that align with your values and goals</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-green-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
              />
            </div>
            
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              <input
                type="text"
                placeholder="City, State or Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg bg-white/80"
              />
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-amber-100 text-green-700 border border-green-300 px-6 py-3 rounded-lg font-semibold hover:bg-amber-200 transition-all flex items-center"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-green-200 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-green-800 mb-2">Job Type</label>
                  <select className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white shadow-md relative z-20">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Remote</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-green-800 mb-2">Salary Range</label>
                  <select className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white shadow-md relative z-20">
                    <option>Any Salary</option>
                    <option>$30k - $45k</option>
                    <option>$45k - $60k</option>
                    <option>$60k - $80k</option>
                    <option>$80k+</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-green-800 mb-2">Company Values</label>
                  <select className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white shadow-md relative z-20">
                    <option>Any Values</option>
                    <option>Work-Life Balance</option>
                    <option>Diversity & Inclusion</option>
                    <option>Environmental Responsibility</option>
                    <option>Innovation & Growth</option>
                    <option>Community Impact</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-green-800 mb-2">Posted Date</label>
                  <select className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white shadow-md relative z-20">
                    <option>Any Time</option>
                    <option>Last 24 hours</option>
                    <option>Last 3 days</option>
                    <option>Last week</option>
                    <option>Last month</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-green-700">
              <span className="font-semibold">{totalJobs} opportunities</span> found in your area
            </p>
            <p className="text-sm text-green-600">
              Rejections don't automatically mean you're a bad candidate. You have value.
            </p>
            <p className="text-sm text-green-600 mt-1">
              Showing {startIndex + 1}-{Math.min(endIndex, totalJobs)} of {totalJobs} results
            </p>
          </div>
          
          <select className="px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 bg-white/80 shadow-lg border-b-2 border-b-green-300">
            <option>Sort by Relevance</option>
            <option>Sort by Date Posted</option>
            <option>Salary (High - Low)</option>
            <option>Salary (Low - High)</option>
          </select>
        </div>

        <div className="space-y-6">
          {currentJobs.map((job) => {
            const isExpanded = expandedJobs.has(job.id);
            
            return (
              <div key={job.id} className="bg-white/70 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-1">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-green-600 mb-2">
                          <span className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <button
                          onClick={() => handleSaveJob(job.id)}
                          className={`p-2 rounded-lg transition-all ${
                            savedJobs.has(job.id) 
                              ? 'bg-amber-100 text-green-700 hover:bg-amber-200' 
                              : 'bg-green-50 text-green-600 hover:bg-green-100'
                          }`}
                        >
                          {savedJobs.has(job.id) ? (
                            <BookmarkCheck className="w-5 h-5" />
                          ) : (
                            <Bookmark className="w-5 h-5" />
                          )}
                        </button>
                        
                        {saveMessages[job.id] && (
                          <div className="absolute top-full right-0 mt-2 bg-green-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10">
                            {saveMessages[job.id]}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {job.salary ? (
                          <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </span>
                        ) : (
                          <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            <DollarSign className="w-4 h-4 mr-1" />
                            Salary not disclosed
                          </span>
                        )}
                        <span className="text-sm text-green-600">Posted {job.posted}</span>
                      </div>
                      
                      {job.hasApplied && (
                        <div className="flex items-center">
                          <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                            ✓ Already Applied
                          </span>
                          <span className="ml-2 text-xs text-gray-500">
                            {new Date(job.appliedDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-green-800 mb-4 leading-relaxed">{job.description}</p>

                    <div className="md:block">
                      <div className="hidden md:block">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-green-800 mb-2">What they're looking for:</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="text-sm text-green-700 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-green-800 mb-2">What they offer:</h4>
                            <ul className="space-y-1">
                              {job.benefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-green-700 flex items-start">
                                  <Heart className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-green-500" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-green-800 mb-2">Company Values:</h4>
                            {job.values ? (
                              <ul className="space-y-1">
                                {job.values.map((value, index) => (
                                  <li key={index} className="text-sm text-green-700 flex items-start">
                                    <Sparkles className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-amber-500" />
                                    {value}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500 italic">Values not shared</p>
                            )}
                          </div>

                          <div>
                            <h4 className="font-medium text-green-800 mb-2">Culture Fit Hints:</h4>
                            {job.cultureFit ? (
                              <ul className="space-y-1">
                                {job.cultureFit.map((hint, index) => (
                                  <li key={index} className="text-sm text-green-700 flex items-start">
                                    <Users className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-green-500" />
                                    {hint}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500 italic">Culture info not available</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="md:hidden">
                        {!isExpanded ? (
                          <div className="space-y-3 mb-4">
                            <div className="grid grid-cols-1 gap-3">
                              <div>
                                <h4 className="font-medium text-green-800 mb-1">Looking for:</h4>
                                <div className="text-sm text-green-700 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {job.requirements[0]}
                                  {job.requirements.length > 1 && (
                                    <span className="ml-2 text-green-500">+{job.requirements.length - 1} more</span>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium text-green-800 mb-1">Offers:</h4>
                                <div className="text-sm text-green-700 flex items-start">
                                  <Heart className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-green-500" />
                                  {job.benefits[0]}
                                  {job.benefits.length > 1 && (
                                    <span className="ml-2 text-green-500">+{job.benefits.length - 1} more</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <button
                              onClick={() => toggleJobExpansion(job.id)}
                              className="text-green-600 text-sm font-medium hover:text-green-800 transition-colors"
                            >
                              View more details
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-4 mb-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div>
                                <h4 className="font-medium text-green-800 mb-2">What they're looking for:</h4>
                                <ul className="space-y-1">
                                  {job.requirements.map((req, index) => (
                                    <li key={index} className="text-sm text-green-700 flex items-start">
                                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-medium text-green-800 mb-2">What they offer:</h4>
                                <ul className="space-y-1">
                                  {job.benefits.map((benefit, index) => (
                                    <li key={index} className="text-sm text-green-700 flex items-start">
                                      <Heart className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-green-500" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {job.values && (
                                <div>
                                  <h4 className="font-medium text-green-800 mb-2">Company Values:</h4>
                                  <ul className="space-y-1">
                                    {job.values.map((value, index) => (
                                      <li key={index} className="text-sm text-green-700 flex items-start">
                                        <Sparkles className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-amber-500" />
                                        {value}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {job.cultureFit && (
                                <div>
                                  <h4 className="font-medium text-green-800 mb-2">Culture Fit Hints:</h4>
                                  <ul className="space-y-1">
                                    {job.cultureFit.map((hint, index) => (
                                      <li key={index} className="text-sm text-green-700 flex items-start">
                                        <Users className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-green-500" />
                                        {hint}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            
                            <button
                              onClick={() => toggleJobExpansion(job.id)}
                              className="text-green-600 text-sm font-medium hover:text-green-800 transition-colors flex items-center"
                            >
                              Show less
                              <SlidersHorizontal className="w-4 h-4 ml-1 rotate-180" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {job.hasApplied ? (
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button 
                            disabled
                            className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center"
                          >
                            ✓ Applied
                          </button>
                          <button className="bg-amber-100 text-green-700 border border-green-300 px-6 py-2 rounded-lg font-medium hover:bg-amber-200 transition-all">
                            Update Application
                          </button>
                          <button className="bg-white text-green-700 border border-green-300 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-all">
                            View Application Status
                          </button>
                        </div>
                      ) : (
                        <>
                          <Link href="/career-harmony/job-application" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center">
                            Apply Now
                          </Link>
                          <button className="bg-amber-100 text-green-700 border border-green-300 px-6 py-2 rounded-lg font-medium hover:bg-amber-200 transition-all">
                            Learn More
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-8 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 p-6">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-green-700">
              Page {currentPage} of {totalPages}
            </p>
            <div className="hidden sm:block text-sm text-green-600">
              ({totalJobs} total opportunities)
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-amber-100 text-green-700 border border-green-300 hover:bg-amber-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            <div className="flex items-center space-x-1">
              {currentPage > 3 && (
                <>
                  <button
                    onClick={() => goToPage(1)}
                    className="px-3 py-2 rounded-lg font-medium text-green-700 hover:bg-green-100 transition-colors"
                  >
                    1
                  </button>
                  {currentPage > 4 && <span className="text-green-500">...</span>}
                </>
              )}

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }

                if (pageNumber < 1 || pageNumber > totalPages) return null;

                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all ${
                      pageNumber === currentPage
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                        : 'text-green-700 hover:bg-green-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {currentPage < totalPages - 2 && totalPages > 5 && (
                <>
                  {currentPage < totalPages - 3 && <span className="text-green-500">...</span>}
                  <button
                    onClick={() => goToPage(totalPages)}
                    className="px-3 py-2 rounded-lg font-medium text-green-700 hover:bg-green-100 transition-colors"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      <CareerHarmonyFooter simplified={true} />
    </div>
  );
}

