import { UrecaSupportIconButton } from "@/common/components/ureca";
import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { useGlobalSidebarMenu } from "../../application/hooks/sidebar";
import { SidebarMenuSection } from "./components";

export const SidebarInner = () => {
  const { menuList } = useGlobalSidebarMenu();

  return (
    <div css={st.container}>
      <div>
        {menuList.map((it) => (
          <SidebarMenuSection key={it.id} entity={it} />
        ))}
      </div>

      <div css={st.bottomContainer}>
        <UrecaSupportIconButton />
      </div>
    </div>
  );
};

const st = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    width: 260px;
    height: 100%;

    padding: 24px 0;

    background-color: ${LightColor.MainSurfaceColor};
    border-right: 1px solid ${LightColor.BorderColor1};

    overflow: auto;
  `,
  bottomContainer: css`
    display: flex;
    justify-content: center;
  `,
};
