function checkForShip(player,coordinates){
    let shipPresent,ship;
    for (let i=0;i<player.ships.length;i++){
        let currentShip = player.ships[i];
        
        // compare each cordinates in the currentShip
        shipPresent = currentShip.locations.filter((actualCordinates)=>{
            // will return the cordinates in the currentShip first index and matches it against
            // the cordinates provided by the player like [0,0] !== [9,9]
            return (actualCordinates[0] === coordinates[0]) &&
             (actualCordinates[1] === coordinates[1]);
            })[0]; //as we are only concern with the curretShip[0] indexed as it contain all the cordinates
        
        // so that when multiple ships are their the function returns true
        if(shipPresent){
            return true;
        }
    }
    // loop ends the cordinate given by user didnt matched with any cordinates in the cordinateList
    // So ship not found
    return false;
}

module.exports.checkForShip = checkForShip;