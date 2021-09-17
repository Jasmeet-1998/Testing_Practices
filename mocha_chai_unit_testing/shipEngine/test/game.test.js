let expect = require('chai').expect;
let checkGameStatus = require('../game_logic/game_instance').checkGameStatus;
// Outlining Test Suites
xdescribe('GAME INSTANCE FUNCTION',()=>{
    describe('checkGameStatus',()=>{
        // pending test
        it('should tell me when game is over');
    });
    // pending test
    it('some stuff',()=>{});

    // ==========asynchronous code tests in mocha ===============
    function saveGame (callback){
        setTimeout(()=>{
            callback();

        },3000);
    };
    describe('saveGame',()=>{
        it('should udpdate save status',()=>{
            let status = 'game not saved';
            saveGame(()=>{
                status = 'game saved!';
            });
        });    
    });
    
});