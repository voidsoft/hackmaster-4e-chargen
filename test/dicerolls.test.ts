import { describe, test, expect } from "@jest/globals";
import { RollD6 } from "../src/model/dicerolls";

describe("Dice Rolls", () => {
    test("RollD6 returns values between 1 and 6", () => {
        let results = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 1000; i++) {
            const roll = RollD6();
            results[roll - 1]++;
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        }

        // Ensure that each face was rolled at least once
        for (let count of results) {
            expect(count).toBeGreaterThan(100);
        }
    });
});