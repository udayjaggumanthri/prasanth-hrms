// Employee module TypeScript interfaces
export interface Employee {
  id: string;
  employee_first_name: string;
  employee_last_name: string;
  email: string;
  phone: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  qualification: string;
  experience: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  emergency_contact: string;
  emergency_contact_name: string;
  emergency_contact_relation: string;
  marital_status: 'single' | 'married' | 'divorced' | 'widowed';
  children: number;
  employee_profile?: string; // Profile image URL
  job_position_id?: string;
  is_online?: boolean;
}

export interface BankInfo {
  bank_name: string;
  account_number: string;
  branch: string;
  any_other_code1: string;
  address: string;
  country: string;
  state: string;
  city: string;
  any_other_code2: string;
}

export interface WorkInfo {
  job_position_id: string;
  department_id: string;
  shift_id: string;
  work_type_id: string;
  employee_type_id: string;
  job_role_id: string;
  reporting_manager_id: string;
  company_id: string;
  location: string;
  email: string;
  date_joining: string;
  contract_end_date: string;
  basic_salary: number;
  salary_hour: number;
}

export interface EmployeeFormData {
  personal: Employee;
  bank: BankInfo;
  work: WorkInfo;
}
