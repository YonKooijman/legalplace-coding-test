import { Drug } from "./drug/drug";

export { Drug };

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs.forEach((drug) => drug.updateBenefitValue());
    return this.drugs;
  }
}
