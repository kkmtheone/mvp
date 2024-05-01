
import React, { useState } from 'react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div>
      <h2>Search Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for something..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
