
import { names, numbers } from "./data.js"
import { firstElement, cutLastElement, showLastElement, cutFirstElement, removeElement, noDoubleNumber, giveSum, capitalFirstLetter, giveCapitalLetters, evenLastLetter} from "./function.js"


console.log(firstElement(names));
console.log(cutLastElement(names));
console.log(showLastElement(names));
console.log(cutFirstElement(names));
console.log(removeElement(numbers));
console.log(noDoubleNumber(numbers));
console.log(giveSum(numbers));

console.log(capitalFirstLetter("hello"));
console.log(giveCapitalLetters("hello"));
console.log(evenLastLetter("hello", "o"));