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

    it('function overloading', () => {
      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;
        if (mi) {
          // mi !== undefined && mi !== null && mi !== 0 && mi !== false
          fullName += ` ${mi}.`;
        }
        return fullName;
      }

      expect(formatName('Han', 'Solo')).toBe('Solo, Han');
      expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

      expect('tacos').toBeTruthy();
      expect(undefined).toBeFalsy();
    });
  });

  describe('higher order functions', () => {
    /* In mathematics and computer science, a higher-order function is a function that does at least one of the following:

        - takes one or more functions as arguments (i.e. a procedural parameter, which is a parameter of a procedure that is itself a procedure),
        - returns a function as its result.
  */
    it('using just a basic lower ordered function', () => {
      function makeElement(element: string, content: string): string {
        return `<${element}>${content}</${element}>`;
      }

      expect(makeElement('h1', 'Hi')).toBe('<h1>Hi</h1>');
      expect(makeElement('h1', 'Bye')).toBe('<h1>Bye</h1>');
      expect(makeElement('p', 'nose')).toBe('<p>nose</p>');
    });

    it('same thing, OOP style', () => {
      class ElementMaker {
        constructor(private element: string) {}

        make(content: string): string {
          return `<${this.element}>${content}</${this.element}>`;
        }
      }

      const h1Maker = new ElementMaker('h1');
      const pMaker = new ElementMaker('p');

      expect(h1Maker.make('Hi')).toBe('<h1>Hi</h1>');
      expect(h1Maker.make('Bye')).toBe('<h1>Bye</h1>');
      expect(pMaker.make('nose')).toBe('<p>nose</p>');
    });

    it('with a HOF', () => {
      type FuncThatTakesAndReturnsAString = (content: string) => string;
      function elementMaker(element: string): FuncThatTakesAndReturnsAString {
        return (content) => `<${element}>${content}</${element}>`;
      }

      const h1Maker = elementMaker('h1');
      const pMaker = elementMaker('p');

      expect(h1Maker('Hi')).toBe('<h1>Hi</h1>');
      expect(pMaker('nose')).toBe('<p>nose</p>');
    });

    it('arguments to functions', () => {
      // Rest operator ...

      function add(a: number = 2, b: number = 10, ...rest: number[]): number {
        const firstTwo = a + b;
        return rest.reduce((l, r) => l + r, firstTwo);
      }

      expect(add(2, 2)).toBe(4);
      expect(add(10)).toBe(20);
      expect(add()).toBe(12);
      expect(add(undefined, 5)).toBe(7);
      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });
  });

  describe('array methods', () => {});
});

// files in typescript and javascript are "modules" (sort of. more later)
// "Named" - they can be 'forward referenced'
function subtract(a: number, b: number): number {
  return a - b;
}
