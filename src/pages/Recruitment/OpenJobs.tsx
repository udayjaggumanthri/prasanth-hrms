import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './RecruitmentShared.css';

const OpenJobs: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="open-jobs-page">
      <Sidebar />
      <div className={`main-content ${isCollapsed ? 'main-content--collapsed' : ''}`}>
        <Navbar pageTitle="Open Jobs" />
        <div className="content">
          <div className="content-container">
            {/* Header */}
            <div className="header">
              <div className="header__center">
                <h1>Open Job Listings</h1>
                <p>We're hiring! Join our team and be part of a vibrant workplace where your talents make a difference. Here are the open Recruitments...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default OpenJobs;
