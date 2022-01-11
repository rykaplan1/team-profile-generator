const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should return an object with a name property', () => {
      const obj = new Employee();
      expect('name' in obj).toBeTruthy();
    });

    it('should set name when created', () => {
      const name = "Mike";
      const obj = new Employee(name);
      expect(obj.name).toEqual(name);
    });

    it('should return an object with an id property', () => {
      const obj = new Employee();

      expect('id' in obj).toBeTruthy();
    });

    it('should set id when created', () => {
      const id = 1;
      const obj = new Employee("Mike", id);
      expect(obj.id).toEqual(id);
    });

    it('should return an object with an email property', () => {
      const obj = new Employee();

      expect('email' in obj).toBeTruthy();
    });

    it('should set email when created', () => {
      const email = "fakename@fakeemail.com";
      const obj = new Employee("Mike", 1, email);
      expect(obj.email).toEqual(email);
    });

  });

  describe('getName' , () => {
    it("should return the employee's name", () => {
      const name = "Mike";
      const obj = new Employee(name);
      expect(obj.getName()).toEqual(name);
    }); 
  });

  describe('getId' , () => {
    it("should return the employee's id", () => {
      const id = 1;
      const obj = new Employee("Mike", id);
      expect(obj.getId()).toEqual(id);
    }); 
  });

  describe('getEmail' , () => {
    it("should return the employee's email", () => {
      const email = "fakename@fakeemail.com";
      const obj = new Employee("Mike", 1, email);
      expect(obj.getEmail()).toEqual(email);
    }); 
  });

  describe('getRole', () => {
    it('should return the role of "Employee"', () => {
      const obj = new Employee();
      expect(obj.getRole()).toEqual('Employee');
    })
  });
  
});