import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  mobile: String,
  email: String,
  userId: String,
  userType: String,
  barNumber: String,
  password: String,
  firstName: String,
  lastName: String,
  contactNumber: String,
  gender: String,
  dob: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  photo: String,
  idProof: String
}, { timestamps: true });

export default mongoose.model('User', userSchema);
