// Import the js file to test
import { updateUI } from "../src/client/js/updateUI";

describe("Testing update UI functionality", () => {
    test("Testing the updateUI() function", () => {
        expect(updateUI).toBeDefined();
    });
});