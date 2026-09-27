jest.mock("fs", () => {
  const actual = jest.requireActual<typeof import("fs")>("fs");
  return { ...actual, writeFile: jest.fn() };
});

import fs from "fs";

describe("pharmacy", () => {
  it("writes the same simulation as output.json", async () => {
    // Loading index.ts runs the 30-day simulation, then calls writeFile.
    await import("../../src/index");

    const expected = fs.readFileSync("output.json", "utf8");

    expect(fs.writeFile).toHaveBeenCalledWith(
      "output.json",
      expected,
      expect.any(Function),
    );
  });
});
