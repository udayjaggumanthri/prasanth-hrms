import React from 'react';
import './MasterLayout.css';

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  return (
    <div className="master-layout">
      {children}
    </div>
  );
};

export default MasterLayout;
