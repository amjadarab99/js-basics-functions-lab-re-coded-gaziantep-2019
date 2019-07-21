// Code your solution in this file!

function  distanceFromHqInBlocks(xblock){
  return Math.abs(xblock - 42);
}

function  distanceFromHqInFeet(xblock){
  return distanceFromHqInBlocks(xblock)*264;
}

function distanceTravelledInFeet(start , end){
  return Math.abs(end - start)*264
  
}

function calculatesFarePrice(start, destination){
  let distance = Math.abs(destination - start)*264;
  if (distance <= 400){
    return 0;
    }else if (distance >400 && distance <= 2000){
      return (distance-400)*0.02;
    }else if (distance > 2000 && distance<=2500){
      return 25;
    }else {
      return "cannot travel that far";
    }
}