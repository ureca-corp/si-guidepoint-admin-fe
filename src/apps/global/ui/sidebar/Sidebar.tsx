import { useCustomMediaQuery } from "@/common/theme/screen";
import { Collapse, Drawer } from "@mui/material";
import { useEffect } from "react";
import { useGlobalSidebarOpen } from "../../application/hooks/sidebar";
import { SidebarInner } from "./SidebarInner";

export const Sidebar = () => {
  const { isOpen, close, onChange } = useGlobalSidebarOpen();
  const { isLarge } = useCustomMediaQuery();

  useEffect(() => {
    // 접속 기기 해상도가 태블릿보다 크면 사이드바 초기값은 Open
    if (!isLarge) {
      onChange(true);
    }
  }, [isLarge]);

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
