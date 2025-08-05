import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './RecruitmentSurvey.css';

const RecruitmentSurvey: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const [activeTab, setActiveTab] = useState('templates');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="recruitment-survey-page">
      <Sidebar />
      <div className={`rs-main-content ${isCollapsed ? 'rs-main-content--collapsed' : ''}`}>
        <div className={`rs-navbar ${isCollapsed ? 'rs-navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Recruitment Survey" />
        </div>
        <div className="rs-content">
          <div className="rs-content-container">
            {/* Header with Search and Filter */}
            <div className="rs-header">
              <div className="rs-header-left">
                <h1 className="rs-main-title">Survey Templates</h1>
              </div>
              <div className="rs-header-right">
                <div className="rs-search-container">
                  <div className="rs-search-input-wrapper">
                    <svg className="rs-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <input
                      type="text"
                      className="rs-search-input"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <button className="rs-filter-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
                  </svg>
                  Filter
                </button>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="rs-tabs-section">
              <div className="rs-tabs">
                <div className="rs-tab-item">
                  <button 
                    className={`rs-tab-button ${activeTab === 'templates' ? 'rs-tab-button--active' : ''}`}
                    onClick={() => setActiveTab('templates')}
                  >
                    Templates
                  </button>
                  <button className="rs-tab-add-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
                <div className="rs-tab-item">
                  <button 
                    className={`rs-tab-button ${activeTab === 'questions' ? 'rs-tab-button--active' : ''}`}
                    onClick={() => setActiveTab('questions')}
                  >
                    Questions
                  </button>
                  <button className="rs-tab-add-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <div className="rs-empty-state">
              <div className="rs-empty-state-content">
                <div className="rs-empty-state-icon">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
                <div className="rs-empty-state-text">
                  <h3 className="rs-empty-state-title">No Records found.</h3>
                  <p className="rs-empty-state-subtitle">No template groups have been established yet.</p>
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

export default RecruitmentSurvey;
