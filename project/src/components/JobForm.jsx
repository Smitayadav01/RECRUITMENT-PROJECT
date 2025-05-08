import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import toast from 'react-hot-toast';

function JobForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    description: '',
    requirements: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Job submission:', formData);

      setIsSubmitted(true);
      toast.success('Job posted successfully!');
      
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          title: '',
          company: '',
          location: '',
          type: 'full-time',
          description: '',
          requirements: '',
          email: ''
        });
      }, 2000);
    } catch (error) {
      toast.error('Failed to post job. Please try again.');
      console.error('Error posting job:', error);
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
          <p className="text-gray-600">Your job has been posted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Post a New Job</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Job Type</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Requirements</label>
              <textarea
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
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
              className="px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-800 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Job Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;