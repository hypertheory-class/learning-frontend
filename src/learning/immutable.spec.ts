describe('immutable operations', () => {
  describe('with arrays', () => {
    it('mutatation is bad so do not do this', () => {
      // adding an item to an array.
      const numbers = [2, 3, 4];

      numbers.unshift(1);

      numbers.push(5);

      expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('No mutations - just create a new array', () => {
      const numbers = [2, 3, 4];

      const newNumbers = [1, ...numbers, 5];

      expect(numbers).toEqual([2, 3, 4]); // look ma! no mutations!
      expect(newNumbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('removing an item from an array immutably', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const newNumbers = numbers.filter((n) => n !== 5);
      expect(newNumbers).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
    });
  });

  describe('with objects', () => {
    it('mutating objects = bad', () => {
      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
      }
      const movie: Movie = {
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1978,
      };

      const movie2: Movie = {
        title: 'The Empire Strikes Back',
        director: 'Lucas',
        yearReleased: 1983,
      };

      //      movie.yearReleased = 1977;
      movie['yearReleased'] = 1977;

      expect(movie).toEqual({
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1977,
      });
    });

    it('changing properties in an immutable way', () => {
      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
      }
      const movie: Movie = {
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1978,
      };

      const movie2: Movie = {
        title: 'The Empire Strikes Back',
        director: 'Lucas',
        yearReleased: 1983,
      };

      const newMovie1 = { ...movie, yearReleased: 1977 };

      expect(newMovie1).toEqual({
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1977,
      });

      expect(movie).toEqual({
        title: 'Star Wars IV: A New Hope',
        director: 'Lucas',
        yearReleased: 1978,
      });

      const empire = { ...movie2, director: 'Kershner' };

      expect(movie2).toEqual({
        title: 'The Empire Strikes Back',
        director: 'Lucas',
        yearReleased: 1983,
      });
    });
  });
});
