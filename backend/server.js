// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Upload config (for photo & ID proof)
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Connect to Azure Cosmos DB using MongoDB API
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to Azure Cosmos DB'))
  .catch((err) => console.error('❌ DB Connection Error:', err));

// Registration endpoint
app.post('/register', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'id_proof', maxCount: 1 }
]), async (req, res) => {
  try {
    const userData = {
      ...req.body,
      photo: req.files.photo[0].filename,
      idProof: req.files.id_proof[0].filename
    };

    const newUser = new User(userData);
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port 5000');
});
