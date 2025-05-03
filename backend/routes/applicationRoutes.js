import express from 'express';
import {
  getApplications,
  createApplication
} from '../controllers/applicationController.js';

const router = express.Router();

router.route('/')
  .get(getApplications)
  .post(createApplication);

export default router;
