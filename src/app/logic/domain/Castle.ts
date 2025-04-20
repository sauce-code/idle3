export default class Castle {

  constructor(
    public readonly id: string,
    public startDate: Date,
    public lastUpdate: Date,
    public resources: number,
    public level: number,
  ) {
  }

  public update(): void {
    const now = new Date();
    const diff = now.getTime() - this.lastUpdate.getTime();
    this.resources += diff / 1_000 * this.income;
    this.lastUpdate = now;
  }

  public upgrade(): boolean {
    if (this.resources < this.upgradeCost) {
      return false;
    }
    this.resources -= this.upgradeCost;
    this.level += 1;
    return true;
  }

  get upgradeCost() {
    return 1.2 ** this.level * 5;
  }

  get income(): number {
    return 1.1 ** this.level;
  }

  public static create(id: string): Castle {
    return new Castle(id, new Date(), new Date(), 1_000, 1);
  }

}
