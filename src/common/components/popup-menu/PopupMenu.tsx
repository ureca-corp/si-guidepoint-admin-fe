import { Menu, MenuProps, PaperProps } from "@mui/material";

export const PopupMenu = ({
  anchorEl,
  open,
  onClose,
  onClick,
  children,
}: MenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClick}
      PaperProps={paperProps}
    >
      {children}
    </Menu>
  );
};

const paperProps: PaperProps = {
  sx: {
    padding: "0 8px",

    "& .MuiList-root": {
      display: "flex",
      flexDirection: "column",
      minWidth: "140px",
    },
  },
};
