export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  EMPLOYEES: {
    BASE: '/employees',
    PROFILE: '/employees/profile',
  },
  DEPARTMENTS: '/departments',
  POSITIONS: '/positions',
  RECRUITMENT: '/recruitment',
  PAYROLL: '/payroll',
  ATTENDANCE: '/attendance',
  LEAVE: '/leave',
  PERFORMANCE: '/performance',
  ASSETS: '/assets',
  HELPDESK: '/helpdesk',
  PROJECTS: '/projects',
} as const;

export const APP_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  EMPLOYEES: {
    LIST: '/employees',
    PROFILE: '/employees/:id',
  },
  RECRUITMENT: {
    DASHBOARD: '/recruitment',
    JOBS: '/recruitment/jobs',
    CANDIDATES: '/recruitment/candidates',
  },
  ONBOARDING: '/onboarding',
  PAYROLL: {
    OVERVIEW: '/payroll',
    SALARY_SLIPS: '/payroll/salary-slips',
  },
  ATTENDANCE: '/attendance',
  LEAVE: '/leave',
  PERFORMANCE: '/performance',
  OFFBOARDING: '/offboarding',
  ASSETS: '/assets',
  HELPDESK: '/helpdesk',
  PROJECTS: '/projects',
  SETTINGS: '/settings',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  HR: 'hr',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
} as const;

export const EMPLOYEE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  TERMINATED: 'terminated',
  ON_LEAVE: 'on_leave',
} as const;

export const THEME_COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
} as const;
