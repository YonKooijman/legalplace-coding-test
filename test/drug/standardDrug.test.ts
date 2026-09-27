import { Drug, Pharmacy } from "../../src/pharmacy";

import { updatedDrug } from "../utils/updatedDrug";

describe("standardDrug", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("decreases a standard drug by 1", () => {
    expect(updatedDrug("Doliprane", 20, 30)).toEqual(
      new Drug("Doliprane", 19, 29),
    );
  });

  it("decreases a standard drug twice as fast after expiry", () => {
    expect(updatedDrug("Doliprane", 0, 10)).toEqual(
      new Drug("Doliprane", -1, 8),
    );
  });

  it("never lets a standard drug benefit go below 0", () => {
    expect(updatedDrug("Doliprane", 0, 1)).toEqual(
      new Drug("Doliprane", -1, 0),
    );
  });

  it("still loses 1 benefit on the last day before expiry", () => {
    expect(updatedDrug("Doliprane", 1, 10)).toEqual(
      new Drug("Doliprane", 0, 9),
    );
  });

  it("keeps losing 2 benefit once already expired", () => {
    expect(updatedDrug("Doliprane", -1, 10)).toEqual(
      new Drug("Doliprane", -2, 8),
    );
  });

  it("keeps a benefit of 0 while expiresIn still decreases", () => {
    expect(updatedDrug("Doliprane", 5, 0)).toEqual(new Drug("Doliprane", 4, 0));
  });

  it("reaches 0 benefit before expiry without going negative", () => {
    expect(updatedDrug("Doliprane", 5, 1)).toEqual(new Drug("Doliprane", 4, 0));
  });
});
