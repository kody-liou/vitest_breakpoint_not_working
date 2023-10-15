import { deepStrictEqual } from "assert";
import { describe, it } from "vitest";
import { useFakeTimers, SinonFakeTimers } from "sinon";

const clock: SinonFakeTimers = useFakeTimers(); // Use sinon to fake timers

function delay(milliseconds: number) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

describe("my test", () => {
    it("can set breakpoint", async () => {
        clock.setSystemTime(new Date("2023-10-14"));
        await delay(3000); // 3 seconds delay
        const today = new Date().toISOString();
        deepStrictEqual(today.startsWith('2023-10-14'), true);
        clock.restore();
    }, { timeout: 30000 });
});