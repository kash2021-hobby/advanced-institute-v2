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
    'Expert Guidance & Strategy',
    'Live & Offline Classes',
    'High Success Rate in Assam'
  ];

  return (
    <section className="relative bg-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        {/* Hero Image with Ken Burns Animation and Gradient Overlay */}
        <div className="relative w-full h-[45vh] overflow-hidden">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
              alt="Successful student"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Strong gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

          {/* Headline Overlaid on Bottom of Image */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Crack Government Exams.{' '}
              <br />
              Build Your Career.
            </h1>
          </div>
        </div>

        {/* Content Below Image */}
        <div className="bg-white px-5 pt-6 pb-8">
          {/* Checkmark Features */}
          <div className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Buttons - Stacked Vertically */}
          <div className="space-y-3 mb-6">
            <Link
              to="/courses"
              className="block w-full bg-blue-600 text-white h-[48px] rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 text-center leading-[48px] shadow-md"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-transparent border-2 border-blue-600 text-blue-600 h-[48px] rounded-lg text-base font-semibold hover:bg-blue-50 transition-all duration-300 text-center leading-[44px]"
            >
              Talk to an Advisor
            </Link>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-[1400px] mx-auto px-[5%] py-16 items-center gap-12">
        {/* Left Column - Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Crack Government Exams.{' '}
            <br />
            Build Your Career.
          </h1>

          {/* Checkmark Features */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Buttons - Side by Side */}
          <div className="flex gap-4 mb-8">
            <Link
              to="/courses"
              className="inline-block bg-blue-600 text-white h-[52px] px-8 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 text-center leading-[52px] shadow-md"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 h-[52px] px-8 rounded-lg text-base font-semibold hover:bg-blue-50 transition-all duration-300 text-center leading-[48px]"
            >
              Talk to an Advisor
            </Link>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Animated Image */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 animate-ken-burns">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                alt="Successful student"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Ken Burns Animation Styles */}
      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-2%, -2%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
