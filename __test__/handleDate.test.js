// Import the js file to test
import { handleDate } from "../src/client/js/handleDate";

describe("Testing date calculation functionality", () => {
    test("Testing the handleDate() function", () => {
        expect(handleDate).toBeDefined();
    });
});