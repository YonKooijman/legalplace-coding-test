import type { DailyUpdate } from "./dailyUpdateFactory";

export class FervexDailyUpdate implements DailyUpdate {
  getBenefitChange(expiresIn: number, benefit: number): number {
    if (expiresIn <= 0) return -benefit;
    if (expiresIn < 6) return 3;
    if (expiresIn < 11) return 2;
    return 1;
  }

  getExpiresInChange(): number {
    return -1;
  }
}
