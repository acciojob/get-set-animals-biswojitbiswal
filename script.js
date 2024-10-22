//complete this code
class Animal {
	constructor(species){
		this.species = species;
		console.log(`The ${species} makes a sound`)
	}
	makeSound() {
	    console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	constructor() {
	    super("Dog");
	}

	makeSound() {
	    console.log("woof");
	}
}

class Cat extends Animal {
	constructor() {
	    super("Cat");
	}

	makeSound() {
	    console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
