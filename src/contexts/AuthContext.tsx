import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { AuthContextType, User, LoginCredentials, RegisterData } from '../types/auth.d';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (err) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock authentication - accept any email/password
      if (credentials.email && credentials.password) {
        const mockUser: User = {
          id: '1',
          email: credentials.email,
          firstName: 'John',
          lastName: 'Doe',
          role: 'admin' as any,
          isActive: true,
          lastLogin: new Date(),
        };
        
        // Store in localStorage to persist login
        localStorage.setItem('authToken', 'mock-token-12345');
        localStorage.setItem('userData', JSON.stringify(mockUser));
        
        setUser(mockUser);
      } else {
        throw new Error('Email and password are required');
      }
    } catch (err) {
      setError('Invalid credentials. Use any email and password to login.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock registration
      const mockUser: User = {
        id: '1',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'employee' as any,
        isActive: true,
        lastLogin: new Date(),
      };
      
      localStorage.setItem('authToken', 'mock-token-12345');
      localStorage.setItem('userData', JSON.stringify(mockUser));
      
      setUser(mockUser);
    } catch (err) {
      setError('Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
  };

  const authValue: AuthContextType = {
    user,
    login,
    logout,
    register,
    isLoading,
    error,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
