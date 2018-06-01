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

