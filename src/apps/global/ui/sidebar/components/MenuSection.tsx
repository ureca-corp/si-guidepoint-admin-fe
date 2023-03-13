import { useGlobalSidebarSelectedMenu } from "@/apps/global/application/hooks/sidebar";
import { SidebarMenuEntity } from "@/apps/global/domain";
import { css } from "@emotion/react";
import Link from "next/link";
import { IconByLinkMenu } from "../../icons";
import { SidebarMenuCategory } from "./MenuCategory";
import { SidebarMenuItem } from "./MenuItem";

type SidebarMenuSectionProps = {
  entity: SidebarMenuEntity;
};

export const SidebarMenuSection = ({ entity }: SidebarMenuSectionProps) => {
  const { selectedMenuId, onChange } = useGlobalSidebarSelectedMenu();

  return (
    <div css={st.root}>
      <SidebarMenuCategory>{entity.category}</SidebarMenuCategory>
      {entity.items.map((it) => {
        const isSelected = it.id === selectedMenuId;
        const onClick = () => onChange(it);

        return (
          <Link key={it.id} href={it.link}>
            <SidebarMenuItem
              leftIcon={<IconByLinkMenu link={it.link} />}
              title={it.name}
              depth={it.depth}
              isSelected={isSelected}
              onClick={onClick}
            />
          </Link>
        );
      })}
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
  `,
};
