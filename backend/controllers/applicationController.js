import { Application } from '../models/Application.js';

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    const newApp = await application.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
