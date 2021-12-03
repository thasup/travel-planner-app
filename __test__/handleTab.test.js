// Import the js file to test
import { handleTab } from "../src/client/js/handleTab";

describe("Testing toggle tabs functionality", () => {
    test("Testing the handleTab() function", () => {
        expect(handleTab).toBeDefined();
    });
});