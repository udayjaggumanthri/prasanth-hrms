import React, { useState } from 'react';
import './Header.css';
import useClickOutside from '../../hooks/useClickOutside';
import { useSidebar } from '../../contexts/SidebarContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { isCollapsed } = useSidebar();
  const [openNotification, setOpenNotification] = useState(false);
  const [markRead, setMarkRead] = useState(false);
  const [visible, setVisible] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Click outside handlers
  const notificationRef = useClickOutside(() => setOpenNotification(false));
  const userDropdownRef = useClickOutside(() => setUserDropdownOpen(false));

  const notifications = [
    {
      text: "Item has been deleted from the records.",
      date: "Jan 03, 2023, at 11:13AM",
      icon: "trash-outline"
    },
    {
      text: "Jane mentioned you in a post.",
      date: "Jan 01, 2023, at 05:13PM",
      icon: "at-circle-outline"
    },
    {
      text: "Aloyna share a document with you.",
      date: "Dec 31, 2022, at 02:00PM",
      icon: "at-circle-outline"
    },
    {
      text: "New event has been scheduled.",
      date: "Dec 31, 2022, at 10:27AM",
      icon: "calendar-outline"
    }
  ];

  return (
    <nav className="oh-navbar">
      <div className={`oh-wrapper oh-navbar__wrapper ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="oh-navbar__toggle-container">
          <a href="#" className="oh-navbar__toggle-link oh-link__unstyled" onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
            <img src="/static/images/ui/menu.svg" width="24" height="24" className="oh-navbar__toggle-menu" loading="lazy" />
            <span className="oh-navbar__page-title">Attendances</span>
          </a>
        </div>
        <div className="oh-navbar__systray">
          {/* CLOCK-IN */}
          <a href="#" className="oh-navbar__clock" onClick={(e) => e.preventDefault()}>
            <ion-icon className="oh-navbar__clock-icon me-2" name="enter-outline"></ion-icon>
            <span className="oh-navbar__clock-text">Check-In</span>
          </a>
          {/* CLOCK-IN */}
          
          {/* CLOCK-OUT */}
          {/* <a href="#" className="oh-navbar__clock"><ion-icon className="oh-navbar__clock-icon me-2" name="exit-outline"></ion-icon>
            <span className="oh-navbar__clock-text">Check-Out</span>
          </a> */}
          {/* CLOCK-OUT */}
          
          <div className="oh-navbar__notifications" ref={notificationRef}>
            <a 
              href="#" 
              className="oh-navbar__notification-link" 
              aria-label="Toggle Notifications" 
              role="button"
              onClick={(e) => { e.preventDefault(); setOpenNotification(!openNotification); }}
            >
              <ion-icon name="notifications-outline" className="oh-navbar__icon"></ion-icon>
            </a>
            {openNotification && (
              <div 
                className="oh-navbar__notification-tray"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="oh-navbar__notification-head">
                  <span className="oh-navbar__notification-head-title">Notifications</span>
                  {visible && (
                    <div className="oh-navbar__notification-links">
                      {!markRead && (
                        <a 
                          href="#" 
                          className="oh-navbar__notification-tray-link mr-2" 
                          role="button" 
                          onClick={(e) => { e.preventDefault(); setMarkRead(true); }}
                        >
                          <ion-icon name="checkmark-done-outline" className="mr-1"></ion-icon> Mark as read
                        </a>
                      )}
                      <a 
                        href="#" 
                        className="oh-navbar__notification-tray-link oh-navbar__notification-tray-link--danger" 
                        role="button" 
                        onClick={(e) => { e.preventDefault(); setVisible(false); }}
                      >
                        <ion-icon name="close-outline" className="mr-1"></ion-icon> Clear
                      </a>
                    </div>
                  )}
                </div>
                {visible ? (
                  <>
                    <div className="oh-navbar__notification-body">
                      <ul className="oh-navbar__nofication-list">
                        {notifications.map((notification, index) => (
                          <li key={index} className="oh-navbar__notification-item">
                            <div>
                              <span 
                                className={`oh-navbar__notification-dot oh-navbar__notification-dot--green ${
                                  markRead ? '' : 'oh-navbar__notification-dot--unread'
                                }`}
                              ></span>
                            </div>
                            <div>
                              <p 
                                className={`oh-navbar__notification-text ${
                                  markRead ? '' : 'oh-navbar__notification-text--unread'
                                }`}
                              >
                                {notification.text}
                              </p>
                              <span className="oh-navbar__notification-date">{notification.date}</span>
                            </div>
                            <div>
                              <div className="oh-navbar__notification-image">
                                <ion-icon name={notification.icon}></ion-icon>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="oh-navbar__notification-footer">
                      <a href="#" className="oh-navbar__notification-tray-link" onClick={(e) => e.preventDefault()}>
                        View all comments
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="oh-navbar__notification-empty">
                    <img src="/static/images/ui/happy.svg" alt="All caught up" width="50" height="50" loading="lazy" />
                    <span className="oh-navbar__notification-empty-title">All caught up!</span>
                    <span className="oh-navbar__notification-empty-desc">You have no new notifications at the moment.</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="oh-navbar__action-icons">
            <a href="#" className="oh-navbar__action-icons-link" onClick={(e) => e.preventDefault()}>
              <ion-icon name="settings-outline" className="oh-navbar__icon"></ion-icon>
            </a>
          </div>
          
          <div className="oh-dropdown" ref={userDropdownRef}>
            <div className="oh-navbar__user-info" onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
              <div className="oh-navbar__user-photo">
                <img src="/static/images/upload/userphoto.png" className="oh-navbar__user-image" loading="lazy" />
              </div>
              <span className="oh-navbar__user-name">Lizaveta Ivanovna</span>
            </div>
            {userDropdownOpen && (
              <div className="oh-dropdown__menu oh-dropdown__menu--right">
                <ul className="oh-dropdown__items">
                  <li className="oh-dropdown__item">
                    <a href="#" className="oh-dropdown__link" onClick={(e) => e.preventDefault()}>My Profile</a>
                  </li>
                  <li className="oh-dropdown__item">
                    <a href="#" className="oh-dropdown__link" onClick={(e) => e.preventDefault()}>Company Information</a>
                  </li>
                  <li className="oh-dropdown__item">
                    <a href="#" className="oh-dropdown__link" onClick={(e) => e.preventDefault()}>Notifications</a>
                  </li>
                  <li className="oh-dropdown__item">
                    <a href="#" className="oh-dropdown__link" onClick={(e) => e.preventDefault()}>Employees</a>
                  </li>
                </ul>
                <hr />
                <ul className="oh-dropdown__items">
                  <li className="oh-dropdown__item">
                    <a href="#" className="oh-dropdown__link" onClick={(e) => e.preventDefault()}>Log out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;