import React from 'react'

const AboutUS = () => {
    const teamMembers = [
        { name: 'Alex Chen', role: 'CEO & Founder', image: '👨‍💼' },
        { name: 'Sofia Rodriguez', role: 'CTO & Lead Architect', image: '👩‍💻' },
        { name: 'James Wilson', role: 'Lead Backend Developer', image: '👨‍💻' },
        { name: 'Priya Patel', role: 'Product & Strategy Lead', image: '👩‍🔬' },
    ]

    const values = [
        { title: 'Accuracy', description: 'Precise code conversion with zero loss of functionality' },
        { title: 'Speed', description: 'Fast conversion processes that save you valuable development time' },
        { title: 'Reliability', description: 'Enterprise-grade stability you can depend on' },
        { title: 'Support', description: 'Dedicated team committed to your success' },
    ]

    const features = [
        { title: 'Multi-Language Support', description: 'Convert between Python, JavaScript, Java, C++, Go, and more' },
        { title: 'AI-Powered Conversion', description: 'Smart algorithms that understand code semantics' },
        { title: 'Quality Assurance', description: 'Comprehensive testing to ensure converted code integrity' },
        { title: 'Real-Time Preview', description: 'See conversions instantly as you work' },
    ]

    return (
        <div className='bg-gradient-to-b from-purple-50 to-white'>
            {/* Hero Section */}
            <section className='px-6 py-20 text-center'>
                <h1 className='text-5xl font-bold text-gray-900 mb-6'>About Code-Bridge</h1>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    Simplifying code conversion across languages. Bridge the gap between programming frameworks with our intelligent, AI-powered conversion platform.
                </p>
            </section>

            {/* Mission Section */}
            <section className='px-6 py-16 bg-white'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-6'>Our Mission</h2>
                    <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                        At Code-Bridge, we're on a mission to eliminate the barriers of language-specific programming. We believe that great code should be accessible across all platforms and languages, enabling developers to work more efficiently and focus on innovation rather than manual conversion.
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                        Our intelligent conversion engine empowers teams to modernize legacy codebases, migrate between frameworks, and leverage the best tools available—regardless of programming language constraints.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className='px-6 py-16 bg-gray-50'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>Our Core Values</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {values.map((value, index) => (
                            <div key={index} className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                                <h3 className='text-2xl font-bold text-purple-600 mb-3'>{value.title}</h3>
                                <p className='text-gray-700'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='px-6 py-16 bg-white'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>Why Choose Code-Bridge?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {features.map((feature, index) => (
                            <div key={index} className='bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200'>
                                <h3 className='text-2xl font-bold text-purple-700 mb-3'>{feature.title}</h3>
                                <p className='text-gray-700'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='px-6 py-16 bg-white'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>Meet Our Team</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {teamMembers.map((member, index) => (
                            <div key={index} className='text-center'>
                                <div className='text-6xl mb-4'>{member.image}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-2'>{member.name}</h3>
                                <p className='text-gray-600'>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='px-6 py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center'>
                <h2 className='text-4xl font-bold mb-6'>Ready to Convert Your Code?</h2>
                <p className='text-xl mb-8 max-w-2xl mx-auto'>
                    Join thousands of developers using Code-Bridge to seamlessly convert and migrate their codebases across programming languages.
                </p>
                <button className='bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors'>
                    Get Started Free
                </button>
            </section>
        </div>
    )
}

export default AboutUS