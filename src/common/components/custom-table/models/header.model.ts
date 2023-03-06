export class CustomTableHeaderModel {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly width?: string,
    public readonly minWidth?: string,
    public readonly maxWidth?: string
  ) {}
}
