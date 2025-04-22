import React from 'react';
import { Users, Briefcase, Building2, HeartHandshake, Target, GraduationCap } from 'lucide-react';

function Services() {
  const clientServices = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Talent Sourcing & Acquisition",
      description: "Connect with top-tier talent across various industries through our premium placement services."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Job Posting & Advertising",
      description: "Strategic job advertising and posting services to reach the right candidates."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Candidate Screening",
      description: "Multiple screening rounds prior to final interviews, increasing success probability."
    }
  ];

  const candidateServices = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
      title: "Career Counselling",
      description: "Professional guidance for career development and growth opportunities."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Interview Preparation",
      description: "Comprehensive interview preparation and negotiation support."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Resume Advisory",
      description: "Expert resume advice to help you stand out in the job market."
    }
  ];

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive recruitment solutions for both clients and candidates
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Clients</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Candidates</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {candidateServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;