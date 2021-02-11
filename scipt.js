const pageLoad = () => {
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
    ifOld() {
      return this.age() > 10 ? "an old" : "a new";
    }
  }

  let myCar = new Car("Ford", 2004);

  /*   const car = (name, year) => {
    return {
      name: name,
      year: year,
      age: () => {
        /* console.log(year); 
        let date = new Date();
        return date.getFullYear() - year;
      },
    };
  }; 

  console.log(car("Ford", 2014)); */

  /*   document.getElementById("root").innerHTML = `My car is a ${
    car("Ford", 2014).name
  }, and is ${car("Ford", 2014).age()} years old.`; */

  document.getElementById(
    "root"
  ).innerHTML = `My car is ${myCar.age()} years old, and it is a ${myCar.ifOld()} car`;
};

window.addEventListener("load", pageLoad);
