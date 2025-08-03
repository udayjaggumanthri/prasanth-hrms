import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';

// Import your mock data
import { mockCompanyInfo, mockUserPermissions, mockSidebarMenuItems } from './utils/mockSidebarData';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <SidebarProvider>
          {/* AppRoutes will now receive the mock data as props */}
          <AppRoutes
            companyInfo={mockCompanyInfo}
            userPermissions={mockUserPermissions}
            menuItems={mockSidebarMenuItems}
          />
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
