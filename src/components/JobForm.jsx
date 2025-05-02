import React, { useState } from 'react';
import { Check } from 'lucide-react';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    position: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, value);
      });

      console.log('FormData values:');
      for (let pair of submissionData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: '',
          portfolio: '',
          position: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-md">
          <div className="mb-4 flex justify-center">
            <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">Your application has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg w-full max-w-2xl shadow-md p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Full Name', type: 'text', key: 'name' },
            { label: 'Email Address', type: 'email', key: 'email' },
            { label: 'Phone Number', type: 'text', key: 'phone' },
            { label: 'Portfolio / Website', type: 'url', key: 'portfolio' },
            { label: 'Position Applying For', type: 'text', key: 'position' },
            { label: 'Cover Letter (optional)', type: 'textarea', key: 'coverLetter' },
          ].map(({ label, type, key }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  rows="4"
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              ) : (
                <input
                  type={type}
                  required={key !== 'coverLetter'}
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Resume (PDF/DOC)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplicationForm;
