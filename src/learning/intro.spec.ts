describe('data types in typescript', () => {
  describe('literal types', () => {
    it('basic test', () => {
      let a = 10;
      let b = 20;

      let answer = a + b;

      expect(answer).toBe(30);
    });

    it('dynamic typing', () => {
      let a;

      a = 'tacos';

      expect(typeof a).toBe('string');

      a = 3.1415;

      expect(typeof a).toBe('number');
    });

    it('explicit typing', () => {
      // string a;
      let a: string | number;

      a = 'tacos';
      expect(typeof a).toBe('string');

      a = 3.14;
      expect(typeof a).toBe('number');
    });
  });
});
