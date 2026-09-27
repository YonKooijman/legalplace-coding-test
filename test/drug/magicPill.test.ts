import { Drug } from "../../src/pharmacy";

import { updatedDrug } from "../utils";

const magicPill = "Magic Pill";

describe("magicPill", () => {
  it("leaves magicPill unchanged", () => {
    expect(updatedDrug(magicPill, 15, 40)).toEqual(new Drug(magicPill, 15, 40));
  });

  it("leaves magicPill unchanged when expiresIn is 0", () => {
    expect(updatedDrug(magicPill, 0, 40)).toEqual(new Drug(magicPill, 0, 40));
  });

  it("leaves magicPill unchanged when benefit is 0", () => {
    expect(updatedDrug(magicPill, 15, 0)).toEqual(new Drug(magicPill, 15, 0));
  });

  it("leaves magicPill unchanged when benefit is 50", () => {
    expect(updatedDrug(magicPill, 15, 50)).toEqual(new Drug(magicPill, 15, 50));
  });
});
