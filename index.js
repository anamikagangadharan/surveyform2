const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
// "mongodb+srv://admin:8cPTgHmrHvaeJIXJ@cluster0.lvywqj9.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect('mongodb+srv://admin:anamika_1234@cluster0.lvywqj9.mongodb.net/batcave_prelaunch', {
mongoose.connect('mongodb+srv://admin:8cPTgHmrHvaeJIXJ@cluster0.lvywqj9.mongodb.net/batcave_prelaunch', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Data model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  survey: {
    type: String,
    required: true
  },
  dropdown: {
    type: String,
    required: true
  },
  message: String 
});

const User = mongoose.model('User', userSchema, 'SurveyUser');


// Form submission 
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    
    // Check if all required fields are present
    const requiredFields = ['name', 'email', 'phone', 'survey', 'dropdown'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }
    
    // Create new user
    const newUser = new User({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      survey: formData.survey,
      dropdown: formData.dropdown,
      message: formData.message
    });

    // Save user to database
    await newUser.save();
    
    // Respond with success message
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    // Handle server error
    res.status(500).json({ message: err.message });
  }
});

// Get user count 
app.get('/api/user-count', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.json({ userCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
