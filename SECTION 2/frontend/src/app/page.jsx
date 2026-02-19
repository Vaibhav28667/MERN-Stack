import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 lg:px-20 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">
            CB
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Code-Bridge
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition">How It Works</a>
          <Link href="/login" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Legacy Code into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Standards
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Code-Bridge is an intelligent code conversion platform that seamlessly transforms legacy code into modern, maintainable code. Upgrade your codebase without rewriting from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/sign-up" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Get Started Free
            </Link>
            <button className="px-8 py-4 border-2 border-slate-400 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-bold text-lg transition">
              Watch Demo
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm text-slate-300"><strong>Fast & Accurate</strong> - Convert code in seconds with AI-powered analysis</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm text-slate-300"><strong>Secure</strong> - Your code stays private with enterprise-grade encryption</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm text-slate-300"><strong>Reliable</strong> - Support for 20+ programming languages and frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 lg:px-20 py-20 bg-slate-800 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">🔄</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Multi-Language Support</h3>
                <p className="text-slate-300">Convert between Python, JavaScript, Java, C++, C#, PHP, Go, Rust, TypeScript and more. Bridge the gap between any two languages.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">🤖</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">AI-Powered Analysis</h3>
                <p className="text-slate-300">Our advanced AI engine understands your code's logic and semantics, ensuring accurate conversions that maintain functionality.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-slate-300">Every conversion is verified and tested. Get comprehensive reports showing code changes, improvements, and potential issues.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">📚</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Best Practices</h3>
                <p className="text-slate-300">Automatically apply modern coding standards, design patterns, and industry best practices to your converted code.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">💼</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Team Collaboration</h3>
                <p className="text-slate-300">Share projects, leave comments, and collaborate with your team. Real-time updates and version history for all conversions.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">📊</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Detailed Analytics</h3>
                <p className="text-slate-300">Track conversion metrics, code quality improvements, and ROI. Get insights to optimize your modernization strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Code</h3>
              <p className="text-slate-300 text-sm">Paste or upload your legacy code files from any language</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Select Target</h3>
              <p className="text-slate-300 text-sm">Choose your desired modern language or framework version</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">AI Converts</h3>
              <p className="text-slate-300 text-sm">Our AI engine intelligently transforms your code instantly</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Review & Deploy</h3>
              <p className="text-slate-300 text-sm">Review, test, and deploy your modern code with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="px-6 lg:px-20 py-20 bg-slate-800 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Supported Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Python', 'JavaScript', 'Java', 'C++', 'C#', 'PHP', 'Go', 'Rust', 'TypeScript', 'Ruby', 'Swift', 'Kotlin'].map((lang) => (
              <div key={lang} className="bg-slate-700 rounded-lg p-4 text-center font-semibold hover:bg-blue-600 transition cursor-pointer">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Codebase?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers who are transforming their legacy code into modern, reliable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Start Converting Now
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-slate-400 hover:border-cyan-400 rounded-lg font-bold text-lg transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-20 py-12 border-t border-slate-700 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Code-Bridge</h4>
              <p className="text-slate-400 text-sm">Transform your legacy code into modern, maintainable software.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-cyan-400">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400">Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="/about-us" className="hover:text-cyan-400">About</a></li>
                <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-cyan-400">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Code-Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home