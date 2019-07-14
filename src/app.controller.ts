import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.interface';

@Controller('employee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Delete(':id')
  deleteEmployee(@Param('id') id): string {
    return this.appService.deleteEmployee(id);
  }

  @Put()
  updateEmployee(@Body() employee: Employee): string {
    return this.appService.updateEmployee(employee);
  }

  @Post()
  addEmployee(@Body() employee: Employee): string {
    return this.appService.addEmployee(employee);
  }

  @Get(':id')
  getEmployee(@Param('id') id): string {
    return this.appService.getEmployee(id);
  }

  @Get()
  getEmployees(): string {
    return this.appService.getEmployees();
  }
}
