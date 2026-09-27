import type { BenefitRule } from "./benefitRuleFactory";

export class FervexBenefitRule implements BenefitRule {
  benefitChange(expiresIn: number, benefit: number): number {
    if (expiresIn <= 0) return -benefit;
    if (expiresIn < 6) return 3;
    if (expiresIn < 11) return 2;
    return 1;
  }

  expiresInChange(): number {
    return -1;
  }
}
