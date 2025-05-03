import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: String,
}, {
  timestamps: true
});

export const Job = mongoose.model('Job', jobSchema);
