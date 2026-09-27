import type { BenefitRule } from "./benefitRuleFactory";

export class DafalganBenefitRule implements BenefitRule {
  benefitChange(expiresIn: number): number {
    return expiresIn <= 0 ? -4 : -2;
  }

  expiresInChange(): number {
    return -1;
  }
}
