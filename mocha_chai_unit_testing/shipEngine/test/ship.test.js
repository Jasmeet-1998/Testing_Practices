let expect = require('chai').expect;

describe('checkForShip',()=>{
    let checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('TargetMiss🌵: should correctly report no ship at a given players cordinate.',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };
        expect(checkForShip(player,[9,9])).to.be.false;
    });

    it('TargetHit 💀: should correctly report a ship at a given cordinate.',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };
        expect(checkForShip(player,[0,0])).to.be.true;
    });

    it('TargetMiss/TargetHit🍳: should correctly report for bigger ship i.e more than 1 cordinates for single ship',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0],[0,1]]
                }
            ]
        };
        expect(checkForShip(player,[0,1])).to.be.true;
        expect(checkForShip(player,[0,0])).to.be.true;
        expect(checkForShip(player,[9,9])).to.be.false;
    });

    it('TargetMiss/TargetHit🍳: should correctly report for multiple shops',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0],[0,1]]
                },
                {
                    locations: [[1,3],[1,5]]
                }
            ]
        };
        // hit
        expect(checkForShip(player,[1,3])).to.be.true;
        expect(checkForShip(player,[1,5])).to.be.true;
        expect(checkForShip(player,[0,1])).to.be.true;
        expect(checkForShip(player,[0,0])).to.be.true;
        // miss
        expect(checkForShip(player,[9,9])).to.be.false;
    });
});