import React, { useState } from 'react';

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
}

interface QuickActionFabProps {
  actions: QuickAction[];
}

const QuickActionFab: React.FC<QuickActionFabProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="quick-action-fab">
      <button
        className="fab-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        +
      </button>
      {isOpen && (
        <div className="fab-actions">
          {actions.map((action) => (
            <button
              key={action.id}
              className="fab-action"
              onClick={action.onClick}
              title={action.label}
            >
              {action.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuickActionFab;
