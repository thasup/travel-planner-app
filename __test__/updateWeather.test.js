// Import the js file to test
import { updateWeather } from "../src/client/js/updateWeather";

describe("Testing update weather forecast functionality", () => {
    test("Testing the updateWeather() function", () => {
        expect(updateWeather).toBeDefined();
    });
});