import type { DailyUpdate } from "./dailyUpdateFactory";

export class DafalganDailyUpdate implements DailyUpdate {
  getBenefitChange(expiresIn: number): number {
    return expiresIn <= 0 ? -4 : -2;
  }

  getExpiresInChange(): number {
    return -1;
  }
}
