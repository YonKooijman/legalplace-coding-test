import { clamp } from "../utils";

import {
  DailyUpdate,
  DailyUpdateFactory,
} from "./dailyUpdates/dailyUpdateFactory";

export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  // # fields are omitted by JSON.stringify. A TypeScript `private` field would appear in output.json.
  readonly #dailyUpdate: DailyUpdate;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.#dailyUpdate = DailyUpdateFactory.create(name);
  }

  updateBenefitValue(): void {
    this.updateBenefit();
    this.updateExpiresIn();
  }

  private updateBenefit(): void {
    const newBenefit = clamp(
      this.benefit +
        this.#dailyUpdate.getBenefitChange(this.expiresIn, this.benefit),
      0,
      50,
    );
    this.benefit = newBenefit;
  }

  private updateExpiresIn(): void {
    const newExpiresIn =
      this.expiresIn + this.#dailyUpdate.getExpiresInChange();
    this.expiresIn = newExpiresIn;
  }
}
