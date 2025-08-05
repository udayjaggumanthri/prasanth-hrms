import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './Candidates.css';

const Candidates: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="candidates-page">
      <Sidebar />
      <div className={`cd-main-content ${isCollapsed ? 'cd-main-content--collapsed' : ''}`}>
        <div className={`cd-navbar ${isCollapsed ? 'cd-navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Candidates" />
        </div>
        <div className="cd-content">
          <div className="cd-content-container">
            {/* Header Section */}
            <div className="cd-header">
              <div className="cd-header-left">
                <h1 className="cd-main-title">Candidates</h1>
              </div>
              <div className="cd-header-right">
                <button className="cd-create-button">
                  + Create
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="cd-empty-state">
              <div className="cd-empty-state-content">
                <div className="cd-empty-state-icon">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <div className="cd-empty-state-text">
                  <h3 className="cd-empty-state-title">No Records found.</h3>
                  <p className="cd-empty-state-subtitle">There are currently no candidates to consider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default Candidates;
