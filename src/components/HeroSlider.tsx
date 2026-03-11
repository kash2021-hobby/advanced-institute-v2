import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    'Expert Faculty with 10+ Years Experience',
    'Small Batch Sizes for Individual Attention',
    'Live & Offline Classes'
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden w-full">
        {/* Hero Image - Top */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
            alt="Successful student"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content Below - Bottom */}
        <div className="bg-white px-6 py-8">
          {/* Main Headline */}
          <h1 className="text-3xl font-bold text-slate-900 leading-tight text-left mb-6">
            Crack Government Exams. Build Your Career.
          </h1>

          {/* Checkmark Features */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-base text-slate-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/courses"
            className="block w-full bg-blue-600 text-white py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors text-center shadow-md"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Desktop Layout - 2 Column */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 items-center gap-12 min-h-[85vh]">
        {/* Left Column - Content */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
              Crack Government Exams.{' '}
              <span className="text-blue-600">Build Your Career.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Join Assam's premier coaching institute for SSC, Banking, and Railway exams with proven results.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              to="/courses"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
              alt="Successful student"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
