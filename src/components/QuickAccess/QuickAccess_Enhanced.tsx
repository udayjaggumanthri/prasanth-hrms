import React, { useState } from 'react';
import './QuickAccess.css';
import LeaveRequestModal from './modals/LeaveRequestModal';
import ShiftRequestModal from './modals/ShiftRequestModal';
import ReimbursementModal from './modals/ReimbursementModal';
import TicketModal from './modals/TicketModal';
import AttendanceRequestModal from './modals/AttendanceRequestModal';
import WorkTypeModal from './modals/WorkTypeModal';
import AssetRequestModal from './modals/AssetRequestModal';
import DashboardChartsModal from './modals/DashboardChartsModal';
import DocumentRequestModal from './modals/DocumentRequestModal';

export interface QuickAccessProps {}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onClick: (e: React.MouseEvent) => void;
}

const QuickAccess: React.FC<QuickAccessProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showShiftModal, setShowShiftModal] = useState(false);
  const [showWorkTypeModal, setShowWorkTypeModal] = useState(false);
  const [showReimbursementModal, setShowReimbursementModal] = useState(false);
  const [showAssetRequestModal, setShowAssetRequestModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showDashboardChartsModal, setShowDashboardChartsModal] = useState(false);
  const [showDocumentRequestModal, setShowDocumentRequestModal] = useState(false);

  // Enhanced keyboard event handling
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        console.log('⌨️ Quick Access menu closed via ESC key');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      console.log('⌨️ Keyboard event listener added for Quick Access menu');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Enhanced event handlers for each modal - 9 Button Event Listeners
  const handleAttendanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🕒 Opening Attendance Request Modal...');
    setShowAttendanceModal(true);
    setIsOpen(false);
  };

  const handleLeaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📅 Opening Leave Request Modal...');
    setShowLeaveModal(true);
    setIsOpen(false);
  };

  const handleShiftClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🔄 Opening Shift Request Modal...');
    setShowShiftModal(true);
    setIsOpen(false);
  };

  const handleWorkTypeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('💼 Opening Work Type Modal...');
    setShowWorkTypeModal(true);
    setIsOpen(false);
  };

  const handleReimbursementClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('💰 Opening Reimbursement Modal...');
    setShowReimbursementModal(true);
    setIsOpen(false);
  };

  const handleAssetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📦 Opening Asset Request Modal...');
    setShowAssetRequestModal(true);
    setIsOpen(false);
  };

  const handleTicketClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🎫 Opening Ticket Modal...');
    setShowTicketModal(true);
    setIsOpen(false);
  };

  const handleChartsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📊 Opening Dashboard Charts Modal...');
    setShowDashboardChartsModal(true);
    setIsOpen(false);
  };

  const handleDocumentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📄 Opening Document Request Modal...');
    setShowDocumentRequestModal(true);
    setIsOpen(false);
  };

  // Debug: Log modal states
  React.useEffect(() => {
    console.log('📊 Modal states updated:', {
      showAttendanceModal,
      showLeaveModal,
      showShiftModal,
      showWorkTypeModal,
      showReimbursementModal,
      showAssetRequestModal,
      showTicketModal,
      showDashboardChartsModal,
      showDocumentRequestModal
    });
  }, [showAttendanceModal, showLeaveModal, showShiftModal, showWorkTypeModal, showReimbursementModal, showAssetRequestModal, showTicketModal, showDashboardChartsModal, showDocumentRequestModal]);

  // 9 Quick Actions Configuration with Event Listeners
  const quickActions = [
    {
      id: 'attendance',
      label: 'Create Attendance Request',
      icon: 'time-outline',
      onClick: handleAttendanceClick
    },
    {
      id: 'leave',
      label: 'Create Leave Request',
      icon: 'calendar-outline',
      onClick: handleLeaveClick
    },
    {
      id: 'shift',
      label: 'Create Shift Request',
      icon: 'swap-horizontal-outline',
      onClick: handleShiftClick
    },
    {
      id: 'worktype',
      label: 'Create Work Type',
      icon: 'briefcase-outline',
      onClick: handleWorkTypeClick
    },
    {
      id: 'reimbursement',
      label: 'Create Reimbursement',
      icon: 'receipt-outline',
      onClick: handleReimbursementClick
    },
    {
      id: 'asset',
      label: 'Create Asset Request',
      icon: 'cube-outline',
      onClick: handleAssetClick
    },
    {
      id: 'ticket',
      label: 'Create Ticket',
      icon: 'help-circle-outline',
      onClick: handleTicketClick
    },
    {
      id: 'charts',
      label: 'Dashboard Charts',
      icon: 'bar-chart-outline',
      onClick: handleChartsClick
    },
    {
      id: 'document',
      label: 'Request Document',
      icon: 'document-text-outline',
      onClick: handleDocumentClick
    }
  ];

  const getIonIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      case 'time-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12,6 12,12 16,14"></polyline>
          </svg>
        );
      case 'swap-horizontal-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 6H3"></path>
            <path d="M10 12H3"></path>
            <path d="M21 18H3"></path>
            <path d="M17 8L21 4L17 0"></path>
            <path d="M7 16L3 20L7 24"></path>
          </svg>
        );
      case 'receipt-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case 'help-circle-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case 'briefcase-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'cube-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        );
      case 'bar-chart-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
        );
      case 'document-text-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
        );
      case 'close-outline':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        );
      case 'add-outline':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Quick Access Container */}
      <div className="oh-quick-access">
        {/* Quick Action Menu with Enhanced Event Listeners */}
        {isOpen && (
          <div className="oh-quick-access__menu" role="menu" aria-label="Quick Actions">
            {quickActions.map((action, index) => (
              <button
                key={action.id}
                className="oh-quick-access__menu-item"
                onClick={action.onClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    action.onClick(e as any);
                  }
                }}
                title={action.label}
                aria-label={action.label}
                role="menuitem"
                tabIndex={0}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
                data-testid={`quick-action-${action.id}`}
              >
                {getIonIcon(action.icon)}
              </button>
            ))}
          </div>
        )}
        
        {/* Main FAB Button */}
        <button
          className={`oh-quick-access__fab ${isOpen ? 'oh-quick-access__fab--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Quick Access Menu"
        >
          {isOpen ? getIonIcon('close-outline') : getIonIcon('add-outline')}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="oh-quick-access__backdrop" 
          onClick={(e) => {
            // Only close if clicking directly on backdrop, not on menu items
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        />
      )}

      {/* 9 Modals with Enhanced Event Listeners */}
      <AttendanceRequestModal 
        isOpen={showAttendanceModal} 
        onClose={() => {
          console.log('🕒 Attendance Request Modal closed');
          setShowAttendanceModal(false);
        }} 
      />
      <LeaveRequestModal 
        isOpen={showLeaveModal} 
        onClose={() => {
          console.log('📅 Leave Request Modal closed');
          setShowLeaveModal(false);
        }} 
      />
      <ShiftRequestModal 
        isOpen={showShiftModal} 
        onClose={() => {
          console.log('🔄 Shift Request Modal closed');
          setShowShiftModal(false);
        }} 
      />
      <WorkTypeModal 
        isOpen={showWorkTypeModal} 
        onClose={() => {
          console.log('💼 Work Type Modal closed');
          setShowWorkTypeModal(false);
        }} 
      />
      <ReimbursementModal 
        isOpen={showReimbursementModal} 
        onClose={() => {
          console.log('💰 Reimbursement Modal closed');
          setShowReimbursementModal(false);
        }} 
      />
      <AssetRequestModal 
        isOpen={showAssetRequestModal} 
        onClose={() => {
          console.log('📦 Asset Request Modal closed');
          setShowAssetRequestModal(false);
        }} 
      />
      <TicketModal 
        isOpen={showTicketModal} 
        onClose={() => {
          console.log('🎫 Ticket Modal closed');
          setShowTicketModal(false);
        }} 
      />
      <DashboardChartsModal 
        isOpen={showDashboardChartsModal} 
        onClose={() => {
          console.log('📊 Dashboard Charts Modal closed');
          setShowDashboardChartsModal(false);
        }} 
      />
      <DocumentRequestModal 
        isOpen={showDocumentRequestModal} 
        onClose={() => {
          console.log('📄 Document Request Modal closed');
          setShowDocumentRequestModal(false);
        }} 
      />
    </>
  );
};

export default QuickAccess;
