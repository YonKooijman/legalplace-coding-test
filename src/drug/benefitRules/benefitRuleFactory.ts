import { DafalganBenefitRule } from "./dafalgan";
import { FervexBenefitRule } from "./fervex";
import { HerbalTeaBenefitRule } from "./herbalTea";
import { MagicPillBenefitRule } from "./magicPill";
import { StandardDrugBenefitRule } from "./standardDrug";

export type BenefitRule = {
  benefitChange(expiresIn: number, benefit: number): number;
  expiresInChange(): number;
};

export class BenefitRuleFactory {
  static create(name: string): BenefitRule {
    switch (name) {
      case "Herbal Tea":
        return new HerbalTeaBenefitRule();
      case "Fervex":
        return new FervexBenefitRule();
      case "Magic Pill":
        return new MagicPillBenefitRule();
      case "Dafalgan":
        return new DafalganBenefitRule();
      default:
        return new StandardDrugBenefitRule();
    }
  }
}
