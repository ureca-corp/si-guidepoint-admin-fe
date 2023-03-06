import useMediaQuery from "@mui/material/useMediaQuery";

export enum ScreenType {
  xs = 376,
  sm = 576, // Mobile
  md = 768,
  lg = 1024, // Tablet
  xl = 1200, // Laptop
  xxl = 1440,
}

export const MediaQueries = {
  xs: `(max-width:${ScreenType.xs}px)`,
  sm: `(max-width:${ScreenType.sm}px)`,
  md: `(max-width:${ScreenType.md}px)`,
  lg: `(max-width:${ScreenType.lg}px)`,
  xl: `(max-width:${ScreenType.xl}px)`,
  xxl: `(max-width:${ScreenType.xxl}px)`,
};

export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(MediaQueries.xs);
  const isSmall = useMediaQuery(MediaQueries.sm);
  const isMedium = useMediaQuery(MediaQueries.md);
  const isLarge = useMediaQuery(MediaQueries.lg);
  const isTablet = useMediaQuery(MediaQueries.xl);
  const isLaptop = useMediaQuery(MediaQueries.xxl);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
