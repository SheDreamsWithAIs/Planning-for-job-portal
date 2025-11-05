'use client';

import { useState, useEffect } from 'react';
import { Search, Zap, Code, Shield, Terminal, Cpu, Wifi, Eye, ArrowRight, Play, Users, TrendingUp } from 'lucide-react';

export default function CyberCareers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [glitchText, setGlitchText] = useState('CYBER_CAREERS.EXE');

  useEffect(() => {
    const glitchOptions = ['CYBER_CAREERS.EXE', 'C¥BER_CAREER$.EXE', '©YBER_CAREERS.3X3', 'CYBER_CAREERS.EXE'];
    const interval = setInterval(() => {
      setGlitchText(glitchOptions[Math.floor(Math.random() * glitchOptions.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array(400).fill().map((_, i) => (
            <div key={i} className="border border-cyan-400 animate-pulse" style={{animationDelay: `${i * 0.01}s`}}></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-black/90 border-b-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded flex items-center justify-center animate-pulse">
                <Terminal className="w-7 h-7 text-black" />
              </div>
              <div>
                <div className="text-2xl font-mono font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {glitchText}
                </div>
                <div className="text-xs text-green-400 font-mono">NEURAL_NETWORK_V2.077</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#jobs" className="text-cyan-400 hover:text-pink-400 font-mono transition-colors relative group">
                &gt; JOBS_
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#corps" className="text-cyan-400 hover:text-pink-400 font-mono transition-colors relative group">
                &gt; CORPS_
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#net" className="text-cyan-400 hover:text-pink-400 font-mono transition-colors relative group">
                &gt; NETWORK_
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all"></span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-cyan-400 hover:text-pink-400 font-mono transition-colors">
                LOGIN_
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-black px-6 py-2 font-bold font-mono hover:from-purple-600 hover:to-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25">
                JACK_IN &gt;
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Animated lines */}
        <div className="absolute inset-0">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse absolute top-20 left-0 right-0"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse absolute top-40 left-0 right-0" style={{animationDelay: '1s'}}></div>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse absolute top-60 left-0 right-0" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="border border-green-400 bg-black/80 px-6 py-3 font-mono text-green-400 animate-pulse">
                &gt; NEURAL_LINK_ESTABLISHED
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-mono">
                JACK INTO
              </span>
              <br />
              <span className="text-white font-mono relative">
                THE GRID
                <span className="absolute -right-2 top-0 w-1 h-full bg-cyan-400 animate-pulse"></span>
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-300 mb-4 font-mono">
                &gt; Upload your consciousness to the corporate mainframe
              </p>
              <p className="text-cyan-400 font-mono">
                &gt; Download premium career opportunities directly to your neural implant
              </p>
            </div>

            {/* Terminal-style search */}
            <div className="bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 max-w-4xl mx-auto mb-12 font-mono">
              <div className="bg-green-400 text-black px-4 py-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" />
                <span className="font-bold">CAREER_TERMINAL.EXE</span>
                <div className="ml-auto flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="text-green-400">
                  user@cybercareers:~$ initialize_search_protocol
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="text-cyan-400 text-sm mb-1">&gt; SKILL_SET:</div>
                    <input
                      type="text"
                      placeholder="neural_hacking, data_mining..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-black border border-cyan-400 p-3 text-cyan-400 font-mono focus:border-pink-400 focus:outline-none"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="text-cyan-400 text-sm mb-1">&gt; LOCATION:</div>
                    <input
                      type="text"
                      placeholder="Neo_Tokyo, Night_City..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-black border border-cyan-400 p-3 text-cyan-400 font-mono focus:border-pink-400 focus:outline-none"
                    />
                  </div>
                  
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-black font-bold py-3 px-6 hover:from-purple-600 hover:to-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25 flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    EXECUTE &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Holographic stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="border border-cyan-400 bg-black/60 p-6 relative group hover:border-pink-400 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl font-bold font-mono text-cyan-400 mb-2">2,077</div>
                  <div className="text-gray-400 font-mono">ACTIVE_CONTRACTS</div>
                  <div className="text-green-400 text-xs font-mono">&gt; +42% THIS_CYCLE</div>
                </div>
              </div>
              
              <div className="border border-purple-400 bg-black/60 p-6 relative group hover:border-pink-400 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl font-bold font-mono text-purple-400 mb-2">98.7%</div>
                  <div className="text-gray-400 font-mono">SUCCESS_RATE</div>
                  <div className="text-green-400 text-xs font-mono">&gt; NEURAL_VERIFIED</div>
                </div>
              </div>
              
              <div className="border border-pink-400 bg-black/60 p-6 relative group hover:border-cyan-400 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl font-bold font-mono text-pink-400 mb-2">∞</div>
                  <div className="text-gray-400 font-mono">INFINITE_POSSIBILITIES</div>
                  <div className="text-green-400 text-xs font-mono">&gt; MATRIX_LOADED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings - Holographic Cards */}
      <section id="jobs" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="font-mono bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                ACTIVE_CONTRACTS &gt;
              </span>
            </h2>
            <p className="text-green-400 font-mono">&gt; High-paying neural jobs in the corporate matrix</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="border-2 border-cyan-400 bg-black/80 p-6 relative group hover:border-pink-400 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-75"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
                    <Code className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-cyan-400 font-mono text-sm">NEO_TOKYO_CORP</div>
                    <div className="text-xs text-gray-500 font-mono">SECTOR_07</div>
                  </div>
                </div>
                <div className="text-green-400 font-mono text-xs">PRIORITY_A</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-mono">SENIOR_DATA_SAMURAI</h3>
              <div className="text-pink-400 font-mono text-lg mb-4">¥850,000 - ¥1,200,000</div>
              
              <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                &gt; Slice through corporate firewalls with precision. Neural interface required. 
                Advanced katana.exe skills preferred.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="border border-cyan-400 text-cyan-400 px-2 py-1 text-xs font-mono">NEURAL_NET</span>
                <span className="border border-pink-400 text-pink-400 px-2 py-1 text-xs font-mono">HACK.EXE</span>
                <span className="border border-green-400 text-green-400 px-2 py-1 text-xs font-mono">SECURITY_BREACH</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold py-3 hover:from-pink-500 hover:to-purple-500 transition-all font-mono">
                DOWNLOAD_CONTRACT &gt;
              </button>
            </div>

            <div className="border-2 border-purple-400 bg-black/80 p-6 relative group hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-purple-400/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-75"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-purple-400 font-mono text-sm">SYNTH_INDUSTRIES</div>
                    <div className="text-xs text-gray-500 font-mono">DIGITAL_DISTRICT</div>
                  </div>
                </div>
                <div className="text-green-400 font-mono text-xs">PRIORITY_B</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-mono">CYBER_SECURITY_NINJA</h3>
              <div className="text-pink-400 font-mono text-lg mb-4">¥750,000 - ¥950,000</div>
              
              <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                &gt; Defend the digital realm from rogue AIs. Stealth.exe mastery essential. 
                Previous ghost protocol experience preferred.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="border border-purple-400 text-purple-400 px-2 py-1 text-xs font-mono">STEALTH.EXE</span>
                <span className="border border-cyan-400 text-cyan-400 px-2 py-1 text-xs font-mono">FIREWALL</span>
                <span className="border border-pink-400 text-pink-400 px-2 py-1 text-xs font-mono">GHOST_PROTOCOL</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold py-3 hover:from-pink-500 hover:to-cyan-500 transition-all font-mono">
                DOWNLOAD_CONTRACT &gt;
              </button>
            </div>

            <div className="border-2 border-pink-400 bg-black/80 p-6 relative group hover:border-green-400 transition-all hover:shadow-lg hover:shadow-pink-400/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-green-400 opacity-75"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-400 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-pink-400 font-mono text-sm">CHROME_SYSTEMS</div>
                    <div className="text-xs text-gray-500 font-mono">NEON_HEIGHTS</div>
                  </div>
                </div>
                <div className="text-green-400 font-mono text-xs">PRIORITY_S</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-mono">AI_ARCHITECT_OVERLORD</h3>
              <div className="text-pink-400 font-mono text-lg mb-4">¥1,500,000 - ¥2,000,000</div>
              
              <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                &gt; Design sentient AI systems for corporate domination. Neural mesh interface mandatory. 
                God complex optional but preferred.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="border border-green-400 text-green-400 px-2 py-1 text-xs font-mono">NEURAL_MESH</span>
                <span className="border border-pink-400 text-pink-400 px-2 py-1 text-xs font-mono">AI.EXE</span>
                <span className="border border-cyan-400 text-cyan-400 px-2 py-1 text-xs font-mono">SENTIENCE_PROTOCOL</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-pink-500 to-green-500 text-black font-bold py-3 hover:from-green-500 hover:to-cyan-500 transition-all font-mono">
                DOWNLOAD_CONTRACT &gt;
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="border-2 border-cyan-400 text-cyan-400 bg-black px-12 py-4 font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/25">
              ACCESS_MORE_CONTRACTS &gt;&gt;
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Network Section */}
      <section id="corps" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="font-mono bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                CORPORATE_MATRIX &gt;
              </span>
            </h2>
            <p className="text-pink-400 font-mono">&gt; Interface with the digital corporate overlords</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center border border-green-400 p-8 bg-black/60 hover:border-cyan-400 transition-colors group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin">
                <TrendingUp className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">NEURAL_UPLOADING</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                &gt; Direct neural interface with corporate databases. Upload your skills matrix 
                directly to the mainframe for instant job matching protocols.
              </p>
            </div>

            <div className="text-center border border-pink-400 p-8 bg-black/60 hover:border-purple-400 transition-colors group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <Users className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4 font-mono">QUANTUM_NETWORKING</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                &gt; Connect with other cyber-enhanced professionals across the digital realm. 
                Share consciousness fragments and expand your neural network exponentially.
              </p>
            </div>

            <div className="text-center border border-cyan-400 p-8 bg-black/60 hover:border-pink-400 transition-colors group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <Eye className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">REALITY_AUGMENTATION</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                &gt; Enhanced AR overlays provide real-time career analytics directly to your 
                visual cortex. See job opportunities floating in your peripheral vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 h-full opacity-20">
            {Array(144).fill().map((_, i) => (
              <div key={i} className="border border-cyan-400/30 animate-pulse" style={{animationDelay: `${i * 0.05}s`}}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-6xl font-bold text-white mb-8 font-mono">
            READY TO 
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {" "}JACK_IN?
            </span>
          </h2>
          
          <div className="border-2 border-green-400 bg-black/80 p-8 mb-8 font-mono">
            <div className="text-green-400 mb-4">&gt; INITIALIZING_NEURAL_LINK...</div>
            <div className="text-cyan-400 mb-4">&gt; SCANNING_CORPORATE_MATRIX...</div>
            <div className="text-pink-400 mb-4">&gt; UPLOADING_CONSCIOUSNESS...</div>
            <div className="text-white">&gt; READY_FOR_DIGITAL_EMPLOYMENT</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-pink-500 text-black px-12 py-4 font-bold text-xl font-mono hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-cyan-400/25">
              UPLOAD_NEURAL_DATA &gt;
            </button>
            <button className="border-2 border-pink-400 text-pink-400 bg-black px-12 py-4 font-bold text-xl font-mono hover:bg-pink-400 hover:text-black transition-all transform hover:scale-105">
              BROWSE_MATRIX &gt;
            </button>
          </div>
          
          <p className="text-gray-500 font-mono text-sm mt-8">
            &gt; NEURAL_ENCRYPTION_ENABLED • QUANTUM_SECURE • GHOST_PROTOCOL_ACTIVE
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-cyan-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded flex items-center justify-center animate-pulse">
                  <Terminal className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    CYBER_CAREERS.EXE
                  </div>
                  <div className="text-xs text-green-400 font-mono">NEURAL_NETWORK_V2.077</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-md font-mono text-sm">
                &gt; Jack into the corporate matrix. Upload your consciousness. 
                Download infinite career possibilities.
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-cyan-400 font-bold mb-4">&gt; PROTOCOLS_</h4>
              <div className="space-y-3 text-sm font-mono">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors block">&gt; Neural_Upload</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors block">&gt; Matrix_Search</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors block">&gt; Contract_Download</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors block">&gt; Corp_Interface</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-pink-400 font-bold mb-4">&gt; NETWORK_</h4>
              <div className="space-y-3 text-sm font-mono">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">&gt; Quantum_Support</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">&gt; Ghost_Protocol</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">&gt; Neural_Privacy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">&gt; Digital_Rights</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 font-mono text-sm">
              © 2077 CYBER_CAREERS.EXE • ALL_NEURAL_RIGHTS_RESERVED • GHOST_IN_THE_SHELL_COMPLIANT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

