import { useState, useEffect } from 'react';
import { User, LoginCredentials, RegisterData } from '../types/auth.d';
import { apiClient, endpoints } from '../utils/api';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchCurrentUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      setIsLoading(true);
      const userData = await apiClient.get<User>(endpoints.auth.me);
      setUser(userData);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      localStorage.removeItem('authToken');
      setError('Failed to authenticate user');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiClient.post<{ user: User; token: string }>(
        endpoints.auth.login,
        credentials
      );
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
    } catch (err) {
      setError('Invalid credentials');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiClient.post<{ user: User; token: string }>(
        endpoints.auth.register,
        data
      );
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
    } catch (err) {
      setError('Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiClient.post(endpoints.auth.logout);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  return {
    user,
    login,
    register,
    logout,
    isLoading,
    error,
    isAuthenticated: !!user,
  };
};
