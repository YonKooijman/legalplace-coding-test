import type { DailyUpdate } from "./dailyUpdateFactory";

export class StandardDrugDailyUpdate implements DailyUpdate {
  getBenefitChange(expiresIn: number): number {
    return expiresIn <= 0 ? -2 : -1;
  }

  getExpiresInChange(): number {
    return -1;
  }
}
