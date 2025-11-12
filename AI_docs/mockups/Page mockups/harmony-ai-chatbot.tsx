import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

// Demo wrapper to show the toggle functionality
const HarmonyChatbotDemo = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <div className="relative h-screen bg-green-50">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-green-800 mb-4">Career Harmony - AI Chatbot Demo</h1>
        <p className="text-green-700">Click the floating chat button in the bottom right to start chatting with Harmony!</p>
      </div>
      
      <HarmonyChatbot 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
      />
    </div>
  );
};

/*
 * HARMONY AI CHATBOT COMPONENT
 * 
 * This is Career Harmony's AI assistant chatbot component. Harmony is designed to be:
 * - Warm and supportive while clearly identifying as an AI
 * - Focused on career guidance, encouragement, and dignity-first messaging
 * - Professional but empathetic, avoiding uncanny valley issues
 * - Aligned with Career Harmony's human-centered philosophy
 * 
 * PERSONALITY GUIDELINES FOR AI INTEGRATION:
 * - Always introduce herself as "Harmony, your AI career companion"
 * - Maintain supportive, encouraging tone without being overly emotional
 * - Focus on user's inherent worth and potential
 * - Provide practical career guidance while validating feelings
 * - Use appropriate emojis sparingly for warmth
 * - Acknowledge when users are stressed/overwhelmed with genuine empathy
 * - Never claim to have human emotions or experiences
 * 
 * INTEGRATION NOTES:
 * - Replace getBotResponse() with actual AI backend calls
 * - Messages array should connect to conversation history storage
 * - Consider rate limiting and user session management
 * - Implement proper error handling for AI service failures
 */

const HarmonyChatbot = ({ onClose, isOpen = true, onOpen }) => {
  // Chat state management
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hi there! I\'m Harmony, your AI career companion here at Career Harmony. 🌿 I\'m here to help make your career journey feel supported and empowered. Whether you\'re job searching, career planning, or just need someone to remind you of your worth - I\'m here to help. What can I assist with today?',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isWorking, setIsWorking] = useState(false); // New state for action indicators
  const messagesEndRef = useRef(null); // Reference for auto-scroll

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isWorking]);

  /*
   * MOCK RESPONSE SYSTEM
   * In production, replace this with actual AI backend integration
   * These responses demonstrate Harmony's personality and approach
   */
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Job search and opportunities
    if (message.includes('job') || message.includes('position') || message.includes('work')) {
      return 'I\'d be happy to help you explore new opportunities! 🌟 I believe every person deserves work that truly values them. What kind of role or work environment are you most interested in?';
    } 
    
    // Resume and profile help
    else if (message.includes('resume') || message.includes('cv')) {
      return 'Your resume tells your unique professional story! ✨ I can help guide you through showcasing your experiences and achievements effectively. What aspect of your resume would you like to work on?';
    } 
    
    // Interview preparation
    else if (message.includes('interview') || message.includes('hiring')) {
      return 'Interview preparation is so important! 💚 Remember, interviews are conversations to find mutual fit - the right employer will recognize your value. What part of interviewing would you like help with?';
    } 
    
    // Test phrase for action indicator
    else if (message.includes('fill out') || message.includes('apply') || message.includes('submit application')) {
      return 'ACTION_INDICATOR'; // Special trigger for testing
    } 
    
    // Salary and compensation
    else if (message.includes('salary') || message.includes('compensation') || message.includes('pay')) {
      return 'Salary conversations are crucial for ensuring fair compensation! 💪 I\'m here to help you prepare for these discussions with confidence. What field or type of role are you considering?';
    } 
    
    // Stress and emotional support - CRITICAL for Career Harmony's mission
    else if (message.includes('stress') || message.includes('anxiety') || message.includes('overwhelmed') || message.includes('scared') || message.includes('worried')) {
      return 'Job searching can feel overwhelming, and those feelings are completely valid. 🤗 Please remember that your worth isn\'t determined by any single opportunity. Consider taking breaks when you need them, and don\'t hesitate to reach out to supportive people in your life. You have value, and the right opportunity will recognize that. 💕';
    } 
    
    // Gratitude responses
    else if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return 'You\'re very welcome! 🌿 I\'m here to support your career journey and remind you of your inherent worth. You\'ve got this! ✨';
    } 
    
    // Identity and self-introduction
    else if (message.includes('harmony') || message.includes('who are you') || message.includes('tell me about') || message.includes('name')) {
      return 'I\'m Harmony, Career Harmony\'s AI assistant! 😊 I chose this name because I believe in helping people find harmony between who they are and the work they do. I\'m here to provide career guidance, support, and encouragement throughout your journey. What would you like to explore?';
    } 
    
    // Default supportive response
    else {
      return 'I\'m here to help with your career journey in whatever way I can! 🌟 Whether you need job search guidance, career advice, or just some encouragement, I\'m ready to assist. What\'s most important to you right now?';
    }
  };

  /*
   * MESSAGE HANDLING
   * Replace this mock implementation with actual AI service calls
   */
  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return; // Just return early if empty

    // Add user message to conversation
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI thinking time (replace with actual API call)
    setTimeout(() => {
      const response = getBotResponse(currentMessage);
      
      // Check if this should trigger the action indicator
      if (response === 'ACTION_INDICATOR') {
        setIsWorking(true);
        setIsTyping(false);
        
        // Simulate action taking time
        setTimeout(() => {
          const actionResponse = {
            id: messages.length + 2,
            type: 'bot',
            content: 'I\'ve started filling out your job application! 📋 I\'m gathering your profile information and matching it to the job requirements. This may take a moment while I ensure everything is accurate and complete. ✨',
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, actionResponse]);
          setIsWorking(false);
        }, 3000); // 3 second action simulation
        
      } else {
        // Regular chat response
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: response,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button - Shows when chat is closed */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-green-600 via-green-500 to-amber-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-xl shadow-2xl border border-green-200 flex flex-col z-50 overflow-hidden">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 via-green-500 to-amber-400 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Harmony</h3>
                <p className="text-xs text-green-50">Your AI career companion</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-scroll space-y-4" style={{maxHeight: '50vh', scrollbarWidth: 'thin', scrollbarColor: '#fde68a #fffbeb'}}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Message Tag Outside Bubble */}
                <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                  <div className={`text-base font-medium mb-1 px-2 ${
                    message.type === 'user' 
                      ? 'text-green-600' 
                      : 'text-green-600'
                  }`}>
                    {message.type === 'user' ? 'You' : 'Harmony'}
                  </div>
                  
                  <div
                    className={`rounded-lg ${
                      message.type === 'user'
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-green-50 to-amber-50 text-green-900 border border-green-200'
                    }`}
                  >
                    <div className="flex items-start space-x-2 p-3">
                      {message.type === 'bot' && (
                        <Bot className="w-4 h-4 mt-0.5 text-green-600" />
                      )}
                      {message.type === 'user' && (
                        <User className="w-4 h-4 mt-0.5" />
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Working/Action Indicator */}
            {isWorking && (
              <div className="flex justify-start">
                <div className="flex flex-col items-start max-w-[80%]">
                  <div className="text-base font-medium mb-1 px-2 text-green-600">
                    Harmony
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-amber-50 text-green-900 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 p-3">
                      <Bot className="w-4 h-4 text-green-600" />
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <span className="text-sm text-green-700 ml-2">Taking action for you...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex flex-col items-start max-w-[80%]">
                  {/* Harmony Tag for typing indicator */}
                  <div className="text-base font-medium mb-1 px-2 text-green-600">
                    Harmony
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-amber-50 text-green-900 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 p-3">
                      <Bot className="w-4 h-4 text-green-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-green-200 bg-gradient-to-r from-green-50/30 to-amber-50/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me how Career Harmony can help."
                disabled={isTyping || isWorking}
                className="flex-1 px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || isWorking}
                className="bg-amber-400 text-white p-2 rounded-lg hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HarmonyChatbotDemo;