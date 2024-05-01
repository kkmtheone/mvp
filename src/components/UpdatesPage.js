
import React, { useState } from 'react';
import './UpdatesPage.css';

const UpdatesPage = () => {
  const [activeTab, setActiveTab] = useState('updates');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="updates-container">
      <div className="tabs">
        <button
          className={activeTab === 'updates' ? 'active' : ''}
          onClick={() => handleTabChange('updates')}
        >
          Updates
        </button>
        <button
          className={activeTab === 'messages' ? 'active' : ''}
          onClick={() => handleTabChange('messages')}
        >
          Messages
        </button>
      </div>
      <div className="updates-section" style={{ display: activeTab === 'updates' ? 'block' : 'none' }}>
        <h2>Updates</h2>
        <div className="update-item">
          <div className="update-content">
            <p>Update 1</p>
            <span>2 hours ago</span>
          </div>
        </div>
        <div className="update-item">
          <div className="update-content">
            <p>Update 2</p>
            <span>3 hours ago</span>
          </div>
        </div>
        <div className="update-item">
          <div className="update-content">
            <p>Update 3</p>
            <span>4 hours ago</span>
          </div>
        </div>
      </div>
      <div className="messages-section" style={{ display: activeTab === 'messages' ? 'block' : 'none' }}>
        <h2>Messages</h2>
        <div className="message-item">
          <div className="message-content">
            <p>Message 1</p>
            <span>5 hours ago</span>
          </div>
        </div>
        <div className="message-item">
          <div className="message-content">
            <p>Message 2</p>
            <span>6 hours ago</span>
          </div>
        </div>
        <div className="message-item">
          <div className="message-content">
            <p>Message 3</p>
            <span>7 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
