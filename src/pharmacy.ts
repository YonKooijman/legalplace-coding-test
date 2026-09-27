import { Drug } from "./drugs/drug";

export { Drug };

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }
    return this.drugs;
  }
}
