// erstes element anzeigen
export const firstElement = (array) => {
    return array[0]
}

// das letzte element rausschneiden

export const cutLastElement = (array) => {
    return array.slice(0, -1)
}

// show last element

export const showLastElement = (array) => {
    return array.pop()
}

// cut first element out

export const cutFirstElement = (array) => {
    return array.slice(1)
}

export const removeElement = (array) => {
    return array.filter(num => num !== 6)
}

export const noDoubleNumber = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index)
}

// gib die summe des arrays zurück
export const giveSum = (array) => {
    let sum = 0; 
    array.forEach((value) => sum = sum + value); 
    return sum 
}

// gib random number zurück


export const capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const giveCapitalLetters = (string) => {
    return string.toUpperCase()
}

export const evenLastLetter = (string, letter) => {
    return string.charAt(string.length - 1) === letter
}