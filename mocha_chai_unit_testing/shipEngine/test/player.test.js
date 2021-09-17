const { expect } = require('chai');

describe('placeShip',()=>{
    let placeShip = require('../game_logic/ship_methods').placeShip;
    let player;

    beforeEach(()=>{
        player={
            ships:[
                {
                    size:1,
                    locations: []
                },
                {
                    size:2,
                    locations: [[1,0],[1,1]]
                }
            ]
        };
    });

    // it('should update a ship with a valid starting location',()=>{
    //     let ship = player.ships[0];
    //     let coordinates = [0,1];

    //     placeShip(player,ship,coordinates,'horizontal');
    //     let actual = ship.locations;

    //     expect(actual).to.be.ok;
    //     expect(actual).to.have.length(1);
    //     expect(actual[0]).to.deep.equal([0,1]);
    // });
    
    // ======edge case==========
    it('should throw error if no direction is specified',()=>{
        let ship = player.ships[0];
        let coordinates = [0,1];
        let handler = ()=>{
            placeShip(player,ship,coordinates);
        };
        expect(handler).to.throw(Error);
        expect(handler).to.throw("You didn't give directions argument for placeShip method...🐱‍👤");
    });
});