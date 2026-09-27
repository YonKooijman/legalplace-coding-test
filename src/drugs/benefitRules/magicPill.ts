import type { BenefitRule } from "./benefitRuleFactory";

export class MagicPillBenefitRule implements BenefitRule {
  benefitChange(): number {
    return 0;
  }

  expiresInChange(): number {
    return 0;
  }
}
