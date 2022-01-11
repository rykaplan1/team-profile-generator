const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should return an object with an officeNumber property', () => {
      const obj = new Manager();
      expect('officeNumber' in obj).toBeTruthy();
    });

    it('should set officeNumber when created', () => {
      const officeNumber = 100;
      const obj = new Manager('Larry', 4, 'larry@gmail.com', officeNumber);
      expect(obj.officeNumber).toEqual(officeNumber);
    });
  });

  describe('getOfficeNumber', () => {
    it("should return the manager's office number", () => {
      const officeNumber = 100;
      const obj = new Manager('Larry', 4, 'larry@gmail.com', officeNumber);
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  describe('getRole', () => {
    it('should return the role of "Manager"', () => {
      const obj = new Manager();
      expect(obj.getRole()).toEqual('Manager');
    });
  });
});