let expect = require('chai').expect;

describe('checkForShip',()=>{
    let checkForShip = require('../game_logic/ship_methods').checkForShip;
    let player;

    // function that runs before any test spec
    before(()=>{
        player={
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };
    });

    it('TargetMiss🌵: should correctly report no ship at a given players cordinate.',()=>{
        expect(checkForShip(player,[9,9])).to.be.false;
    });

    it('TargetHit 💀: should correctly report a ship at a given cordinate.',()=>{
        expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
    });

    it('TargetMiss/TargetHit🍳: should correctly report for bigger ship i.e more than 1 cordinates for single ship',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0],[0,1]]
                }
            ]
        };
        expect(checkForShip(player,[0,1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
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
                },
                {
                    locations: [[1,2],[1,4],[1,6]]
                }
            ]
        };
        // hit
        expect(checkForShip(player,[1,3])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player,[1,5])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player,[0,1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player,[1,6])).to.deep.equal(player.ships[2]);
        // miss
        expect(checkForShip(player,[9,9])).to.be.false;
    });
});

describe('damageShip',()=>{
    let damageShip= require('../game_logic/ship_methods').damageShip;

    it('should register/do a damage for a given ship at given location',()=>{
        let ship = {
            locations: [[0,0]],
            damage: []
        };
        damageShip(ship, [0,0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0,0]); // damage: [[0,0]]
    });
});

describe('fire',()=>{
    let fire = require('../game_logic/ship_methods').fire;

    it('should record damage on given players ship at given coordinates',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0]],
                    damage:[]
                }
            ]
        };
        fire(player,[0,0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
    });

    it('should not record damage if no ship found at cordinate',()=>{
        let player = {
            ships: [
                {
                    locations: [[0,0]],
                    damage:[]
                }
            ]
        };
        fire(player,[10,10]);
        expect(player.ships[0].damage).to.be.empty;
    });
});

