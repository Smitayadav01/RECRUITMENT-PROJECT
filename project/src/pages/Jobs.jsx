import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Filter, Plus } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import JobForm from '../components/JobForm';
import { useAuth } from '../context/AuthContext';
import { formatDistanceToNow } from 'date-fns';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs');
      setJobs(response.data.data.jobs);
    } catch (error) {
      toast.error('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (jobId) => {
    navigate(`/jobs/${jobId}/apply`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="space-y-3 mt-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Available Jobs</h1>
          <button
            onClick={() => setIsJobFormOpen(true)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post a Job
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  {job.type}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  Posted {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                </div>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">{job.description}</p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleApply(job._id)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <JobForm isOpen={isJobFormOpen} onClose={() => setIsJobFormOpen(false)} onSubmit={fetchJobs} />
    </div>
  );
}

export default Jobs;