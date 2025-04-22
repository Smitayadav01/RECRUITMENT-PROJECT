import React from 'react';
import { Award, CheckCircle2, Target, Users } from 'lucide-react';

function About() {
  const coreValues = [
    { title: "Innovation", description: "Embracing new ideas and solutions" },
    { title: "Integrity", description: "Maintaining highest ethical standards" },
    { title: "Empathy", description: "Understanding client and candidate needs" },
    { title: "Quality", description: "Delivering excellence in every placement" },
    { title: "Professionalism", description: "Upholding professional standards" }
  ];

  const achievements = [
    { title: "85%+ Conversion Rate", icon: <Target className="h-6 w-6 text-blue-600" /> },
    { title: "Minimal Attrition Rate", icon: <Users className="h-6 w-6 text-blue-600" /> },
    { title: "Primary Recruitment Source", icon: <CheckCircle2 className="h-6 w-6 text-blue-600" /> }
  ];

  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About Arihant Consultants
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One of the fastest growing HR firms focused on premium placement services, providing simple, strong, fast, dynamic, and responsive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-600">{value.title}</h4>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg">
                  {achievement.icon}
                  <span className="ml-4 text-lg font-medium text-gray-900">
                    {achievement.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="ml-4 text-lg font-medium text-gray-900">
                    Expert Team
                  </span>
                </div>
                <p className="text-base text-gray-600">
                  Our well-trained staff combines speed and experience to find the best possible talent in the most demanding niche skills areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;