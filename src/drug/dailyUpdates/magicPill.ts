import type { DailyUpdate } from "./dailyUpdateFactory";

export class MagicPillDailyUpdate implements DailyUpdate {
  getBenefitChange(): number {
    return 0;
  }

  getExpiresInChange(): number {
    return 0;
  }
}
