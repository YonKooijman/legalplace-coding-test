jest.mock("fs", () => {
  const actual = jest.requireActual<typeof import("fs")>("fs");
  return { ...actual, writeFile: jest.fn() };
});

import fs from "fs";

import "../../src/index";

describe("pharmacy", () => {
  it("writes the same simulation as output.json", () => {
    const expected = fs.readFileSync("output.json", "utf8");

    expect(fs.writeFile).toHaveBeenCalledWith(
      "output.json",
      expected,
      expect.any(Function),
    );
  });
});
