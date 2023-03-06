import { LightColor } from "@/common/theme/colors";
import { useGlobalSidebarMenu } from "../../application/hooks";
import { SidebarMenuSection } from "./components";
import { css } from "@emotion/react";

export const SidebarInner = () => {
  const { menuList } = useGlobalSidebarMenu();

  return (
    <div css={st.container}>
      {menuList.map((it) => (
        <SidebarMenuSection key={it.id} entity={it} />
      ))}
    </div>
  );
};

const st = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 260px;
    height: 100%;

    padding: 24px 0;

    background-color: ${LightColor.MainSurfaceColor};
    border-right: 1px solid ${LightColor.BorderColor1};

    overflow: auto;
  `,
};
