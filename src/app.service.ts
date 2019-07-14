import { Injectable } from '@nestjs/common';
import { Employee } from './employee.interface';

@Injectable()
export class AppService {
  private employees: Employee[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.employees.push({
        id: i,
        name: `Emp ${i}`
      });
    }
  }

  deleteEmployee(id: number): string {
    const index = this.employees.findIndex(emp => emp.id == id);

    if (index > -1) {
      this.employees.splice(index, 1);
    }
    
    return JSON.stringify(this.employees);
  }

  updateEmployee(employee: Employee): string {
    this.employees[this.employees.findIndex(emp => emp.id == employee.id)] = employee;
    return JSON.stringify(this.employees);
  }

  addEmployee(employee: Employee): string {
    this.employees.push(employee);
    return JSON.stringify(this.employees);
  }

  getEmployee(id: number): string {
    const employee = this.employees.find(x => x.id == id);
    return JSON.stringify(employee);
  }

  getEmployees(): string {
    return JSON.stringify(this.employees);
  }
}
