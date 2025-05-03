import express from 'express';
import {
  getJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob
} from '../controllers/jobController.js';

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(createJob);

router.route('/:id')
  .get(getJob)
  .put(updateJob)
  .delete(deleteJob);

export default router;
