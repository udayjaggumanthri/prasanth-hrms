import React from 'react';
import './StatusCard.css';

interface StatusCardProps {
  title: string;
  children?: React.ReactNode; // For content within the card, if any
  hasRecords: boolean;
  message?: string; // Optional message when no records found
}

const StatusCard: React.FC<StatusCardProps> = ({ title, children, hasRecords, message }) => {
  return (
    <div className="status-card">
      <div className="status-card-header">
        <h3>{title}</h3>
        {/* Optional Add button, only for Announcements */}
        {title === "Announcements" && <button className="add-button">+</button>}
      </div>
      <div className="status-card-content">
        {hasRecords ? (
          children
        ) : (
          <div className="no-records">
            <span className="search-icon">🔍</span>
            <p>No Records found.</p>
            {message && <p className="no-records-message">{message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusCard;