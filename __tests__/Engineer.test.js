const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should return an object with a github property', () => {
      const obj = new Engineer();
      expect('github' in obj).toBeTruthy();
    });

    it('should set github when created', () => {
      const github = 'cooldude';
      const obj = new Engineer('Steve', 2, 'steve@gmail.com', github);
      expect(obj.github).toEqual(github);
    });
  });

  describe('getGithub', () => {
    it("should return the engineer's github username", () => {
      const github = 'cooldude';
      const obj = new Engineer('Steve', 2, 'steve@gmail.com', github);
      expect(obj.getGithub()).toEqual(github);
    });
  });

  describe('getRole', () => {
    it('should return the role of "Engineer"', () => {
      const obj = new Engineer();
      expect(obj.getRole()).toEqual('Engineer');
    });
  });
});