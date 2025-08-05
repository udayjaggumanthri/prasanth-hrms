import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './Interview.css';

const Interview: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="interview-page">
      <Sidebar />
      <div className={`iv-main-content ${isCollapsed ? 'iv-main-content--collapsed' : ''}`}>
        <div className={`iv-navbar ${isCollapsed ? 'iv-navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Interview" />
        </div>
        <div className="iv-content">
          <div className="iv-content-container">
            {/* Header Section */}
            <div className="iv-header">
              <div className="iv-header__left">
                <h1 className="iv-header__title">Scheduled Interviews</h1>
              </div>
              <div className="iv-header__actions">
                <div className="iv-search">
                  <div className="iv-search__input-group">
                    <svg className="iv-search__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <input
                      type="text"
                      className="iv-search__input"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <button className="iv-btn iv-btn--filter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
                  </svg>
                  Filter
                </button>
                <button className="iv-btn iv-btn--create">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Create
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="iv-content-body">
              <div className="iv-no-records">
                <div className="iv-no-records__icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <h2 className="iv-no-records__title">No Records found.</h2>
                <p className="iv-no-records__subtitle">No interviews found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default Interview;
