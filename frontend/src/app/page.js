import Link from "next/link";
import { Palette, FileText, ArrowRight, Building2, Heart, Stethoscope, Sparkles, Terminal, Star, Anchor } from "lucide-react";

export default function Home() {
  const themeMockups = [
    {
      id: "jobesthesia",
      name: "Jobesthesia",
      description: "Corporate professional theme with slate colors and a playful corporate speak generator. Perfect for a sophisticated, tongue-in-cheek approach to job searching.",
      color: "slate",
      icon: Building2,
      gradient: "from-slate-600 to-slate-700",
      route: "/jobesthesia",
      features: ["Corporate Speak Generator", "Professional Networking Focus", "Strategic Career Language"]
    },
    {
      id: "jobjoy",
      name: "JobJoy",
      description: "Bright and cheerful theme with vibrant orange, pink, and yellow gradients. Emphasizes joy and positivity in the job search experience.",
      color: "orange",
      icon: Heart,
      gradient: "from-orange-400 to-pink-400",
      route: "/jobjoy",
      features: ["Joyful Branding", "Colorful Design", "Positive Messaging"]
    },
    {
      id: "hirehealth",
      name: "HireHealth",
      description: "Clinical and medical-themed design with blue accents. Uses healthcare terminology to create a unique, trustworthy brand identity.",
      color: "blue",
      icon: Stethoscope,
      gradient: "from-blue-500 to-blue-600",
      route: "/hirehealth",
      features: ["Medical Theme", "Clinical Terminology", "Trustworthy Design"]
    },
    {
      id: "cyberpunk",
      name: "CyberCareers",
      description: "Futuristic cyberpunk aesthetic with neon colors, terminal-style UI, and sci-fi terminology. Perfect for tech-forward audiences who love the Matrix aesthetic.",
      color: "cyan",
      icon: Terminal,
      gradient: "from-pink-500 to-cyan-400",
      route: "/cyberpunk",
      features: ["Terminal UI", "Neon Glitch Effects", "Cyberpunk Aesthetic"]
    },
    {
      id: "wildwest",
      name: "JobFrontier",
      description: "Wild West frontier theme with warm amber/yellow colors, wanted poster style job listings, and Western terminology. Perfect for a rustic, adventurous brand identity.",
      color: "amber",
      icon: Star,
      gradient: "from-yellow-600 to-amber-700",
      route: "/wildwest",
      features: ["Wanted Poster Design", "Western Aesthetic", "Frontier Terminology"]
    },
    {
      id: "ocean",
      name: "AquaCareers",
      description: "Ocean-themed design with deep blue/cyan colors, floating bubbles, and marine terminology. Perfect for creating an immersive underwater career exploration experience.",
      color: "cyan",
      icon: Anchor,
      gradient: "from-cyan-400 to-blue-500",
      route: "/ocean",
      features: ["Floating Animations", "Marine Aesthetic", "Underwater Theme"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Portal Mockups</h1>
              <p className="text-gray-600 mt-1">Explore theme options and page designs</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Theme Mockups Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Theme Mockups</h2>
              <p className="text-gray-600">Select a theme direction for the job portal. Click any theme to view the full mockup.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themeMockups.map((theme) => {
              const IconComponent = theme.icon;
              return (
                <Link
                  key={theme.id}
                  href={theme.route}
                  className="group bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${theme.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${theme.gradient} rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                          {theme.name}
                        </h3>
                        <p className="text-sm text-gray-500">{theme.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Features</p>
                      <ul className="space-y-1">
                        {theme.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      View Mockup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Page Mockups Section */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Page Mockups</h2>
              <p className="text-gray-600">Once a theme is selected, individual page mockups will appear here.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Page Mockups Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Page mockups will be added here after theme selection. This section will include designs for 
              login pages, dashboards, job listings, and other key pages.
            </p>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mt-16 bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Use This Page</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Review each theme mockup by clicking on the cards above</li>
            <li>Share the theme options with your team for feedback</li>
            <li>Once a theme is selected, individual page mockups will be created</li>
            <li>Page mockups will appear in the &quot;Page Mockups&quot; section below</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Job Portal Project • Mockup Display & Selection
          </p>
        </div>
      </footer>
    </div>
  );
}
