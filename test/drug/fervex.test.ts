import { Drug } from "../../src/pharmacy";

import { updatedDrug } from "../utils";

const fervex = "Fervex";

describe("fervex", () => {
  it("increases fervex benefit by 1 when expiresIn is above 10", () => {
    expect(updatedDrug(fervex, 12, 35)).toEqual(new Drug(fervex, 11, 36));
  });

  it("increases fervex benefit by 2 when expiresIn is 10 or less", () => {
    expect(updatedDrug(fervex, 10, 35)).toEqual(new Drug(fervex, 9, 37));
  });

  it("increases fervex benefit by 3 when expiresIn is 5 or less", () => {
    expect(updatedDrug(fervex, 5, 35)).toEqual(new Drug(fervex, 4, 38));
  });

  it("caps fervex benefit at 50", () => {
    expect(updatedDrug(fervex, 5, 49)).toEqual(new Drug(fervex, 4, 50));
  });

  it("drops fervex benefit to 0 after expiry", () => {
    expect(updatedDrug(fervex, 0, 35)).toEqual(new Drug(fervex, -1, 0));
  });

  it("gains 1 fervex benefit when expiresIn is 11", () => {
    expect(updatedDrug(fervex, 11, 35)).toEqual(new Drug(fervex, 10, 36));
  });

  it("gains 2 fervex benefit when expiresIn is 6", () => {
    expect(updatedDrug(fervex, 6, 35)).toEqual(new Drug(fervex, 5, 37));
  });

  it("gains 3 fervex benefit when expiresIn is 1", () => {
    expect(updatedDrug(fervex, 1, 35)).toEqual(new Drug(fervex, 0, 38));
  });

  it("caps fervex benefit at 50 when expiresIn is 10", () => {
    expect(updatedDrug(fervex, 10, 49)).toEqual(new Drug(fervex, 9, 50));
  });

  it("drops fervex benefit to 0 once already expired", () => {
    expect(updatedDrug(fervex, -1, 35)).toEqual(new Drug(fervex, -2, 0));
  });
});
