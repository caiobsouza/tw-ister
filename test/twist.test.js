const chai = require('chai');
const { expect } = chai;

const constants = require('../src/util/constants');
const twist = require('../src/twist');


describe('Testing random twister', () => {
  it('should return a valid body part', () => {
     const result = twist();
     expect(constants.parts).to.contains(result.part);
  });
  
  it('should return a valid color', () => {
     const result = twist();
     expect(constants.colors).to.contains(result.color);
  });

  it('should return a random colors', () => {
    let colisions = 0;
    for (let i = 0; i < 4; i++) {
        const firstResult = twist();
        const secondResult = twist();
        
        if(firstResult.color === secondResult.color)
            colisions++;
    }
    
    expect(colisions).to.be.lessThan(2);
 });

  it('should return a random parts', () => {
    let colisions = 0;
    for (let i = 0; i < 4; i++) {
        const firstResult = twist();
        const secondResult = twist();
        
        if(firstResult.part === secondResult.part)
            colisions++;
    }
    
    expect(colisions).to.be.lessThan(2);
 });
})
