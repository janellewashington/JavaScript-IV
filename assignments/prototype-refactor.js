/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  
   GameObject.prototype.destroy = function () {
    return 'Object was removed from the game.';
  };
  
  /*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
  function CharacterStats(charAttributes) {
    GameObject.call(this, charAttributes);
    this.hp = charAttributes.hp;
    this.name = charAttributes.name;
    this.healthPoints = charAttributes.healthPoints;
  }
  
   CharacterStats.prototype = Object.create(GameObject.prototype);
  
   CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage`;
  }
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function Humanoid(humanAttributes) {
    CharacterStats.call(this, humanAttributes);
      this.team = humanAttributes.team;
      this.weapons = humanAttributes.weapons;
      this.language = humanAttributes.language;
  }
  
   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
   Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  function Humanoid (finalAttributes) {
    CharacterStats.call(this, finalAttributes);
    this.faction = finalAttributes.faction;
    this.weapons = finalAttributes.weapons;
    this.language = finalAttributes.language;
  }
  Humanoid.prototype = 
  Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`;};
  