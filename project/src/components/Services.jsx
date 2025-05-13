import React from 'react';
import { Users, Briefcase, Building2, HeartHandshake, Target, GraduationCap } from 'lucide-react';

function Services() {
  const clientServices = [
    {
      icon: <Users className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Talent Sourcing & Acquisition",
      description: "Connect with top-tier talent across various industries through our premium placement services."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Job Posting & Advertising",
      description: "Strategic job advertising and posting services to reach the right candidates."
    },
    {
      icon: <Target className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Candidate Screening",
      description: "Multiple screening rounds prior to final interviews, increasing success probability."
    }
  ];

  const candidateServices = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Career Counselling",
      description: "Professional guidance for career development and growth opportunities."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Interview Preparation",
      description: "Comprehensive interview preparation and negotiation support."
    },
    {
      icon: <Building2 className="h-8 w-8 text-futuristic-700 dark:text-cream-200" />,
      title: "Resume Advisory",
      description: "Expert resume advice to help you stand out in the job market."
    }
  ];

  return (
    <div id="services" className="py-16 bg-cream-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-futuristic-900 dark:text-white">Our Services</h2>
          <p className="mt-4 text-lg text-futuristic-600 dark:text-gray-300">
            Comprehensive recruitment solutions for both clients and candidates
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-futuristic-800 dark:text-white mb-8 text-center">For Clients</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientServices.map((service, index) => (
              <div
                key={index}
                className="bg-cream-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-cream-200 dark:border-gray-700"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-6 text-xl font-medium text-futuristic-800 dark:text-white text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-futuristic-600 dark:text-gray-300 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-futuristic-800 dark:text-white mb-8 text-center">For Candidates</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {candidateServices.map((service, index) => (
              <div
                key={index}
                className="bg-cream-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-cream-200 dark:border-gray-700"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-6 text-xl font-medium text-futuristic-800 dark:text-white text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-futuristic-600 dark:text-gray-300 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;