export class CustomAccordionModel {
  constructor(
    public readonly titleFirst: string,
    public readonly titleSecond: string,
    public readonly items: CustomAccordionItemModel[]
  ) {}
}

export class CustomAccordionItemModel {
  constructor(public readonly key: string, public readonly value: string) {}
}
