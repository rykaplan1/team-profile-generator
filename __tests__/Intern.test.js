const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should return an object with a school property', () => {
      const obj = new Intern();
      expect('school' in obj).toBeTruthy();
    });

    it('should set github when created', () => {
      const school = 'UPenn';
      const obj = new Intern('Eric', 3, 'eric@upenn.edu', school);
      expect(obj.school).toEqual(school);
    });
  });

  describe('getSchool', () => {
    it("should return the intern's school", () => {
      const school = 'UPenn';
      const obj = new Intern('Eric', 3, 'eric@upenn.edu', school);
      expect(obj.getSchool()).toEqual(school);
    });
  });

  describe('getRole', () => {
    it('should return the role of "Intern"', () => {
      const obj = new Intern();
      expect(obj.getRole()).toEqual('Intern');
    });
  });
});