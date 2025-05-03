import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  resume: String,
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  }
}, {
  timestamps: true
});

export const Application = mongoose.model('Application', applicationSchema);
