// Mock data interfaces and data for sidebar
export interface CompanyInfo {
  id: string;
  companyName: string;
  icon?: string;
  tagline: string;
}

export interface UserPermissions {
  configPerms: boolean;
  config_perms: boolean;
  base: {
    view_multipleapprovalcondition: boolean;
    view_SYNCmailtemplate: boolean;
    add_holidays: boolean;
    view_companyleaves: boolean;
  };
  leave: {
    app_installed: boolean;
  };
  SYNC_automations: {
    app_installed: boolean;
    view_mailautomation: boolean;
  };
}

export interface SubMenuItem {
  menu: string;
  redirect: string;
}

export interface MenuItem {
  app: string;
  menu: string;
  img_src: string;
  redirect?: string;
  permissions?: {
    appInstalled?: boolean;
    viewPermission?: boolean;
  };
  submenu?: SubMenuItem[];
}

// Mock company information
export const mockCompanyInfo: CompanyInfo = {
  id: "1",
  companyName: "SYNC HRMS",
  icon: "https://ui-avatars.com/api/?name=H&background=4299e1",
  tagline: "My Company"
};

// Mock user permissions
export const mockUserPermissions: UserPermissions = {
  configPerms: true,
  config_perms: true,
  base: {
    view_multipleapprovalcondition: true,
    view_SYNCmailtemplate: true,
    add_holidays: true,
    view_companyleaves: true
  },
  leave: {
    app_installed: true
  },
  SYNC_automations: {
    app_installed: true,
    view_mailautomation: true
  }
};

// Mock sidebar menu items matching Horilla structure and order
export const mockSidebarMenuItems: MenuItem[] = [
  {
    app: 'recruitment',
    menu: 'Recruitment',
    img_src: '/static/images/ui/recruitment.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/recruitment/dashboard' },
      { menu: 'Recruitment Pipeline', redirect: '/recruitment/pipeline' },
      { menu: 'Recruitment Survey', redirect: '/recruitment/survey' },
      { menu: 'Candidates', redirect: '/recruitment/candidates' },
      { menu: 'Interview', redirect: '/recruitment/interview' },
      { menu: 'Recruitment', redirect: '/recruitment/recruitment' },
      { menu: 'Open Jobs', redirect: '/recruitment/open-jobs' },
      { menu: 'Stages', redirect: '/recruitment/stages' },
      { menu: 'Skill Zone', redirect: '/recruitment/skill-zone' }
    ]
  },
  {
    app: 'onboarding',
    menu: 'Onboarding',
    img_src: '/static/images/ui/onboarding.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Onboarding view', redirect: '/onboarding/view' },
      { menu: 'Candidates view', redirect: '/onboarding/candidates-view' }
    ]
  },
  {
    app: 'employee',
    menu: 'Employee',
    img_src: '/static/images/ui/employee.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Profile', redirect: '/employee/profile' },
      { menu: 'Employees', redirect: '/employee/employees' },
      { menu: 'Document Requests', redirect: '/employee/document-requests' },
      { menu: 'Shift Requests', redirect: '/employee/shift-requests' },
      { menu: 'Work Type Requests', redirect: '/employee/work-type-requests' },
      { menu: 'Rotating Shift Assign', redirect: '/employee/rotating-shift-assign' },
      { menu: 'Rotating Work Type Assign', redirect: '/employee/rotating-work-type-assign' },
      { menu: 'Disciplinary Actions', redirect: '/employee/disciplinary-actions' },
      { menu: 'Policies', redirect: '/employee/policies' },
      { menu: 'Organization Chart', redirect: '/employee/organization-chart' }
    ]
  },
  {
    app: 'attendance',
    menu: 'Attendance',
    img_src: '/static/images/ui/attendance.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/attendance/dashboard' },
      { menu: 'Attendances', redirect: '/attendance/attendances' },
      { menu: 'Attendance Requests', redirect: '/attendance/attendance-requests' },
      { menu: 'Hour Account', redirect: '/attendance/hour-account' },
      { menu: 'Work Records', redirect: '/attendance/work-records' },
      { menu: 'Attendance Activities', redirect: '/attendance/attendance-activities' },
      { menu: 'Late Come Early Out', redirect: '/attendance/late-come-early-out' },
      { menu: 'My Attendances', redirect: '/attendance/my-attendances' }
    ]
  },
  {
    app: 'leave',
    menu: 'Leave',
    img_src: '/static/images/ui/leave.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/leave/dashboard' },
      { menu: 'My Leave Requests', redirect: '/leave/my-leave-requests' },
      { menu: 'Leave Requests', redirect: '/leave/leave-requests' },
      { menu: 'Leave Types', redirect: '/leave/leave-types' },
      { menu: 'Assigned Leave', redirect: '/leave/assigned-leave' },
      { menu: 'Leave Allocation Request', redirect: '/leave/leave-allocation-request' }
    ]
  },
  {
    app: 'payroll',
    menu: 'Payroll',
    img_src: '/static/images/ui/payroll.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/payroll/dashboard' },
      { menu: 'Contract', redirect: '/payroll/contract' },
      { menu: 'Allowances', redirect: '/payroll/allowances' },
      { menu: 'Deductions', redirect: '/payroll/deductions' },
      { menu: 'Payslips', redirect: '/payroll/payslips' },
      { menu: 'Loan / Advanced Salary', redirect: '/payroll/loan-advanced-salary' },
      { menu: 'Encashments & Reimbursements', redirect: '/payroll/encashments-reimbursements' },
      { menu: 'Federal Tax', redirect: '/payroll/federal-tax' }
    ]
  },
  {
    app: 'performance',
    menu: 'Performance',
    img_src: '/static/images/ui/performance.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/performance/dashboard' },
      { menu: 'Objectives', redirect: '/performance/objectives' },
      { menu: '360 Feedback', redirect: '/performance/360-feedback' },
      { menu: 'Meetings', redirect: '/performance/meetings' },
      { menu: 'Key Results', redirect: '/performance/key-results' },
      { menu: 'Employee Bonus Point', redirect: '/performance/employee-bonus-point' },
      { menu: 'Period', redirect: '/performance/period' },
      { menu: 'Question Template', redirect: '/performance/question-template' }
    ]
  },
  {
    app: 'offboarding',
    menu: 'Offboarding',
    img_src: '/static/images/ui/offboarding.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/offboarding/dashboard' },
      { menu: 'Exit Process', redirect: '/offboarding/exit-process' }
    ]
  },
  {
    app: 'assets',
    menu: 'Assets',
    img_src: '/static/images/ui/asset.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/assets/dashboard' },
      { menu: 'Asset View', redirect: '/assets/asset-view' },
      { menu: 'Asset Batches', redirect: '/assets/asset-batches' },
      { menu: 'Request and Allocation', redirect: '/assets/request-and-allocation' },
      { menu: 'Asset History', redirect: '/assets/asset-history' }
    ]
  },
  {
    app: 'helpdesk',
    menu: 'HelpDesk',
    img_src: '/static/images/ui/helpdesk.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'FAQs', redirect: '/helpdesk/faqs' },
      { menu: 'Tickets', redirect: '/helpdesk/tickets' }
    ]
  },
  {
    app: 'project',
    menu: 'Project',
    img_src: '/static/images/ui/project.svg',
    permissions: {
      appInstalled: true,
      viewPermission: true
    },
    submenu: [
      { menu: 'Dashboard', redirect: '/project/dashboard' },
      { menu: 'Projects', redirect: '/project/projects' },
      { menu: 'Tasks', redirect: '/project/tasks' },
      { menu: 'Timesheet', redirect: '/project/timesheet' }
    ]
  }
];
