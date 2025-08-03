export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  hireDate: Date;
  salary: number;
  status: EmployeeStatus;
  manager?: Employee;
  avatar?: string;
  address: Address;
  emergencyContact: EmergencyContact;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

export enum EmployeeStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  TERMINATED = 'terminated',
  ON_LEAVE = 'on_leave'
}

export interface Department {
  id: string;
  name: string;
  description: string;
  headOfDepartment?: Employee;
  employeeCount: number;
}

export interface Position {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  salaryRange: {
    min: number;
    max: number;
  };
}
