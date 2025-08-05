import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import './RecruitmentShared.css';
import { useSidebar } from '../../contexts/SidebarContext';

const Recruitment: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="recruitment-page">
      <Sidebar />
      <div className={`main-content ${isCollapsed ? 'main-content--collapsed' : ''}`}>
        <div className={`navbar ${isCollapsed ? 'navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Recruitment" />
        </div>
        <div className="content">
          <div className="content-container">
            <div className="header">
              <div className="header__left">
                <h1>Recruitment</h1>
              </div>
              <div className="header__actions">
                <button className="btn btn--create">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Create
                </button>
              </div>
            </div>

            <div className="content-body">
              <div className="no-records">
                <div className="no-records__icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <h2 className="no-records__title">No Records found.</h2>
                <p className="no-records__subtitle">At present, there is no ongoing recruitment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default Recruitment;
