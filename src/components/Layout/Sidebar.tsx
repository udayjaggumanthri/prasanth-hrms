import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Using NavLink for active state
import { useSidebar } from '../../contexts/SidebarContext';
import { CompanyInfo, UserPermissions, MenuItem, mockCompanyInfo, mockUserPermissions, mockSidebarMenuItems } from '../../utils/mockSidebarData'; // Import mock data
import './Sidebar.css';

// Helper function to manage open/close state in localStorage
const getOpenState = (id: string): boolean => {
  try {
    const menuStates = JSON.parse(localStorage.getItem('menuStates') || '{}');
    return menuStates[id] || false;
  } catch (e) {
    console.error("Failed to parse menuStates from localStorage", e);
    return false;
  }
};

const saveOpenState = (id: string, isOpen: boolean) => {
  try {
    const menuStates = JSON.parse(localStorage.getItem('menuStates') || '{}');
    menuStates[id] = isOpen;
    localStorage.setItem('menuStates', JSON.stringify(menuStates));
  } catch (e) {
    console.error("Failed to save menuStates to localStorage", e);
  }
};

interface SidebarProps {
  companyInfo?: CompanyInfo;
  userPermissions?: UserPermissions;
  menuItems?: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  companyInfo = mockCompanyInfo,
  userPermissions = mockUserPermissions,
  menuItems = mockSidebarMenuItems,
}) => {
  const { isCollapsed } = useSidebar();
  const location = useLocation(); // Hook to get current URL for active highlighting

  // Manage individual submenu open states
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    menuItems.forEach((item: MenuItem) => {
      if (item.submenu) {
        initialState[`${item.app}GenericNav`] = getOpenState(`${item.app}GenericNav`);
      }
    });
    // Also handle the Dashboard and Configuration items which are treated slightly differently
    initialState['dashboardNav'] = getOpenState('dashboardNav');
    initialState['configNav'] = getOpenState('configNav');
    return initialState;
  });

  const handleMenuClick = (id: string) => {
    setOpenSubmenus(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      saveOpenState(id, newState[id]);
      return newState;
    });
  };

  // Determine if a menu link is currently active based on the URL
  const isActiveLink = (path: string) => {
    // For exact match
    if (path === "/") return location.pathname === "/";
    // For partial match (e.g., /employees should activate /employees/list or /employees/profile)
    return location.pathname.startsWith(path) && path !== "/";
  };


  return (
    <div className={`oh-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="oh-sidebar__company">
        {isCollapsed ? (
          <span className="oh-sidebar__company-initials">
            {companyInfo.companyName ? companyInfo.companyName.charAt(0).toUpperCase() : 'C'}
          </span>
        ) : (
          <>
            <span className="mr-3">
              <img
                src={companyInfo.icon || "https://ui-avatars.com/api/?name=C&background=random"}
                style={{ width: '34px', borderRadius: '3px' }}
                alt="Company Icon"
              />
            </span>
            <div className="oh-sidebar__company-details">
              <span className="oh-sidebar__company-title" style={{ fontSize: '13px' }}>
                {companyInfo.companyName}.
              </span>
              <span className="oh-sidebar__company-link" style={{ fontSize: '10px' }}>
                {companyInfo.tagline}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="oh-sidebar__menu">
        <ul className="oh-sidebar__menu-items">
          {/* Dashboard Link (special static case) */}
          <li
            className="oh-sidebar__menu-item"
            data-id="dashboardNav"
          >
            <NavLink
              to="/dashboard" // Using NavLink from react-router-dom
              className={({ isActive }) =>
                `oh-sidebar__menu-link ${isActive ? 'oh-sidebar__menu-link--active' : ''}`
              }
              onClick={() => handleMenuClick('dashboardNav')}
            >
              <div className="oh-sidebar__menu-icon">
                {/* Replaced img tag with inline SVG for consistency and easier styling if needed */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              {!isCollapsed && <span>Dashboard</span>}
            </NavLink>
          </li>

          {/* Dynamic Menu Items */}
          {menuItems.map((menues: MenuItem) => {
            // Check if app is dashboard, as it's handled separately above
            if (menues.app === "dashboard") return null;

            // Check if permissions allow rendering this menu item
            // This is a simplified check based on common patterns. Adjust as per actual permissions
            const hasPermissions = menues.permissions
              ? (menues.permissions.appInstalled === undefined || menues.permissions.appInstalled) &&
                (menues.permissions.viewPermission === undefined || menues.permissions.viewPermission)
              : true; // If no permissions defined, assume visible

            if (!hasPermissions) return null; // Don't render if permissions are missing

            const dataId = `${menues.app}GenericNav`;
            const hasSubmenu = menues.submenu && menues.submenu.length > 0;
            const menuIsActive = menues.submenu
              ? menues.submenu.some((sub: { redirect: string }) => isActiveLink(sub.redirect))
              : isActiveLink(menues.redirect || '');

            return (
              <li
                key={menues.app}
                className={`oh-sidebar__menu-item ${menuIsActive ? 'oh-sidebar__menu-item--active' : ''}`}
              >
                {hasSubmenu ? (
                  <button
                    className={`oh-sidebar__menu-link oh-sidebar__menu-button ${openSubmenus[dataId] ? 'oh-sidebar__menu-link--active' : ''}`}
                    data-id={dataId}
                    onClick={() => handleMenuClick(dataId)}
                    type="button"
                    aria-expanded={openSubmenus[dataId]}
                    aria-controls={dataId}
                  >
                    <div className="oh-sidebar__menu-icon">
                      <img
                        src={menues.img_src}
                        alt={menues.menu}
                        style={{ filter: 'brightness(0) invert(1)' }}
                        width="24"
                        height="24"
                      />
                    </div>
                    {!isCollapsed && <span>{menues.menu}</span>}
                    {!isCollapsed && (
                      <div className="oh-sidebar__menu-arrow">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          style={{ 
                            transform: openSubmenus[dataId] ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </div>
                    )}
                  </button>
                ) : (
                  <NavLink
                    to={menues.redirect || '#'}
                    className={({ isActive }) =>
                      `oh-sidebar__menu-link ${isActive ? 'oh-sidebar__menu-link--active' : ''}`
                    }
                    onClick={() => handleMenuClick(dataId)} // Still handle click to save state
                  >
                    <div className="oh-sidebar__menu-icon">
                      <img
                        src={menues.img_src}
                        alt={menues.menu}
                        style={{ filter: 'brightness(0) invert(1)' }}
                        width="24"
                        height="24"
                      />
                    </div>
                    {!isCollapsed && <span>{menues.menu}</span>}
                  </NavLink>
                )}

                {hasSubmenu && (
                  <div
                    className="oh-sidebar__submenu"
                    id={dataId}
                    style={{ display: openSubmenus[dataId] && !isCollapsed ? 'block' : 'none' }}
                  >
                    <ul className="oh-sidebar__submenu-items">
                      {menues.submenu?.map((submenu: { redirect: string; menu: string }) => (
                        <li key={submenu.redirect} className="oh-sidebar__submenu-item">
                          <NavLink
                            to={submenu.redirect}
                            className={({ isActive }) =>
                              `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`
                            }
                          >
                            {!isCollapsed && submenu.menu}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}

          {/* Configuration Link (special static case with complex permissions) */}
          {userPermissions.configPerms && (
            <li
              className="oh-sidebar__menu-item"
              data-id="configNav"
            >
              <button
                className={`oh-sidebar__menu-link oh-sidebar__menu-button ${openSubmenus['configNav'] ? 'oh-sidebar__menu-link--active' : ''}`}
                onClick={() => handleMenuClick('configNav')}
                type="button"
                aria-expanded={openSubmenus['configNav']}
                aria-controls="configNav"
              >
                <div className="oh-sidebar__menu-icon">
                  {/* Inline SVG for Configuration icon */}
                  <svg
                    fill="#ffffff"
                    height="20"
                    width="24"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 482.568 482.568"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path
                            d="M116.993,203.218c13.4-1.8,26.8,2.8,36.3,12.3l24,24l22.7-22.6l-32.8-32.7c-5.1-5.1-5.1-13.4,0-18.5s13.4-5.1,18.5,0 l32.8,32.8l22.7-22.6l-24.1-24.1c-9.5-9.5-14.1-23-12.3-36.3c4-30.4-5.7-62.2-29-85.6c-23.8-23.8-56.4-33.4-87.3-28.8 c-4.9,0.7-6.9,6.8-3.4,10.3l30.9,30.9c14.7,14.7,14.7,38.5,0,53.1l-19,19c-14.7,14.7-38.5,14.7-53.1,0l-31-30.9 c-3.5-3.5-9.5-1.5-10.3,3.4c-4.6,30.9,5,63.5,28.8,87.3C54.793,197.518,86.593,207.218,116.993,203.218z"
                          ></path>
                          <path
                            d="M309.193,243.918l-22.7,22.6l134.8,134.8c5.1,5.1,5.1,13.4,0,18.5s-13.4,5.1-18.5,0l-134.8-134.8l-22.7,22.6l138.9,138.9 c17.6,17.6,46.1,17.5,63.7-0.1s17.6-46.1,0.1-63.7L309.193,243.918z"
                          ></path>
                          <path
                            d="M361.293,153.918h59.9l59.9-119.7l-29.9-29.9l-119.8,59.8v59.9l-162.8,162.3l-29.3-29.2l-118,118 c-24.6,24.6-24.6,64.4,0,89s64.4,24.6,89,0l118-118l-29.9-29.9L361.293,153.918z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                {!isCollapsed && <span>Configuration</span>}
                {!isCollapsed && (
                  <div className="oh-sidebar__menu-arrow">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ 
                        transform: openSubmenus['configNav'] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                )}
              </button>
              <div
                className="oh-sidebar__submenu"
                id="configNav"
                style={{ display: openSubmenus['configNav'] && !isCollapsed ? 'block' : 'none' }}
              >
                <ul className="oh-sidebar__submenu-items">
                  {userPermissions.leave.app_installed && userPermissions.base.view_multipleapprovalcondition && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/multiple-approvals" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Multiple Approvals"}
                      </NavLink>
                    </li>
                  )}
                  {userPermissions.base.view_SYNCmailtemplate && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/mail-templates" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Mail Templates"}
                      </NavLink>
                    </li>
                  )}
                  {userPermissions.SYNC_automations?.app_installed && userPermissions.SYNC_automations?.view_mailautomation && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/mail-automations" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Mail Automations"}
                      </NavLink>
                    </li>
                  )}
                  {userPermissions.base.add_holidays && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/holidays" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Holidays"}
                      </NavLink>
                    </li>
                  )}
                  {userPermissions.base.view_companyleaves && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/company-leaves" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Company Leaves"}
                      </NavLink>
                    </li>
                  )}
                  {userPermissions.leave.app_installed && (
                    <li className="oh-sidebar__submenu-item">
                      <NavLink to="/configuration/restrict-leaves" className={({ isActive }) => `oh-sidebar__submenu-link ${isActive ? 'oh-sidebar__submenu-link--active' : ''}`}>
                        {!isCollapsed && "Restrict Leaves"}
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;