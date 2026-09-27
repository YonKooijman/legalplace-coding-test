import {
  BenefitRule,
  BenefitRuleFactory,
} from "./benefitRules/benefitRuleFactory";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  // # fields are omitted by JSON.stringify. A TypeScript `private` field would appear in output.json.
  readonly #rule: BenefitRule;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.#rule = BenefitRuleFactory.create(name);
  }

  updateBenefitValue(): void {
    this.updateBenefit();
    this.updateExpiresIn();
  }

  private updateBenefit(): void {
    const newBenefit = clamp(
      this.benefit + this.#rule.benefitChange(this.expiresIn, this.benefit),
      0,
      50,
    );
    this.benefit = newBenefit;
  }

  private updateExpiresIn(): void {
    const newExpiresIn = this.expiresIn + this.#rule.expiresInChange();
    this.expiresIn = newExpiresIn;
  }
}
