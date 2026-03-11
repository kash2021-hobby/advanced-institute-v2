import { useEffect, useRef, useState } from 'react';
import { Users, Monitor, BookOpen, ClipboardCheck, UserCheck, MapPin, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Small Batches',
    subtitle: 'Max 20 Students',
    color: '#0C64E5',
    bgColor: 'bg-white',
    borderColor: 'border-blue-200'
  },
  {
    icon: Monitor,
    title: 'Online Classes',
    subtitle: 'Available Now',
    color: '#14B8A6',
    bgColor: 'bg-blue-50',
    borderColor: 'border-teal-200'
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    subtitle: 'Print + Digital',
    color: '#10B981',
    bgColor: 'bg-white',
    borderColor: 'border-emerald-200'
  },
  {
    icon: ClipboardCheck,
    title: 'Mock Tests',
    subtitle: 'Full Length',
    color: '#F59E0B',
    bgColor: 'bg-blue-50',
    borderColor: 'border-amber-200'
  },
  {
    icon: UserCheck,
    title: 'Mentoring',
    subtitle: 'Personalized',
    color: '#8B5CF6',
    bgColor: 'bg-white',
    borderColor: 'border-purple-200'
  },
  {
    icon: MapPin,
    title: 'Guwahati',
    subtitle: 'Prime Location',
    color: '#06B6D4',
    bgColor: 'bg-blue-50',
    borderColor: 'border-cyan-200'
  }
];

export default function FeatureCards() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(features.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl ${feature.bgColor} border-2 ${feature.borderColor} shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } transition-all duration-500`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-4 rounded-full shadow-md mb-4">
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <span className="text-base font-bold text-gray-900 mb-1">{feature.title}</span>
                <span className="text-sm text-gray-600 font-medium">{feature.subtitle}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden flex flex-col space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`flex items-center p-6 rounded-2xl ${feature.bgColor} border-2 ${feature.borderColor} shadow-md hover:shadow-lg transition-all duration-300 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } transition-all duration-500`}
              >
                <div className="bg-white p-4 rounded-full shadow-md mr-4 flex-shrink-0">
                  <Icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-gray-900">{feature.title}</div>
                  <div className="text-sm text-gray-600 font-medium">{feature.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
