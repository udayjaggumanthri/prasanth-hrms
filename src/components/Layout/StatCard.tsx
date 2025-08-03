import React from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: number;
  color: 'green' | 'orange' | 'blue'; // Define specific colors
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-card-title">{title}</div>
      <div className="stat-card-value">{value}</div>
    </div>
  );
};

export default StatCard;