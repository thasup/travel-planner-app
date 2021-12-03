// Import the js file to test
import { updateImage } from "../src/client/js/updateImage";

describe("Testing update image functionality", () => {
    test("Testing the updateImage() function", () => {
        expect(updateImage).toBeDefined();
    });
});