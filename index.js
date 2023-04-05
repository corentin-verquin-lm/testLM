/**
 * Verifie si un nombre est paire
 * @param {Number} number
 * @returns {Boolean}
 * @example
 *  expect(isEven(8)).toBeTruthy()
 *  expect(isEven(11)).toBeFalsy()
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * Calcul la taille moyenne des mots d'une phrase arrondi a l'inférieur
 * @param {String} str
 * @returns {Number}
 * @example
 *  expect(averageWordLength('Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque hendrerit est eget pellentesque volutpat Fusce a quam et augue semper euismod et a elit')).toBe(5)
 */
function averageWordLength(str) {
  const allLetter = str.replace(/ /g, "").length;
  const allWord = str.split(" ").length;

  return Math.floor(allLetter / allWord);
}

/**
 * Retourne true si une liste d'entiers est monotone (si elle est triée dans l'ordre croissant ou décroissant)
 * @param {Array<Number>} arr
 * @returns {Boolean}
 * @example
 *  expect(isMonotonic([1,2,3,4,6,8])).toBeTruthy()
 *  expect(isMonotonic([10,5,3,2])).toBeTruthy()
 *  expect(isMonotonic([1,2,3,4,6,8,5,3])).toBeFalsy()
 */
function isMonotonic(arr) {
  return (
    arr.every((x, i) => i === 0 || x <= arr[i - 1]) ||
    arr.every((x, i) => i === 0 || x >= arr[i - 1])
  );
}

/**
 * Deplace tout les zeros d'une liste de nombre à la fin en gardant l'ordre des autre nombres
 * @param {Array<Number>} arr
 * @returns {Array<Number>}
 * @example
 *  expect(moveZero([1,0,13,5,0,7,0,6])).toStrictEqual([1,13,5,7,6,0,0,0])
 */
function moveZero(arr) {
  const result = arr.filter((x) => x !== 0);

  for (let i = 0; i <= arr.length - result.length + 1; i++) {
    result.push(0);
  }

  return result;
}

/**
 * Trie une liste d’entiers en mettant les nombres pairs triés de façon croissante en début et à la fin les impairs triés de façon décroissante
 * @param {Array<Number>} arr
 * @returns {Array<Number>}
 * @example
 *  expect(sortEvenOdd([93, 24, 38, 1, 96, 87, 100])).toStrictEqual([24, 38, 96, 100, 93, 87, 1])
 */
function sortEvenOdd(arr) {
  const sortEvenFunction = (a, b) => a - b;
  const sortOddFunction = (a, b) => sortEvenFunction(a, b) * -1;

  const odd = [];
  const even = [];

  arr.forEach((x) => (isEven(x) ? even.push(x) : odd.push(x)));

  return [...even.sort(sortEvenFunction), ...odd.sort(sortOddFunction)];
}

/**
 * Transforme une chaine en minuscule en majuscule sans utiliser les méthodes native
 * @param {String} str
 * @returns {String}
 * @example
 *  expect(toUpperCase('hello')).toBe('HELLO')
 */
function toUpperCase(str) {
  const shift = "A".charCodeAt(0) - "a".charCodeAt(0);

  return str
    .split("")
    .map((x) => String.fromCharCode(x.charCodeAt(0) + shift))
    .join("");
}

module.exports = {
  toUpperCase,
  averageWordLength,
  isMonotonic,
  moveZero,
  sortEvenOdd,
  isEven,
};
