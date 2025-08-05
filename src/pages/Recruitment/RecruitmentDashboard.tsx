import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Navbar from '../../components/Layout/Navbar';
import QuickAccess from '../../components/QuickAccess/QuickAccess';
import { useSidebar } from '../../contexts/SidebarContext';
import './RecruitmentDashboard.css';

const RecruitmentDashboard: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="recruitment-dashboard">
      <Sidebar />
      <div className={`rd-main-content ${isCollapsed ? 'rd-main-content--collapsed' : ''}`}>
        <div className={`rd-navbar ${isCollapsed ? 'rd-navbar--collapsed' : ''}`}>
          <Navbar pageTitle="Recruitment Dashboard" />
        </div>
        <div className="rd-content">
          <div className="rd-content-container">
            {/* Statistics Cards - Matching Dashboard Image */}
            <div className="rd-stats-grid">
              <div className="rd-stat-card rd-stat-card--yellow">
                <div className="rd-stat-card__header">
                  <h3 className="rd-stat-card__title">Total Vacancies</h3>
                </div>
                <div className="rd-stat-card__content">
                  <div className="rd-stat-card__value">0</div>
                </div>
              </div>
              
              <div className="rd-stat-card rd-stat-card--red">
                <div className="rd-stat-card__header">
                  <h3 className="rd-stat-card__title">Ongoing Recruitments</h3>
                </div>
                <div className="rd-stat-card__content">
                  <div className="rd-stat-card__value">0</div>
                </div>
              </div>
              
              <div className="rd-stat-card rd-stat-card--green">
                <div className="rd-stat-card__header">
                  <h3 className="rd-stat-card__title">Hired Candidates</h3>
                </div>
                <div className="rd-stat-card__content">
                  <div className="rd-stat-card__value">0</div>
                </div>
              </div>
              
              <div className="rd-stat-card rd-stat-card--blue">
                <div className="rd-stat-card__header">
                  <h3 className="rd-stat-card__title">Conversion Rate</h3>
                  <div className="rd-stat-card__info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <div className="rd-stat-card__content">
                  <div className="rd-stat-card__value">0%</div>
                </div>
              </div>
              
              <div className="rd-stat-card rd-stat-card--teal">
                <div className="rd-stat-card__header">
                  <h3 className="rd-stat-card__title">Offer Acceptance Rate (OAR)</h3>
                  <div className="rd-stat-card__info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <div className="rd-stat-card__content">
                  <div className="rd-stat-card__value">0%</div>
                </div>
              </div>
            </div>
            
            {/* Main Content Sections - Matching Dashboard Image */}
            <div className="rd-content-sections">
              <div className="rd-section">
                <div className="rd-section__header">
                  <h3 className="rd-section__title">Skill Zone Status</h3>
                </div>
                <div className="rd-section__content">
                  <div className="rd-empty-state">
                    <div className="rd-empty-state__icon">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <line x1="22" y1="4" x2="18" y2="8"></line>
                        <line x1="18" y1="4" x2="22" y2="8"></line>
                      </svg>
                    </div>
                    <div className="rd-empty-state__message">No skill zone available.</div>
                  </div>
                </div>
              </div>
              
              <div className="rd-section">
                <div className="rd-section__header">
                  <h3 className="rd-section__title">Candidate Offer Letter Status</h3>
                </div>
                <div className="rd-section__content">
                  <div className="rd-empty-state">
                    <div className="rd-empty-state__icon">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                        <line x1="22" y1="11" x2="18" y2="15"></line>
                        <line x1="18" y1="11" x2="22" y2="15"></line>
                      </svg>
                    </div>
                    <div className="rd-empty-state__message">No Candidates available.</div>
                  </div>
                </div>
              </div>
              
              <div className="rd-section">
                <div className="rd-section__header">
                  <h3 className="rd-section__title">Candidate on Onboard</h3>
                </div>
                <div className="rd-section__content">
                  <div className="rd-empty-state">
                    <div className="rd-empty-state__icon">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <line x1="22" y1="4" x2="18" y2="8"></line>
                        <line x1="18" y1="4" x2="22" y2="8"></line>
                      </svg>
                    </div>
                    <div className="rd-empty-state__message">No candidates started onboarding.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Joinings Per Month Section */}
            <div className="rd-joinings-section">
              <div className="rd-joinings-card">
                <div className="rd-joinings-header">
                  <h3 className="rd-joinings-title">Joinings Per Month</h3>
                  <div className="rd-joinings-controls">
                    <select className="rd-year-select">
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                    <button className="rd-nav-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="rd-joinings-content">
                  <div className="rd-joinings-empty">
                    <div className="rd-joinings-empty-icon">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <line x1="18" y1="8" x2="14" y2="12"></line>
                        <line x1="14" y1="8" x2="18" y2="12"></line>
                      </svg>
                    </div>
                    <div className="rd-joinings-empty-message">No records were available.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Tasks and Candidates Section */}
            <div className="rd-bottom-sections">
              <div className="rd-bottom-card">
                <div className="rd-bottom-header">
                  <h3 className="rd-bottom-title">My Onboarding Tasks</h3>
                </div>
                <div className="rd-bottom-content">
                  <div className="rd-bottom-empty">
                    <div className="rd-bottom-empty-icon">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="9" y1="9" x2="10" y2="10"></line>
                        <line x1="9" y1="14" x2="10" y2="15"></line>
                        <line x1="9" y1="19" x2="10" y2="20"></line>
                        <line x1="14" y1="9" x2="15" y2="10"></line>
                        <line x1="14" y1="14" x2="15" y2="15"></line>
                        <rect x="16" y="16" width="4" height="4" rx="1"></rect>
                        <path d="M12 22h10"></path>
                      </svg>
                    </div>
                    <div className="rd-bottom-empty-message">No onboarding tasks are currently available.</div>
                  </div>
                </div>
              </div>
              
              <div className="rd-bottom-card">
                <div className="rd-bottom-header">
                  <h3 className="rd-bottom-title">Candidates Per Stage</h3>
                  <button className="rd-nav-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="rd-bottom-content">
                  <div className="rd-bottom-empty">
                    <div className="rd-bottom-empty-icon">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <circle cx="18" cy="18" r="3"></circle>
                        <path d="M8 21h8"></path>
                        <path d="M12 17v4"></path>
                      </svg>
                    </div>
                    <div className="rd-bottom-empty-message">No recruitment stages currently available.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuickAccess />
      </div>
    </div>
  );
};

export default RecruitmentDashboard;
