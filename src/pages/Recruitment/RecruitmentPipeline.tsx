import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './RecruitmentPipeline.css';

const RecruitmentPipeline: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="recruitment-pipeline-page">
      <Sidebar />
      <div className={`rp-main-content ${isCollapsed ? 'rp-main-content--collapsed' : ''}`}>
        <div className={`rp-navbar ${isCollapsed ? 'rp-navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Recruitment Pipeline" />
        </div>
        <div className="rp-content">
          <div className="rp-content-container">
            {/* Simple Header */}
            <div className="rp-simple-header">
              <h1 className="rp-simple-title">Recruitments</h1>
            </div>

            {/* Empty State */}
            <div className="rp-empty-state">
              <div className="rp-empty-state-content">
                <div className="rp-empty-state-icon">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <div className="rp-empty-state-text">
                  <h3 className="rp-empty-state-title">No Records found.</h3>
                  <p className="rp-empty-state-subtitle">At present, there is no closed recruitment.</p>
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

export default RecruitmentPipeline;
