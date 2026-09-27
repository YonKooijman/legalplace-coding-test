import { Drug, Pharmacy } from "../src/pharmacy";

export function updatedDrug(
  name: string,
  expiresIn: number,
  benefit: number,
): Drug {
  const [drug] = new Pharmacy([
    new Drug(name, expiresIn, benefit),
  ]).updateBenefitValue();
  return drug;
}
