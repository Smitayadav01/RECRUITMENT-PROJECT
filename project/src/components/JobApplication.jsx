import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

function JobApplicationForm({ isOpen, onClose, jobId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    position: '',
    jobId: jobId
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      
      if (response.status === 201) {
        setIsSubmitted(true);
        toast.success('Application submitted successfully!');
        
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            resume: null,
            coverLetter: '',
            portfolio: '',
            position: '',
            jobId: jobId
          });
        }, 2000);
      }
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Job Application Form</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {[
            { label: 'Full Name', type: 'text', key: 'name' },
            { label: 'Email Address', type: 'email', key: 'email' },
            { label: 'Phone Number', type: 'tel', key: 'phone' },
            { label: 'Portfolio / Website', type: 'url', key: 'portfolio', required: false },
            { label: 'Position Applying For', type: 'text', key: 'position' },
            { label: 'Cover Letter', type: 'textarea', key: 'coverLetter', required: false }
          ].map(({ label, type, key, required = true }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              {type === 'textarea' ? (
                <textarea
                  rows="4"
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required={required}
                />
              ) : (
                <input
                  type={type}
                  required={required}
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
            />
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
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