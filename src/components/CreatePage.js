
import React, { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setUploadError('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      setUploading(true);
      // the server endpoint for image upload
      const PORT = process.env.REACT_APP_SERVER_PORT || 3001;
      const response = await axios.post(`http://localhost:${PORT}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully', response.data);
      // Clear the form after successful upload
      setImage(null);
      setUploading(false);
      setUploadError('');
    } catch (error) {
      console.error('Error uploading image', error);
      setUploadError('Failed to upload image');
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Create / Add Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="image">Select Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        {uploading && <p>Uploading image...</p>}
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default CreatePage;



