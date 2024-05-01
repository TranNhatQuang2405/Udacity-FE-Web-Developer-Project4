import { checkForName } from "../src/client/js/nameChecker"


describe("Testing the validate functionality", () => {
    test("Testing the checkForName function", () => {
        expect(checkForName).toBeDefined();
    })

    test("Testing the checkForName function when it return true", () => {
        let result = checkForName("Picard")
        expect(result).toBeTruthy()
    })

    test("Testing the checkForName function when it return false", () => {
        let result = checkForName("Picard TEST")
        expect(result).toBeFalsy()
    })
});