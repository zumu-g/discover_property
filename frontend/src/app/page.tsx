
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">Discover</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-indigo-600">Buy</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600">Rent</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600">Agents</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600">Insights</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600">Sign In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                For Agents
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Home with
            <span className="text-indigo-600"> AI-Powered Search</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Australia&apos;s most intelligent property marketplace. Search naturally, discover personally, 
            and make smarter decisions with our AI assistant.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Try natural language search:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="&quot;3 bedroom house near good schools in Melbourne under $800k with a backyard&quot;"
                  className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  Search
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm text-gray-500">Try:</span>
              {[
                "Family homes near parks",
                "Modern apartments with city views",
                "Investment properties under $600k",
                "Houses with pools in Brisbane"
              ].map((suggestion, i) => (
                <button
                  key={i}
                  className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "AI-Powered Search",
              description: "Search using natural language. Our AI understands what you really want.",
              icon: "🤖"
            },
            {
              title: "Smart Recommendations",
              description: "Personalized property suggestions that learn from your preferences.",
              icon: "🎯"
            },
            {
              title: "Market Intelligence",
              description: "Get AI insights on pricing, neighborhoods, and investment potential.",
              icon: "📊"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Development Status
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-lg font-medium text-green-600">Phase 1 Complete</span>
            </div>
            <p className="text-gray-600 mb-6">
              Foundation setup complete with Next.js 14, AI infrastructure, and competitive analysis tools.
              Ready for Phase 2: Core Map Search Experience.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✅ Completed</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Next.js 14 + TypeScript setup</li>
                  <li>• OpenAI + LangChain integration</li>
                  <li>• PostgreSQL + PostGIS database</li>
                  <li>• Playwright MCP for analysis</li>
                  <li>• Tailwind CSS + shadcn/ui</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔄 Next Phase</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interactive map with Mapbox</li>
                  <li>• Natural language search</li>
                  <li>• Property listing system</li>
                  <li>• AI-powered recommendations</li>
                  <li>• Advanced filtering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Discover Real Estate</h3>
            <p className="text-gray-400 mb-6">
              Australia&apos;s most intelligent property marketplace
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/zumu-g/discover_property" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
