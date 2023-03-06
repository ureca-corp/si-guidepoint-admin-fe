import { RouterPath } from "../router";

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
    public name: string,
    public link: RouterPath,
    public iconName: string,
    public depth: number,
  ) {}
}
