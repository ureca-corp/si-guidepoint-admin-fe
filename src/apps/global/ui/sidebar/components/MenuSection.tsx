import { useGlobalSidebarSelectedMenuId } from "@/apps/global/application/hooks";
import { SidebarMenuEntity } from "@/apps/global/domain";
import { css } from "@emotion/react";
import { CalendarMonthRounded } from "@mui/icons-material";
import { SidebarMenuCategory } from "./MenuCategory";
import { SidebarMenuItem } from "./MenuItem";

type SidebarMenuSectionProps = {
  entity: SidebarMenuEntity;
};

export const SidebarMenuSection = ({ entity }: SidebarMenuSectionProps) => {
  const { selectedMenuId, onChange } = useGlobalSidebarSelectedMenuId();

  return (
    <div css={st.root}>
      <SidebarMenuCategory>{entity.category}</SidebarMenuCategory>
      {entity.items.map((it) => {
        const isSelected = it.id === selectedMenuId;
        const onClick = () => onChange(it.id);

        return (
          <SidebarMenuItem
            key={it.id}
            leftIcon={<CalendarMonthRounded />}
            title={it.name}
            depth={it.depth}
            isSelected={isSelected}
            onClick={onClick}
          />
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
