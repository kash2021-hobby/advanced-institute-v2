import { useState, useEffect, useRef } from 'react';
import {
  Users,
  BookOpen,
  ClipboardCheck,
  UserCheck,
  MapPin,
  Monitor,
} from 'lucide-react';

interface FeatureCard {
  icon: typeof Users;
  title: string;
  subtitle: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: Users,
    title: 'Small Batches',
    subtitle: 'Max 20 Students',
    iconColor: 'text-blue-600',
    bgColor: 'bg-white',
    borderColor: 'border-blue-200',
  },
  {
    icon: Monitor,
    title: 'Online Classes',
    subtitle: 'Available Now',
    iconColor: 'text-teal-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-teal-200',
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    subtitle: 'Print + Digital',
    iconColor: 'text-sky-600',
    bgColor: 'bg-white',
    borderColor: 'border-sky-200',
  },
  {
    icon: ClipboardCheck,
    title: 'Mock Tests',
    subtitle: 'Full Length',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: UserCheck,
    title: 'Mentoring',
    subtitle: 'Personalized',
    iconColor: 'text-ocean-600',
    bgColor: 'bg-white',
    borderColor: 'border-ocean-200',
  },
  {
    icon: MapPin,
    title: 'Guwahati',
    subtitle: 'Prime Location',
    iconColor: 'text-sky-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-sky-200',
  },
];

export default function FeatureCardsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(featureCards.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

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
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-ocean-50 border-b border-primary-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-radial opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-6 gap-6">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 shadow-blue-md group"
              >
                <div className="bg-white p-4 rounded-full shadow-blue-md mb-4 group-hover:animate-float">
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <span className="text-base font-bold text-gray-900 mb-1">
                  {feature.title}
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  {feature.subtitle}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack with Scroll Animation */}
        <div className="md:hidden flex flex-col space-y-4">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`flex items-center p-8 rounded-2xl border-2 ${feature.bgColor} ${feature.borderColor} shadow-lg transition-all duration-700 transform ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white p-5 rounded-2xl shadow-md mr-6 flex-shrink-0">
                  <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
