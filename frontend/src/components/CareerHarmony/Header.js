'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';
import WorthBadge from './WorthBadge';

export default function CareerHarmonyHeader({ currentPage = 'home' }) {
  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Career Search', href: '#CareerSearch' },
    { label: 'About Us', href: '#AboutUs' },
  ];

  const dashboardNavItems = [
    { label: 'Dashboard', href: '/career-harmony/dashboard', active: currentPage === 'dashboard' },
    { label: 'Job Search', href: '/career-harmony/job-search', active: currentPage === 'job-search' },
    { label: 'Profile', href: '/career-harmony/profile', active: currentPage === 'profile' },
    { label: 'Applications', href: '/career-harmony/applications', active: currentPage === 'applications' },
  ];

  const isDashboard = ['dashboard', 'profile', 'job-search', 'applications'].includes(currentPage);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/solarpunk" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">Career Harmony</span>
              <div className="text-xs text-green-600">Work-Life Balance • Professional Growth</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isDashboard ? (
              <>
                {dashboardNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      item.active
                        ? 'text-green-800 font-semibold'
                        : 'text-green-700 hover:text-green-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-green-700 hover:text-green-800 font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {isDashboard ? (
              <>
                <button className="text-green-700 hover:text-green-800 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="text-green-700 hover:text-green-800 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <Link href="/career-harmony/login" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                  Sign In
                </Link>
                <Link href="/career-harmony/signup" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-sm">
                  Join Our Community
                </Link>
              </>
            )}
            <WorthBadge />
          </div>
        </div>
      </div>
    </header>
  );
}

