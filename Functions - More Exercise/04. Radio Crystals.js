function solve(arr) {
  let wanted = arr.shift();
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let size = arr[i];
    console.log(`Processing chunk ${size} microns`);
    while (size != wanted) {
      while (size / 4 >= wanted) {
        size = size / 4;
        counter++;
      }
      if (counter > 0) {
        size = Math.floor(size);
        console.log(`Cut x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        if (size == wanted) {
          break;
        }
      }
      while (size * 0.8 >= wanted) {
        counter++;
        size = size * 0.8;
      }
      if (counter > 0) {
        size = Math.floor(size);
        console.log(`Lap x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        if (size == wanted) {
          break;
        }
      }
      while (size - 20 >= wanted) {
        size -= 20;
        counter++;
      }
      if (counter > 0) {
        size = Math.floor(size);
        console.log(`Grind x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        if (size == wanted) {
          break;
        }
      }
      while (size >= wanted) {
        size -= 2;
        counter++;
        if (size == wanted) {
          if (counter > 0) {
            size = Math.floor(size);
            console.log(`Etch x${counter}`);
            console.log(`Transporting and washing`);
            counter = 0;
          }
          break;
        }
      }

      while (size < wanted) {
        counter++;
        size += 1;
      }
      if (counter > 0) {
        console.log(`X-ray x${counter}`);
        counter = 0;
        if (size == wanted) {
          break;
        }
      }
    }
    console.log(`Finished crystal ${size} microns`);
  }
}
solve([1000, 8100]);
