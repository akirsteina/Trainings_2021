/// <reference path="person.ts" />

class Player implements Person {
	name: string;
	age: number;
	highScore: number;
	formatName() {
		return this.name.toUpperCase();
	}
}

// classes that implement interfaces must include all the properties of an interface
//  thet can include additional properties as well
