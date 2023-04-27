class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// the dog objects also have access the the methods from the Animal class.
// but the object created through the Dog class has a breed property.

class Dog extends Animal {
  constructor(name, breed) {
    // super alows is to inherit all the stuff from Animal and use it in Dog.
    super(name);
    this.breed = breed;
  }
}

let simba = new Dog("Simba", "Sheperd");

//
//
//
//
//

class Animal2 {
  constructor(name) {
    // make it a private variable my doing _name and then returning it
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

let simba2 = new Animal2("simba");
