import Castle from '../../domain/Castle';

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

  public static of(castle: Castle): GameView {
    return new GameView(
      castle.startDate,
      castle.lastUpdate,
      castle.resources,
      castle.level,
      castle.income,
      castle.upgradeCost,
    );
  }

}
