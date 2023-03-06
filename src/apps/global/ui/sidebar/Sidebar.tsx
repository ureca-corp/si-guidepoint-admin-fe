import { useCustomMediaQuery } from "@/common/theme/screen";
import { Collapse, Drawer } from "@mui/material";
import { useGlobalSidebarOpen } from "../../application/hooks";
import { SidebarInner } from "./SidebarInner";

export const Sidebar = () => {
  const { isOpen, close } = useGlobalSidebarOpen();
  const { isLarge } = useCustomMediaQuery();

  return isLarge ? (
    <Drawer anchor={"left"} open={isOpen} onClose={close}>
      <SidebarInner />
    </Drawer>
  ) : (
    <Collapse in={isOpen} orientation={"horizontal"}>
      <SidebarInner />
    </Collapse>
  );
};
