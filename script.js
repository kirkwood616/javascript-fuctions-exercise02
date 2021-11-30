(function () {
  let position = 0;
  let direction = true;

  const moveForward = (distance) => {
    if (direction === true) {
      position = position + distance;
    } else {
      position = position - distance;
    }
  };

  const moveBackward = (distance) => {
    if (direction === false) {
      position = position + distance;
    } else {
      position = position - distance;
    }
  };

  const turnAround = () => {
    if (direction === true) {
      direction = false;
    } else if (direction === false) {
      direction = true;
    }
  };

  const printLocation = () => {
    console.log(position);
  };

  moveForward(5);
  moveBackward(3);
  printLocation();
  turnAround();
  moveForward(10);
  moveBackward(5);
  printLocation();
})();

console.log("-----------");

(function () {
  let north = 0;
  let east = 0;
  let direction = "up";
  // let position = `${north} N, ${east} E`;

  const moveForward = (distance) => {
    if (direction === "up") {
      north = north + distance;
    } else if (direction === "right") {
      east = east + distance;
    } else if (direction === "down") {
      north = north - distance;
    } else if (direction === "left") {
      east = east - distance;
    }
  };

  const moveBackward = (distance) => {
    if (direction === "up") {
      north = north - distance;
    } else if (direction === "right") {
      east = east - distance;
    } else if (direction === "down") {
      north = north + distance;
    } else if (direction === "left") {
      east = east + distance;
    }
  };

  const turnLeft = () => {
    if (direction === "up") {
      direction = "left";
    } else if (direction === "right") {
      direction = "up";
    } else if (direction === "down") {
      direction = "right";
    } else if (direction === "left") {
      direction = "down";
    }
  };

  const turnRight = () => {
    if (direction === "up") {
      direction = "right";
    } else if (direction === "right") {
      direction = "down";
    } else if (direction === "down") {
      direction = "left";
    } else if (direction === "left") {
      direction = "up";
    }
  };

  const printLocation = () => {
    console.log(`${north} N ${east} E`);
  };

  moveForward(5);
  turnRight();
  moveForward(2);
  printLocation();
  turnLeft();
  turnLeft();
  moveForward(7);
  turnRight();
  moveBackward(3);
  printLocation();
})();
