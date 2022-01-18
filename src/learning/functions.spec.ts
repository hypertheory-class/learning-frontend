describe('functions', () => {
  describe('declaring functions', () => {
    it('named functions', () => {
      //  int Add(int a, int b) { ... }
      function add(a: number, b: number): number {
        return a + b;
      }

      expect(add(2, 2)).toBe(4);
      expect(subtract(10, 2)).toBe(8);
      expect(subtract(20, 3)).toBe(17);
    });

    it('forward referencing a module scoped function', () => {
      expect(subtract(10, 2)).toBe(8);
    });
    it('anonymous functions', () => {
      // anonymous function
      expect(((a: number, b: number): number => a * b)(5, 5)).toBe(25);

      const multiply = (a: number, b: number): number => a * b;

      expect(multiply(5, 5)).toBe(25);
    });
  });

  describe('higher order functions', () => {});

  describe('array methods', () => {});
});

// files in typescript and javascript are "modules" (sort of. more later)
// "Named" - they can be 'forward referenced'
function subtract(a: number, b: number): number {
  return a - b;
}
