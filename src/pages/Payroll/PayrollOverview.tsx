import React from 'react';

const PayrollOverview: React.FC = () => {
  return (
    <div className="payroll-overview">
      <div className="page-header">
        <h1 className="page-title">Payroll Overview</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          Process Payroll
        </button>
      </div>
      
      <div className="page-content">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Payroll overview coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default PayrollOverview;
