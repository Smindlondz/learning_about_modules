import randomNumberGenerator from "./RNG.js";
import assert from "assert";



describe('randomNumberGenerator', () => {
    it("should return a random numbers between 2 parameters", () => {
        assert(randomNumberGenerator(1, 20));
    })
})


console.log(randomNumberGenerator(1, 30));
console.log(randomNumberGenerator(5, 25));
console.log(randomNumberGenerator(1, 12));
console.log(randomNumberGenerator(3, 17));
console.log(randomNumberGenerator(4, 30));