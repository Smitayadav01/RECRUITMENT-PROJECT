const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Handle form submission
app.post('/api/apply', upload.single('resume'), (req, res) => {
  try {
    const formData = req.body;
    const resumeFile = req.file;

    console.log('Received form data:');
    console.log(formData);
    console.log('Uploaded file:', resumeFile);

    // You can now store data in a DB or send email, etc.
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
