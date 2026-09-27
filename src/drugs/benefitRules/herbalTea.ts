import type { BenefitRule } from "./benefitRuleFactory";

export class HerbalTeaBenefitRule implements BenefitRule {
  benefitChange(expiresIn: number): number {
    return expiresIn <= 0 ? 2 : 1;
  }

  expiresInChange(): number {
    return -1;
  }
}
