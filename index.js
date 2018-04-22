// Code your solution in this file!
function distanceFromHqInBlocks(int){
	return Math.abs(42-int);
}

function distanceFromHqInFeet(int){
	return (distanceFromHqInBlocks(int) * 264);
}

function distanceTravelledInFeet(numOne, numTwo){
	return (Math.abs(numOne - numTwo)*264);
}

function calculatesFarePrice(start, destination){
	const distanceFeet = distanceTravelledInFeet(start, destination);

    if(distanceFeet < 400){
    	return 0;    	
    }else if (distanceFeet >= 400 && distanceFeet <= 2000){
        return ((distanceFeet-400)*.02);    	
    }else if(distanceFeet > 2000 && distanceFeet <=2500){
    	return 25;
    }
    else if(distanceFeet > 2500){
    	return 'cannot travel that far';
	}
}