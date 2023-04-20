import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("return string", () => {
        expect(typeof fizzBuzz(1)).toEqual("string");
    });

    it("return fizz when passing 3", () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });

    it("return buzz when passing 5", () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });

    it("return fizzbuzz when passing 15", () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });

    it("return 1 as string when passing 1", () => {
        expect(fizzBuzz(1)).toEqual("1");
    });

    it("return error on passing number outof range of 1-100", () => {
        expect(() => fizzBuzz(101)).toThrow("Number is out of range");
    });
});
