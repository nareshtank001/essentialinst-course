function isMultiplerOfThree(number: number): boolean {
    return number % 3 === 0;
}

function isMultiplerOfFive(number: number): boolean {
    return number % 5 === 0;
}

export function fizzBuzz(number: number): string {
    if (number < 1 || 100 < number) {
        throw new Error("Number is out of range");
    }

    if (isMultiplerOfThree(number) && isMultiplerOfFive(number)) {
        return "FizzBuzz";
    }

    if (isMultiplerOfThree(number)) {
        return "Fizz";
    }

    if (isMultiplerOfFive(number)) {
        return "Buzz";
    }

    return number.toString();
}
