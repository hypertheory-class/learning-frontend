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

    it('has string literals', () => {
      let n1 = 'bob';

      let n2 = 'bob';

      let n3 = "Her name is Flannery O'Connor";

      let n4 = `bob`;

      expect(n1).toEqual(n2);
      expect(n1).toEqual(n4);

      let story = `Chapter 1.

      It was a dark and story night.


      The End`;

      let salary = 40_000;

      let sentence = `The name is ${n1} and the salary is ${salary}`;

      expect(sentence).toEqual('The name is bob and the salary is 40000');
    });

    it('number literals', () => {
      // EVERY number is a Number, and that is a 64bit floating point number.
      let x: number;
      x = 3.1415;
      x = 2;
      x = 0xff; // base 16 (*hexadecimal) - used for colors on the web a lot.
      x = 1_000_000;

      let pay = 1_000_000;

      let nickName = `Bubba`;
    });
    it('array literals', () => {
      // we will talk about actually doing stuff with arrays later today.

      let myFriends = ['Sean', 'David', 'Lee', 'Sarah'];

      let yourFriends = myFriends;

      expect(myFriends).toBe(yourFriends);

      let luckyNumbers: number[];

      luckyNumbers = [1, 2, 18, 20];

      myFriends[3] = 'Phil';

      expect(myFriends).toEqual(['Sean', 'David', 'Lee', 'Phil']);

      let m1 = {
        title: 'Star Wars',
        director: 'Lucas',
      };

      let m2 = {
        title: 'American Graffiti',
        director: 'Lucas',
      };

      expect(m1).not.toEqual(m2);
    });

    it('array unions', () => {
      let myFriends = ['Ray', 0, 'Sarah'];

      let yourFriends: (string | number)[];
      // let yourFriends: string | number[];

      yourFriends = [1, 2, 3, 'Ray', 'Sue', 18];

      let second = yourFriends[1];
    });
  });

  describe('const and let', () => {
    it('const cannot be reassigned to', () => {
      const name = 'Jeff'; // const must be initialized.

      const age = 52;

      // you cannot use the assignment operator on it after it is initialized.
      // name = 'Joe';

      // it does not make changeable things unchangable. (changeable = mutable, unchangeable = immutable)
      // for example, arrays are changeable.

      const numbers = [1, 2, 3, 4];

      // can't reassign to variable
      // numbers = [10, 11, 12];

      numbers[0] = 20;

      expect(numbers).toEqual([20, 2, 3, 4]);

      const book = {
        title: 'Jerusalem',
        author: 'Blake',
      };

      book.author = 'William Blake';
    });
  });
});
