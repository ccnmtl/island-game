'use strict';

var GameElement = require('../../src/gameelement.js');
import chai from 'chai';

let expect = chai.expect;

describe('GameElement (unit)', () => {
    describe('when instantiated', () => {
        let ge = GameElement;
        it('should return an Object', () => {
            expect(ge).to.be.an('object');
        });
    });
});
