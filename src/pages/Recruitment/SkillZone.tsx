import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './RecruitmentShared.css';

const SkillZone: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="skill-zone-page">
      <Sidebar />
      <div className={`main-content ${isCollapsed ? 'main-content--collapsed' : ''}`}>
        <Navbar pageTitle="Skill Zone" />
        <div className="content">
          <div className="content-container">
            {/* Header */}
            <div className="header">
              <div className="header__left">
                <h1>Skill Zone</h1>
              </div>
              <div className="header__actions">
                <div className="search">
                  <div className="search__input-group">
                    <svg className="search__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <button className="btn btn--filter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
                  </svg>
                  Filter
                </button>
                <button className="btn btn--create">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Create
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="content-body">
              <div className="no-search-result">
                <div className="no-search-result__icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                    <circle cx="8.5" cy="8.5" r="1" fill="currentColor"></circle>
                    <circle cx="13.5" cy="8.5" r="1" fill="currentColor"></circle>
                    <path d="M8 13c0-1 1-2 3-2s3 1 3 2"></path>
                  </svg>
                </div>
                <h2 className="no-search-result__title">No search result found!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default SkillZone;
