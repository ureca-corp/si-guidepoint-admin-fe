import { atom, useRecoilState } from "recoil";

const globalSidebarOpenState = atom({
  key: "globalSidebarOpenState",
  default: false,
});

export const useGlobalSidebarOpen = () => {
  const [isOpen, setOpen] = useRecoilState(globalSidebarOpenState);

  const onChange = (isOpen: boolean) => setOpen(isOpen);
  const onToggle = () => setOpen((old) => !old);
  const close = () => setOpen(false);

  return {
    isOpen,
    onChange,
    onToggle,
    close,
  };
};
