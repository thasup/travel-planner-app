// Import the js file to test
import { handleSubmit } from "../src/client/js/handleSubmit";

describe("Testing submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});