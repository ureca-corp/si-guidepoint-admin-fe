export class CustomTableRowModel {
  constructor(
    public readonly id: number,
    public readonly columns: CustomTableRowItemModel[]
  ) {}
}

export class CustomTableRowItemModel {
  constructor(
    public readonly key: string,
    public readonly value: string,
    public readonly width?: string,
    public readonly minWidth?: string,
    public readonly maxWidth?: string
  ) {}
}
