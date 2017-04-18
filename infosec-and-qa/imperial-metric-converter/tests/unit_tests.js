const chai = require('chai');
const assert = chai.assert;
let converter = require('../controllers/converter');

converter = new converter();

suite('Unit testing', () => {
  suite('Input processing', () => {
    test('Expected data types', (done) => {
      assert.typeOf(converter.processInput('1gal'), 'object');
      assert.typeOf(converter.processInput('1gal').value, 'number');
      assert.typeOf(converter.processInput('1gal').type, 'string');
      done();
    });
    test('Expected object values', (done) => {
      assert.deepEqual(converter.processInput('1gal'), {value: 1, type: 'gal'});
      assert.deepEqual(converter.processInput('1lbs'), {value: 1, type: 'lbs'});
      assert.deepEqual(converter.processInput('1mi'),  {value: 1, type: 'mi'});
      assert.deepEqual(converter.processInput('1l'),   {value: 1, type: 'l'});
      assert.deepEqual(converter.processInput('1kg'),  {value: 1, type: 'kg'});
      assert.deepEqual(converter.processInput('1km'),  {value: 1, type: 'km'});
      done();
    }); 
    test('Expected invalid inputs', (done) => {
      assert.deepEqual(converter.processInput('x'),   {error: 'Invalid input format'}, '1 char');
      assert.deepEqual(converter.processInput('1'),   {error: 'Invalid input format'}, '1 number');
      assert.deepEqual(converter.processInput('km'),  {error: 'Invalid input format'}, '"km"');
      assert.deepEqual(converter.processInput('km5'), {error: 'Invalid input format'}, 'string+number out of order');
    });
  });
});