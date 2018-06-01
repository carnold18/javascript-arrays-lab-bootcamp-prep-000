const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Ralph) {
  return kittens.push(Ralph);
}

function destructivelyPrependKitten(Bob) {
  return kittens.unshift(Bob);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop(); 
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(Broom) {
  return [...kittens, Broom];
}

function prependKitten(Arnold) {
  return [Arnold, ...kittens];
}

function removeFirstKitten() {
  return kittens.slice(1);
}

function removeLastKitten() {
  return kittens.splice(1);
}