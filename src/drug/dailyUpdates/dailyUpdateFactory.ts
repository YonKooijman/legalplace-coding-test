import { DafalganDailyUpdate } from "./dafalgan";
import { FervexDailyUpdate } from "./fervex";
import { HerbalTeaDailyUpdate } from "./herbalTea";
import { MagicPillDailyUpdate } from "./magicPill";
import { StandardDrugDailyUpdate } from "./standardDrug";

export type DailyUpdate = {
  getBenefitChange(expiresIn: number, benefit: number): number;
  getExpiresInChange(): number;
};

export class DailyUpdateFactory {
  static create(name: string): DailyUpdate {
    switch (name) {
      case "Herbal Tea":
        return new HerbalTeaDailyUpdate();
      case "Fervex":
        return new FervexDailyUpdate();
      case "Magic Pill":
        return new MagicPillDailyUpdate();
      case "Dafalgan":
        return new DafalganDailyUpdate();
      default:
        return new StandardDrugDailyUpdate();
    }
  }
}
