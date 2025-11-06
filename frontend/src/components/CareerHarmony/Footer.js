'use client';

import { Leaf } from 'lucide-react';

export default function CareerHarmonyFooter({ simplified = false }) {
  if (simplified) {
    return (
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
    );
  }

  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Career Harmony</span>
                <div className="text-xs text-green-300">Work-Life Balance • Professional Growth</div>
              </div>
            </div>
            <p className="text-green-200 max-w-md">
              Cultivating careers that honor your whole self. Because you shouldn't have to sacrifice your dignity, 
              wellbeing, or values just to make a living.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Growing Solutions</h4>
            <div className="space-y-2 text-sm text-green-300">
              <a href="#" className="hover:text-white transition-colors block">Purpose-Driven Matching</a>
              <a href="#" className="hover:text-white transition-colors block">Community Networks</a>
              <a href="#" className="hover:text-white transition-colors block">Holistic Growth</a>
              <a href="#" className="hover:text-white transition-colors block">Regenerative Business</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Nurturing Resources</h4>
            <div className="space-y-2 text-sm text-green-300">
              <a href="#" className="hover:text-white transition-colors block">Future of Work</a>
              <a href="#" className="hover:text-white transition-colors block">Sustainable Leadership</a>
              <a href="#" className="hover:text-white transition-colors block">Community Building</a>
              <a href="#" className="hover:text-white transition-colors block">Wellness at Work</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 text-sm text-green-300 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
          <p className="text-green-300 text-sm">
            © 2024 Career Harmony. Finding balance between work and life.
          </p>
        </div>
      </div>
    </footer>
  );
}

