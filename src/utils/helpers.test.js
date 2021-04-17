import { range, httpsTransform, sortByName, isContainedById } from './helpers';

describe('[Helpers]', () => {
  describe('range', () => {
    it('should return an array of values from start point to an end point', () => {
      expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
      expect(range(2, 5)).toStrictEqual([2, 3, 4, 5]);
      expect(range(2, 6)).toStrictEqual([2, 3, 4, 5, 6]);
      expect(range(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9]);
    });
  });

  describe('httpsTransform', () => {
    it('should replace strings that contain `http` to `https`', () => {
      const siteURL = 'http://marvelapiheroes.netlify.app/';
      const imageURL = 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7.jpg';

      expect(siteURL.includes('https')).toBeFalsy();
      expect(imageURL.includes('https')).toBeFalsy();

      expect(httpsTransform(siteURL).includes('https')).toBeTruthy();
      expect(httpsTransform(imageURL).includes('https')).toBeTruthy();
    })
  });

  describe('sortByName', () => {
    it('should sort array of objects by name key', () => {
      const arrayOfHeroes = [
        { id: 1, name: 'Zemo' },
        { id: 2, name: 'Wolverine' },
        { id: 3, name: 'Storm' },
        { id: 4, name: 'Abomination' },
        { id: 5, name: 'Cyclope' },
      ];

      expect(arrayOfHeroes[0].name).toEqual('Zemo');
      expect(arrayOfHeroes[4].name).toEqual('Cyclope');

      const sortedArrayOfHeroes = sortByName(arrayOfHeroes);

      expect(sortedArrayOfHeroes[0].name).toEqual('Abomination');
      expect(sortedArrayOfHeroes[4].name).toEqual('Zemo');
    })
  });

  describe('isContainedById', () => {
    it('should contain or not elements by id', () => {
      const arrayOfHeroes = [
        { id: 1, name: 'Zemo' },
        { id: 2, name: 'Wolverine' },
        { id: 3, name: 'Storm' },
        { id: 4, name: 'Abomination' },
        { id: 5, name: 'Cyclope' },
      ];

      const favoritesHeroes = [
        { id: 2, name: 'Wolverine' },
        { id: 3, name: 'Storm' },
      ];

      const zemo = arrayOfHeroes[0];
      const wolverine = arrayOfHeroes[1];

      expect(isContainedById(favoritesHeroes, zemo.id)).toBeFalsy();
      expect(isContainedById(favoritesHeroes, wolverine.id)).toBeTruthy();
    })
  });
});
