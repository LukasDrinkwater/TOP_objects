// function Stopwatch() {
//   let startTime, elapsedTime, duration, running;

//   this.start = function () {
//     if (running) throw new Error("Stopwatch has already started");
//     running = true;
//     startTime = new Date();
//     console.log(startTime);
//   };

//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch has not started");
//     running = false;

//     elapsedTime = new Date() - startTime;

//     console.log(elapsedTime);
//   };

//   this.reset = function () {
//     startTime = undefined;
//     elapsedTime = undefined;
//     seconds = undefined;
//     duration = undefined;
//   };

//   // being an Object.defineProperty makes it a read only.
//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return elapsedTime;
//     },
//   });
// }

// function Stopwatch()

function stopwatch() {
  let startTime,
    elapsedTime,
    duration,
    running = undefined;
  return {
    start: function () {
      if (running) throw new Error("Stopwatch has already started");
      running = true;
      startTime = new Date();
      console.log(startTime);
    },
    stop: function () {
      if (!running) throw new Error("Stopwatch has not started");
      running = false;
      elapsedTime = new Date() - startTime;
      console.log(elapsedTime);
    },
    reset: function () {
      startTime = undefined;
      elapsedTime = undefined;
      seconds = undefined;
      duration = undefined;
    },
    get duration() {
      return elapsedTime / 1000;
    },
  };
}

const sw = stopwatch();
