
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ImageForm = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      await axios.post('http://localhost:3001/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image.');
    }
  };

  return (
    <div>
      <h2>Create / Add Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description..."
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageForm;
