
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}


function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock);
    return blocks * 264; 
}


console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 
console.log(distanceFromHqInBlocks(42)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(34, 38));




function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}


function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock); 
    return blocks * 264; 
}


console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(34, 38));







function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}


function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock);
    return blocks * 264; 
}


console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 
console.log(distanceFromHqInBlocks(42)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(34, 38)); 




describe('Scuber Functions', () => {
    it('returns a distance in blocks', () => {
        assert.strictEqual(distanceFromHqInBlocks(50), 8);
    });
    
    it('returns a distance in blocks', () => {
        assert.strictEqual(distanceFromHqInBlocks(34), 8);
    });
    
    it('calculates distances below 42nd street', () => {
        assert.strictEqual(distanceFromHqInBlocks(30), 12);
    });
});




function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock); 
    return blocks * 264; 
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet > 2500) {
        return 'cannot travel that far'; 
    } else if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; 
    } else {
        return 25; 
    }
}

// Example usage
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(34, 24)); 
console.log(calculatesFarePrice(34, 50)); 
console.log(calculatesFarePrice(34, 100));