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
    { title: "85%+ Conversion Rate", icon: <Target className="h-6 w-6 text-futuristic-700 dark:text-cream-200" /> },
    { title: "Minimal Attrition Rate", icon: <Users className="h-6 w-6 text-futuristic-700 dark:text-cream-200" /> },
    { title: "Primary Recruitment Source", icon: <CheckCircle2 className="h-6 w-6 text-futuristic-700 dark:text-cream-200" /> }
  ];

  return (
    <div id="about" className="py-16 bg-cream-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-futuristic-900 dark:text-white">
            About Arihant Consultants
          </h2>
          <p className="mt-4 text-lg text-futuristic-600 dark:text-gray-300">
            One of the fastest growing HR firms focused on premium placement services, providing simple, strong, fast, dynamic, and responsive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-futuristic-800 dark:text-white mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-cream-100 dark:bg-gray-800 p-6 rounded-lg border border-cream-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-futuristic-700 dark:text-white">{value.title}</h4>
                  <p className="mt-2 text-futuristic-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-futuristic-800 dark:text-white mb-6">Our Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-cream-100 dark:bg-gray-800 p-6 rounded-lg border border-cream-200 dark:border-gray-700">
                  {achievement.icon}
                  <span className="ml-4 text-lg font-medium text-futuristic-800 dark:text-white">
                    {achievement.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-futuristic-800 dark:text-white mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-futuristic-700 dark:text-cream-200" />
                  <span className="ml-4 text-lg font-medium text-futuristic-800 dark:text-white">
                    Expert Team
                  </span>
                </div>
                <p className="text-base text-futuristic-600 dark:text-gray-300">
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