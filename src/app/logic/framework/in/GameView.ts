export default class GameView {
  constructor(
    public readonly startDate: Date,
    public readonly lastUpdate: Date,
    public readonly res: number,
    public readonly level: number,
    public readonly income: number,
    public readonly upgradeCost: number,
  ) {
  }

}
