import { Drug } from "../../src/pharmacy";

import { updatedDrug } from "../utils/updatedDrug";

const dafalgan = "Dafalgan";

describe("dafalgan", () => {
  it("decreases dafalgan by 2", () => {
    expect(updatedDrug(dafalgan, 20, 30)).toEqual(new Drug(dafalgan, 19, 28));
  });

  it("decreases dafalgan by 4 after expiry", () => {
    expect(updatedDrug(dafalgan, 0, 10)).toEqual(new Drug(dafalgan, -1, 6));
  });

  it("never lets dafalgan benefit go below 0", () => {
    expect(updatedDrug(dafalgan, 0, 1)).toEqual(new Drug(dafalgan, -1, 0));
  });

  it("still loses 2 dafalgan benefit on the last day before expiry", () => {
    expect(updatedDrug(dafalgan, 1, 10)).toEqual(new Drug(dafalgan, 0, 8));
  });

  it("keeps losing 4 dafalgan benefit once already expired", () => {
    expect(updatedDrug(dafalgan, -1, 10)).toEqual(new Drug(dafalgan, -2, 6));
  });

  it("keeps a benefit of 0 while expiresIn still decreases", () => {
    expect(updatedDrug(dafalgan, 5, 0)).toEqual(new Drug(dafalgan, 4, 0));
  });

  it("reaches 0 benefit before expiry without going negative", () => {
    expect(updatedDrug(dafalgan, 5, 1)).toEqual(new Drug(dafalgan, 4, 0));
  });
});
