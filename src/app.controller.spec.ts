import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root/:id', () => {
    it('should return particular employee details', () => {
      expect(appController.getEmployee(1)).toBe(JSON.stringify({
        id: 1,
        name: `Emp 1`
      }));
    });
  });
  
  describe('root', () => {
    it('should return list of employee details', () => {
      const employees = [];

      for (let i = 1; i <= 10; i++) {
        employees.push({
          id: i,
          name: `Emp ${i}`
        });
      }

      expect(appController.getEmployees()).toBe(JSON.stringify(employees));
    });
  });
});
