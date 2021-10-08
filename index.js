//Retourne true si un nombre est paire
function isEven(number) {
    return number % 2 === 0
}

//Calcul la taille moyenne des mots d'une phrase arrondi a l'inférieur
function averageWordLength(str) {
    const word = str.split(' ')

    return Math.floor(word.map(x => x.length).reduce((previous, x) => previous + x) / word.length)
}

//Retourne true si une liste d'entiers est monotone (si elle est triée dans l'ordre croissant ou décroissant)
function isMonotonic(arr) {
    return (
        arr.every((x, index) => index === 0 || x >= arr[index - 1]) ||
        arr.every((x, index) => index === 0 || x <= arr[index - 1])
    )
}

//Deplace tout les zeros d'une liste de nombre à la fin en gardant l'ordre des autre nombres
function moveZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}

//Trie une liste d’entiers en mettant les nombres pairs triés de façon croissante en début et à la fin les impairs triés de façon décroissante
function sortEvenOdd(arr) {
    const odd = []
    const even = []
    const compare = (a, b) => a - b

    for (const x of arr) {
        (isEven(x) ? even : odd).push(x)
    }

    return [...even.sort(compare), ...odd.sort(compare).reverse()]
}

//Transforme une chaine en minuscule en majuscule sans utiliser les méthodes native
function toUpperCase(str) {
    const convert = "a".charCodeAt(0) - "A".charCodeAt(0)
    let res = ''
    for (let i = 0; i < str.length; i++) {
        res += String.fromCharCode(str.charCodeAt(i) - convert)
    }
    return res
}

module.exports = {
    toUpperCase,
    averageWordLength,
    isMonotonic,
    moveZero,
    sortEvenOdd,
    isEven
}