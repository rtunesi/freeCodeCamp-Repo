// Build a Lunch Picker Program

const lunches = [];

function addLunchToEnd(array, item) {
  array.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, item) {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  const lastItem = array[array.length -1];
  array.pop();
  if (array.length === 0) {
    console.log("No lunches to remove.")
  } else {
    console.log(`${lastItem} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  const firstItem = array[0];
  array.shift();
  if (array.length === 0) {
    console.log("No lunches to remove.")
  } else {
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.")
  } else {
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomItem = array[randomNumber];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.")
  } else {
    console.log(`Menu items: ${array.join(", ")}`)
  }
}