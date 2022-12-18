/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import dirtree from './dirtree.mjs';

describe('dirtree', function () {
  it('returns a string', function () {
    const output = dirtree();

    output.should.be.a('string');
  });
});
