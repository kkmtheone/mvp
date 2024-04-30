
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.static('uploads'));
app.use(express.json());

const images = [];

app.get('/images', (req, res) => {
  res.json(images);
});

app.post('/images', upload.single('image'), (req, res) => {
  const newImage = {
    id: Date.now(),
    path: req.file.path,
    description: req.body.description,
  };
  images.push(newImage);
  res.status(201).json(newImage);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
