export class Item {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly price: {
      currency: string;
      amount: number;
      decimals: number;
    },
    public readonly picture: string,
    public readonly condition: string,
    public readonly free_shipping: boolean,
  ) {}
}
