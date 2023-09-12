import { deepStrictEqual } from "assert";
import { describe, it } from "vitest";


describe("my test", () => {
  it("can set breakpoint", async () => {
    const newAnswer = ({
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100),
    });
    deepStrictEqual(typeof newAnswer !== "undefined", true);
  });
});
