const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  role: { type: String, enum: ['student', 'instructor'], required: true },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Ensure Course model is referenced correctly
});

const User = mongoose.model('User', UserSchema); // Consistent model naming
module.exports = User;