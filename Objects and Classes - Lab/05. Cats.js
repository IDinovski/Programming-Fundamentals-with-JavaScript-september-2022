function catFactory(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = [];
  for (let catDate of input) {
    let token = catDate.split(" ");
    let catName = token[0];
    let catAge = token[1];
    let myCat = new Cat(catName, catAge);
    cats.push(myCat);
  }
  for (let current of cats) {
    current.meow();
  }
}
catFactory(["Candy 1", "Poppy 3", "Nyx 2"]);
