import { PalindormeCheker } from "./index";

describe("palindrome checker", () => {
    let palindromeChecker: PalindormeCheker;

    beforeEach(() => {
        palindromeChecker = new PalindormeCheker();
    });

    it('should be able to tell that "mom" is a palindrome', () => {
        expect(palindromeChecker.isPalindorm("mom")).toBeTruthy();
    });

    it('should be able to tell that "bill" is not a palindrome', () => {
        expect(palindromeChecker.isPalindorm("bill")).toBeFalsy();
    });

    it("should still detect a palindrome even if the casing is off", () => {
        expect(palindromeChecker.isPalindorm("Mom")).toBeTruthy();
    });

    it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
        expect(palindromeChecker.isPalindorm("Was It A Rat I Saw")).toBeTruthy();
    });

    it('should be able to tell that "Never Odd or Even" is palindrome', () => {
        expect(palindromeChecker.isPalindorm("Never Odd or Even")).toBeTruthy();
    });
});
