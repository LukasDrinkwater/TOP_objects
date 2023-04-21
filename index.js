// // object literal
// const circle = {
//   // these are proporties, radius and location
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   //   if its a function its a method
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// factory/constructor function
// factory
// function createCircle(radius) {
//   return {
//     // these are proporties, radius and location
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// circle.draw();

// constructor function
// if it uses return its a factory
// if it uses this its a constructor
// function Circle(radius) {
//   // this is the for the new when making a new object from the function
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

function Circle(radius) {
  this.radius = radius;
  // using let stops them from showing when doing circle. so they cant be changed
  // outside the object
  let defaultLocation = { x: 0, y: 0 };

  //   let computeOptimumLocation = function (factor) {
  //     //
  //   };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    // computeOptimumLocation(0.1);
    // this.radius
    console.log("draw");
  };

  // this allows you to call circle.defaultLocatio; to get default location
  // and not have to do .getDefaultLocation
  //   Object.defineProperty can be used to define getters and setters
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("invalid location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
// circle.defaultLocation = 0;
// to make it valid it would have to be
// circle.defaultLocation = { x: 1, y: 2 };

circle.draw();
// // to enumerate all members in an object - for in loop
// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// // to get all the keys use Object.keys
// const keys = Object.keys(circle);
// console.log(keys);

// for checking if a object has a specific property or method - if in
// if ("radius" in circle) {
//   console.log("Circle has a radius");
// }

// these do the same thing
// circle.location = { x: 1 };

// const propertyName = "location";

// circle[propertyName] = { x: 1 };

// // removing properties
// delete circle.location;

// user.token = "asdawda";
// proporties can be added to the object.

// these 2 are the same, they are both creating a new object
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// let obj = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }

// increase(number);

// console.log(number);
