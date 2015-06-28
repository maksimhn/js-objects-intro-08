'use strict';

//////////////////////////////////////////////////////////////

//////////////////// WELCOME TO BATTLE.JS ////////////////////

//////////////////////////////////////////////////////////////

var infantry;

/* Create an object to represent an infantry unit, and store it in 'infantry'. */
/* Your code begins here. */
infantry = {
  health : 2,
  speed : 2,
  attack : function (defender) {
    defender.health -= 1;
    console.log('HIT');
  }
};
/* Your code ends here. */

var artillery;

/* Create an object to represent an artillery unit, and store it in 'artillery'. */
/* Your code begins here. */
artillery = {
  health : 2,
  speed : 1,
  attack : function (defender) {
    defender.health -= 3;
    console.log('HIT');
  }
};
/* Your code ends here. */

var cavalry;

/* Create an object to represent a cavalry unit, and store it in 'cavalry'. */
/* Your code begins here. */
cavalry = {
  health : 1,
  speed : 3,
  attack : function (defender) {
    defender.health -= 2;
    console.log('HIT');
  }
};
/* Your code ends here. */

///////////////////////////BONUS////////////////////////////

/* Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.*/
/* If you attempt this, please put the name of your method as the value for 'bonus', below, instead of null.*/
/* Your code begins here. */

// checks 50% chance to hit
var hitOrMiss = function () {
    var randomNumber = Math.random(0, 1);
    if (randomNumber < 0.5) {
        return "miss";
    } else {
      return "hit";
    }
};

// checks who of the two fighting unit would attack first based on their speed attribute
var speedCheck = function (unit1, unit2) {
  return (unit1.speed > unit2.speed) ? true : false;
};

// uses the two above functions to finish one attack exchange for units
var round = function (unit1, unit2) {
  if (speedCheck(unit1, unit2) === true && hitOrMiss() === "hit") {
      unit1.attack(unit2);
  } else {
    if (hitOrMiss() === "hit") {
        unit2.attack(unit1);
    }
  }
};

// keeps fighting until any unit's health drops below 1. The other one returns victorious
var battle = function (unit1, unit2) {
  while (unit1.health > 0 && unit2.health > 0) {
    round(unit1, unit2);
  }
  return (unit1.health > unit2.health) ? unit1 : unit2;
};
/* Your code ends here. */

module.exports = {
  infantry: infantry,
  artillery: artillery,
  cavalry: cavalry,
  battle: battle
};
