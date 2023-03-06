export class SidebarMenuEntity {
  constructor(
    public id: number,
    public category: string,
    public items: SidebarMenuItemEntity[]
  ) {}
}

export class SidebarMenuItemEntity {
  constructor(
    public id: number,
    public iconName: string,
    public name: string,
    public depth: number
  ) {}
}
