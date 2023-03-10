import { BaseAppbar } from "@/common/components/appbar/BaseAppbar";
import { AppbarProfileAvatar } from "@/apps/global/ui/appbar/components/AppbarProfileAvatar";
import { MenuRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useGlobalSidebarOpen } from "../../application/hooks/sidebar";
import { useUserCompany } from "@/apps/user";

export const GlobalAppbar = () => {
  const { companyName } = useUserCompany();
  const { onToggle } = useGlobalSidebarOpen();

  return (
    <BaseAppbar
      leftIcon={
        <IconButton edge={"start"} onClick={onToggle}>
          <MenuRounded />
        </IconButton>
      }
      title={
        <Typography variant={"subtitle1"} fontWeight={500}>
          {companyName}
        </Typography>
      }
      right={<AppbarProfileAvatar />}
    />
  );
};
