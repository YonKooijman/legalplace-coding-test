import { Drug, Pharmacy } from "./pharmacy";

const herbalTea = "Herbal Tea";
const magicPill = "Magic Pill";
const fervex = "Fervex";

function updatedDrug(name: string, expiresIn: number, benefit: number): Drug {
  const [drug] = new Pharmacy([
    new Drug(name, expiresIn, benefit),
  ]).updateBenefitValue();
  return drug;
}

describe("Pharmacy", () => {
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
