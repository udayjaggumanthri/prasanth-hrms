import React from 'react';

interface MessageAlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

const MessageAlert: React.FC<MessageAlertProps> = ({
  message,
  type,
  onClose
}) => {
  const getAlertClass = () => {
    switch (type) {
      case 'success': return 'alert-success';
      case 'error': return 'alert-error';
      case 'warning': return 'alert-warning';
      case 'info': return 'alert-info';
      default: return 'alert-info';
    }
  };

  return (
    <div className={`alert ${getAlertClass()}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="alert-close">
          ×
        </button>
      )}
    </div>
  );
};

export default MessageAlert;
