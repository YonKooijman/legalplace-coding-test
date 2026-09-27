import { Drug } from "../../src/pharmacy";

import { updatedDrug } from "../utils/updatedDrug";

const herbalTea = "Herbal Tea";

describe("herbalTea", () => {
  it("increases herbalTea benefit by 1 before expiry", () => {
    expect(updatedDrug(herbalTea, 10, 5)).toEqual(new Drug(herbalTea, 9, 6));
  });

  it("increases herbalTea benefit by 2 after expiry", () => {
    expect(updatedDrug(herbalTea, 0, 5)).toEqual(new Drug(herbalTea, -1, 7));
  });

  it("never lets herbalTea benefit go above 50", () => {
    expect(updatedDrug(herbalTea, 0, 49)).toEqual(new Drug(herbalTea, -1, 50));
  });

  it("still gains 1 herbalTea benefit on the last day before expiry", () => {
    expect(updatedDrug(herbalTea, 1, 5)).toEqual(new Drug(herbalTea, 0, 6));
  });

  it("gains 2 herbalTea benefit once already expired", () => {
    expect(updatedDrug(herbalTea, -1, 5)).toEqual(new Drug(herbalTea, -2, 7));
  });

  it("keeps herbalTea benefit at 50 before expiry", () => {
    expect(updatedDrug(herbalTea, 5, 50)).toEqual(new Drug(herbalTea, 4, 50));
  });

  it("reaches 50 herbalTea benefit before expiry", () => {
    expect(updatedDrug(herbalTea, 5, 49)).toEqual(new Drug(herbalTea, 4, 50));
  });
});
