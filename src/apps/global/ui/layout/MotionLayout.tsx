import { css } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

type MotionLayoutProps = {
  children: ReactNode;
};

export const FramerTransitionLayout = ({ children }: MotionLayoutProps) => {
  return (
    <motion.main
      variants={variants}
      initial={"hidden"}
      animate={"enter"}
      exit={"exit"}
      transition={{ type: "ease-in-out" }}
      css={st.root}
    >
      {children}
    </motion.main>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
};
