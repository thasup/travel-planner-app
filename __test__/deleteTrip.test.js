// Import the js file to test
import { deleteTrip } from "../src/client/js/deleteTrip";

describe("Testing delete functionality", () => {
    test("Testing the deleteTrip() function", () => {
        expect(deleteTrip).toBeDefined();
    });
});