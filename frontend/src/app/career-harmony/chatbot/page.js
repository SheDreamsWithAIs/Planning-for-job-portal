'use client';

import { useState } from 'react';
import CareerHarmonyHeader from '@/components/CareerHarmony/Header';
import CareerHarmonyFooter from '@/components/CareerHarmony/Footer';
import HarmonyChatbot from '@/components/CareerHarmony/HarmonyChatbot';

export default function ChatbotDemoPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      <CareerHarmonyHeader currentPage="chatbot" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-4">Career Harmony - AI Chatbot Demo</h1>
          <p className="text-green-700 mb-6">
            Click the floating chat button in the bottom right to start chatting with Harmony!
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-amber-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-3">About Harmony</h2>
            <p className="text-green-700 mb-4">
              Harmony is Career Harmony's AI assistant, designed to be warm and supportive while clearly identifying as an AI. 
              Harmony focuses on career guidance, encouragement, and dignity-first messaging.
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Always introduces herself as "Harmony, your AI career companion"</li>
              <li>Maintains supportive, encouraging tone without being overly emotional</li>
              <li>Focuses on user's inherent worth and potential</li>
              <li>Provides practical career guidance while validating feelings</li>
              <li>Acknowledges when users are stressed/overwhelmed with genuine empathy</li>
            </ul>
          </div>
        </div>
      </div>
      
      <HarmonyChatbot 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
      />
      
      <CareerHarmonyFooter simplified={true} />
    </div>
  );
}

