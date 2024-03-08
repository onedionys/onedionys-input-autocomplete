const assert = require('assert');
const Autocomplete = require('../src/autocomplete');

describe('Autocomplete', function () {
  it('should return matching items', function () {
    const data = ['apple', 'banana', 'orange', 'pineapple', 'grape'];
    const autocomplete = new Autocomplete(data);
    const result = autocomplete.search('ap');

    assert.deepStrictEqual(result, ['apple', 'pineapple', 'grape']);
  });

  it('should return empty array for no match', function () {
    const data = ['apple', 'banana', 'orange', 'pineapple', 'grape'];
    const autocomplete = new Autocomplete(data);
    const result = autocomplete.search('z');

    assert.deepStrictEqual(result, []);
  });
});
